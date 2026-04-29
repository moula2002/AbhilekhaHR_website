import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor,
  Users,
  Briefcase,
  ChevronRight,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import heroBanner from '../../assets/images/hero_hr.png';
import staffingImg from '../../assets/images/img_553a5e3c.jpg';

const ITStaffing = () => {
  const [activeTab, setActiveTab] = useState('Recruitment');

  const staffingModels = [
    {
      title: "Contract Staffing",
      desc: "Flexible, project-based talent to handle peak workloads and specialized technical requirements without long-term overhead.",
      icon: Briefcase
    },
    {
      title: "Permanent Hiring",
      desc: "Full-cycle recruitment to find the perfect cultural and technical fit for your core engineering and leadership teams.",
      icon: Users
    },
    {
      title: "Managed Services",
      desc: "End-to-end management of specific IT functions or projects, allowing you to focus on your core business strategy.",
      icon: Monitor
    }
  ];

  const services = [
    { 
      id: 'Recruitment', 
      label: 'Recruitment',
      icon: Search,
      content: "We map your organization's unique requirements with our deep talent pool, ensuring a seamless match that alleviates delivery pressures and fuels growth."
    },
    { 
      id: 'Staffing', 
      label: 'IT Staffing',
      icon: Users,
      content: "Tailored solutions including contract-to-hire and direct placement, providing the right technical expertise exactly when your projects demand it."
    },
    { 
      id: 'Consulting', 
      label: 'IT Consulting',
      icon: Monitor,
      content: "Strategic guidance to align technology with your business goals, from digital transformation to complex infrastructure optimization."
    }
  ];

  return (
    <div className="bg-slate-50 font-inter">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0">
           <img 
             src={heroBanner} 
             className="w-full h-full object-cover"
             alt="IT Staffing"
           />
           <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8">
               IT <span className="text-blue-400">STAFFING</span>
             </h1>
             <p className="text-white/70 text-base md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
               Empowering global enterprises with world-class technology talent and strategic workforce solutions since 2004.
             </p>
           </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES (Redesigned Tabs) */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Technical Talent <span className="text-blue-600">Perfected.</span></h2>
                <p className="text-slate-500 text-base leading-relaxed">
                  We bridge the gap between complex technical requirements and the exceptional talent needed to execute them.
                </p>
              </div>

              <div className="space-y-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={cn(
                      "w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-5",
                      activeTab === s.id 
                        ? "bg-white border-blue-100 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/10" 
                        : "bg-transparent border-transparent grayscale opacity-60 hover:opacity-100"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                      activeTab === s.id ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                    )}>
                      <s.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{s.label}</h4>
                      <AnimatePresence mode="wait">
                        {activeTab === s.id && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-slate-500 text-sm leading-relaxed"
                          >
                            {s.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white aspect-[4/5]">
                <img src={staffingImg} alt="IT Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-[2rem] text-white shadow-2xl hidden xl:block">
                <div className="text-5xl font-black mb-2">20+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-100">Years of Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. STAFFING MODELS */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">Flexible Engagement <span className="text-blue-400">Models</span></h2>
            <p className="text-slate-400 text-base">Adapting to your project lifecycle and business objectives.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {staffingModels.map((model, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <model.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{model.title}</h4>
                <p className="text-slate-400 leading-relaxed text-xs">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
           <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                  Scale Your <span className="text-blue-400 italic">Technical Excellence.</span>
                </h3>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
                  Connect with India's most trusted IT staffing partner to build your dream engineering team.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:scale-105 active:scale-95">
                  Get Started Today <ArrowRight size={24} />
                </Link>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default ITStaffing;