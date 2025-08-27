import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, Zap } from "lucide-react";

const CaseStudy: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Case Study Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="inline-block bg-[#8CEAB3] bg-opacity-10 px-4 py-2 rounded-full">
                <span className="text-[#8CEAB3] text-sm font-medium">
                  CASE STUDY
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Smart Home Business
              </h2>
              <p className="text-white text-opacity-60 text-lg">
                <span className="text-[#8CEAB3]">Client:</span> Ennoble
                Technology Nashville
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">What We Did</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8CEAB3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-opacity-80">
                    Redesigned their website for higher conversions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8CEAB3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-opacity-80">
                    Optimized their Google Business Profile
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8CEAB3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white text-opacity-80">
                    Strengthened local SEO
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                The Results <span className="text-sm">(in 30 days)</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#8CEAB3]" />
                  <div>
                    <span className="text-2xl font-bold text-[#8CEAB3]">
                      50%
                    </span>
                    <span className="text-white text-opacity-80 ml-2">
                      more website traffic
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#8CEAB3]" />
                  <div>
                    <span className="text-2xl font-bold text-[#8CEAB3]">
                      34%
                    </span>
                    <span className="text-white text-opacity-80 ml-2">
                      increase in GBP views
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#8CEAB3]" />
                  <span className="text-white text-opacity-80">
                    6 New Customers in 30 days, with more coming in.
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://ennobletechnology.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8CEAB3] hover:bg-[#7BD9A3] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Check Them Out
              </a>
            </motion.div>
          </div>

          {/* Right Side - Video Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              poster="images/thumbnail_testimonial.webp"
              controls
            >
              <source src="/testimonial.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <div className="inline-block bg-[#8CEAB3] bg-opacity-10 px-4 py-2 rounded-full">
              <span className="text-[#8CEAB3] text-sm font-medium">
                CASE STUDY
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Smart Home Business
            </h2>
            <p className="text-white text-opacity-60">
              <span className="text-[#8CEAB3]">Client:</span> Ennoble Technology
              – Nashville
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">What We Did</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#8CEAB3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white text-opacity-80">
                  Redesigned their website for higher conversions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#8CEAB3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white text-opacity-80">
                  Optimized their Google Business Profile
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#8CEAB3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white text-opacity-80">
                  Strengthened local SEO
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              The Results <span className="text-sm">(in 30 days)</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#8CEAB3]" />
                <div>
                  <span className="text-2xl font-bold text-[#8CEAB3]">50%</span>
                  <span className="text-white text-opacity-80 ml-2">
                    more website traffic
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#8CEAB3]" />
                <div>
                  <span className="text-2xl font-bold text-[#8CEAB3]">34%</span>
                  <span className="text-white text-opacity-80 ml-2">
                    increase in GBP views
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#8CEAB3]" />
                <span className="text-white text-opacity-80">
                  Boosted lead quality & trust
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <a
              href="https://ennobletechnology.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8CEAB3] hover:bg-[#7BD9A3] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Check Them Out
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              poster="path/to/thumbnail.jpg"
              controls
            >
              <source src="/testimonial.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
