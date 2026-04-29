import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from '../ui/BrandIcons';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', to: '/', active: pathname === '/' },
    { name: 'About Us', to: '/about', active: pathname === '/about' },
    {
      name: 'Services',
      hasDropdown: true,
      items: [
        { label: 'IT Recruitment', to: '/it-recruitment' },
        { label: 'Non-IT Recruitment', to: '/non-it-recruitment' },
        { label: 'IT Staffing', to: '/it-staffing' },
        { label: 'Training Programmes', to: '/training-programmes' }
      ]
    },
    {
      name: 'Client Zone',
      hasDropdown: true,
      items: [
        { label: 'Client Enquiry', to: '/contact' },
        { label: 'Industry Verticals', to: '/#services' },
      ]
    },
    { name: 'Contact Us', to: '/contact', active: pathname === '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] font-inter transition-all duration-300">
      {/* Top Bar - Only visible when not scrolled */}
      <div className={cn(
        "bg-black text-white/80 text-xs py-2 px-6 transition-all duration-300 overflow-hidden",
        isScrolled ? "h-0 py-0 opacity-0" : "h-auto opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@abhilekha.com" className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
              <Mail size={14} className="text-[#D97706]" />
              <span className="hidden lg:inline">info@abhilekha.com</span>
            </a>
            <a href="mailto:abhilekhainformation@gmail.com" className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
              <Mail size={14} className="text-[#D97706]" />
              <span className="hidden xl:inline">abhilekhainformation@gmail.com</span>
            </a>
            <a href="tel:+918023400510" className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
              <Phone size={14} className="text-[#D97706]" />
              <span className="hidden sm:inline">+91 80 2340 0510</span>
            </a>
            <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-6">
              <Clock size={14} className="text-[#D97706]" />
              <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-block text-white/50 mr-2">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/AbhilekhaJobs" target="_blank" rel="noopener noreferrer"><Facebook size={14} className="hover:text-[#D97706] transition-all cursor-pointer" /></a>
              <a href="https://x.com/AbhikelhaInfo" target="_blank" rel="noopener noreferrer"><Twitter size={14} className="hover:text-[#D97706] transition-all cursor-pointer" /></a>
              <a href="https://in.linkedin.com/company/abhilekha-information-pvt-ltd---india" target="_blank" rel="noopener noreferrer"><Linkedin size={14} className="hover:text-[#D97706] transition-all cursor-pointer" /></a>
              <a href="https://www.instagram.com/popular/abhilekha-information-pvt-ltd/" target="_blank" rel="noopener noreferrer"><Instagram size={14} className="hover:text-[#D97706] transition-all cursor-pointer" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={cn(
        "bg-white border-b border-slate-100 transition-all duration-300 shadow-sm",
        isScrolled ? "py-2 shadow-md bg-white/95 backdrop-blur-md" : "py-4"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <img 
              src={logo} 
              alt="Abhilekha Logo" 
              className={cn(
                "object-contain transition-all duration-300",
                isScrolled ? "h-10" : "h-12 md:h-16"
              )} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.to}
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-wide transition-all flex items-center gap-1.5 py-2",
                    link.active ? "text-[#D97706]" : "text-slate-700 hover:text-[#D97706]"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className={cn(
                      "transition-transform duration-300", 
                      activeDropdown === link.name ? "rotate-180 text-[#D97706]" : "text-slate-400 group-hover:text-[#D97706]"
                    )} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className={cn(
                    "absolute top-full left-0 w-60 bg-white shadow-xl border-t-[3px] border-[#D97706] transition-all duration-200 origin-top overflow-hidden",
                    activeDropdown === link.name ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-0"
                  )}>
                    <div className="py-2">
                      {link.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.to}
                          className="block px-5 py-3 text-slate-600 hover:text-[#D97706] hover:bg-orange-50/50 text-[13px] font-medium transition-colors border-b border-slate-50 last:border-0"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/careers" 
              className="hidden lg:flex items-center gap-2 bg-black hover:bg-[#D97706] text-white px-6 py-2.5 rounded text-[13px] font-bold uppercase tracking-wide transition-all duration-300"
            >
              Jobs Opening
              <ArrowRight size={16} />
            </Link>

            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded text-slate-900 transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[60px] bg-black/50 backdrop-blur-sm z-40 transition-opacity lg:hidden",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={cn(
            "absolute top-0 right-0 w-[85vw] max-w-[400px] h-screen bg-white shadow-2xl transition-transform duration-300 flex flex-col",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={e => e.stopPropagation()}
        >
          <div className="overflow-y-auto flex-1 p-6 pb-24">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-100 pb-4">
                  <div 
                    className="flex items-center justify-between" 
                    onClick={() => link.hasDropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    <Link
                      to={link.to}
                      className={cn(
                        "text-lg font-bold uppercase tracking-wide",
                        link.active ? "text-[#D97706]" : "text-slate-900"
                      )}
                      onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <ChevronDown size={20} className={cn(
                        "text-slate-400 transition-transform", 
                        activeDropdown === link.name && "rotate-180 text-[#D97706]"
                      )} />
                    )}
                  </div>
                  
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-[#D97706]/20">
                      {link.items.map((item, i) => (
                        <Link 
                          key={i} 
                          to={item.to} 
                          className="text-slate-600 text-[15px] font-medium py-1" 
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link 
                to="/careers" 
                className="flex items-center justify-center gap-2 bg-[#D97706] text-white px-6 py-3.5 rounded text-[15px] font-bold uppercase tracking-wide mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jobs Opening
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 flex flex-col gap-4 mt-auto">
            <a href="tel:+918023400510" className="flex items-center gap-3 text-slate-600 hover:text-[#D97706]">
              <Phone size={18} className="text-[#D97706]" />
              <span className="font-medium">+91 80 2340 0510</span>
            </a>
            <a href="mailto:info@abhilekha.com" className="flex items-center gap-3 text-slate-600 hover:text-[#D97706]">
              <Mail size={18} className="text-[#D97706]" />
              <span className="font-medium text-sm">info@abhilekha.com</span>
            </a>
            <a href="mailto:abhilekhainformation@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-[#D97706]">
              <Mail size={18} className="text-[#D97706]" />
              <span className="font-medium text-sm truncate">abhilekhainformation@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/AbhilekhaJobs" target="_blank" rel="noopener noreferrer"><Facebook size={18} className="text-slate-400 hover:text-[#D97706] transition-colors" /></a>
              <a href="https://x.com/AbhikelhaInfo" target="_blank" rel="noopener noreferrer"><Twitter size={18} className="text-slate-400 hover:text-[#D97706] transition-colors" /></a>
              <a href="https://in.linkedin.com/company/abhilekha-information-pvt-ltd---india" target="_blank" rel="noopener noreferrer"><Linkedin size={18} className="text-slate-400 hover:text-[#D97706] transition-colors" /></a>
              <a href="https://www.instagram.com/popular/abhilekha-information-pvt-ltd/" target="_blank" rel="noopener noreferrer"><Instagram size={18} className="text-slate-400 hover:text-[#D97706] transition-colors" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
