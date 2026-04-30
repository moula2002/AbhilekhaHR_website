import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor,
  Users,
  Briefcase,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import heroBanner from '../../assets/images/hero_hr.png';
import GetInTouch from './GetInTouch';
import recruiterITStaffing from '../../assets/images/recruiter_it_staffing.jpg';
import staffingImg from '../../assets/images/img_553a5e3c.jpg';

// Card Front Images
import recruitmentImg from '../../assets/images/recruitment_card.jpg';
import staffingCardImg from '../../assets/images/staffing_card.jpg';
import consultingImg from '../../assets/images/consulting_card.jpg';
import managementImg from '../../assets/images/management_card.jpg';

const services = [
  {
    title: "Recruitment",
    image: recruitmentImg,
    content: "We understand the total Recruitment process of your organization and map it with ours and then bring the right resources to your organization which will relieve of the delivery pressures. Our Pre-Selection process of Resumes has Always been appreciated by our clients. The Clients get the advantage through our consistent improvised processes. Once we understand your requirements with several options for you to choose we also ensure the right bonding between you and resource who join-in."
  },
  {
    title: "Staffing",
    image: staffingCardImg,
    content: "Outsourcing IT staffing process has been a key success factor of winning software organizations. IT-staffing process includes various steps of collecting job profiles, fine-tuning the skills required. Finalizing the specs of resources, calling the resources and make them to. Our Team has ready skills to provide such an End to End support to your organization. We have conducted several walk-ins along with client representatives and turned around the result with higher hit rate."
  },
  {
    title: "IT Consulting",
    image: consultingImg,
    content: "IT Consulting has been one of the best practices followed by all the software product manufacturers and service providers. We could provide you such consultants who bring in qualities and skills for your project and make sure of increased productivity."
  },
  {
    title: "Management Consultant",
    image: managementImg,
    content: "We provide expertise services in Registration of Companies, Industrial Relations, Personnel Management, Labour Laws, Compensation Surveys, Training & Development Programmes and Wage & Salary Administration, preparation of HR Policies and Manuals. Our dedicated team assists you in incorporating your company in a simple and economical way. We also assist those who are already into business as a proprietorship or a registered partnership firm or an LLP to convert their structure into a Private Limited Company. With a team of richly experienced members, our clients can directly talk to our experts who can assist you for all your queries and help you understand various compliances involved in the process of your company registration. We advice the management on various Labor Laws applicable to them from time to time. We also assist the Management to maintain the required registers under the following Labor enactments. This includes Factories Act, Shops & Commercial Establishment Act. ESI Act, PF Act, Minimum Wages Act, Payment of Wages, Bonus Act, Gratuity Act and other statutory enactments."
  }
];

const FlipCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full perspective-1000 cursor-pointer group"
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
          <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">{service.title}</h3>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] bg-white p-6 shadow-2xl flex flex-col justify-center border border-blue-100"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
             <CheckCircle2 className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-slate-600 text-[13px] leading-relaxed">
              {service.content}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ITStaffing = () => {
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

      {/* 2. ABOUT STAFFING SECTION (New UI with side-by-side Image/Content) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase tracking-tight">
              Flexible <span className="text-blue-600">Engagement</span> Models
           </h2>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 h-[480px]">
                 <img src={staffingImg} alt="Technical Staffing" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-10">
                 <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    Adapting to your project lifecycle and business objectives with precision and scale. We offer specialized staffing solutions designed to meet the dynamic needs of modern tech enterprises.
                 </p>
                 
                 <div className="space-y-8">
                    {staffingModels.map((model, idx) => (
                       <div key={idx} className="flex gap-6 group">
                          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                             <model.icon size={28} />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-slate-900 mb-2">{model.title}</h4>
                             <p className="text-slate-500 leading-relaxed">{model.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (Flip Cards) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our <span className="text-blue-600">Core Services</span></h2>
            <p className="text-slate-500 text-lg">We bridge the gap between complex technical requirements and the exceptional talent needed to execute them.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <FlipCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <GetInTouch image={recruiterITStaffing} />

    </div>
  );
};

export default ITStaffing;