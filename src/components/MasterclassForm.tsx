import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Monitor, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  ArrowLeft, 
  Send, 
  Sparkles,
  Award,
  Globe,
  Compass,
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { RegistrationDetails } from '../types';
import ProgressStepper from './ProgressStepper';

interface MasterclassFormProps {
  onSuccess: (ticket: { id: string; details: RegistrationDetails & { projectIdea?: string }; date: string }) => void;
  onCancel: () => void;
}

export default function MasterclassForm({ onSuccess, onCancel }: MasterclassFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [locationState, setLocationState] = useState("");
  const [projectIdea, setProjectIdea] = useState("");
  const [pathPreference, setPathPreference] = useState<'virtual' | 'physical'>('virtual');
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const nigerianStates = [
    "Lagos (Lagos City)",
    "FCT (Abuja Core)",
    "Oyo (Ibadan)",
    "Rivers (Port Harcourt)",
    "Enugu State",
    "Edo (Benin City)",
    "Kano State",
    "Kaduna State",
    "Delta State",
    "Anambra State",
    "Ogun State",
    "Ondo State",
    "Abia State",
    "Kwara State",
    "Other State / Location"
  ];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !whatsapp || !locationState || !projectIdea) {
      setSubmitError("Please fill out all the boxes so we can help you build your project!");
      return;
    }

    setIsLoading(true);
    setSubmitError(null);

    const ticketId = "VCM-" + Math.floor(100000 + Math.random() * 900000);
    const detailsPayload: RegistrationDetails & { projectIdea?: string } = {
      fullName,
      email,
      whatsapp,
      location: locationState,
      pathPreference,
      paymentMethod: 'bank_transfer',
      paymentConfirmed: false,
      registrationDate: new Date().toISOString(),
      projectIdea
    };

    try {
      // 1. Save locally to keep it extremely safe
      const existing = JSON.parse(localStorage.getItem("vibe_registrations") || "[]");
      existing.push({ id: ticketId, ...detailsPayload, isMasterclass: true });
      localStorage.setItem("vibe_registrations", JSON.stringify(existing));

      // 2. Dispatch quietly to Apps Script endpoint if configured
      const silentUrl = localStorage.getItem("vibe_masterclass_url") || (import.meta as any).env?.VITE_APPSCRIPT_URL || "";
      if (silentUrl && !silentUrl.includes("placeholder")) {
        await fetch('/api/register-external', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            appsScriptUrl: silentUrl,
            details: { id: ticketId, ...detailsPayload }
          })
        }).catch(err => console.warn("Quiet sync failed:", err));
      }

      onSuccess({
        id: ticketId,
        details: detailsPayload,
        date: pathPreference === 'virtual' ? "Saturday, June 13, 2026" : "Sunday, June 14, 2026",
      });

    } catch (err: any) {
      console.warn("Offline fallback activated:", err);
      onSuccess({
        id: ticketId,
        details: detailsPayload,
        date: pathPreference === 'virtual' ? "Saturday, June 13, 2026" : "Sunday, June 14, 2026",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-50 py-8 sm:py-12 md:py-16 min-h-screen relative overflow-hidden font-sans antialiased">
      {/* Background radial and live animated background fluid movements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10, 
          ease: "easeInOut" 
        }}
        className="absolute top-10 right-10 h-72 w-72 rounded-full bg-emerald-50/40 blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 0.92, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 12, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-indigo-50/30 blur-3xl pointer-events-none"
      />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative space-y-6">
        
        {/* Simple navigation and top indicators */}
        <div className="flex items-center justify-between gap-4 max-w-none flex-wrap">
          <button 
            type="button"
            onClick={onCancel}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-650 hover:text-zinc-950 transition-colors font-bold cursor-pointer bg-white px-4 py-2.5 rounded-xl border border-zinc-200 shadow-xs"
          >
            <ArrowLeft className="h-4 w-4 text-emerald-600" />
            <span>Go Back To Masterclass Details</span>
          </button>
          
          <div className="flex items-center gap-1.5 text-zinc-550 text-xs font-mono font-bold bg-zinc-150/60 border border-zinc-200 px-3 py-1.5 rounded-full select-none">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Secure Mentorship Application</span>
          </div>
        </div>

        {/* Progress Stepper component */}
        <div className="bg-white border border-zinc-200 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] p-4 max-w-none">
          <ProgressStepper currentStep={1} />
        </div>

        {/* Dynamic Dual Panel Layout: Detail Overview (Left) + Simplified Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Channeled Masterclass Details and Pricing */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-zinc-900 text-white rounded-3xl border border-zinc-800 p-6 sm:p-8 space-y-6 lg:sticky lg:top-6 shadow-md"
          >
            {/* Header badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 px-3 py-1 text-[9px] font-bold text-emerald-400 font-mono tracking-wider uppercase select-none">
              <Award className="h-3 w-3 animate-bounce" />
              <span>Mentorship Bundle include</span>
            </div>

            {/* Clear Pricing Block */}
            <div className="border-b border-zinc-800 pb-5">
              <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest block font-bold">Total Space Reservation Fee:</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">₦20,000</span>
                <span className="text-xs text-zinc-500 font-sans font-medium">/ complete program</span>
              </div>
            </div>

            {/* Structured details list */}
            <div className="space-y-4 text-xs sm:text-sm">
              <h4 className="font-extrabold text-zinc-200 font-display text-sm tracking-wide">What you receive today:</h4>
              
              <ul className="space-y-4 text-zinc-300">
                <li className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-lg bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-bold text-white block">A Full Month of Dedicated Mentorship</span>
                    <p className="text-[11px] text-zinc-450 font-light">Prince Dike answers your questions, reviews your app design, and fixes blocks 1-on-1.</p>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-lg bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-bold text-white block">3 Days Intensive Live Training Sessions</span>
                    <p className="text-[11px] text-zinc-450 font-light">Step-by-step guidance on how apps run, how server databases sync, and how to query AI.</p>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-lg bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-bold text-white block">Build Your Personal Custom App Idea</span>
                    <p className="text-[11px] text-zinc-450 font-light">Bring your dream app idea! We will convert it into a real, live application that you can share.</p>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-lg bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-bold text-white block">Lifetime Vibe Builder Forum Access</span>
                    <p className="text-[11px] text-zinc-450 font-light">Connect with elite alumni, share launch coordinates, and find programming opportunities.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Note panel */}
            <div className="bg-zinc-950/60 border border-zinc-850 p-4 rounded-xl text-[11px] text-zinc-400 leading-relaxed font-sans font-light">
              💡 <span className="text-zinc-200 font-bold">Start-Anytime Flexibility:</span> The mentorship batches repeat weekly. Your enrollment key lets you take part in the upcoming batch, or pause and join alternative upcoming slots at zero extra cost!
            </div>
          </motion.div>

          {/* RIGHT PANEL: Less Wordy, Highly Polish Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 shadow-sm p-6 sm:p-8 space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-emerald-500" />
            
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight font-display">Enter Registration Info</h3>
              <p className="text-xs text-zinc-500 font-sans font-light">Fill the short details below to instantiate your cohort seat.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide select-none">
                  Full Name
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <User className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none font-sans text-zinc-800 placeholder:text-zinc-455 bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide select-none">
                  Email Address
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <Mail className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none font-sans text-zinc-800 placeholder:text-zinc-455 bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* WhatsApp Phone Number */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide select-none">
                  WhatsApp Connection Number
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <Phone className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="WhatsApp phone number"
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none font-sans text-zinc-800 placeholder:text-zinc-455 bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* State selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide select-none">
                  Your State or Location
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <MapPin className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <select
                    value={locationState}
                    onChange={(e) => setLocationState(e.target.value)}
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none bg-transparent font-sans text-zinc-800 cursor-pointer text-zinc-800"
                    required
                  >
                    <option value="" disabled>-- Select location --</option>
                    {nigerianStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project App Idea textarea */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide select-none">
                  Describe what you want to build
                </label>
                <div className="relative bg-zinc-50/40 border border-zinc-200 rounded-xl p-3 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <textarea
                    value={projectIdea}
                    onChange={(e) => setProjectIdea(e.target.value)}
                    placeholder="Describe your app/game idea simply (e.g. game app, local trade marketplace, notes tracker)"
                    rows={2.5}
                    className="w-full text-xs font-medium outline-none bg-transparent font-sans text-zinc-800 placeholder:text-zinc-400/80 resize-none"
                    required
                  />
                </div>
                <div className="flex gap-1.5 items-center mt-1 px-0.5">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <p className="text-[10px] text-zinc-450 leading-normal font-sans font-medium">
                    Simple English or Pidgin is perfect! We will map the database and coding steps together.
                  </p>
                </div>
              </div>

              {/* Class Modality Picker */}
              <div className="space-y-2">
                <span className="block text-xs font-bold text-zinc-800 uppercase tracking-wide select-none">Class Path Preference</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <button
                    type="button"
                    onClick={() => setPathPreference('virtual')}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 cursor-pointer transition-all duration-150 ${
                      pathPreference === 'virtual'
                        ? 'border-emerald-600 bg-emerald-50/10 shadow-xs ring-1 ring-emerald-600'
                        : 'border-zinc-200 bg-white hover:bg-zinc-50'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <Monitor className={`h-4.5 w-4.5 ${pathPreference === 'virtual' ? 'text-emerald-605' : 'text-zinc-400'}`} />
                      <span className={`h-1.5 w-1.5 rounded-full ${pathPreference === 'virtual' ? 'bg-emerald-500 animate-pulse' : 'bg-transparent'}`}></span>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-zinc-900 font-sans">Virtual Stream</h4>
                      <p className="text-[10px] text-zinc-400 font-mono font-medium">Zoom Class &bull; Sat, June 13</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPathPreference('physical')}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 cursor-pointer transition-all duration-150 ${
                      pathPreference === 'physical'
                        ? 'border-emerald-600 bg-emerald-50/10 shadow-xs ring-1 ring-emerald-600'
                        : 'border-zinc-200 bg-white hover:bg-zinc-50'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <Users className={`h-4.5 w-4.5 ${pathPreference === 'physical' ? 'text-emerald-655' : 'text-zinc-400'}`} />
                      <span className={`h-1.5 w-1.5 rounded-full ${pathPreference === 'physical' ? 'bg-emerald-500 animate-pulse' : 'bg-transparent'}`}></span>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-zinc-900 font-sans">In-Person Class</h4>
                      <p className="text-[10px] text-zinc-400 font-mono font-medium">Lagos Hub &bull; Sun, June 14</p>
                    </div>
                  </button>
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-100 text-red-800 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fade-in shadow-xs">
                  <AlertCircle className="h-4 w-4.5 text-red-500 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_4px_14px_rgba(16,185,129,0.25)] active:scale-[0.99] text-white px-5 py-4 text-xs font-extrabold transition-all disabled:bg-zinc-300 cursor-pointer shadow-md mt-2 font-sans uppercase tracking-wider"
              >
                {isLoading ? (
                  <>
                    <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Validating your App request...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-white" />
                    <span>Submit & Claim Seat Ticket</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
