import React from "react";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Cpu,
  Smartphone,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Users2,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import GetInTouch from "./GetInTouch";
import heroBanner from '../../assets/images/hero_hr.png';
import teamImage from '../../assets/images/recruiter_pointing.png';
import localImageITProfiles1 from '../../assets/images/img_3dd0e930.jpg';
import localImageITProfiles2 from '../../assets/images/img_9b4e984d.jpg';

const itSectors = [
  {
    title: "Software Engineering",
    roles: ["Full Stack Developers", "Backend (Java/Python/.NET)", "Frontend (React/Angular)"],
    icon: Code2,
    desc: "Building robust and scalable applications with modern tech stacks."
  },
  {
    title: "Data & AI",
    roles: ["Data Scientists", "Machine Learning Engineers", "Data Analysts"],
    icon: Database,
    desc: "Unlocking insights and building intelligent systems with data."
  },
  {
    title: "Cloud & DevOps",
    roles: ["Cloud Architects (AWS/Azure)", "SRE Engineers", "DevOps Specialists"],
    icon: Cloud,
    desc: "Modernizing infrastructure and streamlining deployment pipelines."
  },
  {
    title: "Cybersecurity",
    roles: ["Security Analysts", "Penetration Testers", "CISO Consultants"],
    icon: Shield,
    desc: "Protecting digital assets and ensuring regulatory compliance."
  },
  {
    title: "Infrastructure",
    roles: ["Network Engineers", "System Administrators", "Helpdesk Support"],
    icon: Cpu,
    desc: "Maintaining the backbone of enterprise digital operations."
  },
  {
    title: "Emerging Tech",
    roles: ["Mobile App", "Blockchain", "IoT Engineers"],
    icon: Smartphone,
    desc: "Exploring the next frontier of digital transformation."
  }
];

const ITProfiles = () => {
  return (
    <section id="it-profiles" className="bg-slate-50 font-inter">

      {/* Top Hero Banner */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="IT Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase">
            Specialized <span className="text-blue-400">IT Recruitment</span>
          </h1>
          <p className="text-white/70 text-lg md:text-2xl mt-6 max-w-3xl mx-auto">
            Bridging the gap between world-class technology talent and global enterprises.
          </p>
        </div>
      </div>
      {/* About Service Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase tracking-tight">
          IT Recruitment
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={teamImage}
              alt="Our IT Recruitment Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              At <span className="font-bold text-slate-900">Abhilekha Information Pvt. Ltd</span>, we specialize in high-impact IT recruitment that keeps pace with the rapidly evolving technology landscape. Our deep expertise in software engineering, cloud computing, AI, and cybersecurity allows us to identify and attract top-tier technical talent for global enterprises and startups alike.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We go beyond technical skills, ensuring every candidate aligns with your company culture and project goals. Our data-driven sourcing and rigorous screening processes ensure that you receive only the most qualified professionals, ready to drive innovation and digital transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Technical Expertise
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From niche startups to Global Capability Centres (GCCs), we provide the specialized talent needed to drive digital innovation and operational excellence.
          </p>
        </div>

        {/* IT Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {itSectors.map((sector, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-[#2563EB] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <sector.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
                {sector.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {sector.desc}
              </p>
              <div className="space-y-2">
                {sector.roles.map((role, ridx) => (
                  <div key={ridx} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 size={14} className="text-[#2563EB]" />
                    <span className="text-[13px] font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <GetInTouch />
    </section>
  );
};

export default ITProfiles;