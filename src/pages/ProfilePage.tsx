import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, BookOpen, Users, User, Target, Heart, Star, MessageCircle, Mail, MapPin, Compass, Lightbulb, Layers, Handshake } from 'lucide-react';
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
                src="/fotoProfile1.jpeg"
                alt="Lic. Fernanda Suárez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#262c52] mb-3 md:mb-4">Lic. Fernanda Suárez</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 px-2">Especialista en Autismo y Trastornos del Neurosociodesarrollo</p>
          
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 md:mb-8 shadow-lg mx-2">
            <Award className="w-7 h-7 sm:w-5 sm:h-5 text-[#1b92d1]" />
            <span className="text-[#262c52] font-semibold text-sm sm:text-base">Profesora de niños y niñas sordos y transtornos del lenguaje</span>
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
                Originaria de Olavarría, mi formación profesional se forjó en Buenos Aires, graduándome como Licenciada en Psicopedagogía (UMSA), profesora de sordos e hipoacúsicos con especialidad en lenguaje oral (USAL) y estimulación temprana. Esta base en la comunicación fue el pilar para mi vocación.
              </p>
              <p>
                Con el tiempo, mi carrera evolucionó hacia la intervención en TEA y trastornos del neurodesarrollo, especializándome con certificaciones como ADOS-2, ABA y Floortime. Esta trayectoria me permitió fundar UN-IR y crear un método propio para guiar a las infancias y sus familias con un enfoque tan efectivo como humano.
              </p>
            </div>
          </div>

        {/* My Approach Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-4 md:mb-6 flex items-center">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-[#1b92d1]" />
            Mi Enfoque
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Mi enfoque se basa en la firme creencia de que no existen tratamientos ideales, sino soluciones únicas y personalizadas para cada niño y su familia. Mi principal objetivo es optimizar sus capacidades a través de una perspectiva holística que me permita una comprensión profunda de sus necesidades. Para ello, aplico mis conocimientos en diversas técnicas neurocognitivas, como ABA, TEACCH, PECS y Floortime, en un entorno terapéutico individualizado. Reconozco que la familia y la escuela desempeñan un papel fundamental, por lo que trabajo en estrecha colaboración con ambos. Esta alianza nos permite brindar recomendaciones terapéuticas, familiares y escolares significativas, con la meta final de ayudar a las infancias a alcanzar su máximo potencial y mejorar su calidad de vida.
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
                  <p className="text-gray-600 text-xs sm:text-sm">— Licenciatura en Psicopedagogía - Universidad del Museo Social Argentino (UMSA)</p>
                  <p className="text-gray-600 text-xs sm:text-sm">— Profesorado de niños/as Sordos e Hipoacúsicos - Universidad del Salvador (USAL)</p>
                  <p className="text-gray-600 text-xs sm:text-sm">— Especialización en Estimulación Temprana - Instituto Ceiac</p>
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
                  <p className="text-gray-600 text-xs sm:text-sm">Creadora de UN-IR y método Propio</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Method Section */}
        <div id="methodology" className="bg-white rounded-2xl p-4 sm:p-6 md:p-12 mb-12 md:mb-20 shadow-xl mx-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-4 md:mb-6 flex items-center">
            <Award className="w-12 h-12 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-[#1b92d1]" />
            Método Fernanda Suárez: Un Enfoque Nacido de la Experiencia
          </h2>

          {/* Cuatro secciones cortas y dinámicas (móvil apiladas, escritorio en 2 columnas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
            {/* 1. Origen */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg ring-2 ring-[#1b92d1]/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-3">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#262c52] mb-2 sm:mb-3">¿Por qué un método propio? El Origen</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Este método nació como respuesta a una limitación observada durante años en los abordajes terapéuticos tradicionales: los niños podían aprender habilidades en sesión, pero muchas veces no lograban participar del mundo social real. Por eso, nuestro enfoque pone en el centro la dimensión social del desarrollo, entendiendo que jugar con otros, salir a la calle y participar en la familia y la escuela también es parte fundamental de crecer.
              </p>
            </div>

            {/* 2. Partir de lo posible */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg ring-2 ring-[#1b92d1]/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#262c52] mb-2 sm:mb-3">¿Qué lo hace único? Partir de lo Posible</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Lo que distingue a este método es que parte siempre de lo posible, no de lo que “falta”. Es una invitación a construir desde lo que el niño ya puede hacer, desde sus intereses y su forma particular de vincularse. A través de propuestas lúdicas y vínculos sostenidos, se despliegan procesos clave como la simbolización, la comunicación y la autorregulación. Acompañar no es solo intervenir en sesión, sino construir con otros adultos una red que sostenga y potencie cada paso.
              </p>
            </div>

            {/* 3. Las 5 etapas */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg ring-2 ring-[#1b92d1]/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-3">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#262c52] mb-2 sm:mb-3">Las 5 Etapas de un Proceso que Respeta los Tiempos</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                El recorrido terapéutico no se estructura por edad ni por diagnóstico, sino que se despliega en cinco etapas que avanzan según el nivel de acceso del niño al juego, al lenguaje y al vínculo. Este proceso, que incluye fases como la Etapa de acercamiento y construcción del lazo o la Etapa de interacción simbólica, asegura que cada niño transite el camino a su propio ritmo, sintiéndose siempre mirado, comprendido y acompañado.
              </p>
            </div>

            {/* 4. Inspiración social */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg ring-2 ring-[#1b92d1]/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-3">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#262c52] mb-2 sm:mb-3">Nuestra Inspiración: El Aprendizaje Social</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Este enfoque se apoya en los aportes de Lev Vygotsky y su teoría de la zona de desarrollo próximo, que sostiene que el aprendizaje ocurre primero en lo social y luego se internaliza. Por eso, el método no propone entrenamientos aislados, sino que diseña experiencias compartidas y significativas que despiertan en el niño el deseo genuino de participar, comunicar y transformar el mundo junto a otros.
              </p>
            </div>
          </div>

          {/* Logros del Método: siempre debajo, ocupa todo el ancho */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg ring-2 ring-[#1b92d1]/30">
            <h3 className="text-lg sm:text-xl font-bold text-[#262c52] mb-3 sm:mb-4">Logros del Método</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-[#FFFFFF] backdrop-blur-sm border-l-4 border-[#a3d8f4] rounded-xl p-4 sm:p-6 shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold text-[#262c52] mb-3">Comunicación</h4>
                <p className="text-gray-700 text-sm sm:text-base">Expresar necesidades, deseos y emociones con palabras, gestos o acciones.</p>
              </div>
              <div className="bg-[#FFFFFF] backdrop-blur-sm border-l-4 border-[#a3d8f4] rounded-xl p-4 sm:p-6 shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold text-[#262c52] mb-3">Participación social</h4>
                <p className="text-gray-700 text-sm sm:text-base">Involucrarse en situaciones reales de convivencia y juego compartido.</p>
              </div>
              <div className="bg-[#FFFFFF] backdrop-blur-sm border-l-4 border-[#a3d8f4] rounded-xl p-4 sm:p-6 shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold text-[#262c52] mb-3">Herramientas para convivir</h4>
                <p className="text-gray-700 text-sm sm:text-base">Pedir ayuda, compartir, esperar turnos, tolerar frustraciones.</p>
              </div>
              <div className="bg-[#FFFFFF] backdrop-blur-sm border-l-4 border-[#a3d8f4] rounded-xl p-4 sm:p-6 shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold text-[#262c52] mb-3">Lenguaje</h4>
                <p className="text-gray-700 text-sm sm:text-base">Usar el lenguaje para interactuar, anticipar, imaginar y crear.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Carousel Section */}
        <div className="mb-12 md:mb-20 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-6 md:mb-8 pl-4">Galería de Resultados</h2>
          <ImageCarousel />
        </div>

        {/* Reviews Section
        <div className="mb-12 md:mb-20 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-6 md:mb-8 pl-4">Reseñas</h2>
          
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
        </div> */}


        {/* Contact Information */}
        <div id="contact" className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl mb-12 md:mb-16 mx-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262c52] mb-4 text-center">Información de Contacto</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-center">
            {/* Ubicación */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-2 sm:gap-4">
              <a
                href="https://www.google.com/maps/place/UN-IR+autismos/@-34.6463434,-58.6417195,17z/data=!4m15!1m8!3m7!1s0x95bcb8ac6d9f9721:0xf62a508489e4ecb4!2sJLL,+Carlos+Casares+1328,+B1712+Castelar,+Provincia+de+Buenos+Aires,+Argentina!3b1!8m2!3d-34.6463434!4d-58.6417195!16s%2Fg%2F11nnk__hq6!3m5!1s0x95bcb9c77ffa17dd:0x33f2b3bc53dc77ed!8m2!3d-34.6463434!4d-58.6417195!16s%2Fg%2F11h1mknr7z?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-1 hover:bg-[#1b92d1]/20 transition-colors"
                title="Ver en Google Maps"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </a>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="font-bold text-[#262c52] mb-1 text-sm sm:text-base">Ubicación</h3>
                <p className="text-gray-600 text-sm sm:text-base whitespace-normal max-w-xs">Carlos casares 1328, Castelar, Buenos Aires</p>
              </div>
            </div>
            {/* Correo electrónico */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-2 sm:gap-4">
              <a
                href="mailto:licfernandasuarez@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b92d1]/10 rounded-full flex items-center justify-center mb-1 hover:bg-[#1b92d1]/20 transition-colors"
                title="Enviar correo"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b92d1]" />
              </a>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="font-bold text-[#262c52] mb-1 text-sm sm:text-base">Correo electrónico</h3>
                <p className="text-gray-600 text-sm sm:text-base whitespace-normal max-w-xs">licfernandasuarez@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Contact Form Button */}
          <div className="text-center mt-4">
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
          <button
            disabled
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-400 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg shadow-lg cursor-not-allowed opacity-70 relative"
          >
            <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Conoce Nuestros Talleres
            <span className="absolute -top-4 right-0 bg-[#1b92d1] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">Muy pronto</span>
          </button>
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