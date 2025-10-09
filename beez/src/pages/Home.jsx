import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import ServicesSection from "../components/ServicesSectionHome";
import ContactSection from "../components/ContactSection";
import AboutUsSection from "../components/AboutUsSection";
import HowWeWorkSection from "../components/Workflow";
import PortfolioGallery from "../components/Portfolio";
import TestimonialsSection from "../components/Testimonials";
import BookACallForm from "../components/BookACallForm";
import Navbar from "../components/Navbar";

function Home() {
   const servicesRef = useRef(null);
    const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({
      behavior: 'smooth', // 👈 This makes the scroll smooth
      block: 'start',      // Scroll until the top of the element is visible
    });
  };
  return (
    <>
    
    <div className="w-screen ">
      <HeroSection scrollToServices={scrollToServices} />
      <Slider />
      <AboutUsSection />
      <PortfolioGallery />
      <ServicesSection ref={servicesRef} />
      <TestimonialsSection />
      <ContactSection />
      {/* <BookACallForm/> */}

    </div>
    </>
  );
}

export default Home;
