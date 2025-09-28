import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does the process take?",
    answer:
      "Most Projects are launched in 7 days or less. Final delivery depends on your feedback speed.",
  },
  {
    question: "What does it cost?",
    answer:
      "Projects start from $500. No hidden fees, no retainers unless you choose ongoing work.",
  },
  {
    question: "What support do you offer?",
    answer:
      "Full support during delivery, plus optional ongoing help with growth and management.",
  },
  {
    question: "Do I own everything once it is done?",
    answer: "Yes. All assets, copy, and designs are 100% yours once paid.",
  },
  {
    question: "Can you help with ongoing marketing?",
    answer:
      "Yes. We handle campaigns, ads, and optimization if you want more than just a one-off project (most do)",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "We scope carefully before starting. If we can't deliver, we won't take the project.",
  },
  {
    question: "Do I need to manage anything technical?",
    answer:
      "No. We handle setup, integrations, and tracking—so you stay focused on running your business.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No long-term lock-ins. Ongoing work is month-to-month and cancelable anytime.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-[#0A0A0A]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-5 rounded-lg backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-white text-opacity-60" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white text-opacity-60" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-white text-opacity-60">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
