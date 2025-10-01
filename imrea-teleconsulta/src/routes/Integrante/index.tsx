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
                            <p className="text-gray-600">RM: {p.rm} | Turma: {p.turma}</p> {/* ← Adicione text-gray-600 */}
                            <div className="mt-2">
                                <a className="link-verde underline mr-3 hover:text-imrea-green transition" href={p.github} target="_blank">GitHub</a>
                                <a className="link-verde underline mr-3 hover:text-imrea-green transition" href={p.linkedin} target="_blank">LinkedIn</a>
                                <Link className="link-verde underline hover:text-imrea-green transition" to={`/integrantes/${p.rm}`}>Detalhes</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}