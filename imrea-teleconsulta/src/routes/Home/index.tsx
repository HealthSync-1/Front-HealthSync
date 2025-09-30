export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-tr from-gray-100 to-emerald-50 border-b">
        <div className="container-max py-10 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-semibold text-imrea-green mb-3">
              Bem-vindo ao IMREA
            </h1>
            <p className="text-lg">
              Seu acesso à medicina física e reabilitação de excelência. Veja como se preparar
              para sua <strong>teleconsulta</strong> de maneira prática e segura.
            </p>
            <a
              href="/faq"
              className="btn-cta mt-5"
            >
              Dúvidas? Acesse o FAQ
            </a>
          </div>

          <img
            src="/img/Ilustracao-TLC.jpg"
            alt="Ilustração Teleconsulta"
            className="w-60 lg:w-72 rounded shadow"
          />
        </div>
      </section>

      <section className="container-max py-10">
        <h2 className="text-imrea-green text-2xl mb-6">
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
                  <a className="text-imrea-green2 underline" href="https://play.google.com" target="_blank">
                    Google Play
                  </a>{" "}
                  ou na{" "}
                  <a className="text-imrea-green2 underline" href="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502" target="_blank">
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
            <section key={i} className="card border-l-4 border-imrea-green2 flex gap-4">
              <span className="text-3xl" aria-hidden>{s.icon}</span>
              <div>
                <h3 className="text-imrea-green font-semibold mb-1">{s.title}</h3>
                <p className="leading-relaxed">{s.content}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
