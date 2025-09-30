import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    nome: z.string().min(1, "Informe seu nome"),
    email: z.string().email("E-mail inválido"),
    mensagem: z.string().min(1, "Escreva sua mensagem"),
});

type FormData = z.infer<typeof schema>;

export default function Contato() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
        useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => {
        alert(`Mensagem enviada!\nNome: ${data.nome}\nEmail: ${data.email}`);
        reset();
    };
    
    return (
        <section className="container-max py-10">
            <h1 className="text-2xl text-imrea-green mb-6">Entre em Contato</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
            
                <div>
                    <label className="block mb-1 font-medium">Nome</label>
                    <input {...register("nome")} className="w-full border rounded px-3 py-2" />
                    {errors.nome && <p className="text-red-600 text-sm mt-1">{errors.nome.message}</p>}
                </div>

                 <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input {...register("email")} type="email" className="w-full border rounded px-3 py-2" />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Mensagem</label>
                    <textarea {...register("mensagem")} className="w-full border rounded px-3 py-2 h-32" />
                    {errors.mensagem && <p className="text-red-600 text-sm mt-1">{errors.mensagem.message}</p>}
                </div>

                <button disabled={isSubmitting} className="btn-cta w-full sm:w-auto">
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
            </form>

            <div className="mt-8 text-imrea-green">
                <p><strong>Telefone:</strong> (11) 1234-5678</p>
                <p><strong>WhatsApp</strong> (11) 98765-4321</p>
                <p><strong>Endereço:</strong> Av. Dr. Enéas de Carvalho Aguiar, 255 - São Paulo, SP</p>
            </div>
        </section>
    );
}

