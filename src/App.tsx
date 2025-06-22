import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Layout/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhyUs from "./components/WhyUs/WhyUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Process from "./components/Process/Process";
import FAQ from "./components/FAQ/FAQ";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Preloader from "./components/Preloader/Preloader";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <WhyUs />
          <Testimonials />
          <Process />
          <FAQ />
          <FinalCTA />
        </main>
      </div>
    </>
  );
}

export default App;
