import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  businessName: string;
  location: string;
  contact: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    location: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.businessName) newErrors.businessName = "Required";
    if (!formData.location) newErrors.location = "Required";
    if (!formData.contact) newErrors.contact = "Required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        // Get the form element
        const form = e.target as HTMLFormElement;

        // Create form data for submission
        const formElement = new FormData(form);

        // Submit the form to Netlify
        await fetch("/", {
          method: "POST",
          body: formElement,
        });

        // Show success message
        setShowSuccess(true);

        // Reset form
        setFormData({ businessName: "", location: "", contact: "" });

        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full space-y-3"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="hidden">
          <input name="bot-field" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Business Name"
              maxLength={50}
              required
              className="w-full px-3 py-1.5 text-sm bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8CEAB3]"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              aria-invalid={!!errors.businessName}
            />
            {errors.businessName && (
              <p className="absolute -bottom-4 left-0 text-xs text-red-400">
                {errors.businessName}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              required
              className="w-full px-3 py-1.5 text-sm bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8CEAB3]"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              aria-invalid={!!errors.location}
            />
            {errors.location && (
              <p className="absolute -bottom-4 left-0 text-xs text-red-400">
                {errors.location}
              </p>
            )}
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Contact (Email/Phone)"
            required
            className="w-full px-3 py-1.5 text-sm bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8CEAB3]"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            aria-invalid={!!errors.contact}
          />
          {errors.contact && (
            <p className="absolute -bottom-4 left-0 text-xs text-red-400">
              {errors.contact}
            </p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-1.5 px-3 text-sm bg-[#8CEAB3] text-black font-medium rounded-md transition-all ${
            isSubmitting ? "opacity-70" : "hover:bg-opacity-90"
          }`}
        >
          {isSubmitting ? "Sending..." : "Book Free Website Mockup + GBP Audit"}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#8CEAB3] text-black px-8 py-6 rounded-lg shadow-xl z-50 max-w-md w-full border-2 border-white"
          >
            <div className="flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-base">
                Your information was submitted successfully! We'll contact you
                soon!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
