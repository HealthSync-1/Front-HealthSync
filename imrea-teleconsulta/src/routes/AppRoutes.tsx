import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Home from "../pages/Home/index.tsx";
import FAQ from "../pages/FAQ/index.tsx";
import Contato from "../pages/Contato/index.tsx";
import Sobre from "../pages/Sobre/index.tsx";
import Integrantes from "../pages/Integrante/index.tsx";
import IntegranteDetails from "./IntegrantesDetalhes/index.tsx";
import Error from "./Error/index.tsx";
import GerenciadorPacientes from "../components/GerenciadorPacientes.tsx"; // 1. Importe o componente

export default function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:rm" element={<IntegranteDetails />} /> 
          <Route path="/pacientes" element={<GerenciadorPacientes />} /> {/* 2. Adicione a nova rota */}
          <Route path="*" element={<Error/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
