export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="text-xl font-bold tracking-tighter">PYTHON AI</div>
      <div className="hidden md:flex gap-8 text-sm text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Trilhas</a>
        <a href="#" className="hover:text-white transition-colors">Projetos</a>
        <a href="#" className="hover:text-white transition-colors">Comunidade</a>
      </div>
      <button className="bg-[#00f2ff] text-black px-5 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all">
        Matricule-se
      </button>
    </div>
  </nav>
);