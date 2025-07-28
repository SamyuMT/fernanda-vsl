import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, BookOpen, Award, CheckCircle, Star, GraduationCap, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';

export default function WorkshopDetailPage() {
  const { slug } = useParams();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToCourse = () => {
    document.getElementById('course-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // If the slug doesn't match our workshop, show 404 or redirect
  if (slug !== 'taller-teorico-practico') {
    return (
      <div className="min-h-screen bg-[#f2e9e2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#262c52] mb-4">Taller no encontrado</h1>
          <Link to="/workshops" className="text-[#1b92d1] hover:underline">
            Volver a talleres
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2e9e2]">
      {/* Barra Superior - Etiqueta */}
      <div className="bg-[#1b92d1] text-white text-center py-3 md:py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link to="/workshops" className="flex items-center text-white hover:text-gray-200 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </Link>
          <p className="text-sm md:text-base font-bold uppercase tracking-wide">
            TALLER TEÓRICO-PRÁCTICO
          </p>
        </div>
      </div>

     {/* Hero + Video Section - Mobile First */}
      <section 
        className="relative flex flex-col items-center justify-start px-4 py-4 md:py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
          {/* Título Principal */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#262c52] mb-4 leading-tight px-2">
              {/*<span className="block text-3xl md:text-5xl lg:text-7xl">De la Teoría a la Práctica:</span>*/}
              <span className="block text-[#1b92d1] text-3xl md:text-5xl lg:text-7xl font-extrabold">
                Aprende a Programar Sesiones Efectivas
              </span>
              <span className="block text-xl md:text-3xl lg:text-4xl">para Niños con Autismo</span>
            </h1>
          </div>

          {/* Video Player - Mobile First */}
          <div className="mb-6 md:mb-12">
            <VideoPlayer />
            <p className="text-base md:text-xl text-[#262c52] mt-4 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
              Descubre el CÓMO abordar una terapia con objetivos y programas claros para ver resultados reales.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-8 md:mb-12">
            <CTAButton 
              text="SÍ, QUIERO INSCRIBIRME AL TALLER"
              timerMinutes={30}
              size="medium"
              className="mb-4"
            />
            <button
              onClick={scrollToCourse}
              className="block md:inline-block bg-[#1b92d1] hover:bg-[#1580b8] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg mx-auto mb-4 md:mb-0 md:ml-4"
            >
              Ver Más Información
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 inline" />
            </button>
          </div>

          {/* Bonus Section */}
          {/*<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-8 mx-2 md:mx-0">
            <p className="text-sm md:text-lg text-gray-600 mb-2">
              🎁 <strong>BONUS EXCLUSIVO:</strong> Modalidad online vía Meet
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              Únete a una red de terapeutas capacitados
            </p>
          </div>*/}
        </div>
      </section>

      {/* Contenido del Taller */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#262c52] mb-4 md:mb-6">
              Contenido del Taller: Tu Hoja de Ruta Práctica
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Módulos diseñados para llevarte de la teoría a la práctica efectiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16 px-2 md:px-0">
            {[
              {
                icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Armado General de una Sesión",
                description: "Aprende qué materiales usar, cuál es la disposición del espacio y los elementos que no pueden faltar."
              },
              {
                icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Planificación y Programas",
                description: "Descubre cómo se arma una planificación de trabajo y cómo diseñar cada programa con sus objetivos por áreas."
              },
              {
                icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Planillas y Registro de Datos",
                description: "Aprenderás a armar planillas y registrar el progreso de cada programa. ¡La toma de datos es esencial!"
              },
              {
                icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Fundamentos del Aprendizaje",
                description: "Entiende cómo es el aprendizaje de un niño con autismo y qué funciones cognitivas básicas debes estimular al inicio."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-[#1b92d1] mb-2 md:mb-4">{item.icon}</div>
                <h3 className="text-base md:text-xl font-bold text-[#262c52] mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <div className="flex justify-center items-center space-x-1 md:space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl md:text-2xl font-bold text-[#262c52] mb-2">Metodología Probada</p>
            <p className="text-sm md:text-base text-gray-600">Basada en 26 años de experiencia práctica</p>
          </div>
        </div>
      </section>

      {/* ¿Para quién es? Section */}
      <section id="course-section" className="py-12 md:py-20 px-4 bg-[#f2e9e2]"
          style={{
          backgroundImage: 'url(/bg-3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1
        }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#262c52] mb-4 md:mb-6">
              ¿A quién va dirigido este taller?
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Diseñado especialmente para quienes buscan resultados reales y prácticos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
            <div className="bg-gradient-to-br from-[#1b92d1]/10 to-[#1b92d1]/5 rounded-xl md:rounded-2xl p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-[#1b92d1] rounded-full p-2 md:p-3 mr-3 md:mr-4">
                  <GraduationCap className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-[#262c52]">Profesionales y Terapeutas</h4>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Capacita a profesionales para la implementación de programas específicos. Ideal si buscas la confianza y habilidades para enfrentar este gratificante trabajo.
              </p>
            </div>

            {/*<div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 rounded-xl md:rounded-2xl p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-yellow-500 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                  <Home className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-[#262c52]">Familias y Cuidadores</h4>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Las familias deben ser parte fundamental. Aprende a dar pautas y estrategias claras para abordar y ayudar a tus hijos en casa.
              </p>
            </div>*/}
          </div>

          <div className="mt-8 md:mt-12">
            <CTAButton 
              text="AQUIRIR AHORA EL TALLER"
              timerMinutes={25}
              size="large"
            />
          </div>
        </div>

      </section>
      {/* Conoce a tu Guía */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#262c52] mb-4 md:mb-6">
              Una Guía Experta con 26 Años de Carrera
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Lic. Fernanda Suárez"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-xl object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-[#1b92d1]/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-[#1b92d1] mr-2" />
                <span className="text-[#262c52] font-semibold text-sm md:text-base">Licenciada en Psicopedagogía</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#262c52] mb-4 md:mb-6">Lic. Fernanda Suárez</h3>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Soy Licenciada en Psicopedagogía y he dedicado mi carrera a la intervención en TEA y trastornos del neurodesarrollo. Cuento con certificaciones en ADOS y múltiples técnicas como ABA y Flortime.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Como creadora de UN-IR y de mi propio método registrado, mi pasión es ayudar a infancias y familias a alcanzar su máximo potencial.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center bg-[#f2e9e2] rounded-xl p-3 md:p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#1b92d1] mb-1">26</div>
                  <div className="text-xs md:text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center bg-[#f2e9e2] rounded-xl p-3 md:p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#1b92d1] mb-1">+2500</div>
                  <div className="text-xs md:text-sm text-gray-600">Familias Ayudadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prueba Social - Testimonios */}
      <section className="py-12 md:py-20 px-4 bg-[#f2e9e2]"
          style={{
          backgroundImage: 'url(/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1
        }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#262c52] mb-4 md:mb-6">
              Construyamos Juntos un Camino Práctico hacia el Aprendizaje
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Testimonios reales de transformación de la teoría a la práctica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              {
                name: "Dra. María González",
                role: "Psicóloga Clínica",
                content: "El taller me dio las herramientas prácticas que necesitaba. Ahora puedo estructurar sesiones efectivas con confianza total.",
                avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              },
              {
                name: "Carlos Mendoza",
                role: "Padre de familia",
                content: "Aprendí a aplicar en casa lo que mi hijo necesita. Las estrategias son claras y realmente funcionan.",
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              },
              {
                name: "Lic. Ana Rodríguez",
                role: "Terapeuta Ocupacional",
                content: "Fernanda logró que entendiera cómo programar objetivos específicos. Mis pacientes han mostrado avances increíbles.",
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#262c52] text-sm">{testimonial.name}</h4>
                    <p className="text-[#1b92d1] text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-[#1b92d1] to-[#262c52]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            ¿Listo para transformar tu práctica?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 px-4">
            Únete al taller que está cambiando la forma de abordar la terapia en TEA
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 md:mb-8 mx-2 md:mx-0">
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">🎁 OFERTA ESPECIAL HOY</h3>
            <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-3 md:mb-4">
              <span className="text-xl md:text-3xl line-through opacity-60">$297</span>
              <span className="text-3xl md:text-5xl font-bold text-yellow-400">$197</span>
            </div>
            <p className="text-sm md:text-lg opacity-90">Ahorra $100 USD • Solo por tiempo limitado</p>
          </div>

          <CTAButton 
            text="QUIERO TRANSFORMAR MI PRÁCTICA. INSCRIBIRME AHORA"
            timerMinutes={20}
            size="large"
            className="mb-6 md:mb-8"
          />
          <p className="text-center text-sm md:text-base opacity-90 mb-4">
            Únete a una red de terapeutas capacitados. Modalidad online vía Meet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm opacity-80 px-4">
            <div>✅ Acceso inmediato</div>
            <div>✅ Certificado incluido</div>
            <div>✅ Soporte personalizado</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}