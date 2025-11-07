import TiposDemo from "../../components/TiposDemo";

export default function Sobre() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl text-[#006b54] mb-6">Sobre o Projeto</h1>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                    Este projeto reestrutura as páginas da Sprint 03 em uma SPA (React + Vite + TypeScript),
                    priorizando componentização, responsividade, acessibilidade e versionamento no GitHub.
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Tecnologias utilizadas:</strong> React, TypeScript, Vite, Tailwind CSS, React Router DOM
                </p>
            </div>
            
            <div className="mt-8">
                <h2 className="text-xl text-[#006b54] mb-4">Demonstração de Tipos TypeScript</h2>
                <p className="text-gray-600 mb-6">
                    Esta seção demonstra o uso avançado de tipos TypeScript no projeto, incluindo interfaces, union types, intersection types e tipos básicos.
                </p>
                <TiposDemo />
            </div>
        </section>
    );
}