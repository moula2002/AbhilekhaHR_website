import React from 'react';
import { 
  Factory, 
  Car, 
  Code2, 
  Cpu, 
  Building2, 
  HeartPulse, 
  ShoppingBag, 
  Truck 
} from 'lucide-react';
import localImageVerticals1 from '../../assets/images/img_36184299.jpg';
import localImageVerticals2 from '../../assets/images/img_39d73c4c.jpg';
import localImageVerticals3 from '../../assets/images/img_b535f1f6.jpg';
import localImageVerticals4 from '../../assets/images/img_797b2b50.jpg';
import localImageVerticals5 from '../../assets/images/img_0146ed96.jpg';
import localImageVerticals6 from '../../assets/images/img_b2fad0d2.jpg';
import localImageVerticals7 from '../../assets/images/img_2ab7d7b7.jpg';
import localImageVerticals8 from '../../assets/images/img_f851db86.jpg';


const verticals = [
  {
    title: "Manufacturing",
    desc: "Precision engineering and industrial workforce solutions.",
    icon: Factory,
    image: localImageVerticals1
  },
  {
    title: "Automotive",
    desc: "End-to-end recruitment for the mobility sector.",
    icon: Car,
    image: localImageVerticals2
  },
  {
    title: "IT & Software",
    desc: "Elite tech talent for digital transformation.",
    icon: Code2,
    image: localImageVerticals3
  },
  {
    title: "Healthcare",
    desc: "Specialized medical and administrative staffing.",
    icon: HeartPulse,
    image: localImageVerticals4
  },
  {
    title: "Infrastructure",
    desc: "Powering construction and civil engineering projects.",
    icon: Building2,
    image: localImageVerticals8
  },
  {
    title: "Retail & E-commerce",
    desc: "Scalable solutions for the consumer market.",
    icon: ShoppingBag,
    image: localImageVerticals5
  },
  {
    title: "Logistics",
    desc: "Expert supply chain and fleet management talent.",
    icon: Truck,
    image: localImageVerticals6
  },
  {
    title: "Aerospace",
    desc: "Niche recruitment for aviation and defence.",
    icon: Cpu,
    image: localImageVerticals7
  }
];

const Verticals = () => {
  return (
    <section id="verticals" className="py-24 bg-slate-50 overflow-hidden font-outfit">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             Industry Expertise
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">INDUSTRY <span className="text-primary italic">VERTICALS</span></h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">Providing specialized HR solutions across diverse economic sectors with precision and deep domain expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {verticals.map((v, idx) => (
             <div key={idx} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                   <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <v.icon className="text-white w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{v.title}</h3>
                   <p className="text-white/60 text-sm font-medium leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">{v.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
