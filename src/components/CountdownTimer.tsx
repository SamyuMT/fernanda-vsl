import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialMinutes = 30, 
  className = "" 
}) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`flex items-center justify-center space-x-1 md:space-x-2 ${className}`}>
      <div className="bg-red-600 text-white px-2 py-2 md:px-3 md:py-2 rounded-lg font-bold text-base md:text-lg">
        {hours.toString().padStart(2, '0')}
      </div>
      <span className="text-red-600 font-bold text-lg md:text-xl">:</span>
      <div className="bg-red-600 text-white px-2 py-2 md:px-3 md:py-2 rounded-lg font-bold text-base md:text-lg">
        {minutes.toString().padStart(2, '0')}
      </div>
      <span className="text-red-600 font-bold text-lg md:text-xl">:</span>
      <div className="bg-red-600 text-white px-2 py-2 md:px-3 md:py-2 rounded-lg font-bold text-base md:text-lg">
        {seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default CountdownTimer;