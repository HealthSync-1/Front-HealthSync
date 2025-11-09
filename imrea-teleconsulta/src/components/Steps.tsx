import type { JSX } from "react";
import type { TipoUsuario, StatusTeleconsulta } from '../types';

export type StepItem = {
  icon: string;
  title: string;
  content: string | JSX.Element;
  priority: number; 
  enabled: boolean; 
  status: StatusTeleconsulta;
};

export interface IStepsProps {
  title: string;
  items: StepItem[];
  maxSteps: number; 
  showNumbers: boolean;
  usuarioTipo: TipoUsuario; 
}


export default function Steps({ title, items, maxSteps, showNumbers }: IStepsProps) {
  const visibleItems = items.slice(0, maxSteps);
  const totalEnabled = items.filter(item => item.enabled).length;

  const getStatusColor = (status: StatusTeleconsulta): string => {
    switch (status) {
      case 'agendada':
        return 'text-blue-600';
      case 'realizada':
        return 'text-green-600';
      case 'cancelada':
        return 'text-red-600';
      case 'pendente':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#006b54] text-2xl">{title}</h2>
        <div className="text-sm text-gray-600">
          {totalEnabled} de {items.length} passos ativos
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map((s, i) => (
          <section 
            key={i} 
            className={`
              bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] 
              flex gap-4 hover:shadow-md transition-shadow duration-200
              ${!s.enabled ? 'opacity-50' : ''}
            `}
          >
            {showNumbers && (
              <div className="flex-shrink-0 w-8 h-8 bg-[#006b54] text-white rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
            )}
            <span className="text-3xl" aria-hidden>{s.icon}</span>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[#006b54] font-semibold">{s.title}</h3>
                <span className={`text-xs font-medium ${getStatusColor(s.status)}`}>
                  {s.status}
                </span>
              </div>
              <p className="leading-relaxed text-gray-700 mb-2">{s.content}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Prioridade: {s.priority}/10</span>
                <span>{s.enabled ? '✅ Ativo' : '❌ Inativo'}</span>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}