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
    setLoading(true); 
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pacienteData),
      });
 
      if (!response.ok) {
        
        const errorData = await response.json().catch(() => null);
        const errorMessage =
          errorData?.message ||
          `Erro HTTP ${response.status}: Falha ao criar paciente.`;
        throw new Error(errorMessage);
      }
 
      const novoPaciente: Paciente = await response.json();
      
      setPacientes([...pacientes, novoPaciente]);
      resetForm();
    } catch (err) {
      setError((err as Error).message);
    }
    
    setLoading(false);
  };
 
  const handleUpdate = async (id: number, pacienteData: PacienteDTO) => {
    setError(null);
    setLoading(true); 
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pacienteData),
      });
 
      if (!response.ok) {
        
        const errorData = await response.json().catch(() => null);
        const errorMessage =
          errorData?.message ||
          `Erro HTTP ${response.status}: Falha ao atualizar paciente.`;
        throw new Error(errorMessage);
      }
 
      const pacienteAtualizado: Paciente = await response.json();
 
      setPacientes(
        pacientes.map((p) => (p.id === id ? pacienteAtualizado : p))
      );
      resetForm();
    } catch (err) {
      setError((err as Error).message);
    }
    setLoading(false);
  };
 
  const handleDelete = async (id: number) => {
    
    if (!window.confirm('Tem certeza que deseja excluir este paciente?')) {
      return;
    }
 
    setError(null);
    setLoading(true); 
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
 
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage =
          errorData?.message ||
          `Erro HTTP ${response.status}: Falha ao deletar paciente.`;
        throw new Error(errorMessage);
      }
 
      setPacientes(pacientes.filter((p) => p.id !== id));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // --- 4. HANDLERS DO FORMULÁRIO E CICLO DE VIDA ---

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