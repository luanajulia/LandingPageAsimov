import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#00f2ff] mb-6">
          print("Aprenda o Futuro")
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Aprenda Python do zero e construa <span className="text-gray-500">projetos reais com IA.</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-lg">
          O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all">
            Quero começar agora
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
            Ver grade curricular
          </button>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl aspect-video overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover opacity-60"
            alt="Code"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);