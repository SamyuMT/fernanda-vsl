import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const images: CarouselImage[] = [
  {
    id: 1,
    src: "/Instalaciones.png",
    alt: "Instalaciones de UN-IR",
    caption: "Un espacio adaptado para el aprendizaje y la inclusión"
  },
  {
    id: 2,
    src: "/Talleres.png",
    alt: "Capacitación profesional",
    caption: "Capacitaciones y talleres para profesionales y familias"
  },
  {
    id: 3,
    src: "/AcomVirtual.png",
    alt: "Sesión virtual educativa",
    caption: "Sesiones virtuales: aprendizaje y diversión en familia"
  },
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto md:px-0">
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl mx-2 md:mx-0 border-4 border-[#1b92d1]">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="w-full flex-shrink-0 relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 md:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-6">
                <p className="text-white text-sm md:text-lg font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-1 md:p-2 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-1 md:p-2 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
        </button>
      </div>

      <div className="flex justify-center mt-3 md:mt-4 space-x-1 md:space-x-2">
        {images.map((_, index) => (
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

export default ImageCarousel;