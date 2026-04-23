// src/components/Process.jsx
import { useState } from 'react';

const steps = [
  { number: "01", title: "Consultation", description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { number: "02", title: "Research and Strategy Development", description: "We dive deep into market research and competitor analysis to build a customized strategy for your brand." },
  { number: "03", title: "Implementation", description: "Our team executes the approved strategy across all selected channels to ensure maximum impact." },
  { number: "04", title: "Monitoring and Optimization", description: "We track performance in real-time and make necessary adjustments to optimize results constantly." },
  { number: "05", title: "Reporting and Communication", description: "Regular updates and detailed reports ensure you stay informed about the progress of your campaigns." },
  { number: "06", title: "Continual Improvement", description: "We constantly refine our approach based on data insights to ensure long-term success." },
];

export default function Process() {
  const [openStep, setOpenStep] = useState("01");

  const toggleStep = (stepNumber) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber);
  };

  return (
    <section className="py-20 px-4">
      {/* Cabeçalho alinhado à esquerda */}
      <div className="space-y-6 container mx-auto max-w-7xl">
        {steps.map((step) => (
          <div 
            key={step.number} 
            className={`rounded-[45px] border border-black overflow-hidden transition-all duration-300 shadow-[0_5px_0_0_rgba(0,0,0,1)] 
              ${openStep === step.number ? 'bg-brand-green' : 'bg-[#F3F3F3]'}`}
          >
            <button 
                onClick={() => toggleStep(step.number)}
                className="w-full flex items-center justify-between p-8 md:px-12 text-left transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-6xl font-bold text-black">{step.number}</span>
                <span className="text-xl md:text-2xl font-bold text-black">{step.title}</span>
              </div>
              
              {/* Círculo do Botão +/- */}
              <div className="w-10 h-10 rounded-full border border-black bg-[#F3F3F3] flex items-center justify-center text-2xl font-bold text-black">
                {openStep === step.number ? '−' : '+'}
              </div>
            </button>

            {/* Conteúdo Expansível */}
            <div className={`transition-all duration-500 ease-in-out ${openStep === step.number ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 md:px-12 pt-0">
                    <hr className="border-black mb-6" />
                    <p className="text-black text-lg leading-relaxed max-w-5xl text-left">
                        {step.description}
                    </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}