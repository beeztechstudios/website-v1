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
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";


const WebDevelopmentPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  // Auto-scroll animation for image grid
 

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 0.5) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);
  
    // Sample project images data
  const heroImages = [
    { color: 'bg-gradient-to-br from-red-400 to-red-600', size: 'tall' },
    { color: 'bg-gradient-to-br from-yellow-400 to-orange-500', size: 'wide' },
    { color: 'bg-gradient-to-br from-green-400 to-teal-500', size: 'tall' },
    { color: 'bg-gradient-to-br from-blue-400 to-indigo-600', size: 'wide' },
    { color: 'bg-gradient-to-br from-purple-400 to-pink-500', size: 'tall' },
    { color: 'bg-gradient-to-br from-gray-600 to-gray-800', size: 'wide' }
  ];
  const services = [
    {
      title: "Business Websites",
      description: "Fast, modern websites for branding & lead generation.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Custom Web Applications",
      description: "Scalable, dynamic web apps with backend logic.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "E-Commerce Development",
      description: "Product catalogs, payments, dashboards.",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      title: "Portfolio / Agency Sites",
      description: "Visually stunning, conversion-optimized sites.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Landing Pages & Microsites",
      description: "Built for campaigns and product launches.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const techStack = {
    Frontend: ["React", "Next.js", "HTML", "TailwindCSS"],
    Backend: ["Node.js", "Express.js", "Firebase"],
    Database: ["MongoDB", "PostgreSQL"],
    Deployment: ["Vercel", "Netlify", "AWS"],
  };

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

  const projects = [
    { name: "QuoteKaro", category: "SaaS for Studios", color: "bg-yellow-400" },
    {
      name: "Pet Junction",
      category: "Custom Marketplace",
      color: "bg-green-200",
    },
    { name: "Sabgumo", category: "Business Landing", color: "bg-red-400" },
  ];

  const testimonials = [
    {
      quote:
        "BeezTech delivered a flawless website within our timeline—and their post-launch support has been top-notch.",
      author: "Rahul Mehta",
      role: "Founder, TechConsult India",
    },
    {
      quote:
        "They didn't just build, they understood our business. Best investment we made in our startup journey.",
      author: "Priya Sharma",
      role: "Co-Founder, HealthTrack App",
    },
    {
      quote:
        "Working with BeezTech felt like having an extension of our own team. Transparent communication, no hidden costs.",
      author: "Amit Patel",
      role: "CEO, RetailHub Solutions",
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
  const stats = [
    {
      number: "50+",
      label: "Digital projects delivered across all industries.",
    },
    {
      number: "3X",
      label: "Our model cuts typical delivery timelines by two-thirds.",
    },
    { number: "80k+", label: "Monthly visitors via SEO content hub" },
    { number: "100%", label: "Client satisfaction rate across paid users" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      
      <section className="bg-white text-gray-900 min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm mb-8 font-medium">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Available For Projects
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              World-Class Design Partner <span className="text-gray-500">For AI Startups</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Fast, reliable, and scalable design solutions tailored for your growing startup.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                View Pricing <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2">
                Book Free Call <Phone className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white"
                  ></div>
                ))}
                <div className="w-12 h-12 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-sm font-bold">
                  50+
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium text-sm">Trusted By 50+ Businesses</span>
              </div>
            </div>
          </div>

          {/* Right Side - Horizontal Scrolling Grid */}
          <div className="relative h-[600px] overflow-hidden">
            <div 
              className="flex flex-col gap-4 absolute"
              style={{ 
                transform: `translateY(-${scrollPosition}%)`,
                transition: 'transform 0.05s linear'
              }}
            >
              {/* First Row */}
              <div className="flex gap-4">
                <div className="w-72 h-96 bg-red-500 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white">
                    
                  </div>
                </div>
                <div className="w-72 h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-40 bg-white rounded-lg shadow-xl"></div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex gap-4">
                <div className="w-72 h-80 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 p-8 flex flex-col justify-center">
                    
                    <div className="text-white text-xs leading-relaxed">
                      HELLOJPHONE<br/>
                      PASSPORT<br/>
                      REAL EVENT
                    </div>
                  </div>
                </div>
                <div className="w-72 h-80 bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-72 bg-black rounded-3xl shadow-2xl p-6 flex flex-col justify-between">
                      <div className="text-white text-center">
                        <div className="text-sm mb-2">European</div>
                        <div className="text-xs">Space Week</div>
                        <div className="text-2xl font-bold">2022</div>
                      </div>
                      <div className="text-white text-[8px] leading-tight opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Row */}
              <div className="flex gap-4">
                <div className="w-72 h-96 bg-gradient-to-br from-green-200 to-green-400 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-72 bg-white/90 backdrop-blur rounded-2xl shadow-2xl transform -rotate-3 flex items-center justify-center">
                      <div className="text-black text-4xl font-bold">SOS</div>
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-gradient-to-br from-orange-300 via-orange-400 to-red-400 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-black opacity-20">BOXMOX</div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-black font-bold text-2xl">
                    BOX<br/>MO
                  </div>
                </div>
              </div>

              {/* Duplicate rows for seamless loop */}
              <div className="flex gap-4">
                <div className="w-72 h-96 bg-red-500 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white">
                    <div className="text-2xl font-bold">TAPE</div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-300">A5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
              // Why Us //
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Proven results{" "}
                <span className="text-gray-400">for every project</span>
              </h2>
            </div>
            <div>
              <p className="text-xl text-gray-600">
                We combine strategy, speed, and skill to deliver exceptional
                design — every time.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-4xl font-bold">{stat.number}</h3>
                  <div className="flex gap-1">
                    {[...Array(idx + 1)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-orange-500 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Web Development Services Tailored to Your Goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Tech Stack We Use
            </h2>
            <p className="text-xl text-gray-600">
              Built with Modern, Battle-Tested Technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-orange-500" />
                  {category}
                </h3>
                <ul className="space-y-2">
                  {techs.map((tech, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12 italic">
            "We choose the right tech for your project's vision and scale—not
            just what's trendy."
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How We Build Websites That Scale
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, idx) => (
              <div key={idx} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-xl">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
              // Work
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Projects that{" "}
            <span className="text-gray-400">delivered results.</span>
          </h2>
          <p className="text-gray-600 mb-12">
            A look at some of the brands we've helped — and the outcomes we've
            delivered.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`${project.color} rounded-2xl h-96 p-8 flex flex-col justify-end hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="bg-white rounded-xl p-4 inline-flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
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
      </section>

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
              <div className="bg-gray-900 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6 shadow-md">
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
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
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
