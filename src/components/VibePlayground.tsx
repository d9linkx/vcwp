import React, { useState } from 'react';
import { Wand2, Binary, Play, AlertCircle, BookmarkCheck, Code2, HelpCircle, Sparkles } from 'lucide-react';

interface VibePlaygroundProps {
  onScrollToForm: () => void;
}

export default function VibePlayground({ onScrollToForm }: VibePlaygroundProps) {
  const [promptInput, setPromptInput] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'explanation' | 'code'>('preview');

  // Our structured output matches the server TS response
  const [vibeResult, setVibeResult] = useState<{
    appName: string;
    friendlyExplanation: string;
    codeSnippet: string;
    previewElements: string[];
    actionLabel: string;
    isMock?: boolean;
    message?: string;
  } | null>({
    appName: "Suya Joint Bill Splitter",
    friendlyExplanation: "This simple app makes sure your guys split billing for Suya and drinks correctly without any head scratching. Instead of writing heavy database servers, we use simple variable math to do it sharp-sharp! Vibe coding style!",
    codeSnippet: `// 100% Vibe Coded using simple React state
function SuyaBillSplit() {
  const [suyaCost, setSuyaCost] = useState(6000);
  const [drinksCost, setDrinksCost] = useState(4000);
  const [friendsCount, setFriendsCount] = useState(4);
  
  const total = suyaCost + drinksCost;
  return (
    <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
      <h3 className="font-bold text-lg">Total Cost: ₦{total}</h3>
      <p className="text-sm text-zinc-500">Shared with {friendsCount} buddies</p>
      <div className="text-emerald-700 text-xl font-black mt-3">
        ₦{total / friendsCount} each!
      </div>
    </div>
  );
}`,
    previewElements: ["Suya Cost box (₦6,000)", "Drinks Input (₦4,000)", "Friends Count slider", "Calculated amount badge"],
    actionLabel: "Try Split Math"
  });

  const templates = [
    {
      id: "suya",
      title: "Suya Bill Splitter",
      prompt: "A simple app to split suya and drinks bill among friends in Lagos without stress",
      category: "Finance Helper"
    },
    {
      id: "esusu",
      title: "Daily Esusu Tracker",
      prompt: "A tracker to calculate payout dates, interest rates, and total fund targets for market associations",
      category: "Trading Tool"
    },
    {
      id: "whatsapp",
      title: "Balogun Market Wholesaler Link",
      prompt: "An app that lets vendors quickly enter bag sizes and send pricing orders straight to WhatsApp",
      category: "E-Commerce"
    }
  ];

  const handleApplyTemplate = (tpl: typeof templates[0]) => {
    setSelectedTemplate(tpl.id);
    setPromptInput(tpl.prompt);
  };

  const handleVibeRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/vibe-translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: promptInput,
          category: selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.category : "Custom Concept"
        })
      });

      if (!response.ok) {
        throw new Error("Could not connect to the Vibe engine. Try again.");
      }

      const data = await response.json();
      setVibeResult(data);
      setActiveTab('preview');
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Let's try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="playground" className="bg-zinc-50 py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">
            Interactive Learning Demo
          </span>
          <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            See How Vibe Coding Works
          </h2>
          <p className="text-zinc-500 font-sans leading-relaxed text-sm sm:text-base font-light">
            In vibe coding, you don't manually write loops, brackets, or setup database rows. Instead, you declare your intention in simple English or Pidgin, and our AI interpreter formats the module. Tap a template below to see:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form & Prompt Inputs column (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-5">
            <h3 className="text-base font-extrabold text-zinc-900 flex items-center gap-2">
              <Wand2 className="h-4.5 w-4.5 text-emerald-600" />
              1. Declare Your App Idea
            </h3>

            {/* Templates Quick selector */}
            <div className="space-y-2">
              <p className="text-[11px] text-zinc-400 font-serif italic">Tap a classic Nigerian helper template to fill:</p>
              <div className="flex flex-col gap-2">
                {templates.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => handleApplyTemplate(tpl)}
                    className={`text-left p-3.5 rounded-xl border text-xs transition-all flex items-start gap-3 cursor-pointer ${
                      selectedTemplate === tpl.id
                        ? 'border-emerald-500 bg-emerald-50/20 text-emerald-950 font-semibold shadow-sm'
                        : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700'
                    }`}
                  >
                    <BookmarkCheck className={`h-4.5 w-4.5 mt-0.5 shrink-0 ${selectedTemplate === tpl.id ? 'text-emerald-600' : 'text-zinc-400'}`} />
                    <div className="space-y-0.5">
                      <div className="font-extrabold text-xs sm:text-sm text-zinc-900">{tpl.title}</div>
                      <div className="text-[11px] text-zinc-500 line-clamp-1">{tpl.prompt}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleVibeRequest} className="space-y-4 pt-1">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wide">
                  Or enter your custom concept
                </label>
                <textarea
                  value={promptInput}
                  onChange={(e) => {
                    setPromptInput(e.target.value);
                    setSelectedTemplate(null);
                  }}
                  rows={4}
                  placeholder="e.g., An app to split market transport bills or daily thrift Esusu targets in Lagos and Enugu"
                  className="w-full text-xs rounded-xl border border-zinc-200 p-3.5 focus:border-zinc-700 focus:bg-white bg-zinc-50 outline-none placeholder:text-zinc-400/80 transition-all font-sans font-medium"
                  required
                />
              </div>

              {errorMsg && (
                <div className="flex items-start gap-2 bg-red-50 text-red-800 p-3.5 rounded-xl border border-red-100 text-xs font-semibold">
                  <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3.5 text-xs font-bold text-white hover:bg-zinc-850 active:scale-95 transition-all outline-none disabled:bg-zinc-300 cursor-pointer shadow-sm"
              >
                {isLoading ? (
                  <>
                    <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Interpreting Vibe...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400" />
                    <span>Run Vibe Interpreter</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Render Output column (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden self-stretch flex flex-col min-h-[460px]">
            {/* Window header */}
            <div className="bg-zinc-900 px-5 py-4.5 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <span className="flex gap-1.5 shrink-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
                </span>
                <span className="text-[10px] font-mono text-zinc-500 border-l border-zinc-800 pl-3">
                  vibe-coding-compiler
                </span>
              </div>

              {/* Tabs */}
              <div className="flex bg-zinc-950 border border-zinc-800/80 p-1 rounded-xl text-[10px] font-mono font-bold self-stretch sm:self-auto justify-center">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'preview' ? 'bg-zinc-850 text-white border border-zinc-750' : 'text-zinc-500 hover:text-zinc-350'
                  }`}
                >
                  Live Preview
                </button>
                <button
                  onClick={() => setActiveTab('explanation')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'explanation' ? 'bg-zinc-850 text-white' : 'text-zinc-500 hover:text-zinc-350'
                  }`}
                >
                  Friendly Guide (Naija)
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'code' ? 'bg-zinc-850 text-white' : 'text-zinc-500 hover:text-zinc-350'
                  }`}
                >
                  AI Code Generated
                </button>
              </div>
            </div>

            {/* Content canvas */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              {vibeResult ? (
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  {/* API notification warning if mock fallback */}
                  {vibeResult.isMock && (
                    <div className="bg-amber-950/20 border border-amber-900/30 text-amber-300/90 p-4.5 rounded-xl text-xs font-sans leading-relaxed shrink-0 flex items-start gap-2.5 mb-2">
                      <HelpCircle className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                      <p>{vibeResult.message}</p>
                    </div>
                  )}

                  {activeTab === 'preview' && (
                    <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 font-sans text-zinc-900 shadow-lg animate-fade-in flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
                          <div>
                            <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">MOCK PREVIEW</span>
                            <h4 className="text-sm sm:text-base font-black text-zinc-950 mt-1 font-display">{vibeResult.appName}</h4>
                          </div>
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                        </div>

                        <p className="text-xs text-zinc-500 leading-relaxed italic mb-5">
                          "This is a high-fidelity mockup. When you build with Vibe Coding, these interactive assets are instantly scaffolded."
                        </p>

                        <div className="space-y-2.5">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Elements Generated:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {vibeResult.previewElements.map((el, i) => (
                              <div key={i} className="flex items-center gap-2 bg-zinc-50 border border-zinc-100 p-2.5 rounded-lg text-xs font-medium text-zinc-700">
                                <span className="h-5 w-5 rounded-full bg-zinc-200 text-[9px] flex items-center justify-center font-mono font-extrabold text-zinc-650">{i + 1}</span>
                                <span>{el}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-zinc-100 pt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <span className="text-[10px] font-mono text-zinc-400">Status: Registered Template Mock</span>
                        <button 
                          onClick={onScrollToForm}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-all cursor-pointer shadow-sm"
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          {vibeResult.actionLabel}
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'explanation' && (
                    <div className="text-zinc-200 font-sans leading-relaxed text-xs sm:text-sm animate-fade-in space-y-4 flex-1">
                      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                        <h4 className="font-bold text-emerald-400 flex items-center gap-1.5 mb-2 font-display">
                          <span>Naija Term Breakdown:</span>
                        </h4>
                        <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm font-light">
                          {vibeResult.friendlyExplanation}
                        </p>
                      </div>
                      <div className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                        <AlertCircle className="h-3.5 w-3.5 text-zinc-400" />
                        <span>Translation automatically simplified for beginners.</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'code' && (
                    <div className="font-mono text-[11px] text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-850 overflow-x-auto max-h-[280px] flex-1 animate-fade-in">
                      <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-850 pb-2 mb-3">
                        <span className="flex items-center gap-1.5 text-[10px]">
                          <Code2 className="h-3.5 w-3.5 text-emerald-500" />
                          Component.tsx (Generated View)
                        </span>
                        <span className="text-[10px] font-bold">React + Tailwind</span>
                      </div>
                      <pre className="text-emerald-400 whitespace-pre">{vibeResult.codeSnippet}</pre>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16 text-zinc-600 flex flex-col items-center gap-3">
                  <Binary className="h-10 w-10 text-zinc-700" />
                  <p className="text-xs font-mono">Select a template or input your concept above to run interpreter.</p>
                </div>
              )}

              {/* Final onboarding prompt box */}
              <div className="mt-6 border-t border-zinc-800 pt-5 flex flex-col sm:flex-row items-center justify-between text-xs gap-3 font-sans shrink-0">
                <p className="text-zinc-400 text-center sm:text-left text-xs">
                  Ready to move past layouts and build real apps?
                </p>
                <button
                  onClick={onScrollToForm}
                  className="w-full sm:w-auto text-center font-bold text-emerald-400 hover:text-white hover:underline transition-all cursor-pointer font-display"
                >
                  Enroll and Claim Your Ticket &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
