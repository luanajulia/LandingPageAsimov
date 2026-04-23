// src/components/Hero.jsx
import MegaphoneIllustration from '../assets/megaphone-illustration.svg'; // Exemplo de como importar

export default function Hero() {
  return (
    <section className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <h1 className="text-5xl md:text-6xl font-bold font-sans leading-tight mb-6">
          Navigating the digital landscape for success
        </h1>
        <p className="text-xl text-gray-700 font-sans mb-10 max-w-xl text-left">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="bg-brand-dark text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition">
          Book a consultation
        </button>
      </div>
      <div className="flex justify-end">
        {/* Usando um placeholder, substitua por sua imagem real */}
        <div className="w-full max-w-lg flex items-center justify-end">
          <img src={MegaphoneIllustration} alt="Megaphone and abstract shapes" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}