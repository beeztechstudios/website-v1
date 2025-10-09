import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ---
// 1. AnimatedNumber Component (No changes needed here - it's already perfect!)
// ---

const AnimatedNumber = ({ value, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); 

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.includes("%")) {
      return Math.round(latest) + "%";
    } else if (value.includes("M")) {
      return Math.round(latest) + "M";
    } else if (value.includes("+")) {
      return Math.round(latest) + "+";
    }
    return Math.round(latest);
  });

  const numericValue = parseInt(value.replace(/[^\d]/g, ""));

  useEffect(() => {
    if (isInView) { 
      const controls = animate(count, numericValue, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [numericValue, delay, isInView]); 

  return (
    <div ref={ref} className="mb-8 sm:mb-12"> 
      <motion.div
        className="text-6xl sm:text-6xl lg:text-[60px] font-bold mb-2 sm:mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <motion.span>{rounded}</motion.span>
      </motion.div>
      <motion.div
        className="text-sm sm:text-base lg:text-[14px] text-white-300 font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {label}
      </motion.div>
    </div>
  );
};

// ---
// 2. Updated TestimonialsSection Component
// The changes are primarily in the Tailwind CSS classes of the layout divs.
// ---

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
      author: "Ethan Moore",
      position: "Co-founder, NovaTech",
      image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
    },
    {
      id: 2,
      quote:
        "Working with BeezTech was a game-changer. They delivered beyond our expectations with incredible attention to detail.",
      author: "Sarah Johnson",
      position: "CEO, TechVision",
      image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
    },
    {
      id: 3,
      quote:
        "The team's creativity and professionalism transformed our digital presence completely. Highly recommend their services.",
      author: "Michael Chen",
      position: "Director, InnovateLab",
      image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
    },
  ];

  const stats = [
    { number: "26+", label: "Finalized Projects" },
    { number: "98%", label: "Client satisfaction rate" },
    { number: "10M", label: "Gross Revenue" },
  ];

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className=" py-16 sm:py-20 lg:py-8 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto  space-y-6">
        {/* Large Background Text and Heading (No changes needed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider mb-3">
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl mt-8 sm:text-5xl lg:text-6xl font-pilogue font-bold mb-28 bg-black bg-clip-text text-transparent"
        >
          Why Brands Trust Us
        </motion.h2>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* 🌟 Key Change: Removed 'items-center', defaulted to vertical stack, and used 'lg:flex-row' for desktop. */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
            
            {/* Left Side - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // 🌟 Key Change: Defaulted to 'w-full' and used 'lg:w-1/3' (instead of [30%]) 
              // for a clearer, responsive 1/3, 2/3 split on large screens.
              className="w-full md:h-[450px] lg:w-1/3 flex-shrink-0 bg-gradient-to-br from-gray-950 via-gray-950 to-black rounded-2xl sm:rounded-2xl text-white relative overflow-hidden"
            >
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/testimonial.jpeg"
                  alt="Background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Content */}
              <div className="relative  z-10 flex flex-col justify-center left-10 py-12 lg:py-8 h-full space-y-3 sm:space-y-4">
                {stats.map((stat, index) => (
                  <AnimatedNumber
                    key={index}
                    value={stat.number}
                    label={stat.label}
                    delay={index * 0.3}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Side - Testimonial Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // 🌟 Key Change: Defaulted to 'w-full' and used 'lg:w-2/3' (instead of [30%]) 
              // to fill the remaining space on large screens. Also fixed the 'h-[450px]' height to be full width
              // on mobile, but keep the fixed height on larger screens.
              className="w-full lg:w-2/3 relative h-[450px] bg-black rounded-3xl sm:rounded-2xl overflow-hidden "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  {/* Background Image and Content (No changes needed) */}
                  <div className="absolute inset-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute  inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14">
                    {/* Counter */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/60 text-xs sm:text-sm font-medium tracking-wider"
                    >
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(testimonials.length).padStart(2, "0")}
                    </motion.div>

                    {/* Quote and Author */}
                    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                      <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[15px] sm:text-3xl lg:text-4xl xl:text-[28px] font-bold text-white leading-tight"
                      >
                        "{testimonials[currentIndex].quote}"
                      </motion.blockquote>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-1"
                      >
                        <div className="text-lg sm:text-xl lg:text-[14px] font-semibold text-white">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-sm sm:text-base lg:text-[14px] text-gray-300">
                          {testimonials[currentIndex].position}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 flex gap-2 sm:gap-3 z-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevTestimonial}
                  className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextTestimonial}
                  className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;