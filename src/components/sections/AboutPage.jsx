import React from 'react';
import { Target, Eye, Award, CheckCircle2, Mail } from 'lucide-react';
import { Linkedin, Twitter } from '../ui/BrandIcons';
import { motion } from 'framer-motion';
import localImageAboutPage1 from '../../assets/images/img_82895828.jpg';
import localImageAboutPage2 from '../../assets/images/img_7772b6fd.jpg';
import localImageAboutPage3 from '../../assets/images/img_d15b6517.jpg';
import localImageAboutPage4 from '../../assets/images/img_8b0c859a.jpg';

const AboutPage = () => {
  const management = [
    {
      name: "Shivaji",
      role: "Managing Director",
      initials: "AP",
      image: localImageAboutPage4,
      bio: "Over 20 years of experience in global recruitment and HR strategy."
    },
    {
      name: "Management Team",
      role: "Operations Head",
      initials: "CP",
      image: localImageAboutPage2,
      bio: "Specializing in operational excellence and large-scale placements."
    },
    {
      name: "Executive Team",
      role: "Technical Recruitment Head",
      initials: "JNR",
      image: localImageAboutPage3,
      bio: "Focusing on niche IT recruitment and technical consulting."
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Banner */}
      <section className="relative h-64 md:h-96 flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
             src={localImageAboutPage1} 
             className="w-full h-full object-cover"
             alt="About Banner"
           />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
           <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight uppercase">ABOUT <span className="text-accent">US</span></h1>
           <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">Discover the legacy of Abhilekha Information Pvt. Ltd. and our commitment to elite recruitment.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8">
                  <Eye className="w-16 h-16 text-primary/10 group-hover:text-primary/20 transition-all" />
               </div>
               <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                     <Eye size={20} />
                  </div>
                  Our Vision
               </h2>
               <p className="text-slate-600 leading-relaxed text-lg italic">
                  "To be the most trusted global partner in human resource solutions, empowering organizations through precision-engineered recruitment and strategic talent management."
               </p>
            </div>

            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8">
                  <Target className="w-16 h-16 text-accent/10 group-hover:text-accent/20 transition-all" />
               </div>
               <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                     <Target size={20} />
                  </div>
                  Our Mission
               </h2>
               <p className="text-slate-600 leading-relaxed text-lg">
                  "To bridge the gap between world-class companies and elite talent by providing transparent, efficient, and innovative recruitment services that drive sustainable growth for both clients and candidates."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Abhilekha */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why <span className="text-accent italic">Abhilekha?</span></h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">We don't just fill positions; we build the future of your organization.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Huge Databank", desc: "Access to a massive, verified database of candidates across all major sectors." },
              { title: "Qualified Team", desc: "Highly experienced recruitment specialists who understand deep domain requirements." },
              { title: "Quick TAT", desc: "Unmatched Turn Around Time on closures to meet your urgent delivery pressures." },
              { title: "Niche Hiring", desc: "Expertise in Bulk, Fresher, and Niche technical hiring with precision." },
              { title: "Flexible Models", desc: "Offering Permanent, C2H, and Contract Staffing to suit your project needs." },
              { title: "Zero Cost Interviews", desc: "Conduct interviews at our office with dedicated support at zero additional cost." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-accent rounded-xl mb-6 flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our <span className="text-[#0F172A]">Leadership</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Guided by visionaries who have shaped the recruitment landscape for over two decades.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {management.map((person, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white font-black text-xl border border-white/20">
                    {person.initials}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{person.name}</h3>
                <p className="text-[#F29100] font-bold text-sm uppercase tracking-widest mb-4">{person.role}</p>
                <p className="text-slate-500 leading-relaxed mb-6">{person.bio}</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
