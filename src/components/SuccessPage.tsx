import React, { useState } from 'react';
import { CheckCircle, Copy, Check, Landmark, User, MapPin, Calendar, Phone, Home, RefreshCw, Sparkles, Printer } from 'lucide-react';
import { RegistrationDetails } from '../types';
import ProgressStepper from './ProgressStepper';

interface SuccessPageProps {
  createdTicket: {
    id: string;
    details: RegistrationDetails & { projectIdea?: string };
    date: string;
  };
  onBackToHome: () => void;
  onRegisterAnother: () => void;
}

export default function SuccessPage({ createdTicket, onBackToHome, onRegisterAnother }: SuccessPageProps) {
  const [copiedValue, setCopiedValue] = useState<'account' | 'ticket' | null>(null);

  const isMasterclass = createdTicket.id.startsWith("VCM-") || !!createdTicket.details.projectIdea;
  const commitmentFee = isMasterclass ? "₦20,000" : "₦1,000";
  const courseName = isMasterclass ? "Premium 1-on-1 Masterclass" : "Beginner Intro Coding Class";

  const paymentAccountDetails = {
    bankName: "Kuda Microfinance Bank",
    accountNumber: "3000487237",
    accountName: "Prince Chidera Dike"
  };

  const handleCopyText = (text: string, type: 'account' | 'ticket') => {
    navigator.clipboard.writeText(text);
    setCopiedValue(type);
    setTimeout(() => {
      setCopiedValue(null);
    }, 2000);
  };

  const getWhatsAppRedirectionUrl = () => {
    let text = "";
    if (isMasterclass) {
      text = `Hello Prince Dike, I just signed up for your Premium Masterclass for the ${createdTicket.details.pathPreference === 'virtual' ? 'Virtual' : 'Physical'} class.\n\nTicket ID: ${createdTicket.id}\nMy Name: ${createdTicket.details.fullName}\nWhatsApp: ${createdTicket.details.whatsapp}\nMy App Idea: ${createdTicket.details.projectIdea}\n\nI have made the N20k commitment payment. Please activate my private 1-on-1 mentorship workspace!`;
    } else {
      text = `Hello Prince Dike, I just registered for the ${createdTicket.details.pathPreference === 'virtual' ? 'Virtual' : 'Physical'} 1k class.\n\nTicket ID: ${createdTicket.id}\nMy Name: ${createdTicket.details.fullName}\nWhatsApp: ${createdTicket.details.whatsapp}\n\nI have made the N1k payment. Please activate my class seat!`;
    }
    return `https://wa.me/2349027231243?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-zinc-50 py-12 md:py-16 animate-fade-in min-h-screen flex flex-col justify-center print:bg-white print:py-0 print:min-h-0">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 print:max-w-none print:px-0">
        
        {/* Visual Progress Stepper - Step 2 (Payment Step) */}
        <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-5 space-y-4 print:hidden">
          <p className="text-center text-[10px] uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full inline-block mx-auto mb-1 font-bold font-mono">
            NEXT STEP: SEND PAYMENT RECEIPT
          </p>
          <ProgressStepper currentStep={2} />
          
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 text-center">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-500 animate-pulse mr-2"></span>
            <span className="text-xs font-bold text-zinc-900 font-sans">
              📩 Please check your email inbox ({createdTicket.details.email}) right now! We have sent you information and your next steps.
            </span>
          </div>
        </div>

        {/* Beautiful Ticket Mockup Receipt Card */}
        <div className="max-w-xl mx-auto space-y-6">
          <div className="bg-zinc-950 text-white rounded-3xl border border-zinc-900 shadow-xl overflow-hidden">
            
            {/* Header */}
            <div className="bg-emerald-600 px-6 py-6 text-center flex flex-col items-center shrink-0">
              <CheckCircle className="h-8 w-8 text-white mb-2" />
              <h4 className="font-extrabold text-base tracking-tight uppercase">Reservation Created!</h4>
              <p className="text-emerald-50 text-xs mt-0.5 font-sans font-light">Your seat is saved. Please send your payment receipt to start.</p>
            </div>

            {/* Ticket Body Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-805 pb-4.5">
                <div>
                  <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-widest block font-bold">YOUR TICKET ID</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-black text-emerald-400 font-mono tracking-wider">{createdTicket.id}</span>
                    <button 
                      onClick={() => handleCopyText(createdTicket.id, 'ticket')}
                      className="hover:text-white text-zinc-500 transition-colors p-1 rounded hover:bg-zinc-800 cursor-pointer"
                      title="Copy Ticket ID"
                    >
                      {copiedValue === 'ticket' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-widest block font-bold">CLASS TYPE</span>
                  <span className="text-[10px] font-black bg-zinc-800 text-zinc-100 px-2.5 py-1 rounded-md border border-zinc-700">
                    {courseName.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Grid details using child-friendly human terms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                <div className="flex items-start gap-2.5">
                  <User className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest font-mono block">Your Name</span>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">{createdTicket.details.fullName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest font-mono block">Your City / State</span>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">{createdTicket.details.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest font-mono block">Class Starting Date</span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">{createdTicket.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest font-mono block">Your WhatsApp Number</span>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">{createdTicket.details.whatsapp}</p>
                  </div>
                </div>
              </div>

              {/* If Masterclass, show the amazing project idea spotlight */}
              {isMasterclass && createdTicket.details.projectIdea && (
                <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-4 space-y-1.5">
                  <span className="text-[#0ea5e9] font-bold text-[9px] uppercase tracking-widest font-mono flex items-center gap-1">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    YOUR APP IDEA TO BUILD:
                  </span>
                  <p className="text-xs text-zinc-200 font-sans italic leading-relaxed">
                    "{createdTicket.details.projectIdea}"
                  </p>
                </div>
              )}

              {/* Steps to make the commitment payment */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-start gap-2.5">
                  <span className="bg-emerald-600 text-white rounded-full h-5 w-5 text-[9px] flex items-center justify-center font-bold font-mono shrink-0 mt-0.5">PAY</span>
                  <div>
                    <h5 className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest font-mono">Simple Bank Transfer</h5>
                    <p className="text-[11px] text-zinc-400 leading-normal mt-1">
                      To secure your seat and active support group link, please transfer exactly <span className="text-emerald-400 font-extrabold">{commitmentFee}</span> to this account:
                    </p>
                  </div>
                </div>

                {/* Account details card */}
                <div className="border border-zinc-800 bg-zinc-950 rounded-xl p-4.5 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-[11px]">Bank Name:</span>
                    <span className="text-zinc-200 font-bold">{paymentAccountDetails.bankName}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-zinc-900 pt-2.5">
                    <span className="text-zinc-500 text-[11px]">Account Number:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-400 font-black tracking-wider text-sm">{paymentAccountDetails.accountNumber}</span>
                      <button 
                        onClick={() => handleCopyText(paymentAccountDetails.accountNumber, 'account')}
                        className="hover:text-white text-zinc-500 transition-colors p-1.5 rounded hover:bg-zinc-900 cursor-pointer"
                        title="Copy Account Number"
                      >
                        {copiedValue === 'account' ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-zinc-900 pt-2.5">
                    <span className="text-zinc-400 text-[11px]">Account Name:</span>
                    <span className="text-zinc-300 font-semibold">{paymentAccountDetails.accountName}</span>
                  </div>
                </div>
              </div>

              {/* Redirection link of WhatsApp Prince Dike */}
              <div className="space-y-3 print:hidden">
                <a
                  href={getWhatsAppRedirectionUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white px-5 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-md mt-1 cursor-pointer"
                >
                  Confirm on WhatsApp & Send Receipt &rarr;
                </a>
                <p className="text-center text-[10px] text-zinc-550 leading-normal px-2">
                  💡 This button opens chat with Prince Dike on WhatsApp instantly. Simply paste the message and send him your bank receipt!
                </p>
              </div>
            </div>

            {/* Ticket Footer Tear-out effect */}
            <div className="bg-zinc-900 px-6 py-4 border-t border-zinc-800 border-dashed flex items-center justify-between text-[11px] font-mono text-zinc-500 shrink-0">
              <span className="font-semibold text-zinc-650">GATEWAY TYPE: SECURE KUDA</span>
              <span className="text-amber-500 font-bold animate-pulse">AWAITING RECEIPT</span>
            </div>
          </div>

          {/* Action options buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 print:hidden">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-xs text-white bg-emerald-600 hover:bg-emerald-500 font-extrabold px-6 py-3 rounded-xl transition-all shadow-[0_4px_12px_rgba(16,185,129,0.15)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              <span>Download & Print Ticket</span>
            </button>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <button 
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-650 hover:text-zinc-950 font-bold transition-colors cursor-pointer"
            >
              <Home className="h-4 w-4" />
              <span>Back To Main Hub</span>
            </button>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <button 
              onClick={onRegisterAnother}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-655 hover:text-zinc-955 font-bold transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Enroll Another Candidate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
