import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, BookOpen, CheckCircle, Star, GraduationCap, ArrowRight } from 'lucide-react';
import { Workshop, fetchWorkshopBySlug } from '../services/workshopService';
import CTAButton from '../components/CTAButton';
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';

export default function WorkshopDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Load workshop data
    const loadWorkshop = async () => {
      if (!slug) {
        setError('Slug no proporcionado');
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const workshopData = await fetchWorkshopBySlug(slug);
        if (workshopData) {
          setWorkshop(workshopData);
        } else {
          setError('Taller no encontrado');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el taller');
      } finally {
        setLoading(false);
      }
    };
    
    loadWorkshop();
  }, [slug]);

  const scrollToCourse = () => {
    document.getElementById('course-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f2e9e2] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#1b92d1] mx-auto mb-4"></div>
          <p className="text-[#262c52] text-lg">Cargando taller...</p>
        </div>
      </div>
    );
  }

  if (error || !workshop) {
    return (
      <div className="min-h-screen bg-[#f2e9e2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#262c52] mb-4">{error || 'Taller no encontrado'}</h1>
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
            {workshop.title}
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
              <span className="block text-[#1b92d1] text-3xl md:text-5xl lg:text-7xl font-extrabold">
                {workshop.title}
              </span>
              <span className="block text-xl md:text-3xl lg:text-4xl">{workshop.subtitle}</span>
            </h1>
          </div>

          {/* Video Player - Mobile First */}
          <div className="mb-6 md:mb-12">
            <VideoPlayer videoSrc={workshop.detailPage?.videoUrl} />
            <p className="text-base md:text-xl text-[#262c52] mt-4 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
              {workshop.description}
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-8 md:mb-12">
            <CTAButton 
              text={workshop.detailPage?.ctaButtonText || "INSCRIBIRME AL TALLER"}
              timerMinutes={30}
              size="medium"
              className="mb-4"
              paymentLink={workshop.linkpay || ''}
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
              {workshop.detailPage?.contentSection.title || "Contenido del Taller"}
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {workshop.detailPage?.contentSection.description || "Módulos diseñados para la práctica efectiva"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16 px-2 md:px-0">
            {workshop.detailPage?.contentSection.features.map((item, index) => {
              const icons = [BookOpen, Users, CheckCircle, Star, GraduationCap];
              const IconComponent = icons[index % icons.length];
              return (
                <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-[#1b92d1] mb-2 md:mb-4">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-[#262c52] mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                </div>
              );
            }) || []}
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


      {/* Conoce a tu Guía */}
      {/*<section className="py-12 md:py-20 px-4 bg-white">
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
      </section> */}

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
              {workshop.detailPage?.targetSection.title || "¿A quién va dirigido?"}
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {workshop.detailPage?.targetSection.description || "Diseñado para profesionales especializados"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
            <div className="bg-gradient-to-br from-[#1b92d1]/10 to-[#1b92d1]/5 rounded-xl md:rounded-2xl p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-[#1b92d1] rounded-full p-2 md:p-3 mr-3 md:mr-4">
                  <GraduationCap className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-[#262c52]">
                  {workshop.detailPage?.targetSection.subtitle || "Profesionales"}
                </h4>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {workshop.detailPage?.targetSection.subdescription || "Ideal para profesionales especializados"}
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <CTAButton 
              text={workshop.detailPage?.ctaButtonSecondaryText || "ADQUIRIR AHORA"}
              timerMinutes={25}
              size="large"
              paymentLink={workshop.linkpay || ''}
            />
          </div>
          <p className="text-center text-sm md:text-base opacity-90 mb-4">
            Únete a una red de terapeutas capacitados. Modalidad {workshop.modality}.
          </p>

          <div className=" text-center grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm opacity-80 px-4">
            <div>✅ Acceso inmediato</div>
            <div>✅ Soporte personalizado</div>
            <div>✅ Precio: ${workshop.price} (antes ${workshop.originalPrice})</div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}