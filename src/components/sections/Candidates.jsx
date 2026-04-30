import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  ChevronRight,
  UserPlus,
  BookOpen,
  Sparkles,
  Upload
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import candidateHero from '../../assets/candidate-hero.png';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';
import step4 from '../../assets/step4.png';

const Candidates = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', position: '', experience: '', resume: null, message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.state?.position) {
      setFormData(prev => ({ ...prev, position: location.state.position }));
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let resumeBase64 = null;
      if (formData.resume) {
        resumeBase64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(formData.resume);
        });
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience,
          resumeData: resumeBase64,
          resumeName: formData.resume?.name,
          message: formData.message || `Application for ${formData.position} from ${formData.name}.`
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', position: '', experience: '', resume: null, message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: Target,
      title: "Targeted Placement",
      description: "We don't just find you a job; we find the right environment where your specific skills can thrive and grow."
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Access to exclusive roles in top-tier organizations that are often not advertised on public job boards."
    },
    {
      icon: ShieldCheck,
      title: "Expert Guidance",
      description: "Our consultants provide end-to-end support, from resume polishing to interview preparation and salary negotiation."
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Stay ahead with our deep knowledge of industry trends, salary benchmarks, and emerging technology sectors."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Profile Analysis",
      image: step1,
      description: "We dive deep into your experience, aspirations, and technical expertise."
    },
    {
      step: "02",
      title: "Strategic Matching",
      image: step2,
      description: "We identify organizations and roles that align with your career trajectory."
    },
    {
      step: "03",
      title: "Interview Coaching",
      image: step3,
      description: "Receive personalized coaching to highlight your strengths effectively."
    },
    {
      step: "04",
      title: "Successful Placement",
      image: step4,
      description: "Ensuring a smooth start in your new professional chapter."
    }
  ];

  return (
    <div className="font-outfit overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={candidateHero} 
            alt="Careers at Abhilekha" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} className="text-orange-400" />
              Empowering Your Career Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Find Your <span className="text-orange-500">Dream Career</span> With Us
            </h1>
            <p className="text-xl text-white/70 font-medium leading-relaxed">
              We connect top talent with industry leaders. Your professional growth is our priority. Let's build your future together.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/careers" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all flex items-center gap-2">
                Browse Openings <ChevronRight size={20} />
              </Link>
              <button 
                onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold transition-all"
              >
                Submit Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Why Choose Abhilekha?</h2>
            <p className="text-slate-500 text-lg font-medium">
              We are more than just a recruitment firm. We are your career partners, dedicated to helping you achieve your professional milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - REDESIGNED LIGHT */}
      <section className="py-24 bg-[#FDFDFD] text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Our Proven Method</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Placement Process</h2>
            <p className="text-slate-500 text-lg font-medium">
              A structured approach to ensure you find the perfect role.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group flex flex-col h-full">
                <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs font-black text-slate-900">{step.step}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="space-y-3 px-2">
                  <h4 className="text-xl font-bold group-hover:text-orange-500 transition-colors duration-300">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply-form" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="bg-slate-900 px-10 py-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                <Upload size={32} />
              </div>
              <h3 className="text-white text-2xl font-bold">Quick Resume Submission</h3>
              <p className="text-white/60 mt-2 font-medium">Complete the form below and our team will get in touch.</p>
            </div>
            
            <div className="p-10 md:p-16">
              <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Applying for Position</label>
                  <input 
                    type="text" 
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 transition-all font-semibold" 
                    placeholder="e.g. HR / Full Stack Developer" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Full Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 transition-all" 
                    placeholder="Enter name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Email Address *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 transition-all" 
                    placeholder="Enter email" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Phone *</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 transition-all" 
                    placeholder="Enter mobile" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Experience *</label>
                  <input 
                    type="text" 
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 transition-all" 
                    placeholder="e.g. 2 Years" 
                    required 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Resume Upload *</label>
                  <input 
                    type="file" 
                    onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                    className="w-full bg-slate-50 border-2 border-dashed border-slate-200 p-4 rounded-xl text-sm text-slate-500" 
                    required 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Message / Cover Note</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 transition-all min-h-[120px] resize-none" 
                    placeholder="Tell us more about yourself..." 
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-orange-500 text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-orange-500/20 disabled:opacity-50"
                  >
                    {submitted ? "Submitted Successfully!" : "Submit Your Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - REDESIGNED LIGHT & SMALLER */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 md:p-14 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight relative z-10">
              Ready to Take the Next Step?
            </h2>
            <p className="text-base text-slate-500 max-w-xl mx-auto font-medium relative z-10 leading-relaxed">
              Join thousands of professionals who have found their perfect career match through Abhilekha Information. Let's start your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2 relative z-10">
              <Link to="/careers" className="px-8 py-3.5 bg-orange-500 text-white rounded-full font-bold text-sm hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                View Open Positions
              </Link>
              <button 
                onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-black transition-all"
              >
                Submit Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Candidates;
