// File Path: app/page.js
// This file becomes the root route for your Beeztech Agency website (yourdomain.com/)

// In Next.js, components are Server Components by default.
// You do not need 'import React from "react"'

// NOTE: We MUST import client-side hooks like 'useRef' and 'useState'
// ONLY in components marked with 'use client'.
// Since this page uses useRef, we will move the Home component logic
// into a new Client Component wrapper, and keep this page simple.

import HeroSectionClientWrapper from './HeroSectionClientWrapper'; // We will create this
import Slider from '../components/Slider';
import ServicesSection from '../components/ServicesSectionHome';
import ContactSection from '../components/ContactSection';
import AboutUsSection from '../components/AboutUsSection';
import HowWeWorkSection from '../components/Workflow';
import PortfolioGallery from '../components/Portfolio';
import TestimonialsSection from '../components/Testimonials';
import BookACallForm from '../components/BookACallForm';
import Navbar from '../components/Navbar'; // Already in layout.js, but keeping for reference if needed

// 1. Define page-specific Metadata (SEO)
export const metadata = {
  title: 'Beeztech Agency: UI/UX, Web Development & Digital Solutions',
  description: 'Beeztech is a leading digital agency specializing in custom web applications, stunning UI/UX design, and strategic digital solutions for businesses in India and globally.',
  // Add other meta tags like keywords, openGraph, etc., here.
};


// 2. Main Page Component (Server Component)
export default function HomePage() {
  return (
    // We are wrapping the whole page in a client component to handle the scroll logic.
    // If we didn't have the scroll-to-services logic, this could be purely server-side.
    <div className="w-screen">
        <HeroSectionClientWrapper /> 
        <Slider />
        <AboutUsSection />
        <PortfolioGallery />
        {/* We are moving the remaining sections inside the client wrapper for proper ref handling */}
        <TestimonialsSection />
        <ContactSection />
    </div>
  );
}