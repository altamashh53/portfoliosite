import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../ContactForm/ContactForm';

const FinalCTA: React.FC = () => {
  return (
    <section id="finalcta" className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
          >
            It's simple, yet most businesses overlook it.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-opacity-60 mb-8"
          >
            Get a Free Audit That Shows Exactly How Many Customers You're Losing—And How We Can Fix It.
          </motion.p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;