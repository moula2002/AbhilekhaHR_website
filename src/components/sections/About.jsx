import React from 'react';
import { Target, Award, CheckCircle2 } from 'lucide-react';
import localImageAbout1 from '../../assets/images/img_3dd0e930.jpg';

const highlights = [
  "20+ Years of Excellence",
  "ISO 9001:2008 Certified",
  "350+ Trained Consultants",
  "Network across PAN India",
  "24x7 Dedicated Service",
  "IT & Non-IT Specialization"
];

const values = [
  { 
    title: "Our Vision", 
    desc: "Aim to be the most recognized Consulting Company in India. Abhilekha's Life Time Goal is to become an International HR Service Provider.",
    icon: Target
  },
  { 
    title: "Our Mission", 
    desc: "We Enrich People in Corporate World by Providing Value Added and Dedicated Service. We create Customer Delight through Quality Service and Timely Delivery.",
    icon: Award
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative font-outfit">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
             <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-slate-50">
                   <img 
                    src={localImageAbout1} 
                    alt="Office Environment" 
                    className="w-full aspect-video lg:aspect-[4/5] object-cover" 
                   />
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-2xl text-white z-20 max-w-[240px]">
                   <div className="text-5xl font-black mb-2 text-accent">20+</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-white/60">
                     Years of HR Excellence in India.
                   </div>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
             <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
               The Abhilekha Legacy
             </div>
             
             <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
               Bridging the Gap Between <span className="text-primary italic">Ambition</span> and Achievement.
             </h3>
             
             <div className="space-y-6 mb-10">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Abhilekha Information Pvt. Ltd. was established in the year 2004, having its Corporate Office in the Silicon City of Bangalore.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Formed with the idea of providing complete HR Solutions across Corporate Sectors, we aim to be a one-stop solution for all HR needs. With a network of 350+ professionally trained recruitment consultants working 24x7 across PAN India, we render exceptional service to our valuable clients.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {values.map((v, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 border border-slate-100">
                        <v.icon className="w-6 h-6 text-accent" />
                     </div>
                     <h4 className="text-lg font-black text-slate-900 mb-2">{v.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
             </div>

             <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                     <span className="text-slate-900 font-bold text-sm tracking-tight">{h}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

