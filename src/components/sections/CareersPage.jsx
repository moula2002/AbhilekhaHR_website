import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Upload, Send, CheckCircle2, Search } from 'lucide-react';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: "Senior Full Stack Developer",
      location: "Bangalore (HSR Layout)",
      type: "Full Time",
      category: "IT Recruitment",
      posted: "2 days ago"
    },
    {
      title: "HR Business Partner",
      role: "Operations",
      location: "Pune (Hinjewadi)",
      type: "Full Time",
      category: "Non-IT",
      posted: "1 week ago"
    },
    {
      title: "Technical Consultant",
      location: "Chennai (OMR)",
      type: "Contract",
      category: "IT Staffing",
      posted: "3 days ago"
    },
    {
      title: "Manufacturing Plant Manager",
      location: "Udupi",
      type: "Full Time",
      category: "Engineering",
      posted: "5 days ago"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Build Your <span className="text-accent italic">Legacy</span> With Us.</h1>
           <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">Join a team of 100+ expert associates and help us shape the future of global recruitment.</p>
           <div className="flex justify-center gap-6">
              <a href="#openings" className="bg-slate-900 hover:bg-white hover:text-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl">View Openings</a>
              <a href="#apply" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg transition-all">Submit Resume</a>
           </div>
        </div>
      </section>

      {/* Stats / Why Join */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Placements", value: "2,00,000+", icon: CheckCircle2 },
              { label: "Global Clients", value: "200+", icon: Briefcase },
              { label: "Team Size", value: "100+", icon: CheckCircle2 },
              { label: "Years Legacy", value: "20+", icon: CheckCircle2 }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                 <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
                 <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                 <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Current Openings</h2>
                 <p className="text-slate-500 font-medium">Explore roles across our PAN India locations.</p>
              </div>
              <div className="relative w-full md:w-96">
                 <input type="text" placeholder="Search roles or locations..." className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none pl-14" />
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>
           </div>

           <div className="grid gap-6">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all flex flex-col md:flex-row justify-between items-center group cursor-pointer">
                   <div className="flex items-center gap-8 w-full">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all">
                         <Briefcase size={28} />
                      </div>
                      <div>
                         <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{job.title}</h3>
                         <div className="flex flex-wrap gap-6 text-slate-500 font-bold text-sm">
                            <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {job.location}</span>
                            <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> {job.type}</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">{job.category}</span>
                         </div>
                      </div>
                   </div>
                   <div className="mt-6 md:mt-0 flex items-center gap-4 w-full md:w-auto justify-end">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Posted {job.posted}</span>
                      <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary transition-all flex items-center gap-2">
                         Apply <ArrowRight size={18} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
           <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 md:p-16 relative z-10">
              <div className="text-center mb-12">
                 <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Direct Application</h2>
                 <p className="text-slate-500 font-medium">Don't see a perfect fit? Send us your resume and we'll contact you for future roles.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-[2rem] text-center animate-in zoom-in-95 duration-500">
                   <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle2 size={40} />
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Successfully Submitted!</h3>
                   <p className="text-slate-600 font-medium">Our talent acquisition team will review your profile and get back to you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name *</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address *</label>
                      <input type="email" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="john@example.com" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number *</label>
                      <input type="tel" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="+91 98765 43210" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Total Experience (Years) *</label>
                      <input type="number" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="e.g. 5" />
                   </div>
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Upload Resume (PDF/DOC) *</label>
                      <div className="relative">
                         <input type="file" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                         <div className="w-full bg-slate-50 border-2 border-dashed border-slate-200 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group-hover:border-primary transition-all">
                            <Upload className="text-slate-400 group-hover:text-primary transition-all" size={32} />
                            <span className="text-slate-500 font-bold">Drag & drop or <span className="text-primary">browse files</span></span>
                         </div>
                      </div>
                   </div>
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Additional Message</label>
                      <textarea className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none transition-all h-32 resize-none" placeholder="Tell us more about your expertise..."></textarea>
                   </div>
                   <div className="md:col-span-2 pt-4">
                      <button type="submit" className="w-full bg-primary hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4">
                         Submit Application <Send size={24} />
                      </button>
                   </div>
                </form>
              )}
           </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
