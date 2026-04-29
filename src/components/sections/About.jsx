import React from 'react';
import { motion } from 'framer-motion';
import aboutTeamHero from '../../assets/images/about_team_hero.png';

const About = () => {
  return (
    <section id="about" className="py-28 bg-white overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Badge */}
            <div className="inline-block px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-[0.25em] shadow-sm">
              The Abhilekha Legacy
            </div>

            {/* Heading */}
            <h2 className="text-[38px] md:text-[58px] font-extrabold leading-tight text-slate-900">
              <span className="text-[#2563EB]">Transforming Ideas</span><br />
              into Scalable Solutions
            </h2>

            {/* Paragraph */}
            <div className="space-y-6">
              <p className="text-[17px] md:text-[19px] text-slate-600 leading-relaxed font-medium">
                To be India's most trusted HR and compliance partner, empowering Global Capability Centres and businesses across 22+ states to scale confidently.
              </p>

              <p className="text-[17px] md:text-[19px] text-slate-600 leading-relaxed">
                We deliver customized recruitment, staffing, payroll, and multi-state compliance solutions that drive higher ROI, ensuring complete compliance and faster hiring for GCCs, IT, manufacturing, and beyond.
              </p>
            </div>

            {/* CTA (Video style add panniruken) */}
            <div>
              <button className="px-7 py-3 bg-[#2563EB] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-blue-700 transition duration-300">
                Explore More →
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image Container */}
            <div className="rounded-[2.8rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[10px] border-white group">
              
              <img
                src={aboutTeamHero}
                alt="Our Team"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Glass Card (Video Style Highlight) */}
            <div className="absolute top-8 right-8 backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl p-5 rounded-2xl hidden md:block">
              <p className="text-white text-sm font-semibold">Trusted by</p>
              <h3 className="text-white text-2xl font-bold">500+ Clients</h3>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-10 -left-10 bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-2xl text-white z-20 hidden md:block"
            >
              <div className="text-5xl font-black mb-2">20+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">
                Years of Excellence
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;