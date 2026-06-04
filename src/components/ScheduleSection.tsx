import React, { useState } from 'react';
import { Calendar, Monitor, Users, Check, Compass, Clock, FolderKanban, Linkedin, ExternalLink } from 'lucide-react';

export default function ScheduleSection() {
  const [selectedPath, setSelectedPath] = useState<'virtual' | 'physical'>('virtual');

  const pathDetails = {
    virtual: {
      title: "Virtual Learning Sandbox",
      cost: "₦1,000",
      originalCost: "₦100,000",
      dateLabel: "Saturday, June 13, 2026",
      timeLabel: "10:00 AM - 1:00 PM (WAT / Nigeria Time)",
      location: "Interactive Zoom, Google Meet + WhatsApp Workspace",
      features: [
        "Join from anywhere in Nigeria (Lagos, Abuja, PH, Enugu, Kano, etc.)",
        "Recorded video modules to review again anytime",
        "Low packet size optimizations (designed to stretch your mobile data)",
        "Automated prompt toolkits given to all virtual attendees"
      ],
      requirements: "Any smartphone, tablet, or laptop connected to internet."
    },
    physical: {
      title: "Physical Hub Experience",
      cost: "₦1,000",
      originalCost: "₦100,000",
      dateLabel: "Sunday, June 14, 2026",
      timeLabel: "2:00 PM - 5:00 PM (WAT / Nigeria Time)",
      location: "Sango Ibadan or the student's chosen comfortable location (home, etc)",
      features: [
        "In-person peer mastermind (network and share coding sessions physically)",
        "Direct physical setup guidance by experienced vibe coaches",
        "Light soft refreshments served physically (good vibes only)",
        "Special physical sandbox templates loaded straight to device hubs"
      ],
      requirements: "Bring your laptop, smartphone, or tablet if available."
    }
  };

  const details = pathDetails[selectedPath];

  return (
    <section id="schedules" className="bg-white py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">
            Path & Dates
          </span>
          <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Choose Your Ideal Modality
          </h2>
          <p className="text-zinc-500 font-sans leading-relaxed text-sm sm:text-base font-light">
            We understand timing and location vary. Select the style that best suits your daily schedule and setup state. Both pathways receive equal value certificates!
          </p>
        </div>

        {/* Choice Switches */}
        <div className="grid grid-cols-2 max-w-md mx-auto bg-zinc-100/80 p-1 rounded-xl border border-zinc-200/60 mb-16">
          <button
            onClick={() => setSelectedPath('virtual')}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedPath === 'virtual'
                ? 'bg-white text-zinc-950 shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-zinc-200/50'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            <Monitor className="h-4 w-4 shrink-0 text-emerald-600" />
            <span>Virtual Stream</span>
          </button>
          <button
            onClick={() => setSelectedPath('physical')}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedPath === 'physical'
                ? 'bg-white text-zinc-950 shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-zinc-200/50'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            <Users className="h-4 w-4 shrink-0 text-blue-600" />
            <span>Physical Hub</span>
          </button>
        </div>

        {/* Interactive pathway breakdown panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card left detail (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-50/50 border border-zinc-200/80 p-6 sm:p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.01)] space-y-6 animate-fade-in flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-5 gap-4">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">CLASS MODALITY</span>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 mt-2 font-display">{details.title}</h3>
                </div>
                <div className="inline-flex flex-col items-start sm:items-end">
                  <span className="text-[10px] text-zinc-400 line-through">Value: {details.originalCost}</span>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100/70 border border-emerald-200/80 px-2.5 py-1 rounded-lg mt-0.5">
                    {details.cost} Entry Token
                  </span>
                </div>
              </div>

              {/* Timings information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div className="flex items-start gap-3">
                  <span className="p-2 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100 mt-0.5 shrink-0">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Date Chosen</h4>
                    <p className="text-sm font-bold text-zinc-900 mt-0.5">{details.dateLabel}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2 bg-zinc-100 rounded-lg text-blue-600 border border-zinc-200 mt-0.5 shrink-0">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Exact Time Slot</h4>
                    <p className="text-sm font-bold text-zinc-900 mt-0.5">{details.timeLabel}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <span className="p-2 bg-zinc-100 rounded-lg text-amber-600 border border-zinc-200 mt-0.5 shrink-0">
                    <Compass className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Location Context</h4>
                    <p className="text-sm font-medium text-zinc-700 mt-0.5 leading-relaxed">{details.location}</p>
                  </div>
                </div>
              </div>

              {/* Checklist items */}
              <div className="border-t border-zinc-200/80 pt-5 space-y-4">
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">What's Included Live:</h4>
                <div className="space-y-3">
                  {details.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="bg-emerald-50 border border-emerald-200 rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5 text-emerald-700">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-700 leading-normal font-sans font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Device context */}
            <div className="bg-zinc-100 p-4 rounded-xl border border-zinc-200/60 flex items-center gap-3.5 mt-5">
              <FolderKanban className="h-5 w-5 text-zinc-650 shrink-0" />
              <div className="text-xs leading-relaxed text-zinc-600">
                <span className="font-bold text-zinc-900">Recommended setup requirements:</span> {details.requirements}
              </div>
            </div>
          </div>

          {/* Schedule Sidebar Illustration (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-900 text-white border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between animate-fade-in">
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase font-mono">Onboarding Path Workflow</span>
                <h4 className="text-lg font-black text-white mt-1.5 font-display">Simple Signup Journey</h4>
              </div>

              {/* Photo of smart young black developers learning to code together */}
              <div className="rounded-xl overflow-hidden border border-zinc-800/80 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=600&h=300" 
                  alt="Smart young black men and ladies coding together enthusiastically" 
                  className="w-full h-32 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                    <span className="w-px h-6 bg-zinc-800 mt-1"></span>
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-zinc-200">Onboarding Form</h5>
                    <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">Fill out your contact details on our Secure Enrollment page.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                    <span className="w-px h-6 bg-zinc-800 mt-1"></span>
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-zinc-200">Token Commitment</h5>
                    <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">Complete a ₦1,000 commitment transfer to confirm your active slot.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
                    <span className="w-px h-6 bg-zinc-800 mt-1"></span>
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-zinc-200">Workspace Activation</h5>
                    <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">Submit payment receipt via WhatsApp to unlock your prep sandbox workspace.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-6 w-6 rounded-full bg-zinc-850 border border-zinc-700 text-zinc-400 text-[10px] flex items-center justify-center font-bold">4</span>
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-zinc-450">Live Vibe Sandbox</h5>
                    <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">Begin your live session holds on {selectedPath === 'virtual' ? 'June 13' : 'June 14'}!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-4 text-center">
              <span className="text-[10px] text-zinc-500 font-mono">Select your preferred path modality when you enroll on our Secure form.</span>
            </div>
          </div>
        </div>

        {/* Elegant Editorial Spotlight: Meet Your Host */}
        <div className="mt-20 max-w-4xl mx-auto border border-zinc-200 bg-zinc-50/40 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
          <div className="relative shrink-0">
            {/* Soft avatar initial frame with premium gradients */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Prince Dike - Lead Mentor" 
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border border-white shadow-md"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-black" title="Verified Cohort Director">
              ✓
            </div>
          </div>

          <div className="space-y-4 flex-1 text-center md:text-left">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-3 py-1.5 rounded-full font-bold font-mono">
                COHORT DIRECTOR & LEAD MENTOR
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 mt-2.5 font-display">Prince Dike</h3>
              <p className="text-xs text-zinc-400 font-bold block mt-0.5">CEO of Sabicrest &middot; Founder of PIDItasks</p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light max-w-2xl">
              Prince Dike is the Founder of <span className="font-semibold text-zinc-800">PIDItasks</span> and <span className="font-semibold text-zinc-800">PIDI Marketing Agency</span>, the co-founder & CEO of <span className="font-semibold text-zinc-805">Sabicrest</span>, and co-founder & CPMO of <span className="font-semibold text-zinc-800">Prawnbox Technology Ltd.</span> and other innovative platforms. With rich full-stack marketing mastery and professional coding experience, Prince drives this initiative to democratize hands-on AI literacy and help beginners securely build functional local applications.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center gap-3.5 justify-center md:justify-start">
              <a 
                href="https://linkedin.com/in/prince-dike"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0a66c2] hover:bg-[#004182] active:scale-[0.98] text-white px-5 py-2.5 text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Linkedin className="h-4 w-4 fill-current shrink-0" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="h-3 w-3 shrink-0 opacity-80" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
