// src/components/Services.jsx
import seo from '../assets/icons/seo.svg';
import ppc from '../assets/icons/ppc.svg';
import social from '../assets/icons/social.svg';
import email from '../assets/icons/email.svg';
import content from '../assets/icons/content.svg';
import analytics from '../assets/icons/analytics.svg';

function ServiceCard({ title, icon, isHighlighted }) {
  // Lógica de cores baseada no status de "highlight"
  const cardClasses = isHighlighted 
    ? 'bg-brand-green p-10 rounded-[45px] shadow-[0_5px_0_0_rgba(0,0,0,1)] border border-black grid grid-cols-[1fr,auto] gap-4 items-center'
    : 'bg-brand-light-bg p-10 rounded-[45px] shadow-[0_5px_0_0_rgba(0,0,0,1)] border border-black grid grid-cols-[1fr,auto] gap-4 items-center';

  // Cores das etiquetas de título (fundo do texto)
  const titleSpanClasses = isHighlighted 
    ? 'bg-white text-black px-2 rounded-md' 
    : 'bg-brand-green text-black px-2 rounded-md';

  const btnIconBg = isHighlighted ? 'bg-black text-white' : 'bg-black text-brand-green';
  const btnTextClass = isHighlighted ? 'text-black' : 'text-black';

  return (
    <div className={cardClasses}>
      <div className="flex flex-col h-full justify-between">
        <h4 className="text-xl font-medium leading-tight text-left">
          <span className={titleSpanClasses}>{title}</span>
        </h4>
        
        <button className="flex items-center gap-4 group mt-8">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-[-45deg] ${btnIconBg}`}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={`text-xl font-normal hidden md:block ${btnTextClass}`}>Learn more</span>
        </button>
      </div>

      <div className="w-[160px] h-[160px] flex items-center justify-center">
        <img 
          src={icon} 
          alt={title} 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    { title: "Search engine optimization", icon: seo, isHighlighted: false },
    { title: "Pay-per-click advertising", icon: ppc, isHighlighted: true },
    { title: "Social Media Marketing", icon: social, isHighlighted: true },
    { title: "Email Marketing", icon: email, isHighlighted: false },
    { title: "Content Creation", icon: content, isHighlighted: false },
    { title: "Analytics and Reporting", icon: analytics, isHighlighted: true },
  ];

  return (
    <section className="py-20" id="services">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20 text-center md:text-left">
        <h2 className="text-4xl font-bold bg-brand-green px-2 rounded-lg inline-block">
          Services
        </h2>
        <p className="text-lg max-w-[580px] text-gray-900">
          At our digital marketing agency, we offer a range of services to help 
          businesses grow and succeed online. These include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}