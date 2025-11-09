import React, { useState, useEffect } from 'react';

interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;

}
type PacienteDTO = Omit<Paciente, 'id'>;
const API_URL = 'https://healthsync-apirestful.onrender.com/pacientes';