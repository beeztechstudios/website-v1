import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Award, TrendingUp, ArrowRight, Hexagon } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import ContactSection from '../components/ContactSection';
import DesignProcessSection from '../components/DesignProcessSection';

const AboutUsPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with our clients, we believe the best results come from true partnership.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Excellence is our standard. Every project receives meticulous attention to detail.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We are committed to helping our clients grow and evolve in the digital landscape.'
    }
  ];

  const features = [
    'Insight-driven design decisions',
    'Seamless user experiences',
    'Collaborative creative process',
    'Scalable and future-ready solutions'
  ];

  return (
    <div className="bg-white">
      {/* Honeycomb Background Pattern */}
      <div className="fixed inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ff8800' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
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
                      src="/workspace.jpeg"
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
                    {/* <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300 group"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button> */}
                  </motion.div>
                </motion.div>
      
              </div>
            </div>
          </div>

      {/* Our Story Section */}
      <section className="relative py-0   px-4 sm:px-6 lg:px-16 bg-transparent">
        <div className="max-w-5xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Journey
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 border border-gray-100"
          >
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-light">
                Beeztech started with one simple belief — that every brand deserves to{' '}
                <span className="text-orange-500 font-semibold relative inline-block">
                  stand out and succeed online
                  <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                    <path d="M0,2 Q25,0 50,2 T100,2" stroke="currentColor" strokeWidth="2" fill="none" className="text-orange-300"/>
                  </svg>
                </span>
                .
              </p>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                What began as a small creative team has now grown into a full-service digital agency offering everything from web & app development to branding, media, and SaaS solutions.
              </p>
              
              <div className="pt-4 border-l-4 border-orange-500 pl-6">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                  We've worked with businesses of all sizes, helping them turn ambitious ideas into digital experiences that drive growth and engagement.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="flex justify-center gap-2 mt-12">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-orange-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl"></div>
      </section>

      

      {/* Our Values Section */}
      {/* <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <DesignProcessSection/>

      {/* CTA Section */}
      <ContactSection/>
    </div>
  );
};

export default AboutUsPage;