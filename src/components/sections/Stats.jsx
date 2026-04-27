import React from 'react';
import { Award, Target, Globe, ArrowUpRight, Zap } from 'lucide-react';

const stats = [
  { label: "Years of Legacy", value: "20+", icon: Award, sub: "Since 2004" },
  { label: "Success Placements", value: "2,00,000+", icon: Target, sub: "Across All Sectors" },
  { label: "Global Clients", value: "200+", icon: Globe, sub: "Fortune 500 & Startups" },
  { label: "Expert Associates", value: "100+", icon: Zap, sub: "Dedicated Consultants" },
];

const Stats = () => {
  return (
    <section className="relative z-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
          {/* Decorative background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/30 transition-colors duration-1000" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center md:items-start"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 transition-all hover:bg-accent hover:border-accent group/icon shadow-xl">
                   <stat.icon className="w-8 h-8 text-accent group-hover/icon:text-white transition-colors" />
                </div>
                <div className="text-5xl md:text-6xl font-outfit font-black text-white mb-4 tracking-tighter">
                   {stat.value}
                </div>
                <div className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{stat.label}</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
             <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                   <Zap className="w-8 h-8 text-accent animate-pulse" />
                </div>
                <p className="text-white/60 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                   Empowering global businesses with <span className="text-white font-black italic underline decoration-accent decoration-4 underline-offset-8">Unrivaled Expertise</span> since 2004.
                </p>
             </div>
             <a href="#about" className="group flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:bg-accent hover:text-white shadow-xl">
                Learn More <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

