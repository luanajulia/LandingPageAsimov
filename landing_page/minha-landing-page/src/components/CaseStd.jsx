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
    <section className="py-20 px-4 md:px-0">
      {/* Container Principal Escuro */}
      <div className="bg-[#191A23] rounded-[45px] p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {caseData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col justify-between gap-6 px-0 md:px-12 
                ${/* Adiciona borda vertical apenas entre os itens no desktop */
                  index !== caseData.length - 1 ? 'md:border-r border-white/30 mb-12 md:mb-0' : ''
                }`}
            >
              <p className="text-white text-lg leading-relaxed">
                {item.text}
              </p>
              
              <a 
                href="#" 
                className="text-[#B9FF66] flex items-center gap-3 text-xl font-medium hover:opacity-80 transition-all group"
              >
                Learn more
                <svg 
                  width="19" 
                  height="18" 
                  viewBox="0 0 19 18" 
                  fill="none" 
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path 
                    d="M1 17L17 1M17 1H9M17 1V9" 
                    stroke="#B9FF66" 
                    strokeWidth="2" 
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