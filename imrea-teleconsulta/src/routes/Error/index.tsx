import { Link, useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <span className="text-8xl" role="img" aria-label="Página não encontrada">
            🔍
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Error <span className="text-[#006b54]">404</span>
        </h1>
        <h2 className="text-2xl font-semibold text-[#006b54] mb-6">
          Página Não Encontrada
        </h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#006b54] text-white font-medium rounded-lg hover:bg-[#03896c] transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#006b54] focus:ring-offset-2"
          >
            <span className="mr-2">🏠</span>
            Voltar para o Início
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-6 py-3 border border-[#006b54] text-[#006b54] font-medium rounded-lg hover:bg-[#006b54] hover:text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#006b54] focus:ring-offset-2"
          >
            <span className="mr-2">↩️</span>
            Voltar à Página Anterior
          </button>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Ou navegue para:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/integrantes"
              className="text-[#006b54] hover:text-[#03896c] hover:underline transition-colors duration-200"
            >
              Integrantes
            </Link>
            <Link
              to="/faq"
              className="text-[#006b54] hover:text-[#03896c] hover:underline transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link
              to="/contato"
              className="text-[#006b54] hover:text-[#03896c] hover:underline transition-colors duration-200"
            >
              Contato
            </Link>
            <Link
              to="/sobre"
              className="text-[#006b54] hover:text-[#03896c] hover:underline transition-colors duration-200"
            >
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}