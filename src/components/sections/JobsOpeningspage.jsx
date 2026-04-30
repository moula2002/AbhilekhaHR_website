import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Upload, 
  Send, 
  CheckCircle2, 
  Search, 
  GraduationCap, 
  Calendar,
  Phone,
  Mail,
  ChevronRight,
  FileText
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const JobsOpeningspage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Fallback data
  const staticJobs = [
    {
      id: 1,
      title: "Pharmacy Asst / Senior Pharmacy Aide",
      jobLocation: "Mysore",
      experience: "0 to 10 Years",
      education: "SSLC, PUC and Any Degree",
      driveLocation: "Mysore",
      category: "Healthcare",
      description: "Looking for Pharmacy Asst / Senior Pharmacy Aide for Retail and Hospital Pharmacies in Mysore",
      type: "Full Time",
      salary: "Not Disclosed",
      posted: "Just Now"
    }
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://abhilekha-admin.onrender.com/api/jobs');
        const data = await response.json();
        if (data && data.length > 0) {
          setJobs(data);
        } else {
          setJobs(staticJobs);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs(staticJobs);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-[#F8FAFC] pt-48 pb-20 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Job Listings */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tighter">
                Available Positions <span className="text-slate-400 font-bold">({jobs.length})</span>
              </h1>
            </div>

            <div className="space-y-6">
              {loading && jobs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white border border-slate-100 rounded-2xl animate-pulse">
                   <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin mb-4" />
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Openings...</p>
                </div>
              ) : jobs.length === 0 ? (
                <div className="text-center py-20 bg-white border border-slate-100 rounded-2xl">
                   <p className="text-slate-500 font-medium">No job openings found at the moment.</p>
                </div>
              ) : (
                jobs.map((job, idx) => {
                  const jobId = job._id || job.id;
                  const isExpanded = expandedJobId === jobId;
                  
                  return (
                    <div key={jobId} className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                       {/* Job Title */}
                      <h2 className="text-xl font-bold text-slate-900 mb-4">
                        {job.title}
                      </h2>

                      {/* Badges & Quick Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        {job.category && (
                          <span className="bg-slate-100 text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                            {job.category}
                          </span>
                        )}
                        {job.jobLocation && (
                          <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold">
                            <MapPin size={14} className="text-slate-900" />
                            {job.jobLocation}
                          </div>
                        )}
                        {job.experience && (
                          <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold">
                            <Briefcase size={14} className="text-slate-900" />
                            {job.experience}
                          </div>
                        )}
                        {job.type && (
                          <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold">
                            <Clock size={14} className="text-slate-900" />
                            {job.type}
                          </div>
                        )}
                      </div>

                      {/* Requirements */}
                      <div className="space-y-4 mb-6">
                        {job.education && (
                          <div className="flex items-start gap-3 text-slate-600 text-[14px] font-medium">
                            <GraduationCap size={18} className="text-slate-900 shrink-0 mt-0.5" />
                            <span>{job.education}</span>
                          </div>
                        )}
                        {job.driveLocation && (
                          <div className="flex items-start gap-3 text-slate-600 text-[14px] font-medium">
                            <Send size={16} className="text-slate-900 shrink-0 mt-1 -rotate-45" />
                            <span>Drive: {job.driveLocation}</span>
                          </div>
                        )}
                        {job.salary && (
                          <div className="flex items-start gap-3 text-slate-600 text-[14px] font-medium">
                            <FileText size={16} className="text-slate-900 shrink-0 mt-1" />
                            <span>Salary: {job.salary}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="mb-8">
                        <h4 className="text-slate-800 font-bold text-[14px] mb-2">Description:</h4>
                        <p className="text-slate-500 text-[14px] leading-relaxed whitespace-pre-wrap">
                          {isExpanded ? job.description : (job.description?.substring(0, 150) + (job.description?.length > 150 ? '...' : ''))}
                        </p>
                        
                        {isExpanded && job.howToApply && (
                          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <h4 className="text-slate-800 font-bold text-[13px] uppercase tracking-widest mb-2">How To Apply</h4>
                            <p className="text-slate-600 text-[14px]">{job.howToApply}</p>
                          </div>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="flex justify-end gap-3 pt-4 border-t border-slate-50">
                        <button 
                          onClick={() => setExpandedJobId(isExpanded ? null : jobId)}
                          className="px-6 py-2.5 border border-slate-900 text-slate-900 rounded-md font-bold text-[13px] hover:bg-slate-50 transition-colors uppercase"
                        >
                          {isExpanded ? 'View Less' : 'View More'}
                        </button>
                        <button 
                          onClick={() => {
                            navigate('/candidates', { state: { position: job.title } });
                          }}
                          className="px-8 py-2.5 bg-slate-900 text-white rounded-md font-bold text-[13px] hover:bg-black transition-colors uppercase shadow-lg shadow-slate-900/20"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            


            {/* Help Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
               <h3 className="text-slate-800 font-bold text-lg mb-4">Need Help?</h3>
               <p className="text-slate-500 text-[13px] leading-relaxed mb-6 font-medium">
                 Can't find what you're looking for? Contact our recruitment team for assistance.
               </p>
               <div className="space-y-4">
                  <a href="mailto:info@abhilekha.com" className="flex items-center gap-3 text-slate-900 font-bold text-[14px] hover:translate-x-1 transition-transform">
                    <Mail size={18} /> Email Us
                  </a>
                  <a href="tel:+918023400510" className="flex items-center gap-3 text-slate-900 font-bold text-[14px] hover:translate-x-1 transition-transform">
                    <Phone size={18} /> Call Us
                  </a>
               </div>
            </div>

            {/* Testimonial Snippet */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
               <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-slate-900 rounded-full scale-75 opacity-20" />)}
               </div>
               <p className="text-slate-700 italic text-[14px] leading-relaxed mb-4">
                 "The recruitment process was seamless and the team was very supportive throughout my placement."
               </p>
               <div className="font-bold text-slate-900 text-sm">- Satisfied Candidate</div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default JobsOpeningspage;
