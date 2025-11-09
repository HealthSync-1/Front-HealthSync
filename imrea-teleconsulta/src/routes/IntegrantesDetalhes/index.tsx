import { useParams, Link } from "react-router-dom";
import { INTEGRANTES } from "../../data/integrantes";

export default function IntegranteDetails() {
    const { rm } = useParams<{ rm: string }>();
    
    const integrante = INTEGRANTES.find(p => p.rm === rm);

    if (!integrante) {
        return (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl text-[#006b54] mb-6">Integrante não encontrado</h1>
                <p>O integrante com RM {rm} não foi encontrado.</p>
                <Link to="/integrantes" className="text-[#006b54] underline mt-4 inline-block">
                    Voltar para a lista de integrantes
                </Link>
            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-2xl mx-auto">
                <Link to="/integrantes" className="text-[#006b54] underline mb-6 inline-block">
                    ← Voltar para integrantes
                </Link>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#006b54]">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <img 
                            src={integrante.img}
                            alt={`Foto de ${integrante.nome}`}
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#006b54]"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-[#006b54] mb-2">{integrante.nome}</h1>
                            <p className="text-gray-600 mb-1"><strong>RM:</strong> {integrante.rm}</p>
                            <p className="text-gray-600 mb-4"><strong>Turma:</strong> {integrante.turma}</p>
                            
                            <div className="flex gap-4 ">
                                <a 
                                    href={integrante.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#006b54] hover:bg-[#03896c] text-white px-4 py-2 rounded-md transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                                <a 
                                    href={integrante.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#006b54] hover:bg-[#03896c] text-white px-4 py-2 rounded-md transition-colors duration-200"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}