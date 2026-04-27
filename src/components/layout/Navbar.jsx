import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, X as XIcon } from '../ui/BrandIcons';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Home', 
      to: '/', 
      active: pathname === '/'
    },
    { 
      name: 'About Us', 
      to: '/about', 
      hasDropdown: true,
      items: [
        { label: 'Company Overview', to: '/about' },
        { label: 'Vision & Mission', to: '/about' },
        { label: 'Why Abhilekha', to: '/about' },
        { label: 'Management', to: '/about' }
      ]
    },
    { 
      name: 'Services', 
      to: '/services', 
      hasPlus: true,
      hasDropdown: true,
      items: [
        { label: 'IT Recruitment', to: '/it-recruitment' },
        { label: 'Non-IT Recruitment', to: '/non-it-recruitment' },
        { label: 'IT Staffing', to: '/services' },
        { label: 'Training Programmes', to: '/services' }
      ]
    },
    { 
      name: 'Candidates Zone', 
      to: '/careers',
      hasDropdown: true,
      items: [
        { label: 'Job Postings', to: '/careers' },
        { label: 'Careers', to: '/careers' },
        { label: 'Apply Form', to: '/careers#apply' }
      ]
    },
    { 
      name: 'Client Zone', 
      to: '/#clients',
      hasDropdown: true,
      items: [
        { label: 'Client Enquiry', to: '/contact' },
        { label: 'Industry Verticals', to: '/#services' },
        { label: 'Testimonials', to: '/#testimonials' }
      ]
    },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] font-inter">
      
      {/* Tier 1: Black Top Bar - Hidden on scroll */}
      {!isScrolled && (
        <div className="bg-gradient-to-r from-black via-slate-900 to-black text-white px-6 py-1 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                <Star size={9} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-white/90 text-[8px]">TOP RATED</span>
              </div>
              <span className="font-medium text-white/70">A Highly rated recruitment Agency by Google with <span className="text-white font-bold underline decoration-[#F29100]">4.9/5</span></span>
            </div>
            <div className="hidden md:flex items-center gap-5">
              <Facebook size={12} className="text-white/60 hover:text-[#F29100] transition-all cursor-pointer" />
              <Twitter size={12} className="text-white/60 hover:text-[#F29100] transition-all cursor-pointer" />
              <Linkedin size={12} className="text-white/60 hover:text-[#F29100] transition-all cursor-pointer" />
            </div>
          </div>
        </div>
      )}

      {/* Tier 2: Info Bar - Hidden on scroll */}
      {!isScrolled && (
        <div className="bg-white px-6 py-3 border-b border-slate-100">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
                 <img src={logo} alt="Icon" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[8px] md:text-[9px] text-slate-400 font-bold tracking-[0.2em] leading-none mb-1 uppercase">
                   ISO 9001:2008 Certified
                 </span>
                 <span className="font-black text-[#F29100] tracking-tighter leading-tight text-lg md:text-2xl">
                   Abhilekha <span className="text-slate-900">Information Pvt. Ltd.</span>
                 </span>
                 <span className="text-[10px] md:text-[12px] text-slate-400 font-medium italic mt-0.5 tracking-wide">
                   'we light up your career...'
                 </span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-[#F29100] border border-slate-100">
                  <Clock size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Office Hours</span>
                  <span className="text-sm font-black text-slate-900 leading-tight">9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-[#F29100] border border-slate-100">
                  <MapPin size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Location</span>
                  <span className="text-sm font-black text-slate-900 leading-tight">HYDERABAD & PUNE</span>
                </div>
              </div>
            </div>

            <button className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg text-slate-900 border border-slate-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      )}

      {/* Tier 3: Main Navigation */}
      <nav className={cn(
        "transition-all duration-500 px-6 bg-[#F29100] shadow-xl relative",
        isScrolled ? "py-1.5" : "py-2"
      )}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {isScrolled && (
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-8 w-8 object-contain bg-white rounded p-0.5" />
              <span className="text-white font-black text-sm uppercase tracking-tighter">Abhilekha <span className="text-slate-900">HR</span></span>
            </Link>
          )}

          <div className={cn(
            "hidden lg:flex items-center gap-0 relative z-10 w-full justify-center",
            isScrolled ? "lg:justify-end" : "lg:justify-end"
          )}>
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
                    "px-5 py-2 text-[12px] font-black uppercase tracking-[0.1em] transition-all flex items-center gap-1.5",
                    link.active ? "text-white" : "text-white/85 hover:text-white"
                  )}
                >
                  {link.name} {link.hasPlus && "+"}
                  {link.hasDropdown && <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
                </Link>

                {/* Dropdown Menu - Attractive & Premium */}
                {link.hasDropdown && (
                  <div className={cn(
                    "absolute top-full left-0 w-64 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-b-xl border-t-2 border-[#F29100] transition-all duration-300 origin-top overflow-hidden",
                    activeDropdown === link.name ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-0"
                  )}>
                    {link.items.map((item, i) => (
                      <Link 
                        key={i}
                        to={item.to}
                        className="block px-6 py-3.5 text-slate-600 hover:text-[#F29100] hover:bg-slate-50 text-[11px] font-black uppercase tracking-widest border-b border-slate-50 last:border-0 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {isScrolled && (
            <button className="lg:hidden w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg text-white border border-white/20" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white p-8 flex flex-col gap-4 lg:hidden shadow-2xl border-t border-slate-50 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between py-2 border-b border-slate-50" onClick={() => link.hasDropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}>
                    <Link 
                      to={link.to}
                      className={cn(
                        "text-lg font-black uppercase tracking-widest",
                        link.active ? "text-[#F29100]" : "text-slate-900"
                      )}
                      onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && <ChevronDown size={20} className={cn("text-slate-400 transition-transform", activeDropdown === link.name && "rotate-180")} />}
                  </div>
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="bg-slate-50 py-2 mt-1 rounded-lg">
                      {link.items.map((item, i) => (
                        <Link key={i} to={item.to} className="block px-6 py-3 text-slate-500 text-sm font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
