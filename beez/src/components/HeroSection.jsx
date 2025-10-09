import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
const HeroSection = ({ scrollToServices }) => {
  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-16 mt-0 sm:mt-16  lg:mt-20 py-1 md:py-12 lg:py-12 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4  sm:space-y-5 w-full lg:w-1/2 text-left lg:text-left order-2 lg:order-1 "
          >
            <div className="mt-2 lg:mt-10">
              <h3 className="font-fira-sans font-medium text-lg sm:text-base tracking-widest uppercase">
                BUZZING IDEAS INTO REALITY
              </h3>
            </div>

            {/* Main Heading - Highly Responsive text sizes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2 sm:space-y-4   "
            >
              <h1 className="text-4xl sm:text-6xl   md:text-[65px]  font-pilogue font-extrabold leading-tight">
                <span className="block">We Design,  </span>
                <span className="block">Build And Grow</span>{" "}
                <span className="block">Digital Presence.</span>
              </h1>
            </motion.div>

            {/* Description - Mobile responsive */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 font-pilogue font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              From branding to media, marketing to development — we’re your
              all-in-one creative hive.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <div className="flex flex-col sm:flex-row gap-4  w-full max-w-sm sm:max-w-md">
                <button
                  onClick={scrollToServices}
                  className="bg-orange-500  hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/book-call"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 justify-center rounded-full font-semibold transition-all flex items-center gap-2"
                >
                  Book Free Call <Phone className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full  lg:w-1/2 flex justify-center items-center pt-8 lg:pt-0 order-1 lg:order-2">
            <div className="relative w-full flex justify-center items-center aspect-square max-w-[280px] sm:max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Background Glow Effects (Scaled down for better mobile look) */}
                <div className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full blur-3xl" />

                {/* Main Image */}
                <motion.div
                  className="z-10 w-full "
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026415/hero_img_eeujut.png"
                    alt="HeroSection Image of BeezTech"
                    className="w-full h-auto  max-w-md mx-auto drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
