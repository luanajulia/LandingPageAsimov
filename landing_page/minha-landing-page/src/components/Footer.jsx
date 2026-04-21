// src/components/Footer.jsx
export default function Footer() {
  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
  return (
    <footer className="py-20 bg-brand-dark text-white rounded-t-3xl mt-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <span className="text-xl font-bold font-sans">POSitivus</span>
          <p className="text-gray-400 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Links</h5>
          <ul className="space-y-2">
            {links.map(link => (
              <li key={link}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Contact us</h5>
          <p className="text-gray-400">info@positivus.com</p>
          <p className="text-gray-400">+1 234 567 890</p>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Social</h5>
          <div className="flex gap-4">
            {/* Ícones sociais reais aqui */}
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">L</span>
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">F</span>
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">T</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
        &copy; 2023 POSitivus. All Rights Reserved.
      </div>
    </footer>
  );
}