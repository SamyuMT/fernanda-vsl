import React from 'react';
import CountdownTimer from './CountdownTimer';

interface CTAButtonProps {
  text: string;
  showTimer?: boolean;
  timerMinutes?: number;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  showTimer = true,
  timerMinutes = 30,
  size = 'large',
  className = '',
  onClick
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 md:px-6 md:py-3 text-sm md:text-base',
    medium: 'px-6 py-3 md:px-8 md:py-4 text-base md:text-lg',
    large: 'px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl'
  };

  const handleClick = () => {
    // Mock Mercado Pago integration
    alert('Redirigiendo a Mercado Pago... (Integración simulada)');
    if (onClick) onClick();
  };

  return (
    <div className={`text-center ${className}`}>
      {showTimer && (
        <div className="mb-4 md:mb-4">
          <p className="text-red-600 font-bold mb-2 text-sm md:text-base">¡Oferta por tiempo limitado!</p>
          <CountdownTimer initialMinutes={timerMinutes} />
        </div>
      )}
      <button
        onClick={handleClick}
        className={`
          bg-gradient-to-r from-yellow-400 to-yellow-500 
          hover:from-yellow-500 hover:to-yellow-600
          text-gray-900 font-bold rounded-full
          transform hover:scale-105 transition-all duration-300
          shadow-lg hover:shadow-xl
          ${sizeClasses[size]}
          ${className}
        `}
      >
        {text}
      </button>
      <div className="mt-2">
        <img 
          src="/imgi_2_formas-pago-3.png" 
          alt="Pago seguro con Mercado Pago" 
          className="mx-auto w-60 md:w-48"
        />
      </div>
    </div>
  );
};

export default CTAButton;