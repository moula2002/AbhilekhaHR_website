import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="bg-[#FFB82B] py-12 px-6 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFF4C7] p-8 md:p-10 rounded-sm shadow-[10px_10px_30px_rgba(0,0,0,0.1)] flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#020C1F]">Our Vision</h2>
            
            {/* Wavy Decoration */}
            <div className="w-16 h-2 flex justify-center items-center">
              <svg width="60" height="10" viewBox="0 0 60 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C5 5 5 1 10 1C15 1 15 9 20 9C25 9 25 1 30 1C35 1 35 9 40 9C45 9 45 1 50 1C55 1 55 5 60 5" stroke="#020C1F" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <p className="text-[13px] md:text-[15px] text-[#020C1F]/80 leading-[1.6] font-medium max-w-md">
              To be India's most trusted HR and compliance partner, empowering Global Capability Centres and businesses across 22+ states to scale confidently with seamless multi-state payroll, statutory compliance, and permanent staffing solutions.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFF4C7] p-8 md:p-10 rounded-sm shadow-[10px_10px_30px_rgba(0,0,0,0.1)] flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#020C1F]">Our Mission</h2>
            
            {/* Wavy Decoration */}
            <div className="w-16 h-2 flex justify-center items-center">
              <svg width="60" height="10" viewBox="0 0 60 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C5 5 5 1 10 1C15 1 15 9 20 9C25 9 25 1 30 1C35 1 35 9 40 9C45 9 45 1 50 1C55 1 55 5 60 5" stroke="#020C1F" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <p className="text-[13px] md:text-[15px] text-[#020C1F]/80 leading-[1.6] font-medium max-w-md">
              Deliver customized recruitment, staffing, payroll, and multi-state compliance solutions that drive higher ROI, ensuring complete compliance and faster hiring for GCCs, IT, manufacturing, and beyond.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
