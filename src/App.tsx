import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ScheduleSection from './components/ScheduleSection';
import CommunitySection from './components/CommunitySection';
import RegistrationForm from './components/RegistrationForm';
import SuccessPage from './components/SuccessPage';
import MasterclassPage from './components/MasterclassPage';
import MasterclassForm from './components/MasterclassForm';
import { Terminal, Shield, Activity, Star } from 'lucide-react';
import { RegistrationDetails } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'register' | 'success' | 'masterclass' | 'masterclass_register'>('landing');
  const [createdTicket, setCreatedTicket] = useState<{
    id: string;
    details: RegistrationDetails & { projectIdea?: string };
    date: string;
  } | null>(null);

  const navigateAndScroll = (id: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRegistrationSuccess = (ticket: { id: string; details: RegistrationDetails & { projectIdea?: string }; date: string }) => {
    setCreatedTicket(ticket);
    setCurrentView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      {/* Sticky Header Nav Board */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Brand Title */}
          <button 
            onClick={() => {
              setCurrentView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left bg-transparent border-none cursor-pointer p-0 select-none outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 shadow-sm shrink-0">
              <Terminal className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-sm font-extrabold tracking-tight text-zinc-900 font-sans block">VibeCode with Prince</span>
              <span className="text-[10px] text-zinc-450 block font-mono uppercase">for all ages</span>
            </div>
          </button>

          {/* Desktop Navigation Link Tickers - strictly clean, non-cluttered */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => navigateAndScroll('hero')} 
              className="text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Intro
            </button>
            <button 
              onClick={() => navigateAndScroll('schedules')} 
              className="text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Schedules
            </button>
            <button 
              onClick={() => navigateAndScroll('community')} 
              className="text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Forum FAQ
            </button>
            <span className="text-zinc-200">|</span>
            <button 
              onClick={() => {
                setCurrentView('masterclass');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <Star className="h-3.5 w-3.5 fill-current text-emerald-500 animate-pulse" />
              <span>Premium Masterclass (₦20k)</span>
            </button>
          </nav>

          {/* Prompt Intake Action Button */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Cohort June 2026
            </span>
            {currentView !== 'register' && currentView !== 'success' && currentView !== 'masterclass' && currentView !== 'masterclass_register' ? (
              <button 
                onClick={() => {
                  setCurrentView('register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white px-3.5 py-2.5 text-xs font-bold transition-all border border-zinc-805 cursor-pointer shadow-sm"
              >
                Enroll Ticket &rarr;
              </button>
            ) : (currentView === 'masterclass' || currentView === 'masterclass_register') && (
              <button 
                onClick={() => {
                  setCurrentView('masterclass_register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-lg bg-zinc-950 hover:bg-zinc-850 text-white px-3.5 py-2.5 text-xs font-black uppercase tracking-wider transition-all border border-zinc-805 cursor-pointer shadow-sm hover:shadow-md animate-fade-in"
              >
                Masterclass &rarr;
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Single-screen Content Feed routing */}
      <main className="flex-1">
        {currentView === 'landing' && (
          <div className="animate-fade-in">
            {/* Section 1: Hero Discovery Section */}
            <HeroSection 
              onEnroll={() => {
                setCurrentView('register');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              onEnrollMasterclass={() => {
                setCurrentView('masterclass');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 2: Path Schedules Selection (Virtual vs Physical) */}
            <ScheduleSection />

            {/* Section 3: Public Mastermind Forums & FAQs list */}
            <CommunitySection />
          </div>
        )}

        {currentView === 'masterclass' && (
          <div className="animate-fade-in">
            <MasterclassPage 
              onBack={() => {
                setCurrentView('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onEnrollMasterclass={() => {
                setCurrentView('masterclass_register');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {currentView === 'masterclass_register' && (
          <div className="animate-fade-in">
            <MasterclassForm 
              onSuccess={handleRegistrationSuccess}
              onCancel={() => {
                setCurrentView('masterclass');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {currentView === 'register' && (
          <div className="animate-fade-in">
            {/* Dedicated Registration Form SPA page */}
            <RegistrationForm 
              onSuccess={handleRegistrationSuccess}
              onCancel={() => {
                setCurrentView('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {currentView === 'success' && createdTicket && (
          <div className="animate-fade-in">
            {/* Dedicated Account Success with payment instructions */}
            <SuccessPage 
              createdTicket={createdTicket}
              onBackToHome={() => {
                setCurrentView('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRegisterAnother={() => {
                setCreatedTicket(null);
                setCurrentView('register');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </main>

      {/* Modern Schweizer styled accent footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900 text-xs font-sans mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-zinc-900 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">VibeCode with Prince</span>
                <span className="text-[10px] bg-emerald-950/60 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md font-bold uppercase">
                  Active Practice Program
                </span>
              </div>
              <p className="text-zinc-500 leading-relaxed font-light max-w-md text-[11px]">
                Empowering Nigerian children, teenagers, and adults to practice computer programming and build real game apps by simply talking to AI. 
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-medium">
              <button 
                onClick={() => {
                  setCurrentView('landing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-white transition-colors cursor-pointer text-zinc-400"
              >
                Home Hub
              </button>
              <span className="text-zinc-800">|</span>
              <button 
                onClick={() => {
                  setCurrentView('register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-white transition-colors cursor-pointer text-zinc-400"
              >
                Basic Class (₦1,000)
              </button>
              <span className="text-zinc-800">|</span>
              <button 
                onClick={() => {
                  setCurrentView('masterclass');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="text-emerald-400 hover:text-white transition-colors cursor-pointer font-bold"
              >
                Mentorship Masterclass (₦20,000)
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-[10px] font-mono">
            <p className="flex items-center gap-1.5 leading-normal text-center sm:text-left">
              <Shield className="h-3.5 w-3.5 shrink-0" />
              <span>&copy; {new Date().getFullYear()} VibeCode with Prince. Secured via Direct Bank Transfer to Prince Chidera Dike (Kuda Bank: 3000487237).</span>
            </p>
            <p className="flex items-center gap-1.5 shrink-0">
              <Activity className="h-3.5 w-3.5 text-emerald-500" />
              <span>Sango Ibadan Hub and Virtual Workspace</span>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
