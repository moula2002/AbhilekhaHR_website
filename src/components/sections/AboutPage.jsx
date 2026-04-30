import React from 'react';
import { motion } from 'framer-motion';
import aboutTeamHero from '../../assets/images/about_team_hero.png';
import aboutMission from '../../assets/images/about_mission.png';
import aboutVision from '../../assets/images/about_vision.png';
import aboutValues from '../../assets/images/about_values.png';
import officeBuilding from '../../assets/images/office_building.png';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';

// Authentic Gallery Images
import gallary1 from '../../assets/images/Gallary 1.png';
import gallary2 from '../../assets/images/Gallary2.png';
import gallary3 from '../../assets/images/Gallary3.png';
import gallary4 from '../../assets/images/gallary4.png';
import gallary5 from '../../assets/images/gallary5.png';

const AboutPage = () => {
  const values = [
    {
      num: "01/",
      title: "Integrity & Transparency",
      desc: "We believe in doing the right thing — with honesty, openness, and respect in every interaction.",
      highlight: true
    },
    {
      num: "02/",
      title: "Client Success First",
      desc: "Our clients' goals drive our mission. We go beyond expectations to deliver lasting value and measurable results.",
      highlight: false
    },
    {
      num: "03/",
      title: "Innovation at the Core",
      desc: "We constantly evolve, embracing new technologies and ideas to create smarter, future-ready solutions.",
      highlight: false
    },
    {
      num: "04/",
      title: "People Empowerment",
      desc: "We invest in people — nurturing talent, encouraging creativity, and building careers that make a difference.",
      highlight: false
    },
    {
      num: "05/",
      title: "Collaboration & Teamwork",
      desc: "We work as one — collaborating across teams, industries, and geographies to achieve shared success.",
      highlight: true
    },
    {
      num: "06/",
      title: "Global Excellence",
      desc: "We combine local expertise with global standards to deliver consistent quality, everywhere we operate.",
      highlight: false
    }
  ];

  const galleryImages = [
    { src: gallary1, title: "Our Corporate Office", size: "col-span-2 row-span-2" },
    { src: gallary2, title: "Collaborative Workspace", size: "col-span-1 row-span-1" },
    { src: gallary5, title: "Team in Action", size: "col-span-1 row-span-1" },
    { src: gallary3, title: "Company Celebrations", size: "col-span-1 row-span-2" },
    { src: gallary4, title: "The Abhilekha Team", size: "col-span-1 row-span-2" }
  ];

  return (
    <div className="bg-white">
      
      {/* 1. Hero Section: Empowering Your Vision */}
      <section className="relative h-screen flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutTeamHero} 
            alt="Team Abhilekha" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[42px] md:text-[82px] font-bold leading-tight uppercase tracking-tighter"
          >
            Empowering Your Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[28px] text-white/80 font-medium max-w-3xl"
          >
            Collaborating to Build the Future of IT Solutions.
          </motion.p>
        </div>
      </section>

      {/* 2. Transforming Ideas Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 max-w-md mx-auto lg:mx-0">
                <img src={aboutTeamHero} alt="Our Team" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-[36px] md:text-[52px] font-bold leading-tight text-slate-900">
                <span className="text-[#2563EB]">Transforming Ideas</span> into Scalable Solutions
              </h2>
              <p className="text-[16px] md:text-[18px] text-slate-600 leading-relaxed">
                Founded in 2004, Abhilekha is one of India's fastest-growing HR consulting and workforce solution providers. With a strong presence in Bangalore and offices across the region, we deliver cutting-edge technology services, staffing solutions, and business consulting to help enterprises scale efficiently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#2563EB]">Our Story</h2>
              <div className="space-y-6">
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-relaxed font-medium">
                  What started as a small team of passionate experts has evolved into a global consulting organization. Over the years, we've partnered with hundreds of enterprises to modernize their processes, optimize operations, and unlock human potential.
                </p>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-relaxed">
                  At Abhilekha, we blend technology, strategy, and people to build solutions that drive business growth and empower talent across the globe.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img src={officeBuilding} alt="Abhilekha Office" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-[#2563EB] font-bold text-lg">Headquarters</p>
                <p className="text-slate-500 text-sm">Bangalore, India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                <img src={aboutMission} alt="Our Mission" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-[36px] md:text-[52px] font-bold text-slate-900">Our mission</h2>
              <div className="space-y-6">
                <p className="text-[16px] md:text-[18px] text-slate-600 leading-relaxed">
                  Deliver customized recruitment, staffing, payroll, and multi-state compliance solutions that drive higher ROI, ensuring complete compliance and faster hiring for GCCs, IT, manufacturing, and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Our Vision Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <h2 className="text-[36px] md:text-[52px] font-bold text-slate-900">Our Vision</h2>
              <div className="space-y-6">
                <p className="text-[16px] md:text-[18px] text-slate-600 leading-relaxed font-medium">
                  To be India's most trusted HR and compliance partner, empowering Global Capability Centres and businesses across 22+ states to scale confidently with seamless multi-state payroll, statutory compliance, and permanent staffing solutions.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0"
            >
              <img src={aboutVision} alt="Our Vision" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Built on Trust. Driven by Innovation.</h2>
            <p className="text-slate-500 text-lg max-w-2xl">
              At Abhilekha, our values define who we are and how we work. They guide every partnership, project, and promise we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              {values.slice(0, 3).map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-3xl border transition-all ${v.highlight ? 'bg-[#2563EB] text-white border-[#2563EB]' : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'}`}
                >
                  <div className={`text-2xl font-bold mb-4 ${v.highlight ? 'text-white/50' : 'text-slate-300'}`}>{v.num}</div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className={`text-sm leading-relaxed ${v.highlight ? 'text-white/80' : 'text-slate-500'}`}>{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl lg:order-2"
            >
              <img src={aboutValues} alt="Innovation" className="w-full h-full object-cover" />
            </motion.div>

            <div className="space-y-6">
              {values.slice(3, 6).map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 3) * 0.1 }}
                  className={`p-8 rounded-3xl border transition-all ${v.highlight ? 'bg-[#2563EB] text-white border-[#2563EB]' : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'}`}
                >
                  <div className={`text-2xl font-bold mb-4 ${v.highlight ? 'text-white/50' : 'text-slate-300'}`}>{v.num}</div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className={`text-sm leading-relaxed ${v.highlight ? 'text-white/80' : 'text-slate-500'}`}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Life at Abhilekha: Gallery Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
              Gallery
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
              Life at <span className="text-blue-600">Abhilekha</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Glimpses into our vibrant work environment and the people who make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[800px]">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-[2.5rem] overflow-hidden group shadow-lg ${image.size}`}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-bold text-xl uppercase tracking-tight">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <WhyUs />
      <Testimonials />

    </div>
  );
};

export default AboutPage;
