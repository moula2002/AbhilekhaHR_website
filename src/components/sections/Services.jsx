import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Monitor,
  Users,
  Settings,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import localImageServices1 from '../../assets/images/img_03aa3c0c.jpg';
import localImageServices2 from '../../assets/images/img_e7684116.jpg';
import localImageServices3 from '../../assets/images/img_553a5e3c.jpg';
import localImageServices4 from '../../assets/images/img_5787d7c6.jpg';
import localImageServices5 from '../../assets/images/img_398e43cb.jpg';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Recruitment');
  const [activeTraining, setActiveTraining] = useState('COMMUNICATION');

  const tabs = [
    { 
      id: 'Recruitment', 
      label: 'Recruitment:',
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-48 rounded-2xl overflow-hidden mb-6">
            <img src={localImageServices2} alt="Recruitment" className="w-full h-full object-cover" />
          </div>
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            We understand the total Recruitment process of your organization and map it with ours and then bring the right resources to your organization which will relieve of the delivery pressures.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our Pre-Selection process of Resumes has Always been appreciated by our clients. The Clients get the advantage through our consistent improvised processes.
          </p>
        </div>
      )
    },
    { 
      id: 'Staffing', 
      label: 'Staffing:',
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-48 rounded-2xl overflow-hidden mb-6">
            <img src={localImageServices3} alt="Staffing" className="w-full h-full object-cover" />
          </div>
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            IT- Staffing solutions tailored to your project needs.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We provide flexible staffing models including contract, contract-to-hire, and direct placement to ensure you have the right technical expertise exactly when you need it.
          </p>
        </div>
      )
    },
    { 
      id: 'IT Consulting', 
      label: 'IT Consulting:',
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-48 rounded-2xl overflow-hidden mb-6">
            <img src={localImageServices4} alt="IT Consulting" className="w-full h-full object-cover" />
          </div>
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            Strategic IT guidance for modern businesses.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our consultants work with you to align technology with your business goals. From digital transformation strategies to infrastructure optimization.
          </p>
        </div>
      )
    },
    { 
      id: 'Management Consultant', 
      label: 'Management Consultant:',
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-48 rounded-2xl overflow-hidden mb-6">
            <img src={localImageServices5} alt="Management Consulting" className="w-full h-full object-cover" />
          </div>
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            Optimizing your organizational performance.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We offer expert consultation in organizational behavior, policy development, and operational efficiency. Helping your management team drive peak performance.
          </p>
        </div>
      )
    }
  ];

  const trainingProgrammes = {
    'COMMUNICATION': [
      'Communication skills',
      'Presentation skills',
      'Business Communication Oral and written',
      'Listening skills',
      'Body Language'
    ],
    'LEADERSHIP': [
      'Team Building',
      'Strategic Planning',
      'Conflict Resolution',
      'Emotional Intelligence',
      'Decision Making'
    ],
    'MANAGERIAL SKILLS': [
      'Time Management',
      'Performance Appraisal',
      'Project Management',
      'Delegation Skills',
      'Change Management'
    ],
    'MENTORING & COACHING': [
      'Executive Coaching',
      'Peer Mentoring',
      'Feedback Techniques',
      'Career Development',
      'Skill Assessment'
    ],
    'SUPERVISORY SKILLS': [
      'Basic Supervision',
      'Work Allocation',
      'Discipline Management',
      'Safety Compliance',
      'Reporting & Documentation'
    ],
    'OTHER PROGRAMMES': [
      'Customer Relationship Management',
      'Negotiation Skills',
      'Ethics in Business',
      'Diversity & Inclusion',
      'Stress Management'
    ]
  };

  const trainingCategories = [
    { id: 'COMMUNICATION', label: 'COMMUNICATION (Professional Developmental Skills)' },
    { id: 'LEADERSHIP', label: 'LEADERSHIP (Organization Behavioural Aspects)' },
    { id: 'MANAGERIAL SKILLS', label: 'MANAGERIAL SKILLS ( Management Development Skills)' },
    { id: 'MENTORING & COACHING', label: 'MENTORING & COACHING' },
    { id: 'SUPERVISORY SKILLS', label: 'SUPERVISORY SKILLS' },
    { id: 'OTHER PROGRAMMES', label: 'OTHER PROGRAMMES' }
  ];

  return (
    <div className="bg-white font-outfit">
      
      {/* ===== HERO BANNER ===== */}
      <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
           <img 
             src={localImageServices1} 
             className="w-full h-full object-cover grayscale brightness-[0.2]"
             alt="Services Banner"
           />
           <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
           <h1 className="text-4xl md:text-6xl font-black text-white tracking-[0.2em] uppercase">SERVICES</h1>
        </div>
      </section>

      {/* ===== MAIN SERVICES INTRO ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
               <img 
                 src={localImageServices3} 
                 alt="Working Professional" 
                 className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-100"
               />
            </div>
            <div>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Services</h2>
               <p className="text-[#F29100] font-black uppercase tracking-[0.2em] text-xs mb-6">Our focus of services includes</p>
               <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-4 text-slate-600 font-bold text-lg">
                     <div className="w-2 h-2 bg-[#F29100] rounded-full" />
                     Recruitment IT and Non-IT
                  </li>
                  <li className="flex items-center gap-4 text-slate-600 font-bold text-lg">
                     <div className="w-2 h-2 bg-[#F29100] rounded-full" />
                     IT- Staffing
                  </li>
               </ul>

               {/* Tabs Navigation */}
               <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm mb-12">
                  <div className="flex flex-wrap bg-slate-50 border-b border-slate-100">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "px-6 py-4 text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all",
                          activeTab === tab.id 
                            ? "bg-white text-[#F29100] border-b-2 border-[#F29100]" 
                            : "text-slate-500 hover:text-slate-900"
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="p-8 bg-white min-h-[220px]">
                     {tabs.find(t => t.id === activeTab)?.content}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAINING PROGRAMMES SECTION ===== */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter">
               LIST OF TRAINING PROGRAMMES WE DO :
            </h3>
            
            <div className="grid lg:grid-cols-12 gap-0 border border-slate-200 rounded-[2rem] overflow-hidden bg-white shadow-xl">
               {/* Categories Sidebar */}
               <div className="lg:col-span-4 bg-slate-50 border-r border-slate-200">
                  {trainingCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTraining(cat.id)}
                      className={cn(
                        "w-full text-left px-8 py-6 text-xs font-black uppercase tracking-widest border-b border-slate-200 last:border-0 transition-all",
                        activeTraining === cat.id 
                          ? "bg-white text-[#F29100] shadow-sm" 
                          : "text-slate-500 hover:bg-slate-100"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
               </div>
               
               {/* List of Programs */}
               <div className="lg:col-span-8 p-12 bg-white">
                  <div className="grid md:grid-cols-2 gap-6">
                    {trainingProgrammes[activeTraining].map((prog, idx) => (
                      <div key={idx} className="flex items-center gap-4 group animate-in fade-in slide-in-from-left-4 duration-300">
                         <div className="w-1.5 h-1.5 bg-slate-900 rounded-full shrink-0 group-hover:bg-[#F29100] transition-colors" />
                         <span className="text-slate-600 font-bold text-sm tracking-tight">{prog}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* Bottom Content Paragraphs */}
            <div className="mt-20 space-y-8 max-w-5xl">
               <p className="text-slate-600 leading-relaxed font-medium">
                  Besides these Management Development Programmes (MDP's), we also conduct Technical Training Programmes (TTP's) on TQM, TPS, World Class Manufacturing, Lean / Agile Manufacturing, ISO Awareness Programme, 7 QC Tools, Six-Sigma Awareness programme., Value Stream Mapping (VSM), etc.
               </p>
               <p className="text-slate-600 leading-relaxed font-medium">
                  As a prelude to conducting training programmes, we also offer our services for undertaking training needs analysis through a quick study involving formal interaction with HOD's and Practice Managers. The deliverable is a <span className="text-primary font-black">"Training Needs Analysis"</span> report from which the training calendar and plans can be drawn out targeted to achieve both skill development and behavioural improvement.
               </p>
            </div>
         </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
           <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                  Ready to transform your <span className="text-accent italic">Workforce?</span>
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                   <Link to="/#contact" className="bg-[#F29100] hover:bg-white hover:text-[#F29100] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-lg flex items-center gap-3">
                      Get Started Today <ArrowRight size={20} />
                   </Link>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
