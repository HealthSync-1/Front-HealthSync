import {Link, NavLink, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header(){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const close = () => setOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);

    }, []);

    const active = ({isActive}: { isActive: boolean}) =>
        `px-3 py-2 rounded ${isActive ? "bg-white text-imrea-green font_medium" : "text-white hover:bg-white/10"}`;
    return(
        <header className="bg-gradient-to-r from-imrea-green to-imrea-green2 text-white sticky top-0 z-50 shadow">
            <nav className="container-max h-16 flex items-center justify-between">
                <button
                 onClick={() => navigate("/")}
                 className="text-2xl font-bold tracking-wide"
                 aria-label="Ir para a Home"
                >
                    IMREA
                </button>

                <button
                onClick={() => setOpen((v) => !v)}
                className="sm:hidden text-3xl leading-none"
                aria-label="Abrir/Fechar menu"
                >
                    ☰
                </button>

                <ul className="hidden sm-flex gap-2 items-center">
                    <li><NavLink to="/" className={active}>Home</NavLink></li>
                    <li><NavLink to="/integrantes" className={active}>Integrantes</NavLink></li>
                    <li><NavLink to="/faq" className={active}>FAQ</NavLink></li>
                    <li><NavLink to="/contato" className={active}>Contato</NavLink></li>
                    <li><NavLink to="/sobre" className={active}>Sobre</NavLink></li>
                </ul>
            </nav>
            {open && (
                <div className="sm-hidden bg-imrea-green/95">
                     <ul className="container-max py-2 space-y-1">
                        <li><Link onClick={() => setOpen(false)} className="block px-3 py-2" to="/">Home</Link></li>
                        <li><Link onClick={() => setOpen(false)} className="block px-3 py-2" to="/integrantes">Integrantes</Link></li>
                        <li><Link onClick={() => setOpen(false)} className="block px-3 py-2" to="/faq">FAQ</Link></li>
                        <li><Link onClick={() => setOpen(false)} className="block px-3 py-2" to="/contato">Contato</Link></li>
                         <li><Link onClick={() => setOpen(false)} className="block px-3 py-2" to="/sobre">Sobre</Link></li>
                     </ul>
                </div>
            )}
        </header>
    )
}