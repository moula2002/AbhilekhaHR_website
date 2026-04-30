import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "2. Services Provided",
      content: "Abhilekha provides HR consulting, recruitment, staffing, and payroll services. We act as a facilitator between job seekers and employers."
    },
    {
      title: "3. User Responsibilities",
      content: "Users agree to provide accurate, current, and complete information during the application or inquiry process. Misrepresentation of skills or identity may lead to immediate disqualification from our services."
    },
    {
      title: "4. Intellectual Property",
      content: "All content on this site, including logos, designs, and text, is the property of Abhilekha Information Pvt. Ltd. and protected by copyright laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "Abhilekha shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our website or recruitment services."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 font-inter">
      {/* Header */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-[#2563EB]/20 rounded-2xl flex items-center justify-center text-[#2563EB] mx-auto mb-6"
          >
            <Scale size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Terms of Service
          </motion.h1>
          <p className="text-slate-400 text-sm md:text-base">Last Updated: April 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="prose prose-slate max-w-none space-y-10">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
              <AlertCircle className="text-[#2563EB] shrink-0" size={24} />
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Please read these terms carefully before using our recruitment platform. Your use of this site signifies your agreement to these terms.
              </p>
            </div>

            {terms.map((term, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <CheckCircle className="text-[#2563EB]" size={18} />
                  {term.title}
                </h2>
                <p className="text-slate-500 leading-relaxed pl-8">
                  {term.content}
                </p>
              </motion.div>
            ))}

            <div className="pt-10 border-t border-slate-100 text-center">
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black">
                © {new Date().getFullYear()} Abhilekha Information Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
