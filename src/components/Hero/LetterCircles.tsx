import React from 'react';

const LetterCircles: React.FC = () => {
  const letters = ['A', 'M', 'E', 'N', 'A'];
  
  return (
    <div className="relative my-8">
      <div className="flex items-center gap-1">
        {letters.map((letter, index) => (
          <div key={index} className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white border-opacity-30 flex items-center justify-center">
              <span className="text-white text-sm md:text-base font-medium">{letter}</span>
            </div>
          </div>
        ))}
        <div className="h-[1px] bg-white bg-opacity-20 flex-grow ml-4"></div>
      </div>
    </div>
  );
};

export default LetterCircles;