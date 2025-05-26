import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    aspect: "Cost",
    you: "Starting from $500",
    others: "$2000+",
    othersAgencies: "$$$",
  },
  {
    aspect: "Experience",
    you: "Senior-Level Experts",
    others: "Mixed-Level Teams",
    othersAgencies: "Mixed-Level Teams",
  },
  {
    aspect: "Turnaround Time",
    you: "Within 1 Week",
    others: "Weeks",
    othersAgencies: "Months",
  },
  {
    aspect: "Start Time",
    you: "Immediate",
    others: "Days to Set-Up",
    othersAgencies: "Weeks (Contracts)",
  },
  {
    aspect: "Revisions",
    you: "Unlimited",
    others: "Limited",
    othersAgencies: "Limited per project",
  },
  {
    aspect: "Communication",
    you: "24/7 Support",
    others: "Monday-Friday",
    othersAgencies: "Back-forth emails",
  },
];

const WhyUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          Why Choose Us?
        </motion.h2>
        <div className="w-full overflow-hidden">
          <div className="responsive-table">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 bg-white bg-opacity-5 rounded-lg p-4"
              >
                <div className="font-medium text-white mb-4">{row.aspect}</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-opacity-60">Us:</span>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#8CEAB3]" />
                      <span className="text-white text-opacity-60">
                        {row.you}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-opacity-60">
                      Fancy Agencies:
                    </span>
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-red-400" />
                      <span className="text-white text-opacity-60">
                        {row.others}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
