// src/components/Team.jsx

const teamMembers = [
  { name: "John Smith", role: "CEO and Founder", experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy", image: "https://i.pravatar.cc/150?u=john", linkedin: "#" },
  { name: "Jane Doe", role: "Director of Operations", experience: "7+ years of experience in project management and team leadership. Proven track record of delivering results.", image: "https://i.pravatar.cc/150?u=jane", linkedin: "#" },
  { name: "Michael Brown", role: "Senior SEO Specialist", experience: "5+ years of experience in SEO. Deep understanding of keyword research, on-page optimization, and link building.", image: "https://i.pravatar.cc/150?u=michael", linkedin: "#" },
  { name: "Emily Davis", role: "PPC Manager", experience: "3+ years of experience in PPC. Proven track record of managing successful PPC campaigns and delivering strong ROI.", image: "https://i.pravatar.cc/150?u=emily", linkedin: "#" },
  { name: "Brian Johnson", role: "Social Media Specialist", experience: "4+ years of experience in social media marketing. Proven track record of developing and implementing successful social media strategies.", image: "https://i.pravatar.cc/150?u=brian", linkedin: "#" },
  { name: "Sarah Williams", role: "Content Specialist", experience: "2+ years of experience in content writing and editing. Proven track record of creating compelling and engaging content.", image: "https://i.pravatar.cc/150?u=sarah", linkedin: "#" },
];

export default function Team() {
  return (
    <section className="py-20">
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-6">
            <h2 className="text-4xl font-bold">Team</h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Meet the skilled and experienced team behind our successful digital marketing strategies
            </p>
        </div>
        <button className="bg-brand-dark text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            See all team
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
            <a href={member.linkedin} target="_blank" className="absolute top-8 right-8 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">in</a>
            <div className="flex items-center gap-5 mb-6">
              <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{member.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}