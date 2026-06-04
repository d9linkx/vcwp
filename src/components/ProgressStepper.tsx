import React from 'react';
import { UserCheck, Landmark, MessageSquare, Check } from 'lucide-react';

interface ProgressStepperProps {
  currentStep: 1 | 2 | 3;
}

export default function ProgressStepper({ currentStep }: ProgressStepperProps) {
  const steps = [
    {
      index: 1,
      title: "Data Entry",
      description: "Bio & preference Details",
      icon: UserCheck,
    },
    {
      index: 2,
      title: "₦1,000 Commitment",
      description: "VibePay bank transfer",
      icon: Landmark,
    },
    {
      index: 3,
      title: "WhatsApp Verify",
      description: "Direct classroom activation",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      {/* Horizontal Steps Wrapper */}
      <div className="relative flex items-center justify-between">
        {/* Background Track Bar */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 -translate-y-1/2 z-0" />
        
        {/* Active fill track bar */}
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-emerald-500 -translate-y-1/2 transition-all duration-500 z-0"
          style={{ 
            width: currentStep === 1 ? '16%' : currentStep === 2 ? '50%' : '100%' 
          }}
        />

        {steps.map((st) => {
          const StepIcon = st.icon;
          const isCompleted = currentStep > st.index;
          const isActive = currentStep === st.index;
          
          return (
            <div key={st.index} className="flex flex-col items-center relative z-10">
              {/* Stepper Node Circle */}
              <div 
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-100' 
                    : isActive 
                    ? 'bg-white border-zinc-950 text-zinc-950 ring-4 ring-emerald-50 shadow-sm' 
                    : 'bg-white border-zinc-300 text-zinc-400'
                }`}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5 stroke-[3]" />
                ) : (
                  <StepIcon className="h-4.5 w-4.5" />
                )}
              </div>

              {/* Step Title Label */}
              <div className="mt-3 text-center">
                <span className={`block text-xs font-bold leading-tight ${isActive ? 'text-zinc-950 font-black' : isCompleted ? 'text-zinc-700' : 'text-zinc-400'}`}>
                  {st.title}
                </span>
                <span className={`hidden sm:block text-[10px] mt-0.5 font-sans ${isActive ? 'text-emerald-700' : 'text-zinc-400 font-light'}`}>
                  {st.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
