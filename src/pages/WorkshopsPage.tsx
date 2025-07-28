import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Clock, Award, Star } from 'lucide-react';
import Footer from '../components/Footer';

export default function WorkshopsPage() {
  const workshops = [
    {
      id: 1,
      slug: 'taller-teorico-practico',
      title: 'Taller Teórico-Práctico Basado en la Experiencia',
      subtitle: 'De la Teoría a la Práctica: Aprende a Programar Sesiones Efectivas para Niños con Autismo',
      description: 'Descubre el CÓMO abordar una terapia con objetivos y programas claros para ver resultados reales.',
      duration: '4 horas',
      modality: 'Online vía Meet',
      price: 197,
      originalPrice: 297,
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Armado General de una Sesión',
        'Planificación y Programas',
        'Planillas y Registro de Datos',
        'Fundamentos del Aprendizaje'
      ],
      targetAudience: ['Profesionales y Terapeutas', 'Familias y Cuidadores'],
      rating: 5,
      reviews: 127
    }
  ];

  return (
    <div className="min-h-screen bg-[#f2e9e2]">
      {/* Header */}
      <div className="bg-[#1b92d1] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </Link>
          <h1 className="text-xl font-bold">Tienda de Talleres</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#262c52] mb-6">
            Talleres Especializados
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formación práctica y especializada para profesionales y familias que buscan resultados reales en el tratamiento del autismo
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ¡Oferta Limitada!
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(workshop.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm font-semibold ml-2">({workshop.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#262c52] mb-3">
                      {workshop.title}
                    </h2>
                    <h3 className="text-lg text-[#1b92d1] font-semibold mb-4">
                      {workshop.subtitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Workshop Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-[#1b92d1]" />
                      <span className="text-sm text-gray-600">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-[#1b92d1]" />
                      <span className="text-sm text-gray-600">{workshop.modality}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-[#262c52] mb-3">Lo que aprenderás:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {workshop.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#1b92d1] rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="font-bold text-[#262c52] mb-3">Dirigido a:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.targetAudience.map((audience, index) => (
                        <span
                          key={index}
                          className="bg-[#1b92d1]/10 text-[#1b92d1] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-3xl font-bold text-[#262c52]">${workshop.price}</span>
                      <span className="text-xl text-gray-400 line-through">${workshop.originalPrice}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">
                        Ahorra ${workshop.originalPrice - workshop.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Precio especial por tiempo limitado</p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/workshop/${workshop.slug}`}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-full text-center block transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Ver Detalles del Taller
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <Users className="w-16 h-16 text-[#1b92d1] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#262c52] mb-4">Más Talleres Próximamente</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estamos desarrollando nuevos talleres especializados para cubrir diferentes aspectos del tratamiento y la intervención en TEA. ¡Mantente atento a nuestras novedades!
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Award className="w-6 h-6 text-[#1b92d1]" />
              <span className="text-[#262c52] font-semibold">Formación Continua de Calidad</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}