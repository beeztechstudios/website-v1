import { useState } from 'react';
import React, { useRef } from 'react';
import { ArrowUpRight , X, ExternalLink, Code, Smartphone, Globe, Zap } from 'lucide-react';
import TestimonialsSection from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import PortfolioGallery from '../components/Portfolio'; // Included from your original imports
import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion';

// ===============================================
// 2. HERO SECTION COMPONENT (New design)
// ===============================================

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto pt-16 sm:pt-24 lg:pt-28 mb-12 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      {/* <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-black-500/10 blur-[100px] pointer-events-none" /> */}

      {/* Circular Agency Stamp/Logo */}
      <div className="absolute top-80 md:top-60 right-30 w-24 h-24 sm:w-48 sm:h-48 z-10">
        <div className="relative w-full h-full">
          {/* Outer text circle - Requires the 'animate-spin-slow' CSS class defined globally */}
          <div className="absolute inset-0  animate-spin-slow">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path id="circlePath" fill="none" stroke="none" d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,1 90,0
                a 45,45 0 1,1 -90,0
              "/>
              <text fill="#ffffff">
                <textPath href="#circlePath" startOffset="0%" className="uppercase text-[6px] tracking-[.3em] font-medium">
                  DIGITAL · CREATIVE · AGENCY · 
                </textPath>
              </text>
            </svg>
          </div>
          {/* Inner Icon/Logo */}
          <img src='/Icon.png' className="p-5" />
        </div>
      </div>

      {/* Case Studies Subtitle */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-orange-500 font-medium text-xl md:text-[24px] uppercase tracking-wider mb-2 mt-4 md:mt-0 border-b border-white/20 inline-block pb-1"
      >
        Case Studies
      </motion.p>
      
      {/* Main Title: "AMAZING WORK" */}
      <h1 className="text-7xl sm:text-8xl lg:text-[120px] font-bold  text-white leading-none mt-4 uppercase">
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="block"
        >
          Amazing
        </motion.span>
        
        {/* The Graphic Rings */}
        <div className="flex items-center space-x-4 py-4 sm:py-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-white/50 hidden sm:block"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-[-15px] opacity-70"
          >
            <div className="w-8 h-8 rounded-full border border-orange-500/90" />
            <div className="w-8 h-8 rounded-full border border-orange-500/90" />
            <div className="w-8 h-8 rounded-full border border-orange-500/90" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="block"
          >
            Work
          </motion.span>
        </div>
      </h1>
      
    </motion.div>
  );
};

// ===============================================
// 3. MAIN PORTFOLIO PAGE COMPONENT
// ===============================================

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  });

  // Parallax values for staggered effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const portfolioItems = [
    {
      id: 1,
      title: 'Clay AI SaaS Website',
      category: 'Web Design',
      link: "/link1",
      image: 'https://cdn.dribbble.com/userupload/8831050/file/still-feb2b5c172267b74e51f323675645788.png?format=webp&resize=400x300&vertical=center', 
        challenge: "The client needed a scalable, modern website that could clearly communicate complex AI capabilities to a non-technical B2B audience while maintaining a high-performance score.",
        solution: "We developed a clean, dark-themed interface using React and Tailwind CSS, focusing on intuitive navigation, animated data visualizations, and clear benefit-driven copy. We optimized images and leveraged server-side rendering for speed.",
        results: [
            "Increased organic traffic by 45% in the first quarter.",
            "Reduced bounce rate by 18% compared to the old site.",
            "Improved lead conversion rate by 12% through better CTA placement.",
            "Achieved a 95+ score on Google PageSpeed Insights."
        ],
        techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
      id: 2,
      title: 'Path to Energy',
      category: 'Brand Identity',
      link: "/link2",
      image: 'https://cdn.dribbble.com/userupload/8831050/file/still-feb2b5c172267b74e51f323675645788.png?format=webp&resize=400x300&vertical=center',
        challenge: "To create a powerful, trustworthy brand identity for a sustainable energy consulting firm that was launching in a crowded, established market.",
        solution: "We designed a logo centered on motion and growth, chose a sophisticated palette of deep blues and vibrant greens, and established a tone of voice focused on expertise and future-proofing.",
        results: [
            "Successfully positioned the brand as a premium market leader.",
            "Secured 5 major client contracts within the first month post-launch.",
            "Received positive feedback on brand recall in industry surveys."
        ],
        techStack: ["Adobe Illustrator", "Figma", "Branding Guidelines", "Print Design"]
    },
    {
      id: 3,
      title: 'Builder Platform',
      category: 'UI/UX Design',
      image: 'https://cdn.dribbble.com/userupload/43608346/file/still-1e21036fab51249677fb28b8439f2534.png?format=webp&resize=400x300&vertical=center', 
        challenge: "Redesigning a complex internal construction management platform to improve user efficiency and reduce training time for field managers.",
        solution: "We conducted extensive user research, streamlined the dashboard into three primary views, and implemented a universal design system for consistency across all modules.",
        results: [
            "Reported 30% reduction in user errors during project logging.",
            "Cut new user onboarding time from 8 hours to 2 hours.",
            "Increased daily active users by 25%."
        ],
        techStack: ["Figma", "Sketch", "User Interviews", "Design Systems", "Prototyping"]
    },
    {
      id: 4,
      title: 'Design Agency',
      category: 'Web Development',
      image: 'https://cdn.dribbble.com/userupload/41264537/file/original-ab35ca1c02bfc624e8377a94316e7e35.png?format=webp&resize=400x300&vertical=center', 
        challenge: "Developing a highly visual and interactive agency website that reflects cutting-edge design and provides a seamless mobile experience.",
        solution: "Built a custom, responsive layout using modern CSS Grid and implemented complex scroll-based animations using Framer Motion and GSAP for a 'wow' factor.",
        results: [
            "Won three design awards for 'Best Interactive Website'.",
            "Improved client retention by showcasing high-quality work effectively.",
            "Decreased loading time despite heavy animation by employing lazy loading."
        ],
        techStack: ["React", "GSAP", "Three.js (for subtle effects)", "Vite", "SEO Optimization"]
    }
  ];

// ===============================================
// 4. PORTFOLIO CARD COMPONENT (Updated with click handler)
// ===============================================

  const PortfolioCard = ({ item, index, style }) => (
    <motion.div
      // *** ADDED CLICK HANDLER TO OPEN MODAL ***
      onClick={() => setSelectedProject(item)} 
      key={item.id}
      style={style} 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ 
        duration: 1, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group bg-white/5 backdrop-blur-2xl my-8 md:m-8 rounded-2xl hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[5/4] overflow-hidden bg-transparent mb-6 p-0 md:p-6 shadow-lg"> 
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full rounded-2xl object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Open Case Study Icon */}
        <motion.div
          initial={{ opacity: 0, x: -10, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          whileHover={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
        >
          {/* Using ExternalLink to signify opening a detail view */}
          <ExternalLink className="w-6 h-6 text-gray-900" /> 
        </motion.div>

      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
        className='p-4'
      >
        <div className="flex items-center  justify-between mb-3">
          <span className="text-sm font-medium text-orange-500 uppercase tracking-wider">
            {item.category}
          </span>
          <div className="w-8 h-px bg-gray-300"></div>
        </div>
        <h3 className="text-2xl sm:text-3xl mb-4 font-semibold text-white tracking-tight  transition-colors duration-300">
          {item.title}
        </h3>
      </motion.div>
    </motion.div>
  );

// ===============================================
// 5. RENDERED PAGE STRUCTURE
// ===============================================

  return (
    <div className="bg-white">
        {/* Fixed Background Pattern */}
        <div className="fixed inset-0 opacity-15 pointer-events-none">
        
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ff8800' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div ref={containerRef} className="relative bg-black px-4 sm:px-6 lg:px-16"> 
      {/* Hero Section background blobs/lights */}
      <div className="absolute top-100 opacity-60 left-45 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full" 
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="hidden md:absolute  opacity-80 top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full" 
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="absolute bottom-50 opacity-80 right-35 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 blur-3xl rounded-full"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="absolute bottom-75 opacity-80 left-40 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 blur-3xl rounded-full"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      
      <div className="max-w-7xl mx-auto">
        
        <HeroSection />

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-2  gap-0 lg:gap-4 pb-24 sm:pb-32 lg:pb-32">
          {/* Left Column - Parallax y1 */}
          <div className="space-y-8   lg:space-y-12">
            {portfolioItems.slice(0, 2).map((item, index) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                index={index} 
                style={{ y: y1 }}
              />
            ))}
          </div>

          {/* Right Column - Parallax y2 */}
          <div className="space-y-8    lg:space-y-12 mt-0 lg:mt-20"> 
            {portfolioItems.slice(2, 4).map((item, index) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                index={index} 
                style={{ y: y2 }}
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>

     
      <TestimonialsSection/>

      {/* CTA Section */}
      <ContactSection/>

      {/* Case Study Modal - Triggered when selectedProject state is set */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)} // Close modal on overlay click
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 sm:p-8 lg:p-12">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-2xl mb-8"
                />

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Challenge</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Solution</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Results</h4>
                    <ul className="space-y-2">
                        {/* Check if results array exists before mapping */}
                      {selectedProject.results && selectedProject.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-orange-500 text-xl">✓</span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {/* Check if techStack array exists before mapping */}
                      {selectedProject.techStack && selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;