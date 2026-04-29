import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Users,
  Target,
  Briefcase,
  Zap,
  Award,
  Globe,
  Settings,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  MessageSquare,
  Users2,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBanner from '../../assets/images/hero_hr.png';

const TrainingProgrammes = () => {
  const categories = [
    {
      title: "Communication Skills",
      desc: "Professional developmental skills for effective corporate interaction.",
      icon: MessageSquare,
      items: [
        'Communication Skills Mastery',
        'Advanced Presentation Skills',
        'Business Communication (Oral & Written)',
        'Active Listening Techniques',
        'Professional Body Language'
      ]
    },
    {
      title: "Leadership Excellence",
      desc: "Organizational behavioral aspects for current and future leaders.",
      icon: Target,
      items: [
        'High-Performance Team Building',
        'Strategic Planning & Execution',
        'Conflict Resolution Strategies',
        'Emotional Intelligence (EQ)',
        'Decision Making & Problem Solving'
      ]
    },
    {
      title: "Managerial Skills",
      desc: "Core management development skills for operational efficiency.",
      icon: Briefcase,
      items: [
        'Strategic Time Management',
        'Performance Appraisal Systems',
        'Effective Project Management',
        'Strategic Delegation Skills',
        'Organizational Change Management'
      ]
    },
    {
      title: "Mentoring & Coaching",
      desc: "Empowering teams through guidance and structured feedback.",
      icon: Users2,
      items: [
        'Executive Leadership Coaching',
        'Peer Mentoring Frameworks',
        'Constructive Feedback Techniques',
        'Career Development Planning',
        'Competency & Skill Assessment'
      ]
    },
    {
      title: "Supervisory Skills",
      desc: "Essential oversight and compliance management skills.",
      icon: ShieldCheck,
      items: [
        'Foundational Basic Supervision',
        'Efficient Work Allocation',
        'Discipline & Grievance Management',
        'Safety & Regulatory Compliance',
        'Professional Reporting & Documentation'
      ]
    },
    {
      title: "Specialized Workshops",
      desc: "Targeted programs for specific business needs.",
      icon: Zap,
      items: [
        'Customer Relationship Management (CRM)',
        'Strategic Negotiation Skills',
        'Ethics & Integrity in Business',
        'Diversity, Equity & Inclusion (DEI)',
        'Workplace Stress Management'
      ]
    }
  ];

  const technicalWorkshops = [
    "TQM & TPS (Toyota Production System)",
    "World Class Manufacturing (WCM)",
    "Lean & Agile Manufacturing",
    "ISO Awareness Programmes",
    "7 QC Tools & Statistical Analysis",
    "Six-Sigma Awareness",
    "Value Stream Mapping (VSM)"
  ];

  return (
    <div className="bg-slate-50 font-inter min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0">
           <img 
             src={heroBanner} 
             className="w-full h-full object-cover"
             alt="Training Banner"
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
               TRAINING <span className="text-blue-400">PROGRAMMES</span>
             </h1>
             <p className="text-white/70 text-base md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
               Nurturing corporate excellence and technical mastery through structured learning and behavioral transformation.
             </p>
           </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Corporate Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                Empowering Minds, <span className="text-blue-600">Enabling Growth.</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                As a prelude to conducting training programmes, we offer specialized services for undertaking **Training Needs Analysis** (TNA). Through structured interactions with HODs and managers, we deliver comprehensive reports that serve as the foundation for targeted skill development.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <BookOpen size={20} />
                  </div>
                  <span className="font-bold text-slate-900">Structured TNA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Clock size={20} />
                  </div>
                  <span className="font-bold text-slate-900">Custom Calendars</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Settings className="text-blue-600" />
                Technical Workshops (TTPs)
              </h3>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                Besides Management Development Programmes, we conduct specialized Technical Training in operational excellence:
              </p>
              <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                {technicalWorkshops.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMMES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase">Our Core Curriculum</h2>
            <p className="text-slate-500 text-sm">Comprehensive Management Development Programmes (MDPs) tailored for modern leadership.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <cat.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h4>
                <p className="text-slate-500 text-xs mb-8 leading-relaxed font-medium">{cat.desc}</p>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600">
                      <ChevronRight size={14} className="text-blue-600" />
                      <span className="text-xs font-bold tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
           <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                  Transform Your <span className="text-blue-400 italic">Workforce Potential.</span>
                </h3>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
                  Unlock organizational excellence with our specialized Management and Technical Development Programmes.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:scale-105 active:scale-95">
                  Start Training Today <ArrowRight size={24} />
                </Link>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default TrainingProgrammes;
