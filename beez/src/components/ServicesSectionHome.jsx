import React, { useState } from 'react';
import  { forwardRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import {Link} from "react-router-dom";
const ServicesSection = forwardRef((props, ref) => {
  const [expandedService, setExpandedService] = useState(0);
  const [hoveredService, setHoveredService] = useState(0);

const services = [
  {
    id: 1,
    title: 'Web & App Development',
    link:'/services/web-app-development',
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/web_service_logo_rl7um1.png',
    description:
      'We design and develop modern, scalable, and high-performing web and mobile applications tailored to your business goals.',
    details: [
      'Website design & development — static, dynamic, or CMS-based (WordPress, Webflow, etc.)',
      'E-Commerce development — online stores, marketplaces, and payment integrations',
      'Custom web application development — dashboards, admin panels, CRMs, and booking systems',
      'Mobile app development — iOS, Android, and cross-platform (React Native, Flutter)',
      'API development & integration — RESTful and GraphQL-based services',
      'Website maintenance, performance optimization, and hosting setup'
    ]
  },
  {
    id: 2,
    title: 'Branding & Identity',
    link:'/services/branding',
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/branding_service_logo_fa5bam.png',
    description:
      'We help you create a strong, memorable, and consistent brand identity that connects emotionally with your audience.',
    details: [
      'Logo design and concept creation',
      'Brand identity & visual system — colors, typography, and iconography',
      'Packaging & product graphics design',
      'Print design — business cards, flyers, brochures, and stationery',
      'Brand guidelines — tone, voice, and usage documentation',
      'UI/UX design for web and mobile applications'
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing',
    link:'/services/digital-marketing',
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026417/marketing_service_logo_abelyq.png',
    description:
      'We grow your brand online through data-driven digital marketing campaigns and consistent creative execution.',
    details: [
      'SEO (Search Engine Optimization) — on-page, off-page, and technical SEO',
      'Social media management — strategy, creative design, and content posting',
      'Paid ads — Facebook, Instagram, Google, LinkedIn, YouTube, and more',
      'Influencer marketing & collaborations',
      'Video marketing — short videos, explainer videos, ad campaigns',
      'Online reputation management and digital PR'
    ]
  },
  {
    id: 4,
    title: 'Graphics & Media Production',
    link:'/services/media-production',
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026416/media_service_logo_usuh0b.png',
    description:
      'Our creative team delivers high-quality graphics, videos, and media assets that make your brand visually impactful.',
    details: [
      'Graphic design — posters, infographics, and social media creatives',
      'Motion graphics & animations for ads and explainer videos',
      'Video editing and production for corporate, brand, or promotional use',
      'Product, event, and corporate photography',
      'Creative direction and content planning for marketing campaigns'
    ]
  },
  {
    id: 5,
    title: 'SaaS Development',
    link:'/services/web-app-development',
    image: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026416/saas_service_logo_argw77.png',
    description:
      'We build robust SaaS products from concept to launch — scalable, secure, and user-friendly platforms for modern businesses.',
    details: [
      'End-to-end SaaS product development — design, development, and deployment',
      'MVP (Minimum Viable Product) creation to validate startup ideas',
      'Subscription and user management systems',
      'Integration with cloud and payment gateways (AWS, Firebase, Stripe, Razorpay)',
      'Analytics, monitoring, and performance scaling solutions',
      'White-labeling and multi-tenant architecture setup'
    ]
  }
];


  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div ref={ref}  className="relative z-60 bg-black mt-0 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Background Hexagonal Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full" 
           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      {/* <div className="absolute bottom-32 right-20 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 blur-3xl rounded-full"
           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
       */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >   
                <p className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                Services
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Expertise Solutions
              </h2>
              
            </motion.div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-800"
                >
                  {/* Desktop View - Accordion */}
                  <div className="hidden lg:block">
                    <button
                      onClick={() => toggleService(index)}
                      onMouseEnter={() => setHoveredService(index)}
                      className="w-full py-6 flex items-center justify-between group hover:bg-gradient-to-r hover:from-yellow-500/5 hover:to-orange-500/5 transition-all duration-300 px-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-yellow-400 text-2xl font-bold">
                          {service.id}.
                        </span>
                        <span className="text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                          {service.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedService === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedService === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-6 pl-16 space-y-3">
                            {service.details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile View - Navigate to Service Page */}
                  <Link
                    to={service.link}
                    className="lg:hidden w-full py-5 flex items-center justify-between group active:bg-gradient-to-r active:from-yellow-500/10 active:to-orange-500/10 transition-all duration-200 px-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-400 text-xl font-bold">
                        {service.id}.
                      </span>
                      <span className="text-lg font-bold tracking-wider text-white">
                        {service.title}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Image (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center sticky top-24"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 blur-3xl rounded-3xl transform scale-110" />
              
              {/* Image Container with 3D tilt effect */}
              <motion.div
                key={hoveredService}
                initial={{ opacity: 0, rotateY: -15, rotateX: 10 }}
                animate={{ 
                  opacity: 1, 
                  rotateY: 25, 
                  rotateX: 8,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <img
                  src={services[hoveredService].image}
                  alt={`${services[hoveredService].title} workspace`}
                  className="w-full h-auto rounded-2xl"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Animated border glow */}
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-2xl border-none border-yellow-500/30"
                />
              </motion.div>

             
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default ServicesSection;