import React from "react";
import { motion } from "framer-motion";
import ContactForm2 from "../ContactForm2/ContactForm2";

const FinalCTA: React.FC = () => {
  return (
    <section
      id="finalcta"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
          >
            It's simple, yet most businesses think it's not worth it.
            <br /> <br />
            That's why <i> most struggle</i> &{" "}
           <span className="text-[#8CEAB3]"> <u> <b> a few shine.</b> </u></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-opacity-60 mb-8"
          >
            Book a free audit of your business and see where you're losing customers.
          </motion.p>
          <ContactForm2 />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
