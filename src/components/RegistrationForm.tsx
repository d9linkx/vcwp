import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Monitor, Users, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { RegistrationDetails } from '../types';
import ProgressStepper from './ProgressStepper';

interface RegistrationFormProps {
  onSuccess: (ticket: { id: string; details: RegistrationDetails; date: string }) => void;
  onCancel: () => void;
}

export default function RegistrationForm({ onSuccess, onCancel }: RegistrationFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [locationState, setLocationState] = useState("");
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
    if (!fullName || !email || !whatsapp || !locationState) {
      setSubmitError("Please fill out all the simple boxes above so we can secure your seat.");
      return;
    }

    setIsLoading(true);
    setSubmitError(null);

    const ticketId = "VCB-" + Math.floor(100000 + Math.random() * 900000);
    const detailsPayload: RegistrationDetails = {
      fullName,
      email,
      whatsapp,
      location: locationState,
      pathPreference,
      paymentMethod: 'bank_transfer',
      paymentConfirmed: false,
      registrationDate: new Date().toISOString()
    };

    try {
      // 1. Persist locally to ensure zero data loss (Local State & LocalStorage)
      const existing = JSON.parse(localStorage.getItem("vibe_registrations") || "[]");
      existing.push({ id: ticketId, ...detailsPayload });
      localStorage.setItem("vibe_registrations", JSON.stringify(existing));

      // 2. Dispatch quietly in the background if a submission endpoint exists (zero user config shown)
      const silentUrl = localStorage.getItem("vibe_appscript_url") || (import.meta as any).env?.VITE_APPSCRIPT_URL || "";
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

      // Triggers state switch to SuccessPage
      onSuccess({
        id: ticketId,
        details: detailsPayload,
        date: pathPreference === 'virtual' ? "Saturday, June 13, 2026" : "Sunday, June 14, 2026",
      });

    } catch (err: any) {
      console.warn("Payload saved to offline log tracker:", err);
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
    <div className="bg-zinc-50 py-8 sm:py-12 md:py-16 min-h-screen relative overflow-hidden">
      {/* Soft background glows similar to premium landing pages */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Navigation back option */}
        <div className="flex items-center justify-between max-w-xl mx-auto mb-6">
          <button 
            type="button"
            onClick={onCancel}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-semibold cursor-pointer bg-white px-3.5 py-2 rounded-xl border border-zinc-200/80 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back To Home</span>
          </button>
          
          <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full uppercase tracking-wider select-none">
            Secure Connection
          </span>
        </div>

        {/* Progress Stepper with visual feedback */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.01)] p-3 sm:p-4 mb-8 max-w-xl mx-auto">
          <ProgressStepper currentStep={1} />
        </div>

        {/* Onboarding form card container */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-zinc-200/85 shadow-md space-y-6 overflow-hidden relative">
          {/* Top accent visual strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
          
          <div className="p-6 sm:p-8 space-y-6 pt-7 sm:pt-9">
            <div className="text-center border-b border-zinc-100 pb-5">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight font-display">Secure Your Enrollment Ticket</h3>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed font-sans font-light">
                First class session holds on <span className="font-extrabold text-emerald-700">June 13 & 14, 2026</span>. Entry token check: ₦1,000.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide px-0.5 select-none">
                  Your Full Name
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <User className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name here"
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none font-sans text-zinc-800 placeholder:text-zinc-400/80 bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide px-0.5 select-none">
                  Your Email Address
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <Mail className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none font-sans text-zinc-800 placeholder:text-zinc-400/80 bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* WhatsApp phone number */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide px-0.5 select-none">
                  Your WhatsApp Phone Number
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <Phone className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="e.g. 090 2723 1243"
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none font-sans text-zinc-800 placeholder:text-zinc-400/80 bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Location Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide px-0.5 select-none">
                  Your State or Location
                </label>
                <div className="relative flex items-center bg-zinc-50/40 hover:bg-zinc-50/90 border border-zinc-200 rounded-xl px-3.5 focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-50 transition-all duration-150">
                  <MapPin className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <select
                    value={locationState}
                    onChange={(e) => setLocationState(e.target.value)}
                    className="w-full text-xs font-semibold py-3.5 pl-2.5 outline-none bg-transparent font-sans text-zinc-800 cursor-pointer"
                    required
                  >
                    <option value="" disabled>-- Select Your Connection State --</option>
                    {nigerianStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Path Modality Switcher */}
              <div className="space-y-2">
                <span className="block text-xs font-bold text-zinc-800 uppercase tracking-wide px-0.5 select-none">Choose Your Course Path</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <button
                    type="button"
                    onClick={() => setPathPreference('virtual')}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between h-28 cursor-pointer transition-all duration-150 ${
                      pathPreference === 'virtual'
                        ? 'border-emerald-600 bg-emerald-50/10 shadow-sm ring-1 ring-emerald-600'
                        : 'border-zinc-250 bg-white hover:bg-zinc-50'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <Monitor className={`h-4.5 w-4.5 ${pathPreference === 'virtual' ? 'text-emerald-650' : 'text-zinc-405'}`} />
                      <span className={`h-2 w-2 rounded-full ${pathPreference === 'virtual' ? 'bg-emerald-500 animate-pulse' : 'bg-transparent'}`}></span>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-zinc-900 font-sans">Virtual Stream</h4>
                      <p className="text-[10px] text-zinc-405 mt-0.5">Zoom Call &bull; Saturday, June 13</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPathPreference('physical')}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between h-28 cursor-pointer transition-all duration-150 ${
                      pathPreference === 'physical'
                        ? 'border-emerald-600 bg-emerald-50/10 shadow-sm ring-1 ring-emerald-600'
                        : 'border-zinc-250 bg-white hover:bg-zinc-50'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <Users className={`h-4.5 w-4.5 ${pathPreference === 'physical' ? 'text-emerald-650' : 'text-zinc-405'}`} />
                      <span className={`h-2 w-2 rounded-full ${pathPreference === 'physical' ? 'bg-emerald-500 animate-pulse' : 'bg-transparent'}`}></span>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-zinc-900 font-sans">In-Person Class</h4>
                      <p className="text-[10px] text-zinc-405 mt-0.5">Lagos Hub &bull; Sunday, June 14</p>
                    </div>
                  </button>
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-105 text-red-800 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fade-in shadow-sm">
                  <AlertCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 hover:bg-zinc-850 active:scale-[0.99] text-white px-5 py-4 text-xs font-bold transition-all disabled:bg-zinc-350 cursor-pointer shadow-md mt-1 font-sans uppercase tracking-wider"
              >
                {isLoading ? (
                  <>
                    <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Reserving Your Seat...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>Submit & Get Entry Ticket</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
