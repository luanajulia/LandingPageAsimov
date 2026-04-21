// src/components/SectionHeader.jsx
export default function SectionHeader({ title, description }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      {/* Badge Verde Lima */}
      <div className="bg-[#B9FF66] px-2 py-1 rounded-md">
        <h2 className="text-3xl font-bold text-black whitespace-nowrap" style={{fontFamily: 'Space Grotesk'}}>
          {title}
        </h2>
      </div>
      
      {/* Texto de Apoio */}
      <p className="text-lg text-black max-w-[580px] text-center md:text-left leading-tight">
        {description}
      </p>
    </div>
  );
}