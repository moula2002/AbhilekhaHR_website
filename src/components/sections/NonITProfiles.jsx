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
import GetInTouch from "./GetInTouch";
import heroBanner from '../../assets/images/hero_hr.png';
import teamImage from '../../assets/images/non_it_team_new.jpg';
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
      {/* About Service Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase tracking-tight">
          Non IT Recruitment
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={teamImage}
              alt="Our Non-IT Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              At <span className="font-bold text-slate-900">Abhilekha Information Pvt. Ltd</span>, known as the best recruitment agency, our non-IT recruitment services are specifically designed to cater to the unique needs of various industries outside the tech sector. We utilize our deep understanding of these industries, extensive professional networks, and advanced recruitment tools to source and place top talent swiftly and efficiently.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are dedicated to building long-term partnerships with our clients and candidates. Beyond just filling positions, we provide valuable market insights, assist with employer branding, and offer post-placement support to ensure a successful match.
            </p>
          </div>
        </div>
      </div>

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

      <GetInTouch />
    </section>
  );
};

export default NonITProfiles;