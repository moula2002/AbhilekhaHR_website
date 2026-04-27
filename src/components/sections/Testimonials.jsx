import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "HR Director, Tech Global",
      type: "Client",
      text: "Abhilekha has been our primary recruitment partner for 5 years. Their understanding of technical roles is unparalleled in the industry.",
      rating: 5
    },
    {
      name: "Anita Sharma",
      role: "Software Architect",
      type: "Candidate",
      text: "The transition from my previous role was seamless. Abhilekha's consultants really take the time to understand your career goals.",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "COO, Manufacturing Corp",
      type: "Client",
      text: "Their executive search team found us a plant manager in record time. Highly professional and results-driven.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             Wall of Love
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">WHAT OUR <span className="text-primary">PARTNERS SAY</span></h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">Trusted by thousands of candidates and hundreds of global enterprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((t, idx) => (
             <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative group">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-all">
                   <Quote size={32} />
                </div>
                <div className="flex gap-1 mb-6">
                   {[...Array(t.rating)].map((_, i) => (
                     <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                   ))}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-primary">
                      {t.name[0]}
                   </div>
                   <div>
                      <h4 className="text-lg font-black text-slate-900 leading-none mb-1">{t.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                   </div>
                   <div className="ml-auto bg-slate-50 px-3 py-1 rounded-full text-[9px] font-black text-primary uppercase tracking-widest border border-slate-100">
                      {t.type}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
