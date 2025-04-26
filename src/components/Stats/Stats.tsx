import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="w-full px-8 md:px-12 lg:px-16 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h2 className="text-[5rem] md:text-[5.5rem] lg:text-[6rem] leading-none font-bold text-white">
              270<span className="text-[#8CEAB3]">+</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg mt-3">
              <span className="text-white font-medium">Successful projects</span>
              <span className="text-white text-opacity-60"> delivered</span>
              <br />
              <span className="text-white text-opacity-60">with passion, care and creativity</span>
            </p>
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-[5rem] md:text-[5.5rem] lg:text-[6rem] leading-none font-bold text-white">
              96<span className="text-[#8CEAB3]">%</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg mt-3">
              <span className="text-white font-medium">Client satisfaction</span>
              <span className="text-white text-opacity-60"> — they</span>
              <br />
              <span className="text-white text-opacity-60">love our process & outcome</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;