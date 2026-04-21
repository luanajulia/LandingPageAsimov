// src/components/Process.jsx
import { useState } from 'react';

const steps = [
  { number: "01", title: "Consultation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { number: "02", title: "Research and Strategy Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { number: "03", title: "Implementation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { number: "04", title: "Monitoring and Optimization", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { number: "05", title: "Reporting and Communication", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { number: "06", title: "Continual Improvement", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function Process() {
  const [openStep, setOpenStep] = useState("01");

  const toggleStep = (stepNumber) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber);
  };

  return (
    <section className="py-20">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-bold">Our Working Process</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          A Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-brand-light-bg rounded-2xl border border-gray-100 overflow-hidden">
            <button 
                onClick={() => toggleStep(step.number)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-6">
                <span className="text-3xl font-semibold text-gray-900">{step.number}</span>
                <span className="text-2xl font-medium text-black">{step.title}</span>
              </div>
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                {openStep === step.number ? '−' : '+'}
              </span>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openStep === step.number ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-gray-700 text-lg border-t border-gray-100">
                    {step.description}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}