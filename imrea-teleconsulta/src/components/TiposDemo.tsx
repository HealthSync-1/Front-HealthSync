import { useState } from 'react';
import type {
    TipoUsuario,
    StatusTeleconsulta,
    UsuarioCompleto} from '../types';

export default function TiposDemo() {
  const [tipoUsuario, setTipoUsuario] = useState<TipoUsuario>('visitante');
  
  const [usuario] = useState<UsuarioCompleto>({
    id: '123',
    nome: 'João Silva',
    tipo: 'paciente',
    telefone: '(11) 99999-9999',
    email: 'joao@email.com',
    ativo: true, 
    prioridade: 5, 
    dataCadastro: new Date(),
    ultimoAcesso: null
  });

  const [contador, setContador] = useState<number>(0);
  
  const [estaCarregando, setEstaCarregando] = useState<boolean>(false);

  const [] = useState<StatusTeleconsulta[]>([
    'agendada',
    'realizada',
    'pendente'
  ]);

  const isAdmin = (tipo: TipoUsuario): boolean => {
    return tipo === 'administrador' || tipo === 'medico';
  };

  const calcularPrioridade = (usuario: UsuarioCompleto): number => {
    return usuario.prioridade * (usuario.ativo ? 2 : 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#006b54] mb-6">
        Demonstração de Tipos TypeScript
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Union Types</h3>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Tipo de Usuário:</label>
            <select 
              value={tipoUsuario}
              onChange={(e) => setTipoUsuario(e.target.value as TipoUsuario)}
              className="w-full p-2 border rounded"
            >
              <option value="paciente">Paciente</option>
              <option value="medico">Médico</option>
              <option value="administrador">Administrador</option>
              <option value="visitante">Visitante</option>
            </select>
            <p className="text-sm text-gray-600">
              Selecionado: {tipoUsuario} {isAdmin(tipoUsuario) ? '👑' : '👤'}
            </p>
          </div>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Tipos Básicos</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Contador (number):</span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setContador(contador - 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="font-mono">{contador}</span>
                <button 
                  onClick={() => setContador(contador + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Carregando (boolean):</span>
              <button 
                onClick={() => setEstaCarregando(!estaCarregando)}
                className={`px-3 py-1 rounded ${
                  estaCarregando ? ' bg-[#006b54] text-white' : 'bg-gray-200'
                }`}
              >
                {estaCarregando ? 'Sim' : 'Não'}
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg md:col-span-2">
          <h3 className="font-semibold mb-3">Interface - Usuário</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><strong>Nome:</strong> {usuario.nome}</div>
            <div><strong>Email:</strong> {usuario.email}</div>
            <div><strong>Telefone:</strong> {usuario.telefone}</div>
            <div>
              <strong>Ativo:</strong> 
              <span className={usuario.ativo ? 'text-green-600' : 'text-red-600'}>
                {usuario.ativo ? ' Sim' : ' Não'}
              </span>
            </div>
            <div><strong>Prioridade:</strong> {usuario.prioridade}</div>
            <div><strong>Prioridade Calculada:</strong> {calcularPrioridade(usuario)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}