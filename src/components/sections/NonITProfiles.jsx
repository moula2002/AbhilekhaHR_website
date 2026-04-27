import React from "react";
import {
  Factory,
  Car,
  HardHat,
  Droplets,
  Truck,
  ShoppingBag,
  PhoneCall,
  Wallet,
  HeartPulse,
  Dna,
  Users2,
  TrendingUp,
  CheckCircle,
  Plane,
  Building,
  Radio,
  Monitor,
  Megaphone,
  Pill,
  Microscope,
  Coffee,
  Gavel,
  Cpu,
  Award,
  Briefcase,
  Layers,
  Zap,
  Globe,
  Shield,
  Sparkles,
  Rocket,
  Star,
  Target,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import localImageNonITProfiles1 from '../../assets/images/img_9252bb11.jpg';
import localImageNonITProfiles2 from '../../assets/images/img_bf5f7d11.jpg';
import localImageNonITProfiles3 from '../../assets/images/img_71df9151.jpg';
import localImageNonITProfiles4 from '../../assets/images/img_d5000fab.jpg';
import localImageNonITProfiles5 from '../../assets/images/img_7805ee79.jpg';
import localImageNonITProfiles6 from '../../assets/images/img_82365e9b.jpg';
import localImageNonITProfiles7 from '../../assets/images/img_5daaa39e.jpg';

// ===== DATA FROM PDF =====

// Sectors with roles (Page 4 & custom mapping)
const nonItSectors = [
  {
    title: "Manufacturing & Engineering",
    roles: ["Plant Managers", "Production Engineers", "Quality Control (QC)"],
    icon: Factory,
    color: "bg-orange-500",
    image: localImageNonITProfiles2
  },
  {
    title: "Finance & Accounts",
    roles: ["Chartered Accountants", "Financial Analysts", "Auditors & Tax Experts"],
    icon: Wallet,
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1554229105-02702507812e?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Healthcare & Pharma",
    roles: ["Medical Professionals", "Healthcare Admins", "Clinical Research"],
    icon: HeartPulse,
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1505751172107-5739a0073216?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Sales & Marketing",
    roles: ["Business Development", "Digital Marketers", "Brand Managers"],
    icon: TrendingUp,
    color: "bg-blue-500",
    image: localImageNonITProfiles6
  },
  {
    title: "Logistics & Supply Chain",
    roles: ["Supply Chain Managers", "Warehouse Ops", "Fleet Coordinators"],
    icon: Truck,
    color: "bg-amber-500",
    image: localImageNonITProfiles3
  },
  {
    title: "HR & Administration",
    roles: ["HR Business Partners", "Compliance Officers", "Facility Managers"],
    icon: Users2,
    color: "bg-indigo-500",
    image: localImageNonITProfiles4
  },
  {
    title: "Retail & Hospitality",
    roles: ["Store Managers", "Hospitality Heads", "Customer Experience"],
    icon: ShoppingBag,
    color: "bg-rose-500",
    image: localImageNonITProfiles5
  },
  {
    title: "Infrastructure & Construction",
    roles: ["Project Managers", "Site Engineers", "Safety Officers"],
    icon: Building,
    color: "bg-stone-500",
    image: localImageNonITProfiles7
  },
  {
    title: "Aerospace & Defence",
    roles: ["Aerospace Engineers", "Maintenance Crew", "Compliance Specialists"],
    icon: Rocket,
    color: "bg-sky-500",
    image: localImageNonITProfiles1
  }
];

// Complete industry focus from PDF Page 4
const industryFocus = [
  { name: "Manufacturing", icon: Factory },
  { name: "Automotive", icon: Car },
  { name: "Networking", icon: Radio },
  { name: "Telecom", icon: PhoneCall },
  { name: "Engineering", icon: Cpu },
  { name: "IT", icon: Monitor },
  { name: "Construction", icon: HardHat },
  { name: "Media & Advertisement", icon: Megaphone },
  { name: "Oil & Energy", icon: Droplets },
  { name: "Finance & Accounts", icon: Wallet },
  { name: "Logistics", icon: Truck },
  { name: "Pharmacy", icon: Pill },
  { name: "Retail", icon: ShoppingBag },
  { name: "Clinical Research", icon: Microscope },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Hospitality", icon: Coffee },
  { name: "Infrastructure", icon: Building },
  { name: "Biotechnology", icon: Dna },
  { name: "Marketing & Sales", icon: TrendingUp },
  { name: "Healthcare", icon: HeartPulse },
];

// Sourcing levels from PDF Page 4
const sourcingLevels = [
  { level: "Entry Level", desc: "Fresh talent and junior professionals with high potential." },
  { level: "Middle Level", desc: "Experienced leads, specialists, and department heads." },
  { level: "High Level (Senior Level)", desc: "Senior management, directors, and executive leadership." },
];

// Premium clients from PDF Page 5
const nonItClients = [
  "Musashi auto Parts Pvt.Ltd.",
  "Cataler India Auto Parts Pvt.Ltd.",
  "Hitachi Astimo India Pvt. Ltd",
  "Excedy clutch India Pvt. Ltd",
  "Aisin Automotive india Pvt. Ltd",
  "Bando India Pvt. Ltd",
  "Dynamatic technologies Pvt.Ltd.",
  "Magellan Aerospace Pvt Ltd",
  "Recaero Aerospace",
  "Trivani Aerospace",
  "Danfoss power solutions Pvt.ltd.",
  "DMG Mori India Pvt. Ltd",
  "Makino India Pvt. Ltd",
  "Indic EMS Electronics",
  "Rossell tech systems Pvt.Ltd.",
  "Man Energy Solutions Pvt. Ltd",
  "Gleason Works India Pvt. Ltd",
  "Advik Hitech India Pvt. Ltd",
  "Apex Auto India Pvt. Ltd",
  "Aditya Auto components Pvt ltd"
];

// Team stats from PDF Page 3
const teamStats = [
  { role: "Recruiters", count: 45, icon: Users2 },
  { role: "Team Leaders", count: 9, icon: Briefcase },
  { role: "Delivery Managers", count: 2, icon: Target },
  { role: "Business Development Managers", count: 4, icon: TrendingUp },
];

// Certifications/Registrations from PDF Page 3
const certifications = [
  "GST: 29AAGCA1567M129",
  "PAN: AAGCA1567M",
  "CIN: U74140KA206PTC041049",
  "Labour Dept Reg: 22/CE/460/08/26-11-2018",
  "ESIC: KAR.INSPN.53-26831-101",
  "EPF: KN/BN/CIR/KN/26703",
  "PT Registration: CTO.28.PT971P0011/04-05"
];

// Services from PDF Page 4
const services = [
  "Recruitment (Non-IT & IT)",
  "Recruitment Process & Outsourcing",
  "Head Hunting",
  "Outsourcing Management",
  "Consultation"
];

const NonITProfiles = () => {
  return (
    <section id="non-it-profiles" className="py-24 bg-white relative overflow-hidden font-outfit">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#F29100] transition-colors font-bold text-sm mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        {/* ===== HEADER WITH LOGO ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Company Logo Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-3xl shadow-xl inline-flex items-center gap-3 px-8">
              <Sparkles className="w-8 h-8 text-white" />
              <span className="text-white font-black text-2xl tracking-tight">Abhilekha</span>
              <span className="text-accent font-bold text-sm bg-white/20 px-3 py-1 rounded-full">Est. 2006</span>
            </div>
          </div>
          <div className="inline-block px-4 py-1.5 bg-[#F29100]/10 text-[#F29100] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Your Recruitment & Staffing Partner
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Non-IT Recruitment <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Beyond technology, we provide elite human resource solutions across core industrial and corporate sectors.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {services.map((service, idx) => (
              <span key={idx} className="text-xs font-bold bg-slate-100 text-slate-700 px-4 py-2 rounded-full">{service}</span>
            ))}
          </div>
        </div>

        {/* ===== TEAM STRENGTH STATS (from PDF Page 3) ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {teamStats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl text-center border border-slate-100 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-primary">{stat.count}+</div>
              <div className="text-slate-500 font-semibold text-sm uppercase tracking-wide">{stat.role}</div>
            </div>
          ))}
        </div>

        {/* ===== NON-IT SECTORS GRID ===== */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Core Sectors We Serve</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonItSectors.map((sector, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-[2rem] border border-slate-100 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
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
        </div>

        {/* ===== LEVELS OF SOURCING (PDF Page 4) ===== */}
        <div className="mb-32 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 text-center mb-16">
            <h3 className="text-3xl font-black mb-4">Levels of Sourcing</h3>
            <p className="text-white/60">We provide talent across all corporate hierarchies with precision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {sourcingLevels.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center group hover:bg-accent transition-all duration-300">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20">
                  {i === 0 && <Zap className="w-8 h-8 text-accent group-hover:text-white" />}
                  {i === 1 && <Layers className="w-8 h-8 text-accent group-hover:text-white" />}
                  {i === 2 && <Star className="w-8 h-8 text-accent group-hover:text-white" />}
                </div>
                <h4 className="text-xl font-black mb-2">{s.level}</h4>
                <p className="text-white/40 text-sm font-medium group-hover:text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SECTORS WE CATER (Complete from PDF Page 4) ===== */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Sectors We Cater</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {industryFocus.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                    <item.icon className="w-6 h-6 text-[#F29100] group-hover:text-white group-hover:scale-110 transition-all" />
                 </div>
                 <span className="text-xs font-black text-slate-900 uppercase tracking-tighter group-hover:text-white leading-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== IMAGE PLACEHOLDER - Recruitment Process Visual ===== */}
        <div className="mb-32 relative">
          <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-[3rem] p-8 md:p-12 text-center border border-slate-200">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider">Our Recruitment Process</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white/50 p-6 rounded-2xl">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Briefcase className="w-10 h-10 text-accent" />
                </div>
                <h4 className="font-black">Sourcing</h4>
                <p className="text-sm text-slate-500">Database of 10L+ candidates & head hunting</p>
              </div>
              <div className="bg-white/50 p-6 rounded-2xl">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h4 className="font-black">Screening</h4>
                <p className="text-sm text-slate-500">Multi-stage verification & domain tests</p>
              </div>
              <div className="bg-white/50 p-6 rounded-2xl">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Globe className="w-10 h-10 text-accent" />
                </div>
                <h4 className="font-black">Deployment</h4>
                <p className="text-sm text-slate-500">PAN India onboarding & support</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PREMIUM CLIENTS (PDF Page 5) ===== */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Our Premium Non-IT Clients</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
            <p className="text-slate-500 mt-4 text-sm">Trusted by industry leaders across India</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {nonItClients.map((client, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-center text-center shadow-sm hover:border-accent hover:bg-white transition-all group min-h-[80px]">
                <span className="font-black text-[10px] text-slate-600 uppercase tracking-tighter group-hover:text-accent group-hover:scale-105 transition-transform leading-tight">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== IMAGE PLACEHOLDER - Manufacturing/Industry Banner ===== */}
        <div className="mb-32 relative overflow-hidden rounded-[3rem]">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <Factory className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-black mb-4">Manufacturing & Industrial Excellence</h3>
              <p className="text-white/60">Specialized recruitment for automotive, aerospace, engineering, and industrial sectors</p>
            </div>
          </div>
        </div>

        {/* ===== CORPORATE STRENGTH BANNER ===== */}
        <div className="bg-slate-900 p-12 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl text-white mb-20">
          <div className="absolute top-0 right-0 w-full h-full bg-accent/5 skew-y-6 transform origin-right" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                Empowering the <span className="text-accent italic">Corporate Backbone.</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                With a massive database of verified professionals across core sectors, we ensure your operational and management teams are built for long-term success.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              {[
                "Vast Database of 10L+ Candidates",
                "Multi-stage Screening Process",
                "Domain Expert Recruiters",
                "PAN India Deployment Support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                  <CheckCircle className="text-accent w-5 h-5 shrink-0" />
                  <span className="text-sm font-bold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CERTIFICATIONS & REGISTRATIONS (PDF Page 3) ===== */}
        <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-200">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-black text-slate-900">Statutory Compliance & Registrations</h3>
            <p className="text-slate-500 text-sm">Fully compliant recruitment partner with all government registrations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl p-3 text-center border border-slate-100">
                <span className="text-xs font-mono text-slate-600">{cert}</span>
              </div>
            ))}
          </div>
          {/* Additional Registration Numbers from PDF */}
          <div className="mt-6 text-center text-[10px] text-slate-400 font-mono">
            Labour dept Registration No: 22/CE/460/08/26-11-2018 | ESIC: KAR.INSPN.53-26831-101 | EPF: KN/BN/CIR/KN/26703 | PT: CTO.28.PT971P0011/04-05
          </div>
        </div>

        {/* ===== FOOTER / CONTACT (PDF Page 8) ===== */}
        <div className="mt-20 bg-slate-900 rounded-[3rem] p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/10 rounded-[3rem]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4">Abhilekha Information Pvt. Ltd.</h3>
            <p className="text-white/70 text-sm mb-2">
              640, 46th "A" Cross, 3rd Block, Rajajinagar, Bangalore - 560 010
            </p>
            <p className="text-white/70 text-sm mb-4">
              Ph: 080 23507705 / 080 23148132 | Email: hr@abhilekha.com | www.abhilekha.com
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs">
              <span className="font-bold">"We Light up your Career..."</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonITProfiles;