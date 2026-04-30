import React, { useState } from 'react';
import { X, Upload, Send, CheckCircle2, Phone, Briefcase, Loader2 } from 'lucide-react';
import modalImage from '../../assets/step4.png';
import inquiryImage from '../../assets/placement-process.png';

const FloatingContactButtons = () => {
  const [activeModal, setActiveModal] = useState(null); // 'cv' or 'inquiry' or null
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [cvData, setCvData] = useState({ name: '', email: '', role: '', experience: '', resume: null });
  const [inquiryData, setInquiryData] = useState({ 
    name: '', email: '', code: '+91', phone: '', service: '', message: '' 
  });

  React.useEffect(() => {
    const handleToggle = () => setActiveModal('inquiry');
    window.addEventListener('toggle-inquiry-modal', handleToggle);
    return () => window.removeEventListener('toggle-inquiry-modal', handleToggle);
  }, []);

  const services = [
    "Executive Search",
    "Professional Staffing and Recruitment",
    "Recruitment Process Outsourcing",
    "Payroll and Statutory Compliance Services",
    "Re-Badging",
    "Captive Support",
    "BOT",
    "Global Capability Centre (GCC)",
    "Augmentation",
    "Others"
  ];

  const handleCvSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let resumeBase64 = null;
      if (cvData.resume) {
        resumeBase64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(cvData.resume);
        });
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cvData.name,
          email: cvData.email,
          position: cvData.role,
          experience: cvData.experience,
          resumeData: resumeBase64,
          resumeName: cvData.resume?.name,
          message: `Floating CV Submission for ${cvData.role}. Experience: ${cvData.experience}`
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => { setActiveModal(null); setSubmitted(false); setCvData({ name: '', email: '', role: '', experience: '', resume: null }); }, 3000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) { 
      console.error(error);
      alert("Error submitting CV"); 
    } finally { setLoading(false); }
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inquiryData.name,
          email: inquiryData.email,
          phone: `${inquiryData.code} ${inquiryData.phone}`,
          source: inquiryData.service,
          message: inquiryData.message
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => { setActiveModal(null); setSubmitted(false); setInquiryData({ name: '', email: '', code: '+91', phone: '', service: '', message: '' }); }, 3000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) { 
      console.error(error);
      alert("Error submitting inquiry"); 
    } finally { setLoading(false); }
  };

  return (
    <>
      {/* Floating Buttons Stack */}
      <div className="fixed right-0 top-[60%] -translate-y-1/2 z-[9999] flex flex-col gap-1.5">
        <button 
          onClick={() => setActiveModal('cv')}
          className="bg-orange-500 text-white w-10 py-6 rounded-l-lg shadow-2xl hover:bg-orange-600 border border-white/20 transition-all flex items-center justify-center group"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="text-[11px] font-bold tracking-normal">Submit Your CV</span>
        </button>
        <button 
          onClick={() => setActiveModal('inquiry')}
          className="bg-[#0088FF] text-white w-10 py-6 rounded-l-lg shadow-2xl hover:bg-[#0077EE] transition-all flex items-center justify-center group"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="text-[11px] font-bold tracking-normal">Let Us Reach You</span>
        </button>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => !loading && setActiveModal(null)} />
          
          <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:row animate-in zoom-in duration-300 min-h-[500px]">
            <button onClick={() => setActiveModal(null)} className="absolute top-5 right-5 z-20 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-900 shadow-lg"><X size={20} /></button>

            <div className="flex flex-col md:flex-row w-full h-full">
              {/* Left Side Visual */}
              <div className="hidden md:block md:w-2/5 relative">
                <img src={activeModal === 'cv' ? modalImage : inquiryImage} alt="Visual" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-10 left-8 right-8 text-white">
                  <h4 className="text-2xl font-black leading-tight">
                    {activeModal === 'cv' ? "Build Your Career with Excellence" : "Let's Connect and Build Your Future"}
                  </h4>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckCircle2 size={40} /></div>
                    <h3 className="text-2xl font-bold">Success!</h3>
                    <p className="text-slate-500 font-medium">We've received your details and will get back to you soon.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black text-slate-900">
                        {activeModal === 'cv' ? <>Submit Your <span className="text-orange-500">CV</span></> : <>Let's <span className="text-[#0088FF]">Connect</span></>}
                      </h3>
                      <p className="text-slate-500 text-sm mt-2 font-medium">Please provide your details below.</p>
                    </div>

                    {activeModal === 'cv' ? (
                      <form className="space-y-4" onSubmit={handleCvSubmit}>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name *</label>
                          <input type="text" required value={cvData.name} onChange={e=>setCvData({...cvData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-orange-500 outline-none transition-all" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email ID *</label>
                          <input type="email" required value={cvData.email} onChange={e=>setCvData({...cvData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-orange-500 outline-none transition-all" placeholder="example@gmail.com" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Role *</label>
                            <input type="text" required value={cvData.role} onChange={e=>setCvData({...cvData, role: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-orange-500 outline-none transition-all" placeholder="e.g. HR Manager" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Experience *</label>
                            <input type="text" required value={cvData.experience} onChange={e=>setCvData({...cvData, experience: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-orange-500 outline-none transition-all" placeholder="e.g. 5 Years" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Upload Resume *</label>
                          <div className="relative">
                            <input type="file" required onChange={e=>setCvData({...cvData, resume: e.target.files[0]})} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                            <div className="w-full bg-slate-50 border-2 border-dashed border-slate-100 px-4 py-3 rounded-xl text-slate-400 flex justify-between items-center text-sm">
                              <span className="truncate">{cvData.resume ? cvData.resume.name : "PDF, DOC"}</span>
                              <span className="text-orange-500 font-bold uppercase text-[10px]">Browse</span>
                            </div>
                          </div>
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3">
                          {loading ? <><Loader2 className="animate-spin" size={18} /> Submitting...</> : "Submit CV"}
                        </button>
                      </form>
                    ) : (
                      <form className="space-y-4" onSubmit={handleInquirySubmit}>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name *</label>
                          <input type="text" required value={inquiryData.name} onChange={e=>setInquiryData({...inquiryData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-[#0088FF] outline-none transition-all" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email ID *</label>
                          <input type="email" required value={inquiryData.email} onChange={e=>setInquiryData({...inquiryData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-[#0088FF] outline-none transition-all" placeholder="example@gmail.com" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Code *</label>
                            <select value={inquiryData.code} onChange={e=>setInquiryData({...inquiryData, code: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-[#0088FF] outline-none">
                              <option value="+91">+91 (Ind)</option>
                              <option value="+1">+1 (USA)</option>
                              <option value="+44">+44 (UK)</option>
                            </select>
                          </div>
                          <div className="col-span-2 space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Number *</label>
                            <input type="tel" required value={inquiryData.phone} onChange={e=>setInquiryData({...inquiryData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-[#0088FF] outline-none transition-all" placeholder="9876543210" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Service *</label>
                          <select required value={inquiryData.service} onChange={e=>setInquiryData({...inquiryData, service: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-[#0088FF] outline-none">
                            <option value="">Choose Option</option>
                            {services.map((s,i)=><option key={i} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message / Comment *</label>
                          <textarea required value={inquiryData.message} onChange={e=>setInquiryData({...inquiryData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:border-[#0088FF] outline-none transition-all min-h-[80px] resize-none" placeholder="Tell us more about your requirements..." />
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-[#0088FF] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#0077EE] transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3">
                          {loading ? <><Loader2 className="animate-spin" size={18} /> Submitting...</> : "Submit Inquiry"}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactButtons;
