import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom';
const AboutUsSection = () => {
  return (
    <div className="relative  py-8 sm:py-12 bg-white z-60  mb-1  md:mb-0 lg:py-20 ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 px-4 sm:px-6lg:gap-16 items-center">
          
          {/* Left Side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-2 border-orange-200 rounded-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-orange-100 rounded-full -z-20"></div>
            
            {/* Main Workspace Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026418/workspace_fzoeje.jpg"
                alt="Modern workspace"
                className="w-full h-auto"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-400"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-400"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                </div>
                <div className="space-y-1">
                  <div className="w-12 h-2 bg-orange-200 rounded-full"></div>
                  <div className="w-16 h-2 bg-orange-200 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Member Circle - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-8 border-white shadow-xl bg-orange-400"
            >
              <img
                src="https://framerusercontent.com/images/EtyhVt5k6VdQGzImZKutvGH8I.png"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Element - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-orange-200 rounded-full -z-10"
            ></motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                ABOUT
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Buzzing Ideas into Digital Reality 🐝
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              We're a creative tech agency helping brands design, develop, and grow with innovation and purpose.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-gray-500 leading-relaxed"
            >
              
              From startups to established businesses, we help transform your ideas into stunning digital experiences — combining creativity, code, and strategy under one roof.
            </motion.p>

            {/* Button */}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300 group"
              >
                <span>Know More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;