import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  BrainCircuit, 
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';
import GetInTouch from './GetInTouch';
import heroImg from '../../assets/images/training_dev_hero.jpg';
import sideImg from '../../assets/images/training_dev_side.jpg';

// Category Images
import executiveImg from '../../assets/images/executive_search.jpg';
import softSkillsImg from '../../assets/images/soft_skills.jpg';
import leadershipImg from '../../assets/images/leadership_dev.jpg';
import technicalImg from '../../assets/images/technical_train.jpg';
import corporateImg from '../../assets/images/corporate_induction.jpg';
import behavioralImg from '../../assets/images/behavioral_train.jpg';

const solutions = [
  {
    title: "Executive Search",
    icon: Target,
    image: executiveImg,
    desc: "Identifying and recruiting top-tier leadership talent for critical corporate roles.",
    details: [
      "Leadership Identification",
      "Strategic Hiring",
      "Confidential Search",
      "C-Suite Recruitment"
    ]
  },
  {
    title: "Soft Skills Training",
    icon: Users,
    image: softSkillsImg,
    desc: "Enhancing interpersonal and communication abilities for workplace excellence.",
    details: [
      "Effective Communication",
      "Conflict Resolution",
      "Time Management",
      "Team Building"
    ]
  },
  {
    title: "Leadership Development",
    icon: TrendingUp,
    image: leadershipImg,
    desc: "Cultivating the next generation of visionary leaders through structured coaching.",
    details: [
      "Managerial Excellence",
      "Visionary Thinking",
      "Decision Making",
      "Emotional Intelligence"
    ]
  },
  {
    title: "Technical Training",
    icon: BrainCircuit,
    image: technicalImg,
    desc: "Specialized skill-upgradation in latest technologies and industry-specific tools.",
    details: [
      "Domain Expertise",
      "New Tech Induction",
      "Process Optimization",
      "Digital Literacy"
    ]
  },
  {
    title: "Corporate Induction",
    icon: GraduationCap,
    image: corporateImg,
    desc: "Seamless onboarding programs to integrate new talent into corporate culture.",
    details: [
      "Culture Immersion",
      "Policy Awareness",
      "Role Clarification",
      "Initial Mentorship"
    ]
  },
  {
    title: "Behavioral Training",
    icon: Lightbulb,
    image: behavioralImg,
    desc: "Modifying workplace attitudes to foster a more productive and positive environment.",
    details: [
      "Work Ethics",
      "Professional Etiquette",
      "Stress Management",
      "Ownership & Accountability"
    ]
  }
];

const FlipCard = ({ solution }) => (
  <div className="group h-[450px] [perspective:1000px]">
    <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className="absolute inset-0 bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] [backface-visibility:hidden]">
        <div className="h-full w-full relative p-10 flex flex-col items-center text-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img src={solution.image} alt={solution.title} className="w-full h-full object-cover opacity-5 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
          </div>

          <div className="relative z-10 flex flex-col items-center h-full">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
              <solution.icon size={36} className="text-blue-600 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{solution.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">{solution.desc}</p>
            
            {/* Visual Thumbnail */}
            <div className="w-full h-24 rounded-2xl overflow-hidden mt-2 border border-slate-100/50">
               <img src={solution.image} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>

            <div className="mt-auto pt-6">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
                Hover to Reveal Details
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="absolute inset-0 h-full w-full bg-slate-900 rounded-[2.5rem] p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex flex-col h-full relative z-10">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-blue-500" />
            {solution.title}
          </h3>
          <ul className="space-y-4">
            {solution.details.map((detail, i) => (
              <li key={i} className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover/item:scale-150 transition-transform" />
                <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8 border-t border-white/10">
            <button className="text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
              Customise Program →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TrainingAndDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} className="w-full h-full object-cover opacity-80 scale-105 transition-all duration-700" alt="Hero" />
          <div className="absolute inset-0 bg-slate-900/40 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Training & <span className="text-blue-500">Development</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              Empowering organizations through strategic skill development and visionary leadership coaching to drive sustainable corporate excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Side-by-side Methodology */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[600px] bg-slate-100">
                <img src={sideImg} className="w-full h-full object-cover" alt="Methodology" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                  A Holistic Approach to <span className="text-blue-600 text-6xl block mt-2">Skill Evolution</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  We believe that professional growth is a continuous journey. Our development programs are designed to address the multifaceted needs of modern corporate environments, focusing on both technical mastery and behavioral intelligence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Briefcase size={24} />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Industry Relevant</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Curriculums mapped to current global market standards and future trends.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Award size={24} />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Measurable Impact</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Programs designed with clear ROI and behavioral KPI tracking metrics.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid of Flip Cards */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Expertise Matrix
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight mb-8 leading-none">
            Our Development <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Discover our comprehensive suite of training solutions designed to elevate every tier of your organizational hierarchy.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, idx) => (
            <FlipCard key={idx} solution={item} />
          ))}
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default TrainingAndDevelopment;
