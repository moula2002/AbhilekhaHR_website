import React from "react";
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Smartphone, 
  Building2, 
  Users, 
  Briefcase, 
  CheckCircle, 
  Layout, 
  Image as ImageIcon,
  Factory,
  Car,
  HardHat,
  Droplets,
  Truck,
  ShoppingBag,
  Globe2,
  PhoneCall,
  Wallet,
  HeartPulse,
  Dna,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import localImageITProfiles1 from '../../assets/images/img_3dd0e930.jpg';
import localImageITProfiles2 from '../../assets/images/img_9b4e984d.jpg';
import localImageITProfiles3 from '../../assets/images/img_5a995e23.jpg';
import localImageITProfiles4 from '../../assets/images/img_9252bb11.jpg';
import localImageITProfiles5 from '../../assets/images/img_e843d327.jpg';
import localImageITProfiles6 from '../../assets/images/img_ee4dd9c2.jpg';
import localImageITProfiles7 from '../../assets/images/img_021e1abc.jpg';

const itSectors = [
  {
    title: "Software Engineering",
    roles: ["Full Stack Developers", "Backend (Java/Python/.NET)", "Frontend (React/Angular)"],
    icon: Code2,
    color: "bg-blue-500",
    image: localImageITProfiles3
  },
  {
    title: "Data & AI",
    roles: ["Data Scientists", "Machine Learning Engineers", "Data Analysts"],
    icon: Database,
    color: "bg-purple-500",
    image: localImageITProfiles6
  },
  {
    title: "Cloud & DevOps",
    roles: ["Cloud Architects (AWS/Azure)", "SRE Engineers", "DevOps Specialists"],
    icon: Cloud,
    color: "bg-sky-500",
    image: localImageITProfiles4
  },
  {
    title: "Cybersecurity",
    roles: ["Security Analysts", "Penetration Testers", "CISO Consultants"],
    icon: Shield,
    color: "bg-red-500",
    image: localImageITProfiles7
  },
  {
    title: "Infrastructure",
    roles: ["Network Engineers", "System Administrators", "Helpdesk Support"],
    icon: Cpu,
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Emerging Tech",
    roles: ["Mobile App", "Blockchain", "IoT Engineers"],
    icon: Smartphone,
    color: "bg-orange-500",
    image: localImageITProfiles5
  }
];

const clients = [
  { name: "L&T Technologies Pvt.Ltd.", color: "border-blue-200 text-blue-700" },
  { name: "Tech Mahindra Pvt.Ltd.", color: "border-red-200 text-red-700" },
  { name: "Accenture", color: "border-purple-200 text-purple-700" },
  { name: "HTC Global", color: "border-slate-200 text-slate-700" },
  { name: "Axiscades Technologies Pvt.Ltd.", color: "border-indigo-200 text-indigo-700" },
  { name: "Vector Informatik india Pvt. Ltd", color: "border-slate-200 text-slate-700" },
  { name: "SLK Software Pvt. Ltd", color: "border-emerald-200 text-emerald-700" },
  { name: "Toshibha Software Pvt. Ltd", color: "border-red-200 text-red-700" },
  { name: "Tismotech India Pvt. Ltd", color: "border-orange-200 text-orange-700" },
  { name: "Actalent Engineering and science & services Pvt. Ltd", color: "border-sky-200 text-sky-700" },
  { name: "Solar Industries Pvt.Ltd.", color: "border-yellow-200 text-yellow-700" },
];

const industrySectors = [
  { name: "Manufacturing", icon: Factory },
  { name: "Automotive", icon: Car },
  { name: "Engineering", icon: Cpu },
  { name: "Construction", icon: HardHat },
  { name: "Oil & Energy", icon: Droplets },
  { name: "Logistics", icon: Truck },
  { name: "Retail", icon: ShoppingBag },
  { name: "IT", icon: Code2 },
  { name: "Telecom", icon: PhoneCall },
  { name: "Finance & Accounts", icon: Wallet },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Biotechnology", icon: Dna },
];

const ITProfiles = () => {
  return (
    <section id="it-profiles" className="py-24 bg-slate-50 relative overflow-hidden font-outfit">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold text-sm mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#F29100]/10 text-[#F29100] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Specialized Service
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            IT Recruitment <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-slate-500 text-lg">
            A comprehensive overview of our technical recruitment expertise, specialized talent pools, and the IT clients we serve.
          </p>
        </div>

        {/* ===== IT SECTORS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {itSectors.map((sector, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-[2rem] border border-slate-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden"
            >
              <div className="h-40 overflow-hidden relative">
                 <img src={sector.image} alt={sector.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                 <div className={cn(
                    "absolute bottom-4 left-8 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white/20",
                    sector.color
                 )}>
                    <sector.icon className="w-6 h-6 text-white" />
                 </div>
              </div>
              <div className="p-8">
                 <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-accent transition-colors uppercase">
                    {sector.title}
                 </h3>
                 <ul className="space-y-3">
                    {sector.roles.map((role, ridx) => (
                      <li key={ridx} className="flex items-center gap-3 text-slate-500">
                         <div className="w-1.5 h-1.5 bg-accent/30 rounded-full group-hover:bg-accent transition-colors" />
                         <span className="text-xs font-bold uppercase tracking-tight">{role}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ===== INDUSTRY SECTORS ===== */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Sectors We Cater</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {industrySectors.map((sector, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                    <sector.icon className="w-6 h-6 text-[#F29100] group-hover:text-white group-hover:scale-110 transition-all" />
                 </div>
                 <span className="text-xs font-black text-slate-900 uppercase tracking-tighter group-hover:text-white leading-tight">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CLIENTS SECTION ===== */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Our Premium IT Clients</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {clients.map((client, idx) => (
              <div key={idx} className={cn(
                "bg-white border p-6 rounded-xl flex items-center justify-center text-center shadow-sm hover:shadow-md transition-all group",
                client.color
              )}>
                <span className="font-black text-sm uppercase tracking-tighter group-hover:scale-105 transition-transform">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== GALLERY / INFRA ===== */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Our Infrastructure</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={localImageITProfiles1} 
                alt="Corporate Office" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                <div>
                   <h4 className="text-white text-2xl font-black mb-2">Corporate Office</h4>
                   <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Swarna Sadana, Bangalore</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={localImageITProfiles2} 
                alt="Working Environment" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                <div>
                   <h4 className="text-white text-2xl font-black mb-2">Operational Hub</h4>
                   <p className="text-white/60 text-sm font-bold uppercase tracking-widest">24x7 Support Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CORPORATE OVERVIEW BANNER ===== */}
        <div className="bg-slate-900 p-12 md:p-20 rounded-[3rem] relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform origin-top translate-x-1/4" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Established 2004
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Complete HR Solutions <span className="text-accent italic">Across India.</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Abhilekha Information Pvt. Ltd. provides end-to-end recruitment, headhunting, and management consulting. Our PAN India network of 350+ consultants ensures we bridge the gap between world-class talent and organizational goals.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <CheckCircle className="text-accent w-5 h-5" />
                    <span className="font-bold text-sm">ISO 9001:2008 Certified</span>
                 </div>
                 <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <CheckCircle className="text-accent w-5 h-5" />
                    <span className="font-bold text-sm">350+ Global Network</span>
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-4xl font-black text-accent mb-2">45+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Recruiters</div>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-4xl font-black text-accent mb-2">9+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Team Leaders</div>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-4xl font-black text-accent mb-2">350+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Consultants</div>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-4xl font-black text-accent mb-2">24x7</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Support</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITProfiles;