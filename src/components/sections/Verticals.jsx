import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="verticals" className="py-20 bg-[#FDF8F1] overflow-hidden font-inter border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-3 py-1 bg-[#D97706]/10 text-[#D97706] rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-4"
           >
             Industry Expertise
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-[24px] md:text-[32px] font-bold text-[#020C1F] mb-4 tracking-tight"
           >
             INDUSTRY <span className="text-[#D97706]">VERTICALS</span>
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-slate-600 text-[13px] md:text-[14px] max-w-xl mx-auto leading-relaxed"
           >
             Providing specialized HR solutions across diverse economic sectors with precision and deep domain expertise.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {verticals.map((v, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="group relative h-[320px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer"
             >
                <img 
                  src={v.image} 
                  alt={v.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.7]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020C1F]/90 via-transparent to-transparent p-6 flex flex-col justify-end transition-opacity duration-500">
                   <div className="w-10 h-10 bg-[#D97706] rounded-xl flex items-center justify-center mb-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                      <v.icon className="text-white w-5 h-5" />
                   </div>
                   <h3 className="text-[18px] font-bold text-white mb-1 tracking-tight drop-shadow-lg">{v.title}</h3>
                   <p className="text-white/80 text-[12px] font-medium leading-relaxed max-h-0 group-hover:max-h-12 overflow-hidden transition-all duration-500 drop-shadow-md">
                     {v.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
