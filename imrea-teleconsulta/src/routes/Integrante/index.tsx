import { INTEGRANTES } from "../../data/integrantes";
import { Link } from "react-router-dom";

export default function Integrante() {
    return (
        <section className="container-max py-10">
            <h1 className="text-2xl text-imrea-green mb-6">Integrantes da Equipe</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {INTEGRANTES.map((p) => (
                    <div key={p.rm} className="card border-l-4 border-imrea-green2 flex gap-4 items-start">
                        <img 
                        src={p.img}
                        alt={`Foto de ${p.nome}`}
                        className="w-20 h-20 rounded-full object-cover border-4 border-imrea-green"
                        />
                        <div>
                            <h2 className="font-semibold text-imrea-green">{p.nome}</h2>
                            <p>RM: {p.rm} | Turma: {p.turma}</p>
                            <div className="mt-2">
                                <a className="text-imrea-green2 underline mr-3" href={p.github} target="_blank">GitHub</a>
                                <a className="text-imrea-green2 underline mr-3" href={p.linkedin} target="_blank">LinkedIn</a>
                                <Link className="text-imrea-green2 underline" to={`/integrantes/${p.rm}`}>Detalhes</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}