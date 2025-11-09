import React, { useState, useEffect } from 'react';
interface Paciente {
  id: number; 
  nome: string;
  cpf: string;
  dataNascimento: string;
}

type PacienteDTO = Omit<Paciente, 'id'>;

const API_URL = 'https://healthsync-apirestful.onrender.com/pacientes';

function GerenciadorPacientes() {

  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  const [formData, setFormData] = useState<PacienteDTO>({
    nome: '',
    cpf: '',
    dataNascimento: '',
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPacientes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}: Não foi possível buscar os pacientes.`
        );
      }
      const data: Paciente[] = await response.json();
      setPacientes(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (pacienteData: PacienteDTO) => {
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pacienteData),
      });

      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}: Falha ao criar paciente.`
        );
      }

      const novoPaciente: Paciente = await response.json();
      setPacientes([...pacientes, novoPaciente]);
      resetForm();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleUpdate = async (id: number, pacienteData: PacienteDTO) => {
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pacienteData),
      });

      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}: Falha ao atualizar paciente.`
        );
      }

      const pacienteAtualizado: Paciente = await response.json();
      setPacientes(
        pacientes.map((p) => (p.id === id ? pacienteAtualizado : p))
      );
      resetForm();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir este paciente?')) {
      return;
    }

    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}: Falha ao deletar paciente.`
        );
      }

      setPacientes(pacientes.filter((p) => p.id !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  };


  useEffect(() => {
    fetchPacientes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação simples
    if (!formData.nome || !formData.cpf) {
      setError('Nome e CPF são obrigatórios.');
      return;
    }

    if (editingId !== null) {
      handleUpdate(editingId, formData);
    } else {
      handleCreate(formData);
    }
  };

  const startEdit = (paciente: Paciente) => {
    setEditingId(paciente.id);
    setFormData({
      nome: paciente.nome,
      cpf: paciente.cpf,
      dataNascimento: paciente.dataNascimento,
    });
  };

  const resetForm = () => {
    setFormData({ nome: '', cpf: '', dataNascimento: '' });
    setEditingId(null);
    setError(null);
  };

  return (
    <div className="font-sans w-11/12 max-w-4xl my-8 mx-auto p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Gestão de Pacientes
      </h2>

      {}
      <form
        onSubmit={handleSubmit}
        className="mb-8 p-4 border rounded-md bg-gray-50"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          {editingId ? 'Editar Paciente' : 'Adicionar Novo Paciente'}
        </h3>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          className="block w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006b54]"
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF (somente números)"
          value={formData.cpf}
          onChange={handleChange}
          maxLength={11}
          className="block w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006b54]"
        />
        <input
          type="date"
          name="dataNascimento"
          placeholder="Data de Nascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006b54]"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="py-2 px-4 bg-[#006b54] text-white font-semibold rounded-md cursor-pointer hover:bg-[#005a44] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {editingId ? 'Atualizar' : 'Salvar Paciente'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
            >
              Cancelar Edição
            </button>
          )}
        </div>
      </form>

      {}
      {loading && <p className="text-center text-gray-500 my-4">Carregando pacientes...</p>}
      {error && (
        <p className="text-red-600 font-bold my-4 p-3 bg-red-100 border border-red-300 rounded-md">
          Erro: {error}
        </p>
      )}

      {}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold text-gray-700">Nome</th>
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold text-gray-700">CPF</th>
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold text-gray-700">Data de Nascimento</th>
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente) => (
                <tr key={paciente.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 border-b border-gray-200">{paciente.nome}</td>
                  <td className="p-3 border-b border-gray-200">{paciente.cpf}</td>
                  <td className="p-3 border-b border-gray-200">{paciente.dataNascimento}</td>
                  <td className="p-3 border-b border-gray-200 flex flex-wrap gap-2">
                    <button
                      onClick={() => startEdit(paciente)}
                      className="py-1 px-3 bg-yellow-400 text-black rounded-md cursor-pointer hover:bg-yellow-500 transition-colors text-sm font-medium"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(paciente.id)}
                      className="py-1 px-3 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-colors text-sm font-medium"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GerenciadorPacientes;