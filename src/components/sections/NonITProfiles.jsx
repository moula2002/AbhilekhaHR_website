import React from "react";
import {
  Factory,
  Wallet,
  HeartPulse,
  TrendingUp,
  Truck,
  Users2,
  ShoppingBag,
  Building,
  Rocket,
  CheckCircle2,
  ArrowLeft,
  Globe,
  Award,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from '../../assets/images/hero_hr.png';
import localImageNonITProfiles2 from '../../assets/images/img_bf5f7d11.jpg';
import localImageNonITProfiles6 from '../../assets/images/img_82365e9b.jpg';

const nonItSectors = [
  {
    title: "Manufacturing & Engineering",
    roles: ["Plant Managers", "Production Engineers", "Quality Control (QC)"],
    icon: Factory,
    desc: "Precision recruitment for automotive, aerospace, and heavy industry."
  },
  {
    title: "Finance & Accounts",
    roles: ["Chartered Accountants", "Financial Analysts", "Auditors & Tax Experts"],
    icon: Wallet,
    desc: "Connecting businesses with certified financial professionals and tax experts."
  },
  {
    title: "Healthcare & Pharma",
    roles: ["Medical Professionals", "Healthcare Admins", "Clinical Research"],
    icon: HeartPulse,
    desc: "Specialized talent for hospitals, clinics, and pharmaceutical companies."
  },
  {
    title: "Sales & Marketing",
    roles: ["Business Development", "Digital Marketers", "Brand Managers"],
    icon: TrendingUp,
    desc: "Driving growth through experienced sales and strategic marketing talent."
  },
  {
    title: "Logistics & Supply Chain",
    roles: ["Supply Chain Managers", "Warehouse Ops", "Fleet Coordinators"],
    icon: Truck,
    desc: "Optimizing operations with skilled logistics and supply chain professionals."
  },
  {
    title: "HR & Administration",
    roles: ["HR Business Partners", "Compliance Officers", "Facility Managers"],
    icon: Users2,
    desc: "Building strong corporate foundations with elite administrative talent."
  },
  {
    title: "Retail & Hospitality",
    roles: ["Store Managers", "Hospitality Heads", "Customer Experience"],
    icon: ShoppingBag,
    desc: "Enhancing service standards with top-tier retail and hospitality leaders."
  },
  {
    title: "Infrastructure & Construction",
    roles: ["Project Managers", "Site Engineers", "Safety Officers"],
    icon: Building,
    desc: "Fueling urbanization with expert engineering and construction talent."
  },
  {
    title: "Aerospace & Defence",
    roles: ["Aerospace Engineers", "Maintenance Crew", "Compliance Specialists"],
    icon: Rocket,
    desc: "Specialized sourcing for high-security and high-precision sectors."
  }
];

const NonITProfiles = () => {
  return (
    <section id="non-it-profiles" className="bg-slate-50 font-inter">
      
      {/* Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Non-IT Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase">
            Specialized <span className="text-[#2563EB]">Non-IT Recruitment</span>
          </h1>
        </div>
      </div>

      {/* ================= ABOUT US ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="mb-12">
          <div className="flex items-center bg-orange-400 text-black font-bold text-3xl px-6 py-4 rounded-md">
            About Us
          </div>
          <ul className="mt-6 text-lg text-slate-700 list-none space-y-4 leading-relaxed">
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-orange-500"></span>
              Abhilekha Information Pvt. Ltd, was established in the year 2004 having it's Corporate Office in the Silicon city of Bangalore. Company was formed with the idea of providing complete HR Solutions Across the Corporate Sectors & aims to be a one Stop Solution for all HR Needs.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-orange-500"></span>
              Abhilekha Information Pvt. Ltd has very effective database run by Professional who have a rich and thorough understanding of the industry, supported by veterans who a wide experience in the field of HR, Recruitment, Outsourcing, Management, Consulting, Training, and Marketing.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-orange-500"></span>
              Abhilekha Information Pvt. Ltd has a network of 350 Professionally trained Recruitment consultants working 24x7 across PAN India in order to render the service to our valuable clients at various domains.
            </li>
          </ul>
        </div>
      </div>

      {/* ================= VISION ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Vision */}
        <div className="mb-12">
          <div className="flex items-center bg-orange-400 text-black font-bold text-3xl px-6 py-4 rounded-md">
            Our Vision
          </div>
          <ul className="mt-6 text-lg text-slate-700 list-disc pl-6 leading-relaxed">
            <li>
              Aim to be the most recognized Consulting Company in India. 
              Abhilekha's Life Time Goal is to become an International HR Service Provider.
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div>
          <div className="flex items-center bg-orange-400 text-black font-bold text-3xl px-6 py-4 rounded-md">
            Our Mission
          </div>
          <ul className="mt-6 text-lg text-slate-700 list-disc pl-6 leading-relaxed">
            <li>
              We Enrich People' in Corporate World by Providing Value Added and Dedicated Service. 
              We create Customer Delight through Quality Service and Timely Delivery.
            </li>
          </ul>
        </div>

      </div>
      {/* ========================================== */}

      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Industrial Expertise
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {nonItSectors.map((sector, idx) => (
            <div key={idx} className="p-8 rounded-3xl border bg-white hover:shadow-xl">
              <sector.icon size={28} className="mb-4 text-[#2563EB]" />
              <h3 className="font-bold text-lg mb-2">{sector.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{sector.desc}</p>
              {sector.roles.map((r, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={14} className="text-[#2563EB]" />
                  {r}
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NonITProfiles;