import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, TrendingUp, Users } from "lucide-react";

const LocalSearchInsights: React.FC = () => {
  const stats = [
    {
      icon: <Search className="w-5 h-5 text-[#8CEAB3]" />,
      stat: "97%",
      description: "of people search online for local businesses",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#8CEAB3]" />,
      stat: "72%",
      description: "visit a business within 5 miles after local search",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#8CEAB3]" />,
      stat: "2.7x",
      description: "more likely to be trusted with optimized GBP",
    },
    {
      icon: <Users className="w-5 h-5 text-[#8CEAB3]" />,
      stat: "81%",
      description: "research your website before making a decision",
    },
  ];

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://forms.gle/6j6ogHtQjM6wci8y9", "_blank");
  };

  return (
    <section
      id="localSearchInsights"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-16 bg-[#0A0A0A]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Your customers are searching.
            <br />
            <span className="text-white">How are you being found?</span>
            <br />
            <br />
            <span className="text-[#8CEAB3]">
              If your business looks old, confusing or nonexistent online,
              people <i> assume</i> you're not worth their money.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-10 transition-all text-center"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {item.stat}
              </div>
              <p className="text-white text-opacity-60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white text-opacity-70 text-lg mb-6 max-w-3xl mx-auto">
            Stop worrying about marketing. I’ll set up a system that brings you
            calls on autopilot.
          </p>

          <motion.button
            onClick={handleBookCall}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-[#8CEAB3] text-black font-semibold rounded-lg hover:bg-[#7DD9A3] transition-all duration-300 text-sm"
          >
            SHOW ME HOW!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalSearchInsights;
