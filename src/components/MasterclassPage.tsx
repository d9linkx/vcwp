import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Users, 
  CheckCircle, 
  Star, 
  ExternalLink, 
  Calendar, 
  Clock, 
  ChevronRight,
  TrendingUp, 
  Check, 
  ShieldCheck, 
  MessageSquareOff, 
  Smartphone, 
  Laptop, 
  Layers 
} from 'lucide-react';

interface MasterclassPageProps {
  onBack: () => void;
  onEnrollMasterclass: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function MasterclassPage({ onBack, onEnrollMasterclass }: MasterclassPageProps) {
  return (
    <div className="bg-zinc-50 min-h-screen pb-24 text-zinc-900 font-sans antialiased overflow-x-hidden">
      {/* Back button and clean/elegant white header like Introductory Page */}
      <div className="bg-white border-b border-zinc-100 relative overflow-hidden py-4 sm:py-5 select-none z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex items-center justify-between gap-4 flex-wrap">
          <motion.button 
            onClick={onBack}
            whileHover={{ x: -2 }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-550 hover:text-zinc-950 hover:underline transition-all cursor-pointer bg-transparent border-none py-1 px-1"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Return to Introductory Page</span>
          </motion.button>
        </div>
      </div>

      {/* Redesigned Centered Hero Section matching Introductory Page approach exactly */}
      <section id="masterclass-hero" className="relative overflow-hidden bg-white pt-5 pb-12 sm:pt-16 sm:pb-16 md:pt-24 md:pb-20 border-b border-zinc-100">
        
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/40 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            
            {/* Elegant pill badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/75 px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-zinc-800 border border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.01)] select-none">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-800 font-extrabold font-sans">Premium Cohort Mentorship</span>
              <span className="text-zinc-300">|</span>
              <span className="font-mono text-zinc-600 font-bold">1-on-1 Guidance</span>
            </div>

            {/* Display Typography */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] sm:leading-[1.15] font-display">
              What If The Next <br className="hidden sm:inline" /> <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Big App</span> Came From You?
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-500 leading-relaxed font-sans font-light">
              A few years ago, a teenager named Nick D'Aloisio was sitting with a problem: 
              He was frustrated by how long it took to read news articles on his phone. 
              So he built a simple app that summarized long articles — and sold it to Yahoo for millions before turning 18!
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
                Guiding <span className="text-emerald-700 font-extrabold">hundreds of ambitious Nigerians</span> onto the tech builders path!
              </span>
            </div>

            {/* Centered CTA Trigger row */}
            <div className="pt-4 flex items-center justify-center">
              <div className="flex flex-col text-center bg-zinc-50 border border-zinc-250/80 px-6 py-3 rounded-2xl select-none shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <span className="text-[9px] text-zinc-400 font-mono font-bold uppercase tracking-wider">Cohort Package Fee:</span>
                <div className="flex items-baseline gap-1 mt-0.5 justify-center">
                  <span className="text-2xl font-black text-zinc-900">₦20,000</span>
                  <span className="text-[10px] text-zinc-500 font-sans">/ one-off batch fee</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Exciting Scrolling Notification Ticker directly underneath Hero */}
      <div className="bg-emerald-900 text-emerald-100 py-2.5 sm:py-3 font-medium text-xs font-sans border-y border-emerald-950/80 overflow-hidden select-none">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap text-center md:text-left">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="h-2 w-2 rounded-full bg-emerald-400 absolute" />
            <span>🔥 Only <span className="font-extrabold text-white underline decoration-emerald-300">4 spots remaining</span> for this week's cohort!</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[10px] font-mono tracking-wider opacity-90">
            <span>⚡ NEXT COHORT STARTS MONDAY</span>
            <span>&bull;</span>
            <span>💬 1-ON-1 TELEGRAM & WHATSAPP SUPPORT INCLUDED</span>
          </div>
        </div>
      </div>

      {/* Main Narrative Sections with Motion Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 space-y-20"
      >
        
        {/* The Summly and Facebook Stories */}
        <section className="space-y-12">
          {/* Article Story Box */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.015)] relative overflow-hidden"
          >
            <div className="space-y-6 max-w-3xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-bold border border-zinc-200 bg-zinc-50 px-2 py-0.5 rounded-md select-none">No. 01</span>
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 font-bold block">The Story of Summly</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight text-zinc-950 font-display">A Teenager's Simple Idea</h3>
              </div>
              
              <div className="space-y-4 text-zinc-600 leading-relaxed font-light text-sm sm:text-base">
                <p>
                  A few years ago, a teenager named <span className="font-semibold text-zinc-900">Nick D'Aloisio</span> was sitting with a problem.
                </p>
                <p>
                  He was frustrated by how long it took to read news articles on his phone.
                </p>
                <p>
                  So he built a simple app that used technology to summarize long articles into short, easy-to-read versions.
                </p>
                <p>
                  That app became known as <span className="font-semibold text-emerald-600">Summly</span>.
                </p>
                <p className="bg-zinc-50 border border-zinc-150 p-4 rounded-xl font-medium text-zinc-805 italic my-3">
                  "Before he turned 18, the app was acquired by Yahoo for millions of dollars."
                </p>
                <p>
                  Not because he had a huge company. Not because he had hundreds of employees.
                </p>
                <p className="font-bold text-zinc-950 text-base">
                  Because he saw a problem and built a solution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Facebook Story Box */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.015)] relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-bold border border-zinc-200 bg-zinc-50 px-2 py-0.5 rounded-md select-none">No. 02</span>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#0ea5e9] font-bold block">The Dorm Room Project</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-zinc-950 font-display">Solving what's in front of you</h3>
                </div>
                
                <div className="space-y-4 text-zinc-600 leading-relaxed font-light text-sm sm:text-base">
                  <p>
                    Around the same time, a university student named <span className="font-semibold text-zinc-900">Mark Zuckerberg</span> started building a simple website from his dorm room.
                  </p>
                  <p>
                    He wasn't trying to build one of the largest companies in history.
                  </p>
                  <p>
                    He was solving a simple problem in front of him.
                  </p>
                  <p className="font-bold text-zinc-950">
                    That small project eventually became Facebook.
                  </p>
                  <p className="text-zinc-500 font-sans">
                    Today, billions of people use products that started as someone's simple idea.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300"
                  alt="Confident smiling young black lady developer holding notebook"
                  className="rounded-2xl w-full h-48 object-cover border border-zinc-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Problems are Opportunities illustration */}
          <motion.div 
            variants={itemVariants}
            className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/10 to-zinc-950/40 pointer-events-none" />
            <div className="relative space-y-6 max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-400 font-bold block">Every Problem is an Opportunity</span>
              
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                Now think about this. <br /> The world has never had more problems to solve.
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {["Schools", "Churches", "Businesses", "Communities", "Parents", "Young people", "Organizations"].map((item, idx) => (
                  <div key={idx} className="bg-zinc-850 border border-zinc-800 px-3 py-2.5 rounded-xl text-center">
                    <span className="text-zinc-300 font-bold text-xs sm:text-sm block">{item}</span>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-mono">have problems</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-850 space-y-1">
                <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                  And every problem is an opportunity for someone to build a solution. <br />
                  The question is:
                </p>
                <p className="text-emerald-400 text-lg sm:text-2xl font-black font-display tracking-tight">
                  What if that person could be you?
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section: Dreamers vs Builders */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase font-black">THE GAP</span>
            <h2 className="text-3xl font-black tracking-tight text-zinc-950 font-display">The Difference Between Dreamers and Builders</h2>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
              Most people have ideas. Thousands of them. "I wish there was an app for this." But very few ever move beyond wishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
            >
              <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider font-mono">The Dreamer's Loop</h4>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-550">
                <li className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold leading-none mt-0.5">&times;</span>
                  <span>"I wish there was an app for this."</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold leading-none mt-0.5">&times;</span>
                  <span>"I wish there was a website that did that."</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold leading-none mt-0.5">&times;</span>
                  <span>"I wish somebody would create something that solves this problem."</span>
                </li>
              </ul>
              <p className="text-xs text-zinc-450 font-light leading-relaxed pt-2 border-t border-zinc-100">
                They believe building software is only for genius programmers. They believe they need years of experience. That belief is becoming less true every year.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-zinc-900 border border-zinc-800 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-md flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono">The Builder's Leap</h4>
                <div className="text-xs sm:text-sm text-zinc-300 space-y-3 mt-3">
                  <p className="font-semibold text-white">The World Has Changed</p>
                  <p className="font-light leading-relaxed text-zinc-400">
                    Ten years ago, if you wanted to build an app, you had to spend years learning programming languages.
                  </p>
                  <p className="font-light leading-relaxed text-zinc-400">
                    Today, AI can help you write code, fix mistakes, explain concepts, and build faster than ever before.
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 font-sans font-light pt-4 border-t border-zinc-800 mt-4 leading-relaxed">
                The barrier is no longer as high as it once was. The biggest challenge is learning how to use these new tools effectively.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section: Imagine Your Life One Year From Now */}
        <motion.section 
          variants={itemVariants}
          className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8"
        >
          <div className="border-b border-zinc-100 pb-5 max-w-xl">
            <span className="text-[10px] font-mono font-bold text-[#0ea5e9] bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              A TIMELESS CHOICE
            </span>
            <h3 className="text-2xl font-black text-zinc-950 mt-3 font-display">Imagine Your Life One Year From Now</h3>
            <p className="text-xs text-zinc-500 mt-1 font-light leading-relaxed">
              Picture two versions of yourself. Which future sounds better to you?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-400 font-bold text-sm">
                <span className="h-6 w-6 rounded-full bg-zinc-100 text-zinc-500 font-mono text-xs flex items-center justify-center font-bold">A</span>
                <span>The Passive Browser</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-550 leading-relaxed font-light font-sans">
                The first version keeps doing what most people do. Watching videos. Scrolling social media. Saving ideas. Talking about plans. Waiting for the perfect time.
              </p>
              <div className="bg-zinc-50 border border-zinc-100 p-3.5 rounded-xl text-xs text-zinc-450 italic">
                One year passes. Nothing changes. The ideas are still sitting in a notebook.
              </div>
            </div>

            <div className="space-y-4 bg-emerald-50/25 border border-emerald-100/60 p-5 rounded-2xl">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm">
                <span className="h-6 w-6 rounded-full bg-emerald-600 text-white font-mono text-xs flex items-center justify-center font-bold">B</span>
                <span>The Active Creator</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light font-sans">
                You learn how modern software is built. You understand how AI works. You start creating small projects. You gain confidence. You build solutions. You meet other builders. You launch something. You improve. You grow.
              </p>
              <div className="bg-emerald-600 text-white font-sans font-extrabold p-3 text-xs rounded-xl shadow-sm text-center">
                One year later, you are a creator of technology!
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section: Who Is It For */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div 
              variants={itemVariants}
              className="md:col-span-8 space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 font-display">
                This Masterclass Was Built For People Like You
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light max-w-lg">
                You don't need a computer science degree. You don't need years of coding experience. You don't need to be a genius. You simply need curiosity and the willingness to learn.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "A secondary school student",
                  "A university student",
                  "An NYSC member",
                  "A business owner",
                  "A freelancer",
                  "An entrepreneur",
                  "A professional",
                  "Anyone wanting to see the future"
                ].map((profile, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-zinc-700">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{profile}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-4 max-w-xs mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250&h=300" 
                alt="Smart focused young black student developer on computer" 
                className="w-full h-56 rounded-2xl object-cover border border-zinc-200 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Flat style abstract vector image row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
            alt="Flat developer software statistics illustration represent smart visual coding apps" 
            className="rounded-2xl border border-zinc-200 w-full h-36 object-cover shadow-xs"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
            alt="Abstract clean flat graphics illustration representing dreams and building tech solution modules" 
            className="rounded-2xl border border-zinc-200 w-full h-36 object-cover shadow-xs"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section: What You'll Learn (Days Curriculum) */}
        <section className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#0ea5e9] bg-sky-50 px-3 py-1 rounded-full uppercase font-black">THE ROADMAP</span>
            <h3 className="text-2xl font-black text-zinc-950 font-display">What You'll Learn</h3>
            <p className="text-xs text-zinc-500 font-sans font-light">
              A comprehensive three-step pathway designed to clarify the technical world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Day 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 space-y-4"
            >
              <div className="h-9 w-9 bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-lg flex items-center justify-center text-xs font-black">
                Day 1
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-zinc-950 font-display">Understanding the Opportunity</h4>
                <p className="text-[10px] text-zinc-400 font-serif italic mt-0.5">Explore the shift</p>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-600 leading-relaxed font-light">
                <li className="flex gap-1.5 items-start">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How software development evolved</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>Why AI is changing everything</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>What Vibe Coding is</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How successful builders think</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How to turn ideas into projects</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How to work effectively with AI</span>
                </li>
              </ul>
              <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500 font-normal">
                You'll leave with a completely different understanding of what is possible.
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 space-y-4"
            >
              <div className="h-9 w-9 bg-blue-100 border border-blue-200 text-blue-800 rounded-lg flex items-center justify-center text-xs font-black">
                Day 2
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-zinc-950 font-display">Building Real Applications</h4>
                <p className="text-[10px] text-zinc-400 font-serif italic mt-0.5">Connect the puzzle</p>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-600 leading-relaxed font-light">
                <li className="flex gap-1.5 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How apps work</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How websites work</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How users sign up</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How login systems work</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How information is stored</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How databases work</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How modern applications connect together</span>
                </li>
              </ul>
              <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500 font-normal">
                The technical world will finally start making sense.
              </div>
            </motion.div>

            {/* Day 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 space-y-4"
            >
              <div className="h-9 w-9 bg-purple-100 border border-purple-200 text-purple-800 rounded-lg flex items-center justify-center text-xs font-black">
                Day 3
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-zinc-950 font-display">Launching Real Projects</h4>
                <p className="text-[10px] text-zinc-400 font-serif italic mt-0.5">Ship online to the world</p>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-600 leading-relaxed font-light">
                <li className="flex gap-1.5 items-start">
                  <span className="text-purple-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How to deploy projects online</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-purple-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How payments work</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-purple-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How to improve applications</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-purple-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How to build more advanced solutions</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-purple-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>How people earn with these skills</span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <span className="text-purple-500 font-bold shrink-0 mt-0.5">&bull;</span>
                  <span>What your next steps should be</span>
                </li>
              </ul>
              <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500 font-normal">
                Ship functional products to live environments today!
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Part Most Courses Don't Offer */}
        <motion.section 
          variants={itemVariants}
          className="bg-gradient-to-tr from-emerald-950 to-zinc-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="h-24 w-24 text-emerald-400" />
          </div>

          <div className="space-y-6 max-w-2xl relative">
            <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-mono text-emerald-400 bg-emerald-900/50 border border-emerald-800 px-3 py-1.5 rounded-full font-black">
              SUPERIOR VALUE OFFERING
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-display">The Part Most Courses Don't Offer</h3>
            <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              Learning something new is exciting. Doing it alone is hard. <br />
              That's why every single student in this cohort receives:
            </p>

            <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl space-y-2">
              <span className="text-xl sm:text-2xl font-black text-white block">1 Full Month of Mentorship</span>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-light">
                You'll receive guidance as you continue building. You'll be able to ask questions. Get feedback. Solve challenges. And continue growing after the training ends.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section: Joining A Community */}
        <motion.section 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm"
        >
          <div className="md:col-span-4">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300&h=300" 
              alt="Excited students chatting and building program designs" 
              className="rounded-2xl w-full h-44 object-cover border border-zinc-150"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="md:col-span-8 space-y-4">
            <span className="text-[10px] tracking-widest uppercase font-mono text-emerald-700 font-bold block">No Lone-Wolf Coding</span>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-950 font-display">You're Also Joining a Community</h3>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light font-sans">
              When people try to learn alone, many quit. When people learn with others, they move faster. Inside our community you'll meet:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {["Builders", "Students", "Entrepreneurs", "Freelancers", "Startup founders", "Future innovators"].map((badge, i) => (
                <span key={i} className="bg-zinc-100 border border-zinc-200 text-zinc-700 px-3 py-1.5 rounded-lg text-xs">
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-xs text-zinc-400 font-sans italic pt-1">
              People who are learning, building, growing, and supporting each other.
            </p>
          </div>
        </motion.section>

        {/* Section: What Could This Skill Do For You? */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-black tracking-tight text-zinc-950 font-display">What Could This Skill Do For You?</h3>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              No one can promise exact results, but we can show you possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Build your own ideas",
              "Create websites for clients",
              "Start a side business",
              "Build tools for organizations",
              "Launch software products",
              "Create solutions for local problems",
              "Develop valuable digital skills",
              "Position yourself for opportunities in an AI-driven world"
            ].map((outcome, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -3, borderColor: '#10b981' }}
                className="bg-white border border-zinc-200 p-4.5 rounded-xl flex items-center gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all"
              >
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-100">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-zinc-700 font-medium font-sans">{outcome}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-zinc-400 font-sans font-light mt-4">
            The skills you learn today can continue creating value for years.
          </p>
        </section>

        {/* Section: Think About This Summary */}
        <motion.section 
          variants={itemVariants}
          className="bg-zinc-100 border border-zinc-200 rounded-3xl p-8 space-y-6 text-center shadow-xs"
        >
          <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 font-mono">Think About This</h4>
          
          <div className="space-y-4 max-w-xl mx-auto text-xs sm:text-sm text-zinc-655 leading-relaxed font-sans font-light">
            <p>
              Nick D'Aloisio didn't know he was building a multimillion-dollar company.
            </p>
            <p>
              Mark Zuckerberg didn't know he was building a platform used by billions.
            </p>
            <p className="font-extrabold text-zinc-950 text-sm">
              Most successful products start as simple ideas.
            </p>
            <p className="text-zinc-500">
              Simple ideas become projects. Projects become products. Products change lives.
            </p>
            <p className="font-bold text-emerald-700 font-sans">
              Every journey begins with learning how to build.
            </p>
          </div>
        </motion.section>

        {/* Prince Dike Spotlight */}
        <motion.section 
          variants={itemVariants}
          className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm"
        >
          <div className="relative shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Prince Dike - Lead Instructor" 
              className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover border border-zinc-100 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-black">
              ✓
            </div>
          </div>
          
          <div className="space-y-4 flex-1 text-center md:text-left">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-805 bg-emerald-50 px-2.5 py-1 rounded-full">
                Your Cohort Director
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 font-display mt-2">Prince Dike</h3>
              <p className="text-xs text-zinc-400 font-semibold font-sans">Founder of PIDItasks &middot; Software Practice Director</p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
              Prince Dike is the Founder of <span className="font-semibold text-zinc-800">PIDItasks</span> and <span className="font-semibold text-zinc-805">PIDI Marketing Agency</span>, co-founder & CEO of <span className="font-semibold text-zinc-800">Sabicrest</span>, and co-founder & CPMO of <span className="font-semibold text-zinc-800">Prawnbox Technology Ltd</span>. He has guided hundreds of Nigerian students to practice code, design digital plans, and build successful internet paths.
            </p>

            <div className="pt-0.5">
              <a 
                href="https://linkedin.com/in/prince-dike" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-bold hover:underline cursor-pointer"
              >
                <span>Connect with Prince on LinkedIn</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Beautiful high-contrast Investment Box (The Dual Action Panel) */}
        <motion.section 
          variants={itemVariants}
          className="bg-zinc-950 text-white border border-zinc-900 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-950/45 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-2xl mx-auto text-center space-y-8 relative">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-900 px-3.5 py-1.5 rounded-full uppercase font-black">
                🔒 Guaranteed Cohort Admission
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white">
                Begin Your Journey From Idea To Builder
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-light max-w-lg mx-auto">
              For less than the cost of many phones, gadgets, or weekend outings, you're investing in a skill that can stay with you for life.
            </p>

            {/* The Structured Pricing Stack */}
            <div className="bg-zinc-900/80 border border-zinc-850 rounded-2.5xl p-6 sm:p-8 space-y-5 max-w-lg mx-auto text-left">
              <div className="border-b border-zinc-800 pb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white font-sans">Vibe Coding Masterclass</h4>
                  <p className="text-[10px] text-zinc-550 font-mono mt-0.5">Secure Bank Transfer Verification</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-black text-white block">₦20,000</span>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-400 font-bold block">one-off batch fee</span>
                </div>
              </div>

              {/* Masterclass details list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-350">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>✔ 3 Days Live Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>✔ Real Project Demonstrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>✔ Beginner-Friendly Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>✔ 1 Month Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>✔ Builder Community Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>✔ Guidance and Support</span>
                </div>
              </div>

              {/* Weekly batch repeats warning */}
              <div className="bg-zinc-950 border border-zinc-850 p-3.5 rounded-xl">
                <p className="text-[11px] text-zinc-400 leading-relaxed font-sans font-light">
                  ⚠️ <span className="text-zinc-200 font-semibold">Weekly Batch Schedule:</span> The masterclass repeats <span className="text-emerald-400 font-bold animate-pulse">weekly for new batches</span> (one batch per week, with a full 1-month mentorship package included). Future batches may have price increases, so take advantage of it early!
                </p>
              </div>
            </div>

            {/* CTA Final Actions */}
            <div className="space-y-4 max-w-sm mx-auto">
              <motion.button 
                onClick={onEnrollMasterclass}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 text-xs font-bold text-white px-8 py-4.5 cursor-pointer shadow-md transition-all font-sans uppercase tracking-wider"
              >
                <span>Reserve My Masterclass Seat Now</span>
                <ChevronRight className="h-4 w-4 text-white" />
              </motion.button>

              <button 
                onClick={onBack}
                className="w-full text-xs text-zinc-500 hover:text-white transition-colors py-1 cursor-pointer underline underline-offset-4 font-sans"
              >
                Or, Go Back To Basic Class Info (₦1,000)
              </button>
            </div>

            {/* A Year From Now */}
            <div className="pt-8 border-t border-zinc-900 space-y-3.5 text-center">
              <h5 className="text-xs uppercase font-mono tracking-widest text-[#0ea5e9] font-black">A Year From Now</h5>
              <p className="text-xs text-zinc-400 font-sans font-light max-w-md mx-auto leading-relaxed">
                A year from now, AI will be even more powerful. Technology will move even faster. New opportunities will exist.
              </p>
              <p className="text-xs font-bold text-zinc-300">
                Will you be watching others build? Or will you finally know how to build for yourself?
              </p>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
