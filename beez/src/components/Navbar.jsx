import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X ,Phone } from 'lucide-react'; // Import Menu and X icons for the mobile toggle
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const servicesRef = useRef(null);
  const mobileMenuRef = useRef(null); // Ref for the mobile menu container

  // --- Services Data (Updated image placeholder for Mobile) ---
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications with cutting-edge technologies.',
      icon: '💻', // Using an emoji as a fallback/simple mobile icon
      image: '/web_service_logo.png',
      link: '/services/web-app-development'
    },
    {
      title: 'Branding',
      description: 'Production ready Tailwind CSS components for your next project',
      icon: '✨',
      image: '/branding_service_logo.png',
      link: '/services/branding' // Added missing link
    },
    {
      title: 'Digital Marketing',
      description: 'Never write from scratch again. Go from idea to blog in minutes.',
      icon: '📈',
      image: '/marketing_service_logo.png',
      link: '/services/digital-marketing' // Added missing link
    },
    {
      title: 'Media Production',
      description: 'Stunning visual content that tells your story',
      icon: '🎬',
      image: '/media_service_logo.png',
      link: '/services/media-production' // Added missing link
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      // Close desktop services menu if click is outside
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      // Keep mobile menu open state separate from desktop services state
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleServices = () => {
    console.log(isServicesOpen);
    
    setIsServicesOpen(!isServicesOpen);
  };
  const mobiletoggleServices = () => {
    console.log(isMobileServicesOpen);
    
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Ensure desktop services dropdown is closed when opening mobile menu
    setIsServicesOpen(false); 
  };
  
  const handleMobileNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close menu on link click
    setIsServicesOpen(false); // Close services on link click
  };

  return (
    <>
      {/* --- Desktop & Tablet Navbar (md:block) --- */}
      <nav
        className={`hidden md:block fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out 
          ${isScrolled 
            ? 'w-[90%] max-w-[900px] top-2' // Smaller and higher up when scrolled
            : 'w-[95%] max-w-[1330px] top-4' // Larger and lower when not scrolled
          }`}
      >
        <div className="bg-white/50 backdrop-blur-2xl rounded-full  px-4 lg:px-8 py-3 ">
          <div className="flex items-center justify-between ">
            
            {/* Logo */}
            <div className="w-[120px] lg:w-[160px] ">
              <Link to="/">
                {/* Ensure your logo2.png exists and is appropriately sized */}
                <img src="/Logo_Black.png" alt="Logo" className="w-full" />
              </Link>
            </div>
            
            {/* Desktop Links */}
            <div className="flex items-center gap-6 lg:gap-8 ">

              {['works', 'about', 'blogs'].map((linkName) => (
                <Link
                  key={linkName}
                  to={`/${linkName}`}
                  onClick={() => setActiveLink(linkName)}
                  className={`text-base lg:text-xl font-medium transition-all duration-200 hover:scale-105 hover:font-bold ${
                    activeLink === linkName 
                      ? 'text-orange-500 font-bold scale-105' 
                      : 'text-gray-700 hover:text-orange-400'
                  }`}
                >
                  {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
                </Link>
              ))}
              
              {/* Services Dropdown - Desktop */}
              <div
                ref={servicesRef}
                className="relative flex justify-center items-center gap-1"
              >
                <button 
                  onClick={toggleServices}
                  className={`text-base lg:text-xl font-medium transition-all duration-200 hover:scale-105 hover:font-bold flex items-center ${
                    isServicesOpen || activeLink === 'services'
                      ? 'text-orange-500 font-bold scale-105' 
                      : 'text-gray-700 hover:text-orange-400'
                  }`}
                >
                  Services
                  <ChevronDown className={`ml-1 w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}/>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full -right-60 mt-6 w-[500px] lg:w-[900px] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-gray-100/30">
                      {/* Grid now uses responsive columns, starting at 1 for safety on smaller tablets, then 2 for desktop */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                        {services.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.link}
                            onClick={() => {
                              setIsServicesOpen(false);
                              setActiveLink('services');
                            }}
                            className="group flex items-center p-6 rounded-xl bg-white/70 hover:bg-orange-50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg border border-transparent hover:border-orange-300"
                          >
                            {/* Left Partition: Image/Visual */}
                            <div className="flex-shrink-0 w-1/4 pr-3">
                              {service.image ? (
                                <img 
                                  src={service.image} 
                                  alt={service.title} 
                                  className='rounded-lg object-cover w-full h-full shadow-md' 
                                />
                              ) : (
                                <div className="text-3xl text-center flex items-center justify-center w-full h-full">
                                    {service.icon}
                                </div>
                              )}
                            </div>
                            
                            {/* Right Partition: Text Content */}
                            <div className="flex-grow w-3/4">
                              <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-orange-500 transition-colors line-clamp-1">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-snug line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Fixing the order to be after the dropdown button */}
              
            </div>

            {/* Book a Call Button */}
            <Link to="/book-call" className="bg-orange-500 hover:bg-black text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2">
                            Book Free Call <Phone className="w-5 h-5" />
                          </Link>
          </div>
        </div>
      </nav>

      {/* --- Mobile Navbar (md:hidden) --- */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl  ">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Mobile */}
            <div className="w-[140px]">
              <Link to="/">
                <img src="/Logo_Black.png" alt="Logo" className="w-full" />
              </Link>
            </div>
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 p-2 border rounded-lg hover:bg-gray-50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="bg-white/95 backdrop-blur-xl border-t border-gray-200 px-4 py-4 space-y-4 animate-in slide-in-from-top-1 duration-200 overflow-y-auto max-h-[100vh]" // Added max-h and overflow for long content
          >
            {/* Mobile Nav Links */}
            
            
            {/* Mobile Services Dropdown */}
            <div className="border-t border-gray-200 pt-4  ">
              <button 
                onClick={mobiletoggleServices}
                className={`flex items-center justify-between w-full  text-lg font-medium transition-colors py-2 ${
                  isServicesOpen 
                    ? 'text-orange-500 font-bold' 
                    : 'text-gray-700 hover:text-orange-500 '
                }`}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="mt-3 space-y-3 ">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.link}
                      // onClick={() => handleMobileNavLinkClick('services')}
                      className="block p-3 rounded-xl bg-orange-50 border border-orange-200 transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl flex-shrink-0"><img 
                                  src={service.image} 
                                  alt={service.title} 
                                  className='rounded-lg object-cover w-16 h-full shadow-md' 
                                /></div> {/* Use the defined icon/emoji */}
                        <div>
                          <h3 className="text-gray-900 font-bold text-base mb-1">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {['works', 'about', 'blogs'].map((linkName) => (
              <Link
                key={linkName}
                to={`/${linkName}`}
                onClick={() => handleMobileNavLinkClick(linkName)}
                className={`block text-lg font-medium py-2 rounded-lg transition-colors ${
                  activeLink === linkName 
                    ? 'text-orange-500 font-bold bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
              </Link>
            ))}
            
          </div>
        )}
      </nav>
    </>
  );
}