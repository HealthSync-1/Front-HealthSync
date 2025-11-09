import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-tr from-gray-100 to-emerald-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#006b54] mb-3">
              Bem-vindo ao IMREA
            </h1>
            <p className="text-lg">
              Seu acesso à medicina física e reabilitação de excelência. Veja como se preparar
              para sua <strong>teleconsulta</strong> de maneira prática e segura.
            </p>
            <Link
              to="/faq"
              className="inline-block bg-[#006b54] hover:bg-[#03896c] text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 mt-5 focus:outline-none focus:ring-2 focus:ring-[#006b54] focus:ring-offset-2"
            >
              Dúvidas? Acesse o FAQ
            </Link>
          </div>

          <img
            src={logo}
            alt="Ilustração Teleconsulta"
            className="w-60 lg:w-72 rounded shadow"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-[#006b54] text-2xl mb-6">
          Como se preparar para a teleconsulta
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "📱",
              title: "Instale o App IMREA",
              content: (
                <>
                  Baixe na{" "}
                  <a className="text-[#006b54] underline hover:text-[#03896c]" href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente" target="_blank">
                    Google Play
                  </a>{" "}
                  ou na{" "}
                  <a className="text-[#006b54] underline hover:text-[#03896c]" href="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502" target="_blank">
                    App Store
                  </a>{" "}
                  e faça seu login.
                </>
              ),
            },
            {
              icon: "📶",
              title: "Verifique sua Conexão",
              content: "Busque um local calmo, com boa conexão Wi-Fi ou 4G, evitando ruídos.",
            },
            {
              icon: "🎧",
              title: "Teste áudio e vídeo",
              content: "Antes da consulta, teste câmera e microfone. Utilize fones de ouvido, se possível.",
            },
            {
              icon: "🪪",
              title: "Documentos e exames",
              content: "Tenha um documento com foto e, se possível, exames recentes em mãos.",
            },
            {
              icon: "⏰",
              title: "Acesse com antecedência",
              content: "Entre no app 10 minutos antes do horário agendado.",
            },
            {
              icon: "🛠️",
              title: "Problemas técnicos?",
              content: "Contate nosso suporte pelo telefone ou WhatsApp.",
            },
          ].map((s, i) => (
            <section key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] flex gap-4 hover:shadow-md transition-shadow duration-200">
              <span className="text-3xl" aria-hidden>{s.icon}</span>
              <div>
                <h3 className="text-[#006b54] font-semibold mb-1">{s.title}</h3>
                <p className="leading-relaxed text-gray-700">{s.content}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}