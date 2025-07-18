import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Target } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-6 h-6 text-[#8CEAB3]" />,
    title: 'Websites',
    description: 'Conversion-Focused Websites: Tailored designs that generate leads and grow your business online.'
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#8CEAB3]" />,
    title: 'GBP Optimization',
    description: 'Google Business Profile Optimization: Get found faster—show up at the top when customers search for your services.'
  },
  {
    icon: <Target className="w-6 h-6 text-[#8CEAB3]" />,
    title: 'Marketing',
    description: 'Targeted Marketing Strategies: Reach the right people at the right time for maximum impact.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-10 transition-all"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white text-opacity-60 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;