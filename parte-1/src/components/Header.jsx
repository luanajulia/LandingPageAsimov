// src/components/Header.jsx
import logo from '../assets/logo.svg';

export default function Header() {
  const links = ["About", "Services", "Use Cases", "Pricing", "Blog"];
  return (
    <header className="py-6 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {links.map(link => (
          <a key={link} href="#" className="text-gray-700 hover:text-black">{link}</a>
        ))}
        <button className="border border-brand-dark px-6 py-2 rounded-full hover:bg-brand-dark hover:text-white transition">
          Request a quote
        </button>
      </nav>
      {/* Botão de menu mobile pode ser adicionado aqui */}
    </header>
  );
}