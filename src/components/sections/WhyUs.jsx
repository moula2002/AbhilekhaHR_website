import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import presentationImg from '../../assets/images/why_us_presentation.png';
import { 
  Users, 
  TrendingUp, 
  UserCheck, 
  Target, 
  Heart, 
  Shield 
} from 'lucide-react';

const WhyUs = () => {
  const cards = [
    {
      title: "High Joining Ratio",
      desc: "85% Joining Ratio - maintained consistently across customers",
      icon: Users
    },
    {
      title: "Superb Growth",
      desc: "81% Average - YoY Growth since 2004",
      icon: TrendingUp
    },
    {
      title: "Equal Opportunity",
      desc: "70% Women Workforce - mentored through D&I Program",
      icon: UserCheck
    },
    {
      title: "High Success Ratio",
      desc: "1000+ consultants - placed in their dream jobs annually",
      icon: Target
    },
    {
      title: "Responsibilities",
      desc: "Corporate Social Responsibility - Employability as our theme",
      icon: Heart
    },
    {
      title: "Specialized Onboarding",
      desc: "DEDICATED Account Managers, Consultant Management",
      icon: Shield
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Why Choose <span className="text-[#2563EB]">Abhilekha ?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Trusted by 500+ global clients for delivering seamless staffing, payroll, and 9 core HR outsourcing services.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Image with Blue Decoration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-blue-50 -translate-y-4 translate-x-4 rounded-xl -z-10 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={presentationImg} 
                alt="Presentation" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Grid of Cards */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {cards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <card.icon size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-[16px] font-bold text-slate-900 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[11px] md:text-[12px] text-slate-400 font-medium leading-tight">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="inline-block bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-blue-200"
              >
                Reach Us Now
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
