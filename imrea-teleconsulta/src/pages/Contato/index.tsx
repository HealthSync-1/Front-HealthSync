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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl  text-[#006b54] mb-6">Entre em Contato</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
            
                <div>
                    <label className="block mb-1 font-medium">Nome</label>
                    <input 
                        {...register("nome")} 
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200" 
                    />
                    {errors.nome && <p className="text-red-600 text-sm mt-1">{errors.nome.message}</p>}
                </div>

                 <div>
                    <label className="block mb-1 font-medium">E-mail</label>
                    <input 
                        {...register("email")} 
                        type="email" 
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200" 
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Mensagem</label>
                    <textarea 
                        {...register("mensagem")} 
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200" 
                    />
                    {errors.mensagem && <p className="text-red-600 text-sm mt-1">{errors.mensagem.message}</p>}
                </div>

                <button 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#006b54] hover:bg-[#005a44] text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#006b54] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
            </form>

            <div className="mt-8 text-[#006b54]">
                <p><strong>Telefone:</strong> (11) 1234-5678</p>
                <p><strong>WhatsApp</strong> (11) 98765-4321</p>
                <p><strong>Endereço:</strong> Av. Dr. Enéas de Carvalho Aguiar, 255 - São Paulo, SP</p>
            </div>
        </section>
    );
}

