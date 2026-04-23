// src/components/SectionHeader.jsx
export default function SectionHeader({ title, description }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-12 md:mb-16">
      {/* Badge Verde Lima */}
      <div className="bg-[#B9FF66] px-1.5 py-0.5 rounded-md">
        <h2 className="text-2xl md:text-3xl font-bold text-black whitespace-nowrap" style={{fontFamily: 'Space Grotesk'}}>
          {title}
        </h2>
      </div>
      
      {/* Texto de Apoio Reduzido */}
      <p className="text-sm md:text-base text-black max-w-[480px] text-center md:text-left leading-snug opacity-90">
        {description}
      </p>
    </div>
  );
}