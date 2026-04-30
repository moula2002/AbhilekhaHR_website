import React, { useState } from 'react';
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
import trainingSideImg from '../../assets/images/training_hero_side.jpg';
import GetInTouch from './GetInTouch';

// Card Front Images
import communicationImg from '../../assets/images/communication_card.jpg';
import leadershipImg from '../../assets/images/leadership_card.jpg';
import managerialImg from '../../assets/images/managerial_card.jpg';
import mentoringImg from '../../assets/images/mentoring_card.jpg';
import supervisoryImg from '../../assets/images/supervisory_card.jpg';
import otherImg from '../../assets/images/other_training_card.jpg';

const trainingCards = [
  {
    title: "Communication",
    subtitle: "Professional Developmental Skills",
    image: communicationImg,
    items: [
      "Communication skills Mastery",
      "Advanced Presentation skills",
      "Business Communication Oral and written",
      "Active Listening skills",
      "Professional Body Language"
    ]
  },
  {
    title: "Leadership",
    subtitle: "Organization Behavioural Aspects",
    image: leadershipImg,
    items: [
      "High-Performance Team Building",
      "Interpersonal skills Excellence",
      "Strategic Motivation",
      "Work Culture and Work Ethics"
    ]
  },
  {
    title: "Managerial Skills",
    subtitle: "Management Development Skills",
    image: managerialImg,
    items: [
      "Managing Meetings",
      "Managing Time & Priorities",
      "Managing Change & Innovation",
      "Managing Stress & Resilience",
      "Managing Motivation",
      "Creativity & Problem Solving",
      "Life Style & Work Stress",
      "5-S of the Mind"
    ]
  },
  {
    title: "Mentoring & Coaching",
    image: mentoringImg,
    items: [
      "Mentoring skills & Frameworks",
      "Coaching & counseling skills",
      "Executive Leadership Coaching",
      "Peer Mentoring Techniques"
    ]
  },
  {
    title: "Supervisory Skills",
    image: supervisoryImg,
    items: [
      "Effective supervision Mastery",
      "Positive discipline",
      "Disciplinary procedures",
      "Safe Work Allocation"
    ]
  },
  {
    title: "Other Programmes",
    image: otherImg,
    items: [
      "Office Etiquette",
      "Yoga and pranayam",
      "5S - House keeping",
      "Finance for Non-Finance",
      "HR for Non-HR",
      "Statutory Compliance - Labour Laws",
      "Personality Development",
      "How to lead a moderate Life Style",
      "Productivity",
      "Decision Making"
    ]
  }
];

const FlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[380px] w-full perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
          <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-1">{card.title}</h3>
            {card.subtitle && <p className="text-blue-400 text-[9px] font-bold uppercase tracking-widest leading-tight">{card.subtitle}</p>}
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] bg-white p-6 shadow-2xl flex flex-col justify-center border border-blue-100"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
             <GraduationCap className="text-white" size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-tight border-b pb-2 border-slate-100">{card.title}</h3>
          <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar">
            {card.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-600">
                <ChevronRight size={12} className="text-blue-600 shrink-0" />
                <span className="text-[12px] font-semibold leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TrainingProgrammes = () => {
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

      {/* 2. ABOUT TRAINING SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase tracking-tight">
              Corporate <span className="text-blue-600">Excellence</span> Programmes
           </h2>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 h-[480px]">
                 <img src={trainingSideImg} alt="Corporate Training" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-10">
                 <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    At <span className="font-bold text-slate-900">Abhilekha</span>, we empower minds and enable growth through specialized training solutions. Our approach begins with a comprehensive **Training Needs Analysis (TNA)** to ensure every programme is aligned with your organizational goals.
                 </p>
                 
                 <div className="space-y-8">
                    <div className="flex gap-6 group">
                       <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <BookOpen size={28} />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Structured TNA</h4>
                          <p className="text-slate-500 leading-relaxed">Deep-dive assessment of current skill levels and organizational requirements to design targeted training roadmaps.</p>
                       </div>
                    </div>

                    <div className="flex gap-6 group">
                       <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <Clock size={28} />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Customized Calendars</h4>
                          <p className="text-slate-500 leading-relaxed">Flexible training schedules tailored to your operational needs, ensuring minimal disruption to business-as-usual.</p>
                       </div>
                    </div>

                    <div className="flex gap-6 group">
                       <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <Zap size={28} />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Technical TTPs</h4>
                          <p className="text-slate-500 leading-relaxed">Specialized workshops in operational excellence, including TQM, Lean Manufacturing, and Six-Sigma.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. TRAINING PROGRAMMES GRID (3D Flip Cards) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Core <span className="text-blue-600">Curriculum</span></h2>
            <p className="text-slate-500 text-lg">Specialized developmental and behavioural programmes designed for modern corporate environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingCards.map((card, idx) => (
              <FlipCard key={idx} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <GetInTouch image={trainingSideImg} />

    </div>
  );
};

export default TrainingProgrammes;
