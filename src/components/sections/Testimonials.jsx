import React from 'react';
import { Star, Quote } from 'lucide-react';
import testimonial1 from '../../assets/images/img_9252bb11.jpg';
import testimonial2 from '../../assets/images/img_bf5f7d11.jpg';
import testimonial3 from '../../assets/images/img_df00f7ba.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "HR Director, Tech Global",
      type: "Client",
      text: "Abhilekha has been our primary recruitment partner for 5 years. Their understanding of technical roles is unparalleled in the industry.",
      rating: 5,
      image: testimonial1
    },
    {
      name: "Anita Sharma",
      role: "Software Architect",
      type: "Candidate",
      text: "The transition from my previous role was seamless. Abhilekha's consultants really take the time to understand your career goals.",
      rating: 5,
      image: testimonial2
    },
    {
      name: "David Wilson",
      role: "COO, Manufacturing Corp",
      type: "Client",
      text: "Their executive search team found us a plant manager in record time. Highly professional and results-driven.",
      rating: 5,
      image: testimonial3
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-50 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Wall of Love
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">WHAT OUR <span className="text-primary">PARTNERS SAY</span></h2>
          <p className="text-slate-500 text-[16px] max-w-2xl mx-auto">Trusted by thousands of candidates and hundreds of global enterprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative group">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-all">
                <Quote size={24} />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-[16px] font-black text-slate-900 leading-none mb-1">{t.name}</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{t.role}</p>
                </div>
                <div className="ml-auto bg-slate-50 px-2.5 py-0.5 rounded-full text-[8px] font-black text-primary uppercase tracking-widest border border-slate-100">
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
