import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "Madre de familia",
    content: "Por fin entendí cómo ayudar a mi hijo sin sentirme sola. El método de Fernanda cambió nuestra vida completamente.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Carlos Mendoza",
    role: "Psicólogo Clínico",
    content: "Fernanda explica con amor, claridad y experiencia. Sus técnicas son revolucionarias y realmente efectivas.",
    avatar: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    role: "Terapeuta Ocupacional",
    content: "El curso me dio herramientas prácticas que uso todos los días. Mis pacientes han mostrado mejoras increíbles.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "Patricia Silva",
    role: "Madre y Educadora",
    content: "Como madre y profesional, este método me ayudó tanto en casa como en mi trabajo. Altamente recomendado.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Luis Herrera",
    role: "Padre de familia",
    content: "Fernanda nos enseñó a conectar con nuestro hijo de una manera que nunca pensamos posible. Gracias infinitas.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 6,
    name: "Dra. Carmen López",
    role: "Psicopedagoga",
    content: "Un enfoque humano y científico a la vez. Este curso debería ser obligatorio para todos los profesionales del área.",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-2 md:px-0">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 mx-2 md:mx-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-3 md:mb-4 border-4 border-blue-100"
          />
          <blockquote className="text-sm md:text-lg text-gray-700 mb-3 md:mb-4 italic px-2">
            "{testimonials[currentIndex].content}"
          </blockquote>
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonials[currentIndex].name}</h4>
            <p className="text-blue-600 text-xs md:text-sm">{testimonials[currentIndex].role}</p>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
      </button>

      <div className="flex justify-center mt-4 md:mt-6 space-x-1 md:space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;