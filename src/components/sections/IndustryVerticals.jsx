import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Car, 
  Stethoscope, 
  Building2, 
  ShoppingBag, 
  Plane, 
  Zap, 
  ShieldCheck,
  Briefcase,
  Monitor,
  Database,
  Truck
} from 'lucide-react';

const IndustryVerticals = () => {
  const verticals = [
    {
      title: "Information Technology",
      desc: "Specialized in AI, Machine Learning, Cloud Infrastructure, and Full-stack Development roles.",
      icon: Monitor,
      color: "bg-blue-500",
      skills: ["Software Engineering", "Cybersecurity", "Data Science", "DevOps"]
    },
    {
      title: "Automotive & Manufacturing",
      desc: "Supporting the transition to EV and smart manufacturing with specialized engineering talent.",
      icon: Car,
      color: "bg-red-500",
      skills: ["R&D Engineering", "Supply Chain", "Quality Assurance", "Plant Management"]
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "Connecting medical professionals and researchers with leading hospitals and pharma labs.",
      icon: Stethoscope,
      color: "bg-emerald-500",
      skills: ["Clinical Research", "Nursing", "Diagnostics", "Pharma Sales"]
    },
    {
      title: "Banking & Financial Services",
      desc: "Robust staffing for FinTech, investment banking, and statutory compliance sectors.",
      icon: ShieldCheck,
      color: "bg-indigo-600",
      skills: ["Risk Management", "Investment Banking", "Fintech Dev", "Auditing"]
    },
    {
      title: "Real Estate & Infrastructure",
      desc: "Talent acquisition for large-scale urban development and commercial projects.",
      icon: Building2,
      color: "bg-amber-600",
      skills: ["Project Management", "Civil Engineering", "Architecture", "Sales"]
    },
    {
      title: "E-commerce & Retail",
      desc: "Fast-paced recruitment for digital marketplaces and supply chain logistics.",
      icon: ShoppingBag,
      color: "bg-pink-500",
      skills: ["Logistics", "Digital Marketing", "Category Management", "Operations"]
    },
    {
      title: "Energy & Utilities",
      desc: "Pioneering recruitment for renewable energy projects and traditional power systems.",
      icon: Zap,
      color: "bg-yellow-500",
      skills: ["Solar Tech", "Electrical Engineering", "Sustainability", "Grid Management"]
    },
    {
      title: "Aviation & Aerospace",
      desc: "Precision hiring for aircraft maintenance, flight operations, and aerospace engineering.",
      icon: Plane,
      color: "bg-sky-500",
      skills: ["AME", "Flight Operations", "Aerospace Design", "Ground Staff"]
    },
    {
      title: "Logistics & Transportation",
      desc: "Optimizing global supply chains with expert management and operational talent.",
      icon: Truck,
      color: "bg-orange-500",
      skills: ["Warehouse Mgmt", "Freight Forwarding", "Last Mile Delivery", "Fleet Ops"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <div className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            Industries We <span className="text-[#D97706]">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto"
          >
            With over two decades of experience, we provide specialized recruitment solutions across a diverse range of industry sectors.
          </motion.p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${v.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <v.icon size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {v.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {v.skills.map((skill, si) => (
                  <span key={si} className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-3 py-1 rounded-full border border-slate-100">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Ready to find your next hire in these sectors?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/client-enquiry'}
              className="bg-[#D97706] hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-xl"
            >
              Post a Requirement
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-all backdrop-blur-md border border-white/10"
            >
              Speak to an Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryVerticals;
