import { useParams, Link } from "react-router-dom";
import { INTEGRANTES } from "../../data/integrantes";

export default function IntegranteDetalhe() {
    const { rm } = useParams();
    const integrante = INTEGRANTES.find((i) => i.rm === rm);

    if (!integrante) {
        return (
            <section className="container-max py-10">
                <p className="mb-4">Integrante não encontrado.</p>
                <Link to="/integrantes" className="text-imrea-green2 underline">Voltar</Link>
            </section>
        );
    }

    return (
        <section className="container-max py-10">
            <div className="card border-l-4 border-imrea-green2 flex gap-6 items-start">
                <img 
                src={integrante.img}
                alt={`Foto de ${integrante.nome}`} 
                className="w-24 h-24 rounded-full object-cover border-imrea-green"
                />
                <div>
                    <h1 className="text-2xl text-imrea-green font-semibold">{integrante.nome}</h1>
                    <p className="mt-1">RM: {integrante.rm}</p>
                    <p>Turma: {integrante.turma}</p>
                    <p className="mt-2">
                        <a className="text-imrea-green2 underline mr-3" href={integrante.github} target="_blank">GitHub</a>
                        <a className="text-imrea-green2 underline" href={integrante.linkedin} target="_blank">LinkedIn</a>
                    </p>
                    <Link to="/integrantes" className="inline-block mt-4 text-imrea-green2 underline">Voltar</Link>
                </div>
            </div>
        </section>
    );
}