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
        // Submit the form normally - Netlify will handle it
        form.submit();

        // Show success message
        setShowSuccess(true);

        // Reset form
        setFormData({ businessName: "", location: "", contact: "" });

        // Hide success message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
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
        netlify
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="hidden">
          <input name="bot-field" />
        </div>

        {/* Rest of your form fields remain the same */}

        {/* Success message remains the same */}
      </motion.form>
    </>
  );
};

export default ContactForm;
