import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:altamashcreates@gmail.com?subject=${encodeURIComponent(
      "Business Growth Consultation"
    )}&body=${encodeURIComponent(
      "I wanna see how you'll help my business grow, let's book a meeting."
    )}`;
    window.location.href = mailtoLink;
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full py-4 px-4 sm:px-8 md:px-12 lg:px-16 z-30 bg-black/20 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.webp.webp"
              alt="TGO Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="text-xl font-medium text-white">TGO</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-all"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
              className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-all"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-all"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "finalcta")}
              className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-all"
            >
              Request Free Audit
            </a>
            <button
              onClick={handleBookCall}
              className="text-white text-sm md:text-base border-b border-white hover:border-opacity-100 border-opacity-50 transition-all flex items-center gap-1"
            >
              Book a Call
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white hover:opacity-70 transition-opacity"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        handleSmoothScroll={handleSmoothScroll}
      />
    </>
  );
};

export default Header;
