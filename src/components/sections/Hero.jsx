import React from 'react';
import { ArrowUpRight, Users, Award, Target, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../../assets/images/hero_hr.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020C1F] font-inter">
      {/* Dynamic Background Decorations */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-10 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="space-y-6">
              <h1 className="text-[24px] md:text-[38px] font-bold leading-[1.2] tracking-tight mx-auto lg:mx-0">
                We Help You Achieve <span className="text-[#D97706]">Success</span> With Our <span className="text-blue-400">Manpower Solutions</span>
              </h1>
              
              <p className="text-[11px] md:text-[14px] text-white/70 max-w-2xl leading-[1.6] font-normal mx-auto lg:mx-0">
                From building teams on your payroll to contractual and remote teams, from a people first approach to technology driven outsourcing solutions, we are your success partners.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 w-full lg:w-auto">
              <Link 
                to="/contact" 
                className="group relative inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-3.5 rounded-xl font-semibold text-[18px] transition-all hover:shadow-[0_0_40px_rgba(217,119,6,0.3)] hover:scale-105 active:scale-95 mx-auto lg:mx-0 overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" 
                  initial={false}
                />
                <span className="relative z-10">Talk To Us</span>
              </Link>
            </div>

          </motion.div>

          {/* Right Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Circular Image Container */}
            <div 
              className="relative w-full aspect-square md:aspect-[1/1] max-w-[500px] ml-auto"
            >
              {/* Decorative Gold Circles */}
              <div className="absolute -top-10 -left-10 w-[120%] h-[120%] border border-yellow-400/20 rounded-full pointer-events-none" />
              
              {/* The Blue Dot */}
              <div className="absolute top-1/2 -left-4 w-10 h-10 bg-blue-600 rounded-full z-20 shadow-[0_0_20px_rgba(37,99,235,0.6)]" />
              
              {/* Image with Circular Mask */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[15px] border-white/5 shadow-2xl">
                <img 
                  src={heroImg} 
                  alt="Manpower Solutions" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
              </div>

              {/* Enhanced Glow Decoration */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-yellow-400/20 rounded-t-full blur-2xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
