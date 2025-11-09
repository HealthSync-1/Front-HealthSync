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