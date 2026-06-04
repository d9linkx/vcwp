import React from 'react';
import { ArrowRight, Zap, Target, Compass, MessageSquare, Star } from 'lucide-react';

interface HeroSectionProps {
  onEnroll: () => void;
  onEnrollMasterclass: () => void;
}

export default function HeroSection({ onEnroll, onEnrollMasterclass }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-5 pb-12 sm:pt-16 sm:pb-16 md:pt-24 md:pb-20 border-b border-zinc-100">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/40 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          
          {/* Elegant pill badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/75 px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-zinc-800 border border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.01)] select-none">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-800 font-extrabold font-sans">Nigeria's Friendly AI Practice School</span>
            <span className="text-zinc-300">|</span>
            <span className="font-mono text-zinc-500 font-medium">Open to All Ages!</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] sm:leading-[1.15] font-display">
            Build Real Apps & Games <br className="hidden sm:inline" /> Just by <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Talking to AI</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-500 leading-relaxed font-sans font-light">
            Learn how to make real computer programs and list boards using simple English or Pidgin. 
            Specially designed for beginners in Nigeria to ride the global AI wave easily!
          </p>

          {/* Social Proof: Handsomely curated local student avatars */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2 select-none">
            <div className="flex -space-x-2 shrink-0">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Handsome young Nigerian student avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Excellent Nigerian developer woman avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" alt="Nigerian tech student avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Smart Nigerian tech sister avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100" alt="Young black developer male avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="text-xs text-zinc-500 font-semibold font-sans">
              Join <span className="text-emerald-700 font-extrabold">1,240+ Nigerian girls & guys</span> practicing dynamic computer builds!
            </span>
          </div>

          {/* Dual Options Card Layout (Aesthetic, beautiful entry points for both pathways) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
            
            {/* Pathway 1: N1,000 Beginners Intro Class */}
            <div className="bg-white border border-zinc-250 hover:border-zinc-350 transition-all rounded-3xl p-6 text-left flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="space-y-3">
                <span className="text-[9px] font-bold tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md uppercase font-mono block w-fit">OPTION A: BASIC COHORT</span>
                <h3 className="text-lg font-black text-zinc-900 font-display">Beginner Intro Course</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-sans font-light">
                  A 3-hour friendly lesson to learn the absolute basics of building with AI. Great for absolute beginners!
                </p>
                <div className="flex items-baseline gap-1.5 pt-2 border-t border-zinc-100 mt-2">
                  <span className="text-2xl font-black text-zinc-950">₦1,000</span>
                  <span className="text-[10px] text-zinc-400 font-sans">one-off fee</span>
                </div>
              </div>
              <button 
                onClick={onEnroll}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-950 px-4 py-3.5 text-xs font-bold text-white hover:bg-zinc-850 active:scale-95 transition-all mt-6 cursor-pointer"
              >
                <span>Signup for ₦1,000</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              </button>
            </div>

            {/* Pathway 2: N20,000 Premium Mentorship Masterclass */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border border-zinc-800 rounded-3xl p-6 text-left flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.065)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[8px] tracking-widest uppercase font-mono px-3 py-1 font-black rounded-bl-xl flex items-center gap-1 border-l border-b border-emerald-500">
                <Star className="h-2.5 w-2.5 fill-current text-white animate-pulse" />
                <span>Mentorship</span>
              </div>
              
              <div className="space-y-3">
                <span className="text-[9px] font-bold tracking-widest text-[#0ea5e9] bg-[#0ea5e9]/10 px-2.5 py-1 rounded-md uppercase font-mono block w-fit">OPTION B: MASTERCLASS</span>
                <h3 className="text-lg font-black text-white font-display">1-on-1 Guidance Session</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                  Get full step-by-step guidance and daily chats with Prince Dike to build the exact website or App idea you have in mind!
                </p>
                <div className="flex items-baseline gap-1.5 pt-2 border-t border-zinc-800 mt-2">
                  <span className="text-2xl font-black text-emerald-400">₦20,000</span>
                  <span className="text-[10px] text-zinc-500 font-sans">full package</span>
                </div>
              </div>
              
              <button 
                onClick={onEnrollMasterclass}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-800/40 hover:bg-zinc-800 text-xs text-zinc-200 hover:text-white font-bold transition-all mt-6 py-3.5 shadow-sm active:scale-95 cursor-pointer"
              >
                <span>View Masterclass Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

          {/* Micro metrics grid */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-6 border-t border-zinc-100 pt-12 sm:grid-cols-4 max-w-4xl mx-auto text-left">
            
            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-emerald-50 p-2.5 border border-emerald-100 flex items-center justify-center shrink-0">
                <Zap className="h-4.5 w-4.5 text-emerald-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">Easy AI Coding</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">No hard computer code errors anymore.</dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-200/80 flex items-center justify-center shrink-0">
                <Target className="h-4.5 w-4.5 text-blue-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">Online Lesson</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">Learn from anywhere on Zoom or Meet.</dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-200/80 flex items-center justify-center shrink-0">
                <Compass className="h-4.5 w-4.5 text-amber-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">In-Person Space</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">Practice at our friendly classrooms.</dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-200/80 flex items-center justify-center shrink-0">
                <MessageSquare className="h-4.5 w-4.5 text-purple-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">WhatsApp Group</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">Ask questions and make cool friends.</dd>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
