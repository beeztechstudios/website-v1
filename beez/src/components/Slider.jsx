import React from "react";
import { motion } from "framer-motion";

const CLOUDINARY_ICON =
  "https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg";

const words = ["Innovative", "Creative", "Digital", "Designer"];

function Slider() {
  return (
    <div className="relative z-10 bg-white pb-12 pt-4 mt-12 sm:mt-16  ">
      <div className="relative mx-auto w-full overflow-hidden max-w-7xl bg-transparent py-6 sm:py-8 mb-8 sm:mb-12">
        {/* Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Content */}
        <motion.div className="flex items-center gap-6 sm:gap-8 text-black" animate={{ x: [0, -1000], }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear", }, }} >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {words.map((word, idx) => (
                <React.Fragment key={idx}>
                  <img
                    src={CLOUDINARY_ICON}
                    alt="separator icon"
                    className="h-10 md:h-16"
                    loading="lazy"
                  />
                  <span
                    className={`text-5xl sm:text-4xl md:text-[100px] font-pilogue font-extrabold ${
                      idx % 2 === 0 ? "opacity-100" : ""
                    }`}
                  >
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Slider;
