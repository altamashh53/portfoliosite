import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    aspect: "Cost",
    you: "From $500 & clear upfront pricing",
    others: "$2000+ & hidden extras",
    othersAgencies: "$$$",
  },
  {
    aspect: "Outcome",
    you: "Revenue-driven, not useless metrics",
    others: 'Show off "fancy" dashboards, not sales',
    othersAgencies: "Look-Good Tech",
  },
  {
    aspect: "Turnaround Time",
    you: "3 days or less to first draft",
    others: "Weeks before you see progress",
    othersAgencies: "Months",
  },
  {
    aspect: "Start Time",
    you: "Immediate launch",
    others: 'Delays with "setup phases"',
    othersAgencies: "Weeks (Contracts)",
  },
  {
    aspect: "Revisions",
    you: "Unlimited until satisfied",
    others: "Strict caps on edits",
    othersAgencies: "Limited per project",
  },
  {
    aspect: "Communication",
    you: "Direct, one-message-away",
    others: "Ticket systems & wait times",
    othersAgencies: "Back-forth emails",
  },
  {
    aspect: "Flexibility",
    you: "No long-term lock-ins, cancel anytime",
    others: "Multi-month contracts",
    othersAgencies: "Long-term commitments",
  },
  {
    aspect: "Platforms",
    you: "Google, Facebook, Instagram—covered end to end",
    others: "Complicated processes,disjointed execution",
    othersAgencies: "Fragmented approach",
  },
  {
    aspect: "Risk",
    you: "If it doesn't deliver, you don't pay ongoing",
    others: "Paid regardless of performance",
    othersAgencies: "No performance guarantee",
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
