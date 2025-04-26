import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, handleSmoothScroll }) => {
  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:altamashcreates@gmail.com?subject=${encodeURIComponent('Business Growth Consultation')}&body=${encodeURIComponent("I wanna see how you'll help my business grow, let's book a meeting.")}`;
    window.location.href = mailtoLink;
    onClose();
  };

  const menuItems = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
    { href: '#finalcta', label: 'Request Free Audit', id: 'finalcta' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-[280px] bg-white z-50 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-black hover:opacity-70 transition-opacity"
            >
              <X size={24} />
            </button>
            
            <nav className="mt-16">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.id);
                        onClose();
                      }}
                      className="text-black text-lg font-medium hover:text-gray-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleBookCall}
                    className="text-black text-lg font-medium hover:text-gray-600 transition-colors"
                  >
                    Book a Call
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;