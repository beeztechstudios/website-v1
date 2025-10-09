import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/works' },
    { name: 'Contact', href: '/book-call' }
  ];

  const services = [
    
    { name: 'Graphic & Media Production', href: '/services/media-production' },
    { name: 'Web & App Development', href: '/services/web-development' },
    { name: 'Branding & Idenity', href: '/services/branding' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'SaaS Development', href: '/services/ui-ux-design' },
  ];

  const socialLinks = [
    // { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    // { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-black relative text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo Space */}
            <div className="mb-6">
              <img className='w-58' src="/Logo_White.png" alt="" />
              <div className="w-16 h-1 bg-orange-500 mt-2"></div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Buzzing ideas into reality. We design, build, and grow your digital presence with creativity and innovation.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>
                  3v/1 Prabhat Nagar sec.5,<br />
                  Udaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+917877571101" className="hover:text-orange-500 transition-colors">
                  +917877571101
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:hello@beeztech.studio" className="hover:text-orange-500 transition-colors">
                  hello@beeztech.studio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © 2024 BeezTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms-of-service" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;