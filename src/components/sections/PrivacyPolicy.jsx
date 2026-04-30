import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you apply for a job, submit your CV, or contact us for business inquiries. This may include your name, email address, phone number, resume/CV data, and company details."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the collected information to process job applications, facilitate recruitment services for our clients, communicate with you about opportunities, and improve our HR solutions. We do not sell your personal data to third parties."
    },
    {
      title: "3. Data Security",
      content: "Abhilekha implements robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. We use encrypted channels (SSL) for data transmission."
    },
    {
      title: "4. Resume/CV Retention",
      content: "By submitting your CV, you consent to Abhilekha storing your professional profile in our secure database for future career opportunities that match your skills. You may request data removal at any time by contacting us."
    },
    {
      title: "5. Cookies & Tracking",
      content: "Our website may use cookies to enhance user experience and analyze traffic. You can choose to disable cookies through your browser settings, though some features of the site may function differently."
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
            className="w-16 h-16 bg-[#D97706]/20 rounded-2xl flex items-center justify-center text-[#D97706] mx-auto mb-6"
          >
            <Shield size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-slate-400 text-sm md:text-base">Last Updated: April 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="prose prose-slate max-w-none space-y-10">
            <p className="text-slate-600 leading-relaxed">
              At Abhilekha Information Pvt. Ltd., we take your privacy seriously. This policy outlines how we handle your personal data when you interact with our website and services.
            </p>

            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="text-[#D97706] text-sm">●</span>
                  {section.title}
                </h2>
                <p className="text-slate-500 leading-relaxed pl-6">
                  {section.content}
                </p>
              </motion.div>
            ))}

            <div className="pt-10 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Us Regarding Privacy</h3>
              <p className="text-slate-500 text-sm">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please email us at:
                <br />
                <a href="mailto:privacy@abhilekha.com" className="text-[#D97706] font-bold mt-2 inline-block">privacy@abhilekha.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
