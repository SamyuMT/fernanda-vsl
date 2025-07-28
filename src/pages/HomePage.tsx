import React from 'react';
import { Link } from 'react-router-dom';
import { User, Globe, ShoppingBag, Heart } from 'lucide-react';

export default function HomePage() {
  const logos = ['/metodo-fernanda.jpg', '/un-ir.jpg'];
  const randomLogo = logos[Math.floor(Math.random() * logos.length)];

  return (
    <div className="min-h-screen bg-[#f2e9e2] bg-[url('/bg-1.png')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Profile Avatar */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto border-4 border-[#1b92d1]">
              <img
                src={randomLogo}
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute bottom-3 -right-0 w-8 h-8 bg-[#1b92d1] rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-[#262c52] mb-2">Fernanda Suárez</h1>
          <p className="text-lg text-gray-600 mb-2">Especialista en Autismo</p>
          <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
            Licenciada en Psicopedagogía con 26 años de experiencia en intervención TEA y trastornos del neurodesarrollo.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-4">
          <Link
            to="/profile"
            className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <div className="w-12 h-12 bg-[#1b92d1]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1b92d1]/20 transition-colors">
              <User className="w-6 h-6 text-[#1b92d1]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#262c52] text-lg">Conocer más</h3>
              <p className="text-gray-600 text-sm">Descubre mi trayectoria y método</p>
            </div>
          </Link>

          <Link
            to="/workshops"
            className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors">
              <ShoppingBag className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#262c52] text-lg">Tienda web</h3>
              <p className="text-gray-600 text-sm">Talleres y cursos especializados</p>
            </div>
          </Link>

          <a
            href="https://instagram.com/licfernandasuarez"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-4 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#262c52] text-lg">@licfernandasuarez</h3>
              <p className="text-gray-600 text-sm">Síguenos en Instagram</p>
            </div>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#262c52]">26+</div>
              <div className="text-xs text-gray-600">Años de experiencia</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#262c52]">+2500</div>
              <div className="text-xs text-gray-600">Familias ayudadas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#262c52]">100%</div>
              <div className="text-xs text-gray-600">Dedicación</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">© 2025 UN-IR | Lic. Fernanda Suárez</p>
        </div>
      </div>
    </div>
  );
}