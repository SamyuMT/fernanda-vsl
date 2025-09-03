import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#262c52] text-white py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">UN-IR</h4>
            <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm">
              Transformando vidas a través de la educación especializada
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a 
                href="https://instagram.com/licfernandasuarez" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Heart className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Fernanda</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm">
              <li>
                <Link
                  to="/profile#about-me"
                  className="hover:text-white transition-colors"
                  onClick={e => {
                    if (window.location.pathname === "/profile") {
                      e.preventDefault();
                      const el = document.getElementById("about-me");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  to="/profile#methodology"
                  className="hover:text-white transition-colors"
                  onClick={e => {
                    if (window.location.pathname === "/profile") {
                      e.preventDefault();
                      const el = document.getElementById("methodology");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  Metodología
                </Link>
              </li>
            </ul>
          </div>

          {/*<div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Talleres</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm">
              <li><Link to="/workshops" className="hover:text-white transition-colors">Todos los Talleres</Link></li>
              <li><Link to="/workshop/taller-teorico-practico" className="hover:text-white transition-colors">Taller Teórico-Práctico</Link></li>
            </ul>
          </div>*/}

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Soporte</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link to="/profile#contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 md:pt-8 text-center text-gray-300">
          <p className="text-xs md:text-sm">Copyright © 2025 - UN-IR | Lic. Fernanda Suárez</p>
          <p className="mt-2 text-xs">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;