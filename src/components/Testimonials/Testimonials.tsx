import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    company: "Ennoble Technology",
    result:
      "We revamped their entire online presence with a high-converting website and optimized their Google Business Profile. The results: 50% increase in website visits and 34% growth in GBP views within just one month.",
    rating: 5,
    image: "/images/et.webp",
  },
  {
    company: "Haybales & Chandeliers LTD",
    result:
      "We built a custom website and ran targeted Meta and Google Ad campaigns.The campaign targeted local areas & was successful.",
    rating: 5,
    image: "/images/handc.webp",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-[#0A0A0A]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          See How We've Helped Others
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-5 rounded-lg overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#8CEAB3] fill-current"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {testimonial.company}
                </h3>
                <p className="text-white text-opacity-70 leading-relaxed text-sm md:text-base">
                  {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
