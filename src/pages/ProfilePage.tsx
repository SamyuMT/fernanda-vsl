import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, BookOpen, Users, User, Target, Heart, Star, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ProfilePage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll to top when navigating to the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          if (hash === '#contact') {
            // Open contact form for contact section
            setIsContactFormOpen(true);
          } else {
            // Smooth scroll to section
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f2e9e2]">
      {/* Header */}
      <div className="bg-[#1b92d1] text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between min-h-[56px]">
          <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Volver</span>
            <span className="sm:hidden">Perfil Profesional</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold hidden sm:block">Perfil Profesional</h1>
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="bg-[#1b92d1] hover:bg-[#1580b8] px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium transition-colors flex items-center space-x-1 md:space-x-2 text-sm md:text-base"
          >
            <MessageCircle className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Contactar</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-20 px-4">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden shadow-2xl mx-auto border-4 border-white">
              <img
                src="/profile.jpg"
                alt="Lic. Fernanda Suárez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-12 sm:h-12 bg-[#1b92d1] rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-current" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#262c52] mb-3 md:mb-4">Lic. Fernanda Suárez</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 px-2">Especialista en Autismo y Trastornos del Neurodesarrollo</p>
          
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 md:mb-8 shadow-lg mx-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#1b92d1] mr-2" />
            <span className="text-[#262c52] font-semibold text-sm sm:text-base">Licenciada en Psicopedagogía</span>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-2xl mx-auto px-2">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b92d1] mb-1">26+</div>
              <div className="text-xs sm:text-sm text-gray-600">Años de experiencia</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b92d1] mb-1">+2500</div>
              <div className="text-xs sm:text-sm text-gray-600">Familias ayudadas</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b92d1] mb-1">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">Dedicación</div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about-me" className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20 px-4">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-4 md:mb-6 flex items-center">
              <User className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-[#1b92d1]" />
              Sobre Fernanda
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Soy Licenciada en Psicopedagogía y he dedicado mi carrera a la intervención en TEA y trastornos del neurodesarrollo. Cuento con certificaciones en ADOS y múltiples técnicas como ABA y Flortime.
              </p>
              <p>
                Como creadora de UN-IR y de mi propio método registrado, mi pasión es ayudar a infancias y familias a alcanzar su máximo potencial a través de intervenciones especializadas y humanizadas.
              </p>
              <p>
                Mi enfoque se basa en la experiencia práctica de más de dos décadas trabajando directamente con niños, familias y profesionales del área.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-4 md:mb-6 flex items-center">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-[#1b92d1]" />
              Trayectoria
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1] rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#262c52] mb-1 text-sm sm:text-base">Estudios Especializados</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Licenciatura en Psicopedagogía con especialización en TEA</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#262c52] mb-1 text-sm sm:text-base">Experiencia Profesional</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">26 años de experiencia práctica en intervención TEA</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#262c52] mb-1 text-sm sm:text-base">Logros</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Creadora de UN-IR y método propio registrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Method Section */}
        <div id="methodology" className="bg-white rounded-2xl p-4 sm:p-6 md:p-12 mb-12 md:mb-20 shadow-xl mx-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-6 md:mb-8 text-center">Método Propio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="bg-gradient-to-br from-[#1b92d1]/10 to-[#1b92d1]/5 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#262c52] mb-3 sm:mb-4">Metodología</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Después de años de experiencia, desarrollé un método único que combina las mejores prácticas de diferentes enfoques terapéuticos, adaptándolos a la realidad de cada familia y niño.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#262c52] mb-3 sm:mb-4">Logros del Método</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Mi método ha demostrado resultados efectivos en más de 2500 familias, proporcionando herramientas prácticas y estrategias claras para el desarrollo integral de niños con TEA.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-[#1b92d1] to-[#262c52] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg max-w-full">
              <img
                src="/image.png"
                alt="Logo del Método"
                className="max-w-[200px] sm:max-w-xs mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Photo Carousel Section */}
        <div className="mb-12 md:mb-20 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-6 md:mb-8 text-center">Galería de Resultados</h2>
          <ImageCarousel />
        </div>

        {/* Reviews Section */}
        <div className="mb-12 md:mb-20 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-6 md:mb-8 text-center">Reseñas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "María González",
                role: "Madre de familia",
                content: "El método de Fernanda cambió completamente nuestra vida. Ahora entiendo cómo ayudar a mi hijo de manera efectiva.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              },
              {
                name: "Dr. Carlos Mendoza",
                role: "Psicólogo Clínico",
                content: "Fernanda es una profesional excepcional. Su método es revolucionario y realmente efectivo.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              },
              {
                name: "Ana Rodríguez",
                role: "Terapeuta Ocupacional",
                content: "Las herramientas que aprendí han transformado mi práctica profesional. Altamente recomendado.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#262c52] text-xs sm:text-sm">{review.name}</h4>
                    <p className="text-[#1b92d1] text-xs">{review.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm italic">"{review.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Indicators */}
        <div className="bg-gradient-to-r from-[#1b92d1] to-[#262c52] rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center mb-12 md:mb-16 mx-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">Indicadores de Éxito</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">+600</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">Profesionales Capacitados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">28</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">Años de Dedicación</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">+2500</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">Familias Transformadas</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div id="contact" className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl mb-12 md:mb-16 mx-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-6 md:mb-8 text-center">Información de Contacto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </div>
              <h3 className="font-bold text-[#262c52] mb-2 text-sm sm:text-base">Teléfono</h3>
              <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-4567</p>
            </div>
            
            <div className="flex flex-col items-center p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </div>
              <h3 className="font-bold text-[#262c52] mb-2 text-sm sm:text-base">Correo electrónico</h3>
              <p className="text-gray-600 text-sm sm:text-base">fernanda@un-ir.com</p>
            </div>
            
            <div className="flex flex-col items-center p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </div>
              <h3 className="font-bold text-[#262c52] mb-2 text-sm sm:text-base">Ubicación</h3>
              <p className="text-gray-600 text-sm sm:text-base">Buenos Aires, Argentina</p>
            </div>
          </div>
          
          {/* Contact Form Button */}
          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-[#1b92d1] to-[#262c52] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>Enviar Mensaje</span>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center px-4 mb-8">
          <Link
            to="/workshops"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Conoce Nuestros Talleres
          </Link>
        </div>
      </div>

      {/* Contact Form Overlay */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
      
      <Footer />
    </div>
  );
}