import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PortfolioGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Pin start to bottom of viewport, end to top of viewport
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
      link:"/link1",
      // Using a squarer placeholder for a cleaner look
      image: 'https://cdn.dribbble.com/userupload/8831050/file/still-feb2b5c172267b74e51f323675645788.png?format=webp&resize=400x300&vertical=center', 
      
    },
    {
      id: 2,
      title: 'Path to Energy',
      category: 'Brand Identity',
      link:"/link2",
      // Using a squarer placeholder for a cleaner look
      image: 'https://cdn.dribbble.com/userupload/8831050/file/still-feb2b5c172267b74e51f323675645788.png?format=webp&resize=400x300&vertical=center', 
     
    },
    {
      id: 3,
      title: 'Builder Platform',
      category: 'UI/UX Design',
      image: 'https://cdn.dribbble.com/userupload/43608346/file/still-1e21036fab51249677fb28b8439f2534.png?format=webp&resize=400x300&vertical=center', 
     
    },
    {
      id: 4,
      title: 'Design Agency',
      category: 'Web Development',
      image: 'https://cdn.dribbble.com/userupload/41264537/file/original-ab35ca1c02bfc624e8377a94316e7e35.png?format=webp&resize=400x300&vertical=center', 
      
    }
  ];

  const PortfolioCard = ({ item, index, style }) => (
    <motion.div
      
      key={item.id}
      style={style} // Apply motion styles (like parallax) here
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }} // Adjusted margin for better in-view timing
      transition={{ 
        duration: 1, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group bg-white/5 backdrop-blur-2xl rounded-2xl hover:scale-105 cursor-pointer"
    >
      {/* Image Container: Changed aspect ratio from [4/5] to [5/4] for a shorter, wider card */}
      <div className="relative aspect-[5/4]  overflow-hidden bg-transparent  mb-6 p-4 shadow-lg"> 
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full rounded-2xl object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Arrow Icon */}
        <motion.div
          initial={{ opacity: 0, x: -10, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} // New: Show on scroll/hover
          whileHover={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
        >
          
          <ArrowUpRight onClick={item.link} className="w-6 h-6 text-gray-900" />
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
        <div className="flex items-center  justify-between mb-3">
          <span className="text-sm font-medium text-orange-500 uppercase tracking-wider">
            {item.category}
          </span>
          <div className="w-8 h-px bg-gray-300"></div>
        </div>
        <h3 className="text-2xl sm:text-3xl mb-4 font-semibold text-white tracking-tight  transition-colors duration-300">
          {item.title}
        </h3>
      </motion.div>
    </motion.div>
  );

  return (
    // Updated background to black and heading text to white to match the image
    <div ref={containerRef} className="relative bg-black py-24 sm:py-32 lg:py-18 px-4 sm:px-6 lg:px-16"> 
      <div className="absolute top-40 opacity-80 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full" 
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="hidden md:absolute  opacity-80 top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full" 
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="absolute bottom-50 opacity-80 right-35 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 blur-3xl rounded-full"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="absolute bottom-75 opacity-80 left-40 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 blur-3xl rounded-full"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 sm:mb-24"
        >
          <div className="flex items-center justify-between mb-3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // Changed text color to white
              className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider" 
            >
              PORTFOLIO
            </motion.h2>
            
          </div>
          
          <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                      >
                        From Vision to Launch
                      </motion.h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Apply y1 for parallax */}
          <div className="space-y-8  lg:space-y-12">
            {portfolioItems.slice(0, 2).map((item, index) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                index={index} 
                style={{ y: y1 }} // Apply parallax here
              />
            ))}
          </div>

          {/* Right Column - Apply y2 for parallax and a top margin for staggered effect */}
          <div className="space-y-8 lg:space-y-12 lg:mt-20"> 
            {portfolioItems.slice(2, 4).map((item, index) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                index={index} 
                style={{ y: y2 }} // Apply parallax here
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 sm:mt-24 text-center"
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioGallery;