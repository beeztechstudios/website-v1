import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layers,
  Zap,
  CheckCircle,
  ChevronDown,
  Star,
  Phone,
  Mail,
  Compass ,TrendingUp ,
  MapPin,
} from "lucide-react";
import { Workflow, UploadCloud } from "lucide-react";
import {
  Layout,
  ShoppingCart,
  Settings,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const WebDevelopmentPage = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  // Auto-scroll animation for image grid

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 0.5) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Layout,
      title: "Website Design & Development",
      description:
        "Static, dynamic, or CMS-based solutions (WordPress, Webflow, etc.), tailored for high conversion.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description:
        "Building powerful online stores, robust marketplaces, and seamless payment gateway integrations.",
    },
    {
      icon: Settings,
      title: "Custom Web Applications",
      description:
        "Bespoke development of dashboards, admin panels, CRMs, and sophisticated booking systems.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native iOS/Android and cross-platform solutions using modern frameworks like React Native and Flutter.",
    },
    {
      icon: Zap,
      title: "API Development & Integration",
      description:
        "Creating high-performance RESTful and GraphQL-based services to connect your data and systems.",
    },
    {
      icon: ShieldCheck,
      title: "Maintenance & Optimization",
      description:
        "Reliable website maintenance, performance tuning, security hardening, and professional hosting setup.",
    },
  ];

  const process = [
    {
      title: "Discovery & Research",
      desc: "Understand your business goals and audience.",
    },
    { title: "Wireframing & Design", desc: "Create UI/UX focused prototypes." },
    {
      title: "Development & Testing",
      desc: "Agile coding with performance optimization.",
    },
    {
      title: "Launch & Handover",
      desc: "Deploy securely and ensure smooth delivery.",
    },
    {
      title: "Support & Growth",
      desc: "Continuous improvement, analytics, and updates.",
    },
  ];


    
    

  const initialProjects = [
  {
    id: 1,
    name: 'E-commerce Platform Relaunch',
    category: 'Digital Strategy & Development',
    image:     "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51012%2Fxtract-xqzXUvtiwNfRpXdCNOSbHGhjlIXzdS&w=3840&q=100",
    link: 'https://www.example.com/project/ecommerce',
    result: '120% Increase in Q4 Revenue',
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    name: 'Global Brand Identity',
    category: 'Creative & Design',
    image: "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49749%2Foptimistic-7QAhEhFXH72T4u3Djr8Qk1z7BLNJVf&w=3840&q=100",
    link: 'https://www.example.com/project/brand',
    result: '25% Higher Brand Recall',
    icon: <Compass className="w-8 h-8 text-red-600" />,
  },
  {
    id: 3,
    name: 'SaaS User Experience Overhaul',
    category: 'Product & UX/UI',
    image: "/webimg1.jpg",
    link: 'https://www.example.com/project/saas',
    result: '40% Reduction in Churn Rate',
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
  },
  {
    id: 4,
    name: 'Mobile App Launch Campaign',
    category: 'Performance Marketing',
    image: "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F54514%2Ffusion-ai-wS70RFMTxlA0bMlp8ouZoqCOQjRpFw&w=3840&q=100",
    link: 'https://www.example.com/project/mobile',
    result: '5M New App Downloads',
    icon: <Zap className="w-8 h-8 text-purple-600" />,
  },
];

  const faqs = [
    {
      q: "How does BeezTech ensure my website is scalable?",
      a: "We focus on clean architecture using modern stacks like **Next.js/React** and **Node.js**. This modular design ensures that as your user base grows or new features are needed, the application can scale horizontally without costly refactoring. We build for growth, not just for launch.",
    },
    {
      q: "Do you offer post-launch maintenance and support?",
      a: "Absolutely. Our core differentiator is the **recurring support model**. We don't believe in one-time projects. We offer comprehensive plans for security updates, performance optimization, bug fixes, and feature additions, acting as your long-term tech partner.",
    },
    {
      q: "What is your typical timeline for an MVP or Custom Web App?",
      a: "The timeline depends on scope, but our lean approach targets efficiency. A Minimal Viable Product (MVP) typically takes **4-8 weeks**. A custom web application or full SaaS product will be defined during the Discovery phase, usually ranging from 8 to 16 weeks.",
    },
    {
      q: "What is the difference between a Web App and a Business Website?",
      a: "A **Business Website** is primarily for information, branding, and lead generation. A **Web App (or SaaS)** includes complex logic, user accounts, custom dashboards, and dynamic data processing (e.g., Trello, Slack). We specialize in building both, ensuring the right solution for your business goals.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, // Delay the children (FAQs) slightly
        staggerChildren: 0.15, // Stagger the appearance of each FAQ item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the children's animation start time
        delayChildren: 0.3, // Delay the start of the first child
      },
    },
  };

  // Variant for the left-side content (sliding up)
  const itemSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };
  const cardSlide = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 20 },
    },
  };
  // Variant for the right-side image cards (fading in and subtle scale)
  const cardPop = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };
  const imageSources = [
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F54514%2Ffusion-ai-wS70RFMTxlA0bMlp8ouZoqCOQjRpFw&w=3840&q=100",

    "/webimg1.jpg",
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49749%2Foptimistic-7QAhEhFXH72T4u3Djr8Qk1z7BLNJVf&w=3840&q=100",
    "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51012%2Fxtract-xqzXUvtiwNfRpXdCNOSbHGhjlIXzdS&w=3840&q=100",
  ];
  const cardReveal = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        mass: 0.8,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const processSteps = [
    {
      icon: Workflow,
      title: "Discovery & Strategy",
      desc: "We start by understanding your goals, audience, and industry. This helps us craft a roadmap that aligns with your business objectives.",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      desc: "We design modern, user-focused interfaces that convert and enhance user experience. Deliverable: Interactive wireframes and responsive prototypes.",
    },
    {
      icon: Code,
      title: "Development & Integration",
      desc: "Using the latest web technologies (React, Node.js, Next.js, MongoDB), we build scalable and maintainable solutions. Deliverable: High-performance, modular web solution.",
    },
    {
      icon: CheckCircle,
      title: "Testing & Optimization",
      desc: "Every project undergoes performance, cross-browser, and security testing before launch. Deliverable: QA report and optimization checklist.",
    },
    {
      icon: UploadCloud,
      title: "Deployment & Support",
      desc: "We deploy on cloud infrastructure with CI/CD and offer continuous support post-launch. Deliverable: Cloud deployment and support plan.",
    },
  ];
  const timelineSteps = [
    {
      icon: Workflow,
      title: "Discovery & Strategy",
      description:
        "We start by understanding your goals, audience, and industry. This helps us craft a roadmap that aligns with your business objectives.",
      deliverable: "Clear scope, timeline, and tech stack strategy.",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description:
        "We design modern, user-focused interfaces that convert and enhance user experience.",
      deliverable: "Interactive wireframes and responsive prototypes.",
    },
    {
      icon: Code,
      title: "Development & Integration",
      description:
        "Using the latest web technologies (React, Node.js, Next.js, MongoDB), we build scalable and maintainable solutions.",
      deliverable: "High-performance, modular web solution.",
    },
    {
      icon: CheckCircle,
      title: "Testing & Optimization",
      description:
        "Every project undergoes performance, cross-browser, and security testing before launch.",
      deliverable: "QA report and optimization checklist.",
    },
    {
      icon: UploadCloud,
      title: "Deployment & Support",
      description:
        "We deploy on cloud infrastructure with CI/CD and offer continuous support post-launch.",
      deliverable: "Cloud deployment and support plan.",
    },
  ];
  return (
    <div className="bg-gray-50  min-h-screen mt-12">
      {/* Hero Section */}

      <section className="bg-white text-gray-900 min-h-screen flex items-center py-16 sm:py-24">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main animated container: Stacks on mobile, 2 columns on large screens */}
          <motion.div
            className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Left Content (Text and Buttons) */}
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                variants={itemSlide}
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Available For Projects
              </motion.div>

              <motion.h1
                variants={itemSlide}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight sm:leading-tight lg:leading-tight"
              >
                We Build Digital Experiences,{" "}
                {/* Note: Incorporating the concept of professional service and user experience for SEO relevance */}
                <span className="text-gray-500">Not Just Websites</span>
              </motion.h1>

              <motion.p
                variants={itemSlide}
                className="text-base sm:text-xl text-gray-600 max-w-xl"
              >
                Our goal is simple: create web solutions that not only look
                stunning but also drive measurable results for your business.
              </motion.p>

              {/* Buttons: Wrap when needed on small screens */}
              <motion.div
                variants={itemSlide}
                className="flex flex-wrap gap-4 pt-4 sm:pt-6"
              >
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
                  View Pricing <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <Link
                  to="/book-call"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  Book Free Call <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>

              {/* Testimonials/Stats Block */}
              <motion.div
                variants={itemSlide}
                className="flex items-center gap-4 pt-4"
              >
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-2 border-white"
                    ></div>
                  ))}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-xs sm:text-sm font-bold">
                    50+
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">
                    Trusted By 50+ Businesses
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Side (Image Grid with Staggered Pop-In) */}
            <div className="pt-8 lg:pt-0">
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                {/* Image Grid 1 (Top Row) */}
                <motion.div
                  className="grid grid-cols-2 gap-4 sm:gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {imageSources.slice(0, 2).map((src, index) => (
                    <motion.div
                      key={index}
                      variants={cardPop}
                      className="rounded-xl sm:rounded-2xl h-48 sm:h-[210px] overflow-hidden shadow-xl"
                    >
                      <img
                        src={src}
                        alt={`Web project preview ${index + 1}`}
                        className="object-cover w-full h-full transition duration-500 ease-in-out hover:scale-[1.03]"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Image Grid 2 (Bottom Row) */}
                <motion.div
                  className="grid grid-cols-2 gap-4 sm:gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {imageSources.slice(2, 4).map((src, index) => (
                    <motion.div
                      key={index + 2}
                      variants={cardPop}
                      className="rounded-xl sm:rounded-2xl h-48 sm:h-[210px] overflow-hidden shadow-xl"
                    >
                      <img
                        // Using a relevant image URL here. For example, for Pet Services in Udaipur, you might use
                        // a professional dog grooming or pet boarding facility image.
                        src={src}
                        alt={`Web project preview ${index + 3}`}
                        className="object-cover w-full h-full transition duration-500 ease-in-out hover:scale-[1.03]"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 sm:py-24 text-gray-900">
        <div className="max-w-7xl mx-auto ">
          {/* Section Header */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center md:text-left max-w-4xl space-y-4 mb-12 sm:mb-20"
          >
            <motion.p
              variants={itemSlide}
              className="text-4xl lg:text-5xl font-bold mb-4 text-orange-500 "
            >
              Our Digital Solutions
            </motion.p>
            {/* <motion.h2 variants={itemSlide} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Comprehensive Digital Mastery
          </motion.h2> */}
            {/* <motion.p variants={itemSlide} className="text-base text-gray-500 leading-relaxed">
            From initial concept to deployment and beyond, we handle the full spectrum of digital product development.
          </motion.p> */}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardSlide}
                // Card Styling and Hover Effects
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 
                         hover:shadow-2xl hover:border-orange-500 hover:scale-[1.01]"
              >
                {/* Icon (Animated) */}
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-3 bg-black rounded-xl inline-flex mb-4"
                >
                  <service.icon className="w-6 h-6 text-orange-500" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-24 block md:hidden">
        <div className="max-w-7xl  mx-auto ">
          {/* Section Header */}
          <div className="text-center md:text-left max-w-4xl  mb-16 sm:mb-24">
            <motion.h2
              initial="hidden"
              whileInView="show"
              variants={cardReveal}
              viewport={{ once: true, amount: 0.5 }}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              How We Build Websites That Scale
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 },
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-lg text-gray-600"
            >
              At BeezTech, we follow a structured, proven approach to build
              websites and platforms that are fast, scalable, and built to last.
              Every step — from research to deployment — focuses on delivering
              performance, security, and long-term flexibility.
            </motion.p>
          </div>

          {/* Timeline Container */}
          {/*
          MOBILE: Uses vertical stacking with a left border for the timeline line.
          DESKTOP (lg): Uses a horizontal flex layout with custom dividers/connectors.
        */}
          <div className="relative">
            {/* Mobile Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 lg:hidden rounded-full"></div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-16  lg:flex lg:flex-wrap  lg:justify-between ">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardReveal}
                  initial="hidden"
                  whileInView="show"
                  // Stagger the animation slightly
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.4 }}
                  // CARD STYLES
                  className="relative lg:w-1/5 bg-white p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-500 
                           hover:shadow-2xl hover:-translate-y-1 border-t-4 border-transparent hover:border-orange-500 
                           lg:border-none"
                >
                  {/* Mobile Timeline Connector Dot */}
                  <div className="absolute -left-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-gray-50 lg:hidden"></div>

                  {/* Desktop Horizontal Connector Line (appears between cards, except the last one) */}
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute h-0.5 bg-gray-200 w-full left-[100%] top-1/4 -translate-y-1/2 ml-4 mr-4"></div>
                  )}

                  <div className="flex items-center space-x-4 mb-4">
                    {/* Number Badge (Circle) */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg shadow-md">
                      {index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  {/* Icon (Optional for extra visual flair) */}
                  <step.icon className="w-6 h-6 text-orange-500 mb-4" />

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-base">
                    {step.description}
                  </p>

                  {/* Deliverable Section (Subtle Highlight) */}
                  <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-black font-medium text-sm text-gray-800">
                    <span className="text-black font-semibold">
                      Deliverable:
                    </span>{" "}
                    {step.deliverable}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50 font-sans">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Projects that{' '}
            <span className="text-orange-600 rounded-lg bg-orange-100 px-2">
              delivered results.
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto md:mx-0">
            A look at some of the brands we've helped achieve measurable outcomes
            across digital strategy, development, and design.
          </p>
        </div>

        {/* Project Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* CORRECTED: Changed 'projects.map' to 'initialProjects.map' */}
            {initialProjects.map((project, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl h-96 p-8 flex flex-col justify-end shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] overflow-hidden group"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Image Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300 rounded-3xl"></div> */}

                {/* Content Box */}
                <div className="relative bg-white/10  backdrop-blur-sm rounded-xl p-5 inline-flex items-center justify-between shadow-2xl transition duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase text-orange-500 mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-bold text-xl text-white">
                      {project.name}
                    </h3>
                  </div>

                  {/* Clickable Link (Arrow Button) */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View case study for ${project.name}`}
                    className="w-12 h-12 flex-shrink-0 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        
        
      </div>
    </section>

      {/* Pricing */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Smart pricing.{" "}
              <span className="text-gray-400">Remarkable design.</span>
            </h2>
            <p className="text-gray-600">
              Pick your plan and start designing today. One flat fee. Unlimited
              design. Zero stress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-2 border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Basic Website</h3>
              <p className="text-4xl font-bold mb-6">₹25K-60K</p>
              <p className="text-gray-600 mb-6">
                Fast, modern websites for branding & lead generation
              </p>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-black py-3 rounded-xl font-semibold transition-all">
                Book Free Call
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dynamic Web App</h3>
              <p className="text-4xl font-bold mb-6">₹60K-1.5L</p>
              <p className="text-gray-600 mb-6">
                Scalable web apps with backend logic
              </p>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-semibold transition-all">
                Book Free Call
              </button>
            </div>

            <div className="bg-black text-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom SaaS</h3>
              <p className="text-4xl font-bold mb-6">₹1.5L-3L+</p>
              <p className="text-gray-400 mb-6">
                Full-scale platforms for complex business logic
              </p>
              <button className="w-full bg-white hover:bg-gray-100 text-black py-3 rounded-xl font-semibold transition-all">
                Book Free Call
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible" // Triggers animation when the section scrolls into view
        viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% visible
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Title and CTA */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-900 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6 shadow-md">
                // FAQS //
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Questions <span className="text-gray-400">& answers.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to know about our **web development** and
                recurring support service.
              </p>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      Have more questions?
                    </p>
                    <p className="text-sm text-gray-600">
                      Book a free discovery call with a founder
                    </p>
                  </div>
                </div>
                <a
                  href="/schedule"
                  className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                >
                  Book Free Call <Phone className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: FAQ List */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {faqs.map((faq, idx) => (
                <motion.div // Each FAQ item uses motion
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                  variants={itemVariants} // Applies staggered animation
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform text-yellow-500 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer Content - Uses Framer Motion's AnimatePresence for smooth open/close */}
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WebDevelopmentPage;
