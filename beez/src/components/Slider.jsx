import React from "react";
import { motion } from "framer-motion";
function Slider() {
  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-16 mt-8 sm:mt-8  lg:mt-18 bg-white ">
      {/* Infinite Scrolling Text Slider */}
      <div className="relative w-full overflow-hidden bg-transparent py-6 sm:py-8 mb-8 sm:mb-12">
        {/* Left Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right Fade Effect */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex items-center gap-6 sm:gap-8 text-black"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <img src="Icon.png" alt="ggg" className="h-10 md:h-16"></img>
                <span className="text-5xl font-pilogue font-extrabold sm:text-4xl md:text-[100px]   opacity-40">
                  Innovative
                </span>
                <img src="Icon.png" alt="ggg" className=" h-10 md:h-16"></img>

                <span className="text-5xl sm:text-4xl md:text-[100px] font-pilogue font-bold">
                  Creative
                </span>
                <img src="Icon.png" alt="ggg" className="h-10 md:h-16"></img>

                <span className="text-5xl sm:text-4xl md:text-[100px] font-pilogue font-bold">
                  Digital
                </span>
                <img src="Icon.png" alt="ggg" className="h-10 md:h-16"></img>

                <span className="text-5xl sm:text-4xl md:text-[100px]  font-pilogue font-bold">
                  Designer
                </span>
                <img src="Icon.png" alt="ggg" className="h-10 md:h-16"></img>

                <span className="text-5xl sm:text-4xl md:text-[100px] font-pilogue font-bold opacity-40">
                  Innovative
                </span>
                <img src="Icon.png" alt="ggg" className="h-10 md:h-16 "></img>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto "></div>
    </div>
  );
}

export default Slider;
