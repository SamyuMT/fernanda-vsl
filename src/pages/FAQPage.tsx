import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../components/Footer';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿Qué es el MétodoFernanda?",
    answer: "El MétodoFernanda es un enfoque integral desarrollado por la Lic. Fernanda Suárez con más de 26 años de experiencia en el tratamiento del autismo. Combina las mejores prácticas de diferentes enfoques terapéuticos, adaptándolos a la realidad específica de cada familia y niño."
  },
  {
    id: 2,
    question: "¿Para quién están dirigidos los talleres?",
    answer: "Nuestros talleres están dirigidos tanto a profesionales (terapeutas, psicólogos, educadores) como a familias y cuidadores de niños con TEA. Cada taller está diseñado para proporcionar herramientas prácticas que pueden aplicarse tanto en el ámbito profesional como en el hogar."
  },
  {
    id: 3,
    question: "¿Los talleres son presenciales u online?",
    answer: "Actualmente ofrecemos talleres en modalidad online vía Meet, lo que permite la participación desde cualquier lugar del mundo. Esto facilita el acceso a familias y profesionales que no pueden asistir presencialmente."
  },
  {
    id: 4,
    question: "¿Qué incluye el Taller Teórico-Práctico?",
    answer: "El taller incluye: Armado General de una Sesión, Planificación y Programas, Planillas y Registro de Datos, y Fundamentos del Aprendizaje. También incluye materiales de apoyo, certificado de participación y acceso a la comunidad de participantes."
  },
  {
    id: 5,
    question: "¿Cuánto dura el taller?",
    answer: "El Taller Teórico-Práctico tiene una duración de 4 horas, distribuidas de manera que permita la máxima absorción de conocimientos y práctica de las técnicas enseñadas."
  },
  {
    id: 6,
    question: "¿Hay certificación al completar el taller?",
    answer: "Sí, todos los participantes que completen el taller recibirán un certificado de participación emitido por UN-IR, que avala las horas de capacitación y los conocimientos adquiridos."
  },
  {
    id: 7,
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos pagos a través de Mercado Pago, que incluye tarjetas de crédito, débito, transferencias bancarias y otros métodos de pago locales según tu país."
  },
  {
    id: 8,
    question: "¿Hay descuentos disponibles?",
    answer: "Sí, frecuentemente ofrecemos promociones especiales y descuentos por tiempo limitado. Te recomendamos suscribirte a nuestras comunicaciones para estar al tanto de las ofertas especiales."
  },
  {
    id: 9,
    question: "¿Puedo acceder al contenido después del taller?",
    answer: "Los participantes reciben materiales de apoyo que pueden conservar. Para talleres grabados, el acceso se mantiene por un período determinado que se especifica al momento de la inscripción."
  },
  {
    id: 10,
    question: "¿Cómo puedo contactar para más información?",
    answer: "Puedes contactarnos a través del formulario de contacto en nuestro sitio web, por email a fernanda@un-ir.com, o seguirnos en Instagram @licfernandasuarez para estar al día con todas las novedades."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f2e9e2]">
      {/* Header */}
      <div className="bg-[#262c52] text-white py-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between min-h-[56px]">
          <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Volver</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold">Preguntas Frecuentes</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#262c52] mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros talleres y metodología
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#262c52] pr-4">
                  {item.question}
                </h3>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="w-5 h-5 text-[#1b92d1] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1b92d1] flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-[#262c52] mb-4">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-gray-600 mb-6">
            Estamos aquí para ayudarte. Contáctanos directamente para resolver cualquier duda específica.
          </p>
          <Link
            to="/profile"
            className="inline-flex items-center bg-gradient-to-r from-[#1b92d1] to-[#262c52] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Contactar a Fernanda
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}