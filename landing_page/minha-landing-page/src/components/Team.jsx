// src/components/Team.jsx

const flowerMask = `url("data:image/svg+xml;utf8,<svg width='98' height='98' viewBox='0 0 98 98' fill='black' xmlns='http://www.w3.org/2000/svg'><path d='M83.8068 48.9117C116.649 86.3213 86.3213 116.649 48.9117 83.8068C11.5021 116.649 -18.8258 86.3213 14.0166 48.9117C-18.8258 11.5021 11.5021 -18.8258 48.9117 14.0166C86.3213 -18.8258 116.649 11.5021 83.8068 48.9117Z'/></svg>")`;

const teamMembers = [
  { name: "John Smith", role: "CEO and Founder", experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy", image: "https://i.pravatar.cc/150?u=john", linkedin: "#"},
  { name: "Jane Doe", role: "Director of Operations", experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills", image: "https://i.pravatar.cc/150?u=jane", linkedin: "#" },
  { name: "Michael Brown", role: "Senior SEO Specialist", experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization", image: "https://i.pravatar.cc/150?u=michael", linkedin: "#" },
  { name: "Emily Johnson", role: "PPC Manager", experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis", image: "https://i.pravatar.cc/150?u=emily", linkedin: "#" },
  { name: "Brian Williams", role: "Social Media Specialist", experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement", image: "https://i.pravatar.cc/150?u=brian", linkedin: "#" },
  { name: "Sarah Kim", role: "Content Creator", experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries", image: "https://i.pravatar.cc/150?u=sarah", linkedin: "#" },
];

export default function Team() {
  return (
    <section className="py-5 px-4 md:px-0 bg-white">
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-[40px] border border-black shadow-[0_5px_0_0_rgba(0,0,0,1)] relative flex flex-col items-start"
          >
            <a href={member.linkedin} className="absolute top-8 right-8 w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#B9FF66"/>
                <path d="M7 10H10V17H7V10Z" fill="black"/>
                <path d="M8.5 8C9.32843 8 10 7.32843 10 6.5C10 5.67157 9.32843 5 8.5 5C7.67157 5 7 5.67157 7 6.5C7 7.32843 7.67157 8 8.5 8Z" fill="black"/>
                <path d="M14 10H17V17H14V13C14 12.4477 13.5523 12 13 12C12.4477 12 12 12.4477 12 13V17H9V10H12V11C12.5 10.5 13.25 10 14 10Z" fill="black"/>
              </svg>
            </a>

            <div className="flex items-end justify-start gap-4 mb-5 border-b border-black pb-5 w-full">
              <div 
                className="relative w-20 h-20 shrink-0 [filter:drop-shadow(4px_4px_0px_rgba(0,0,0,1))]"
                style={{
                  maskImage: flowerMask,
                  WebkitMaskImage: flowerMask,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-[#B9FF66]"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-100 mix-blend-multiply"
                />
              </div>
                
              <div className="flex flex-col text-left">
                {/* FONTE DIMINUÍDA: text-base */}
                <h4 className="text-base font-bold text-black">{member.name}</h4>
                {/* FONTE DIMINUÍDA: text-xs */}
                <p className="text-xs text-black opacity-80">{member.role}</p>
              </div>
            </div>

            {/* FONTE DIMINUÍDA: text-xs md:text-sm */}
            <p className="text-black text-xs md:text-sm leading-snug text-left">
              {member.experience}
            </p>
          </div>
        ))}
      </div>
      {/* Botão See All Team - Alinhado à direita no layout, mas o texto interno à esquerda ou centro conforme o botão original */}
      <div className="flex justify-end mt-10">
        <button className="bg-[#191A23] text-white px-8 py-3 rounded-xl text-base font-medium hover:bg-black transition-colors shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
          See all team
        </button>
      </div>
    </section>
  );
}