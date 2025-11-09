export default function FAQ() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl text-[#006b54] mb-6">Perguntas Frequentes (FAQ)</h1>
            
            <details className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] mb-4 hover:shadow-md transition-shadow duration-200">
                <summary className="cursor-pointer font-semibold text-[#006b54]">Como faço para agendar uma teleconsulta?</summary>
                <p className="mt-3 text-gray-700">Pelo aplicativo IMREA na seção de agendamento ou entrando em contato pela página "Contato".</p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] mb-4 hover:shadow-md transition-shadow duration-200">
                <summary className="cursor-pointer font-semibold text-[#006b54]">Quais documentos preciso?</summary>
                <p className="mt-3 text-gray-700">Documento com foto (RG/CPF) e, se tiver, exames recentes.</p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] mb-4 hover:shadow-md transition-shadow duration-200">
                <summary className="cursor-pointer font-semibold text-[#006b54]">Preciso pagar pela teleconsulta?</summary>
                <p className="mt-3 text-gray-700">O IMREA atende via SUS, convênios e particular. Consulte a unidade para sua categoria.</p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] mb-4 hover:shadow-md transition-shadow duration-200">
                <summary className="cursor-pointer font-semibold text-[#006b54]">Posso remarcar?</summary>
                <p className="mt-3 text-gray-700">Sim. Acesse o app ou nos avise pela página de contato.</p>
            </details>
        </section>
    );
}