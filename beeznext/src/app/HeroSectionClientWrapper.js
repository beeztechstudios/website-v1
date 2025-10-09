'use client'; 
// This directive tells Next.js this component runs in the user's browser (Client-Side).

import { useRef } from "react"; // Now we can use client-side hooks
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSectionHome';


// 1. We redefine the component to handle the client-side interaction
export default function HeroSectionClientWrapper() {
   const servicesRef = useRef(null);
   
   const scrollToServices = () => {
    // Scroll behavior is a client-side API
    servicesRef.current?.scrollIntoView({
      behavior: 'smooth', 
      block: 'start', 
    });
  };
  
  return (
    <>
      {/* HeroSection uses the client-side scroll function */}
      <HeroSection scrollToServices={scrollToServices} />
      
      {/* ServicesSection receives the ref here */}
      <ServicesSection ref={servicesRef} />
      
      {/* Other components that were between Slider and Testimonials can go here
          if they don't rely on the ref logic.
          In the final version, we would place them directly in app/page.js
          but for simplicity in conversion, let's keep the ref logic together.
      */}
      
    </>
  );
}