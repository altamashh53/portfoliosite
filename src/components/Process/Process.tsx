import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start with a free strategy session where we dive into your business goals, challenges, and opportunities.",
  },
  {
    number: "02",
    title: "Project Finalization",
    description:
      "After understanding your needs, we craft a customized proposal that details the deliverables, timeline, and investment—no hidden fees, complete transparency.",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "We move fast and deliver the initial project draft within 3 days, built exactly to your specs.",
  },
  {
    number: "04",
    title: "Revisions",
    description:
      "We offer unlimited revisions within the project scope to ensure you are 100% satisfied with the outcome.",
  },
  {
    number: "05",
    title: "Finalization",
    description:
      "Once you approve the final version, we deploy everything live, set up tracking, and hand over full control to you.",
  },
];

const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="absolute -top-2 -left-2 text-[64px] font-bold text-white text-opacity-5">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white text-opacity-60">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
