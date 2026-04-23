import React from "react";
import logo from '../assets/logo_branca.svg';

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8">
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto bg-[#191A23] rounded-t-[40px] p-8 md:p-12">
        
        {/* Cabeçalho do Footer: Logo, Links e Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Navegação */}
          <nav className="flex flex-wrap justify-center gap-6 text-white text-sm underline underline-offset-4">
            <a href="#" className="hover:text-[#B9FF66] transition-colors">About us</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Services</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Use Cases</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Blog</a>
          </nav>

          {/* Redes Sociais */}
          <div className="flex gap-4">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">in</div>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">f</div>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black text-xs">𝕏</div>
          </div>
        </div>

        {/* Seção Central: Contato e Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          
          {/* Informações de Contato */}
          <div className="flex flex-col items-start gap-3 text-white text-left w-full md:w-1/3 text-sm leading-relaxed">
            <span className="bg-[#B9FF66] text-black px-2 py-1 rounded-md font-bold text-xs mb-1">
              Contact us:
            </span>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p className="max-w-[240px] opacity-90">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>

          {/* Newsletter Card */}
          <div className="w-full md:w-auto bg-[#292A32] rounded-[14px] p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full md:w-56 p-3.5 rounded-xl border border-white/40 bg-transparent text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#B9FF66]"
            />
            <button className="w-full md:w-auto px-7 py-3.5 bg-[#B9FF66] text-black font-bold rounded-xl text-sm hover:bg-white transition-colors">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-8 items-start md:items-center text-xs">
          <p className="text-white/80">© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="text-white/80 underline hover:text-[#B9FF66]">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}