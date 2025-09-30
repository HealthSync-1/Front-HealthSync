export default function FAQ() {
    return (
        <section className="container-max py-10">
            <h1 className="text-2xl text-imrea-green mb-6">Perguntas Frequentes (FAQ)</h1>
            
            <details className="card mb-4 border-l-4 border-imrea-green2">
                <summary className="cursor-pointer font-semibold text-imrea-green">Como faço para agendar uma teleconsulta?</summary>
                <p className="mt-3">Pelo aplicativo IMREA na seção de agendamento ou entrando em contato pela página “Contato”.</p>
            </details>

            <details className="card mb-4 border-l-4 border-imrea-green2">
                <summary className="cursor-pointer font-semibold text-imrea-green">Quais documentos preciso?</summary>
                <p className="mt-3">Documento com foto (RG/CPF) e, se tiver, exames recentes.</p>
            </details>

            <details className="card mb-4 border-l-4 border-imrea-green2">
                <summary className="cursor-pointer font-semibold text-imrea-green">Preciso pagar pela teleconsulta?</summary>
                <p className="mt-3">O IMREA atende via SUS, convênios e particular. Consulte a unidade para sua categoria.</p>
            </details>

            <details className="card mb-4 border-l-4 border-imrea-green2">
                <summary className="cursor-pointer font-semibold text-imrea-green">Posso remarcar?</summary>
                <p className="mt-3">Sim. Acesse o app ou nos avise pela página de contato.</p>
            </details>
        </section>
    );
}