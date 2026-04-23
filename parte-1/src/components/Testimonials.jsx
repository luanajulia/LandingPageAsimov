import { useRef, useState } from "react";

const testimonialsData = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: "Working with the team at Positivus has been a game-changer for our lead generation strategy. Their expertise in SEO and PPC is unparalleled. We've achieved a positive ROI much faster than anticipated.",
    name: "Jane Doe",
    role: "CEO at ABC Inc.",
  },
  {
    text: "Their content strategy completely transformed our brand's voice. We now have consistent, engaging content that resonates with our audience. Positivus has helped us establish real authority in our industry.",
    name: "Michael Brown",
    role: "Founder at Def Company",
  },
  {
    text: "The dedication and expertise shown by the Positivus team exceeded our expectations. Our organic reach grew by 200% in just six months.",
    name: "Emily Johnson",
    role: "PPC Manager",
  },
  {
    text: "Incredible attention to detail. They don't just provide services; they provide a roadmap for long-term digital success.",
    name: "Brian Williams",
    role: "Social Media Specialist",
  }
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Ajuste para telas menores onde o item não ocupa 100% da largura
      const index = Math.round(scrollLeft / (scrollRef.current.firstChild.offsetWidth + 24));
      setActiveIndex(index);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = scrollRef.current.firstChild.offsetWidth + 40;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-[#191A23] rounded-[45px] text-white overflow-hidden">
      
      {/* Slider Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 px-6 md:px-20"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="min-w-[90%] md:min-w-[600px] snap-center">
            {/* Balão de Fala */}
            <div className="relative">
              <div className="border border-[#B9FF66] rounded-[40px] p-8 md:p-12 min-h-[220px] flex items-center">
                <p className="text-sm md:text-base text-left leading-relaxed font-light">
                  "{testimonial.text}"
                </p>
              </div>
              
              {/* Triângulo do Balão Customizado */}
              <div className="absolute -bottom-4 left-12 w-8 h-8 border-r border-b border-[#B9FF66] bg-[#191A23] rotate-45"></div>
            </div>

            {/* Identificação */}
            <div className="flex flex-col text-left pl-14 pt-10">
              <h4 className="text-[#B9FF66] font-bold text-base md:text-lg">{testimonial.name}</h4>
              <p className="text-xs md:text-sm text-white opacity-90">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles: Setas e Estrelas */}
      <div className="flex items-center justify-between max-w-[500px] mx-auto mt-6 px-10">
        <button onClick={() => scroll("left")} className="text-white hover:text-[#B9FF66] transition-colors p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {/* Indicadores Estrela */}
        <div className="flex gap-4">
          {testimonialsData.map((_, i) => (
            <div 
              key={i}
              className={`w-3.5 h-3.5 transition-all duration-300 ${i === activeIndex ? 'text-[#B9FF66]' : 'text-gray-600'}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="text-white hover:text-[#B9FF66] transition-colors p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>
  );
}