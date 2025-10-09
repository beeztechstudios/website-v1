import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, FileText, Palette, TestTube, Rocket } from 'lucide-react';

const HowWeWorkSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const workflowSteps = [
    {
      id: 1,
      title: 'Discovery & Consultation',
      description: 'Understanding your goals, audience, and project needs through a collaborative discussion.',
      icon: Search,
    },
    {
      id: 2,
      title: 'Planning & Strategy',
      description: 'Defining project scope, timelines, and strategy to ensure a clear roadmap for execution.',
      icon: FileText,
    },
    {
      id: 3,
      title: 'Design & Development',
      description: 'Creating clean, modern, and scalable designs backed by robust code architecture.',
      icon: Palette,
    },
    {
      id: 4,
      title: 'Testing & Feedback',
      description: 'Rigorous testing, client feedback loops, and refinement for perfection.',
      icon: TestTube,
    },
    {
      id: 5,
      title: 'Launch & Support',
      description: 'Deploying the project smoothly and providing ongoing support to ensure success.',
      icon: Rocket,
    }
  ];

  return (
    <div ref={containerRef} className="bg-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven process that transforms your vision into reality
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200">
            <motion.div
              style={{
                scaleX: useTransform(scrollYProgress, [0.2, 0.8], [0, 1])
              }}
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 origin-left"
            />
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-5 gap-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center"
              >
                {/* Icon Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative z-10 w-20 h-20 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center mb-8 shadow-lg"
                >
                  <step.icon className="w-8 h-8 text-orange-500" />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="absolute inset-0 border-4 border-orange-500 rounded-full"
                  />
                </motion.div>

                {/* Card Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-500 rounded-full font-bold text-sm mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    {step.id}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200">
            <motion.div
              style={{
                scaleY: useTransform(scrollYProgress, [0.1, 0.9], [0, 1])
              }}
              className="w-full bg-gradient-to-b from-orange-500 to-yellow-500 origin-top"
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* Icon Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative flex-shrink-0 w-16 h-16 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center shadow-lg z-10"
                >
                  <step.icon className="w-6 h-6 text-orange-500" />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="absolute inset-0 border-4 border-orange-500 rounded-full"
                  />
                </motion.div>

                {/* Card Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-500 rounded-full font-bold text-sm mb-3">
                    {step.id}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;