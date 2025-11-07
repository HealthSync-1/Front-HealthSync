import { INTEGRANTES } from "../../data/integrantes";

export default function Integrante() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl text-[#006b54] mb-6">Integrantes da Equipe</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {INTEGRANTES.map((p) => (
                    <div key={p.rm} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] flex gap-4 items-start hover:shadow-md transition-shadow duration-200">
                        <img 
                            src={p.img}
                            alt={`Foto de ${p.nome}`}
                            className="w-20 h-20 rounded-full object-cover border-4 border-[#006b54]"
                        />
                        <div>
                            <h2 className="font-semibold text-[#006b54]">{p.nome}</h2>
                            <p className="text-gray-600">RM: {p.rm} | Turma: {p.turma}</p>
                            <div className="mt-2">
                                <a 
                                    className="text-[#006b54] underline mr-3 hover:text-[#005a44] transition-colors duration-200" 
                                    href={p.github} 
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                                <a 
                                    className="text-[#006b54] underline mr-3 hover:text-[#005a44] transition-colors duration-200" 
                                    href={p.linkedin} 
                                    target="_blank"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}