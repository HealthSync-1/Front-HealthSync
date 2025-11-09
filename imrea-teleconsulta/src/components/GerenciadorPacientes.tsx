import React, { useState, useEffect } from 'react';
// --- 1. DEFINIÇÃO DA TIPAGEM ---

// Interface para o objeto Paciente (como vem da API)
interface Paciente {
  id: number; // Assumindo que o ID é um número
  nome: string;
  cpf: string;
  dataNascimento: string;
  // Adicione outros campos se sua API os tiver
}

// Tipo para os dados do formulário (sem o ID, pois é gerado no backend)
type PacienteDTO = Omit<Paciente, 'id'>;

// URL base da sua API
const API_URL = 'https://healthsync-apirestful.onrender.com/pacientes';

// --- 2. COMPONENTE REACT ---

function GerenciadorPacientes() {
  // Estado para armazenar a lista de pacientes
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  // Estado para controlar os inputs do formulário
  const [formData, setFormData] = useState<PacienteDTO>({
    nome: '',
    cpf: '',
    dataNascimento: '',
  });

  // Estado para rastrear qual paciente está sendo editado (null = modo de criação)
  const [editingId, setEditingId] = useState<number | null>(null);

  // Estados para feedback da UI
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- 3. FUNÇÕES CRUD (CRITÉRIOS i, ii, iii) ---

  /**
   * (GET) Busca todos os pacientes da API
   * (i) Consumo de API (GET)
   * (iii) Tratamento de erros
   */
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
      setPacientes(data); // (ii) Manipulação correta dos dados
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * (POST) Cria um novo paciente
   * (i) Consumo de API (POST)
   */
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
      // (ii) Manipulação: Adiciona o novo paciente à lista (atualização imutável)
      setPacientes([...pacientes, novoPaciente]);
      resetForm();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  /**
   * (PUT) Atualiza um paciente existente
   * (i) Consumo de API (PUT)
   */
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

      // (ii) Manipulação: Atualiza o paciente na lista (atualização imutável)
      setPacientes(
        pacientes.map((p) => (p.id === id ? pacienteAtualizado : p))
      );
      resetForm();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  /**
   * (DELETE) Deleta um paciente
   * (i) Consumo de API (DELETE)
   */
  const handleDelete = async (id: number) => {
    // Melhor prática: confirmar antes de deletar
    if (!window.confirm('Tem certeza que deseja excluir este paciente?')) {
      return;
    }

    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      // (iii) Tratamento: DELETE geralmente retorna 204 (No Content)
      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}: Falha ao deletar paciente.`
        );
      }

      // (ii) Manipulação: Remove o paciente da lista (atualização imutável)
      setPacientes(pacientes.filter((p) => p.id !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // --- 4. HANDLERS DO FORMULÁRIO E CICLO DE VIDA ---

  // Hook para buscar dados assim que o componente for montado
  useEffect(() => {
    fetchPacientes();
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // Handler para controlar a mudança nos inputs do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler para submeter o formulário (decide entre Criar ou Atualizar)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação simples
    if (!formData.nome || !formData.cpf) {
      setError('Nome e CPF são obrigatórios.');
      return;
    }

    if (editingId !== null) {
      // Se está editando, chama o PUT
      handleUpdate(editingId, formData);
    } else {
      // Se não, chama o POST
      handleCreate(formData);
    }
  };

  // Função para carregar os dados de um paciente no formulário para edição
  const startEdit = (paciente: Paciente) => {
    setEditingId(paciente.id);
    setFormData({
      nome: paciente.nome,
      cpf: paciente.cpf,
      dataNascimento: paciente.dataNascimento,
    });
  };

  // Função para limpar o formulário e o estado de edição
  const resetForm = () => {
    setFormData({ nome: '', cpf: '', dataNascimento: '' });
    setEditingId(null);
    setError(null);
  };

  // --- 5. RENDERIZAÇÃO (JSX) ---

  return (
    <div style={styles.container}>
      <h2>Gestão de Pacientes (HealthSync)</h2>

      {/* Seção do Formulário */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3>{editingId ? 'Editar Paciente' : 'Adicionar Novo Paciente'}</h3>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="cpf"
          name="cpf"
          placeholder="cpf"
          value={formData.cpf}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="date"
          name="dataNascimento"
          placeholder="Data de Nascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          style={styles.input}
        />
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.buttonPrimary}>
            {editingId ? 'Atualizar' : 'Salvar'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              style={styles.buttonSecondary}
            >
              Cancelar Edição
            </button>
          )}
        </div>
      </form>

      {/* (iii) Feedback de Erro e Loading */}
      {loading && <p>Carregando pacientes...</p>}
      {error && <p style={styles.errorText}>Erro: {error}</p>}

      {/* Seção da Lista de Pacientes */}
      {!loading && !error && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nome</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Telefone</th>
              <th style={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td style={styles.td}>{paciente.nome}</td>
                <td style={styles.td}>{paciente.cpf}</td>
                <td style={styles.td}>{paciente.dataNascimento}</td>
                <td style={styles.td}>
                  <button
                    onClick={() => startEdit(paciente)}
                    style={styles.buttonEdit}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(paciente.id)}
                    style={styles.buttonDelete}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// --- 6. ESTILOS (Opcional, para melhor visualização) ---
// (Estilos inline para não depender de arquivos CSS externos)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '90%',
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  form: {
    marginBottom: '2rem',
    padding: '1rem',
    borderBottom: '1px solid #eee',
  },
  input: {
    display: 'block',
    width: '95%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.5rem',
  },
  buttonPrimary: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonSecondary: {
    padding: '0.5rem 1rem',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '0.5rem',
    borderBottom: '2px solid #333',
    backgroundColor: '#f4f4f4',
  },
  td: {
    padding: '0.5rem',
    borderBottom: '1px solid #ddd',
  },
  buttonEdit: {
    marginRight: '0.5rem',
    padding: '0.3rem 0.6rem',
    backgroundColor: '#ffc107',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonDelete: {
    padding: '0.3rem 0.6rem',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default GerenciadorPacientes;