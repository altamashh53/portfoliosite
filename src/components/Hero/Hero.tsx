// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm/ContactForm";

const DesktopHero: React.FC = () => (
  <div className="hidden md:block min-h-screen w-full relative overflow-hidden">
    <div className="relative z-10 h-full pt-16 px-4 sm:pt-20 sm:px-8 md:pt-24 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-4 py-8 sm:gap-6 sm:py-12 md:gap-8 md:py-20">
          <div className="flex flex-col justify-start max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-sm bg-black/30 p-4 rounded-lg sm:p-6"
            >
              <h1 className="text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-bold text-white tracking-tighter mb-6 sm:mb-8 md:mb-12">
                Getting Home Service Businesses More Customers.
              </h1>

              <div className="grid grid-cols-2 gap-4 mb-6 sm:gap-6 sm:mb-8">
                <div className="flex flex-col">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl leading-none font-bold text-[#8CEAB3]">
                    8/10
                  </h2>
                  <p className="text-sm sm:text-base mt-2 text-white font-bold">
                    Online Searches become customers.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl leading-none font-bold text-[#8CEAB3]">
                    70%
                  </h2>
                  <p className="text-sm sm:text-base mt-2 text-white font-bold">
                    of Businesses get ignored.
                  </p>
                </div>
              </div>

              <div className="col-span-2 mb-8" />

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MobileHero: React.FC = () => (
  <section className="block md:hidden relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4">
    {/* overlay only for mobile (keeps original mobile look) */}
    <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

    <div className="relative z-10 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-black/30 p-6 sm:p-8 rounded-xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white">
          Getting Home Service Businesses More Customers.
        </h1>

        <div className="flex flex-row gap-6 sm:gap-8 md:gap-12 justify-center items-start mb-10 md:mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-center flex-1 max-w-xs"
          >
            <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#8CEAB3]">
              8/10
            </div>
            <p className="text-sm sm:text-xl md:text-2xl mt-2 text-gray-200 font-bold">
              Google Searches become customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="text-center flex-1 max-w-xs"
          >
            <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#8CEAB3]">
              70%
            </div>
            <p className="text-sm sm:text-xl md:text-2xl mt-2 text-gray-200 font-bold">
              of Businesses get ignored.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-md mx-auto w-full"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/mjy15.webp" />
        <source media="(max-width: 767px)" srcSet="/images/mjy15.webp" />
        <img
          src="/images/mjy15.webp"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
      </picture>

      {/* Render both but let Tailwind control visibility */}
      <DesktopHero />
      <MobileHero />
    </div>
  );
};

export default Hero;
