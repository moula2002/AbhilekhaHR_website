import React from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import localImageHero1 from '../../assets/images/img_ae481ea0.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-44 pb-20 overflow-hidden bg-slate-50 font-outfit">
      {/* Static Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full border border-slate-200 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">ISO 9001:2008 Certified Company</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
              Empowering Businesses with <span className="text-accent">Elite Talent</span> & Strategic HR.
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Abhilekha Information Pvt. Ltd. is Bangalore's premier HR partner, bridging the gap between global visionaries and top-tier talent since 2004.
            </p>

            <div className="flex flex-wrap gap-6 mb-14">
              <Link 
                to="/services" 
                className="bg-[#F29100] hover:bg-[#D97706] text-white px-10 py-4.5 rounded-2xl font-black text-xl flex items-center gap-3 transition-all shadow-[0_20px_50px_-15px_rgba(242,145,0,0.5)] hover:scale-105 active:scale-95 border-2 border-white/10"
              >
                Explore Services <ArrowUpRight className="w-7 h-7" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-[#0F172A] hover:bg-slate-800 text-white px-10 py-4.5 rounded-2xl font-black text-xl transition-all shadow-[0_20px_50px_-15px_rgba(15,23,42,0.4)] hover:scale-105 active:scale-95 border-2 border-white/10"
              >
                Connect With Us
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-200">
              <div className="space-y-1">
                <div className="text-2xl font-black text-primary">20+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years Legacy</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-black text-primary">2,00,000+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Placements</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-black text-primary">250+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Clients</div>
              </div>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={localImageHero1}
                alt="Modern Corporate Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-12 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 flex flex-col gap-2 z-20">
              <div className="text-4xl font-black text-primary">20+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years of Excellence</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

