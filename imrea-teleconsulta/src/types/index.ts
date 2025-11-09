export type ID = string | number;

export type StatusTeleconsulta = 'agendada' | 'realizada' | 'cancelada' | 'pendente';

export type ContatoInfo = {
  telefone: string;
  email: string;
  ativo: boolean; 
  prioridade: number; 
};

export type TipoUsuario = 'paciente' | 'medico' | 'administrador' | 'visitante';

export type UsuarioCompleto = ContatoInfo & {
  id: ID;
  nome: string;
  tipo: TipoUsuario;
  dataCadastro: Date;
  ultimoAcesso: Date | null; 
};


export type StatusPresenca = 'presente' | 'ausente' | 'justificado';

export interface IIntegrante {
  readonly rm: string;
  nome: string;
  turma: string;
  img: string;
  github: string;
  linkedin: string;
  ativo: boolean; 
  semestre: number; 
}

export interface ITeleconsulta {
  readonly id: string;
  paciente: string;
  medico: string;
  data: Date;
  realizada: boolean; 
  status: StatusTeleconsulta;
  observacoes?: string; 
}

export interface IIntegranteCompleto extends IIntegrante {
  telefone: string;
  email: string;
  dataNascimento: Date;
  projetosAtivos: number; 
}