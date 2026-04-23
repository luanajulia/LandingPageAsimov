const caseData = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-12 px-4 md:px-0">
      {/* Container Principal */}
      <div className="bg-[#191A23] rounded-[35px] p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {caseData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col justify-between gap-4 px-0 md:px-10 
                ${/* Borda vertical discreta */
                  index !== caseData.length - 1 ? 'md:border-r border-white/20 mb-8 md:mb-0' : ''
                }`}
            >
              {/* Texto reduzido para text-sm (14px) ou text-xs (12px) */}
              <p className="text-white text-sm leading-relaxed opacity-90">
                {item.text}
              </p>
              
              <a 
                href="#" 
                className="text-[#B9FF66] flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-all group mt-2"
              >
                Learn more
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 19 18" 
                  fill="none" 
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path 
                    d="M1 17L17 1M17 1H9M17 1V9" 
                    stroke="#B9FF66" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}