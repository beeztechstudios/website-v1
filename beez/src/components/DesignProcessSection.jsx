import React from 'react';
import { motion } from 'framer-motion';

const DesignProcessSection = () => {
  const steps = [
    {
      number: '01.',
      title: 'RESEARCH & STRATEGY',
      description:
        'In this phase, I dive deep into understanding your business, target audience, and project goals. Through research and strategic planning, I create a clear roadmap to guide the entire design process.',
      type: 'gradient-card', // Use this type for gradient background
      image: null,
    },
    {
      number: null,
      title: null,
      description: null,
      type: 'image-card', // Use this type for image background
      image: '/workflow_1.jpeg',
    },
    {
      number: '02.',
      title: 'CONCEPT & IDEATION',
      description:
        'Here, I brainstorm and develop creative concepts that align with your vision. Initial sketches and ideas are refined into tangible wireframes, setting the direction for design and functionality.',
      type: 'gradient-card', // Use this type for gradient background
      image: null,
    },
    {
      number: null,
      title: null,
      description: null,
      type: 'image-card',
      image: '/workflow_2.jpeg',
    },
    {
      number: '03.',
      title: 'FEEDBACK & REFINEMENT',
      description:
        'Collaboration is key. I review the design with you, gather feedback, and refine the work to align with your expectations and goals. This ensures the design reflects your vision.',
      type: 'dark-card', // This will be a dark gray card
      image: null,
    },
    
    {
      number: '04.',
      title: 'TESTING & OPTIMIZATION',
      description:
        'I conduct thorough testing to identify and resolve any performance or usability issues. This phase optimizes the design for seamless user experience across all devices.',
      type: 'gradient-card', // Use this type for gradient background
      image: null,
    },
    
    {
      number: '05.',
      title: 'LAUNCH & DELIVERY',
      description:
        'Once everything is finalized, the project is prepared for launch. I assist with the implementation and ensure a smooth delivery, providing all necessary assets and support.',
      type: 'dark-card', // This will be a dark gray card
      image: null,
    },
    {
      number: null,
      title: null,
      description: null,
      type: 'image-card',
      image: '/workflow_3.jpeg',
    },
  ];

  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    // Main section background changed to white
    <section className="bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20 text-center lg:text-left"
        >
          {/* Changed text color to gray-900 */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Work Process
          </h2>
          {/* Changed text color to gray-700 */}
          {/* <p className="text-lg sm:text-xl text-gray-700 max-w-3xl lg:mx-0 mx-auto font-light">
            My process blends strategy and creativity to address challenges, craft solutions, and deliver designs that
            effectively communicate your message.
          </p> */}
        </motion.div>

        {/* Grid for process steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => {
            const isGradient = step.type === 'gradient-card';
            const isImage = step.type === 'image-card';

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  relative p-8 sm:p-10 shadow-xl rounded-3xl flex flex-col justify-between 
                  ${isGradient ? 'bg-gradient-to-br from-orange-500/60 to-yellow-400/50 text-gray-900' : ''}
                  ${!isGradient && !isImage ? 'bg-white text-white ' : ''}
                  ${isImage ? 'overflow-hidden bg-gray-700' : ''}
                  ${index === 0 && 'lg:col-span-1'} 
                  ${index === 1 && 'lg:col-span-1 hidden md:block'} 
                  ${index === 2 && 'md:col-span-1'} 
                  ${index === 3 && 'md:col-span-1'} 
                  ${index === 4 && 'md:col-span- lg:col-span-2'} 
                  ${index === 5 && 'lg:col-span-1 hidden md:block'}
                  ${index === 6 && 'md:col-span-1'}
                  ${index === 7 && 'md:col-span-1'}
                  ${index === 8 && 'md:col-span-1'}
                `}
                // Adjust min-h for consistent card heights, especially for image cards
                style={{ minHeight: isImage ? '250px' : 'auto', aspectRatio: isImage ? '1:1' : '1:1' }} 
              >
                {isImage ? (
                  <img src={step.image} alt="Design process visual" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <h3
                      className={`text-5xl sm:text-6xl font-bold mb-6 ${isGradient ? 'text-gray-800' : 'text-gray-800'}`}
                    >
                      {step.number}
                    </h3>
                    <div>
                      <h4 className={`text-xl sm:text-2xl font-bold mb-3 ${isGradient ? 'text-gray-800' : 'text-gray-800'}`}>
                        {step.title}
                      </h4>
                      <p className={`text-base sm:text-lg font-light ${isGradient ? 'text-gray-800' : 'text-gray-400'}`}>
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcessSection;