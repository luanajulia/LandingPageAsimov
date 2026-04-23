import React, { useState } from 'react';

// --- Componentes de Suporte ao Modal ---

const ModalOverlay = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-[#1A1A1C] border border-white/10 w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-2xl">×</button>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

const RegisterForm = () => (
  <form className="space-y-5" onClick={(e) => e.stopPropagation()}>
    <div>
      <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Nome Completo</label>
      <input type="text" placeholder="Luana Julia" className="w-full bg-[#0D0D0E] border border-white/5 rounded-2xl p-4 text-white focus:border-purple-500/50 outline-none transition-all placeholder:text-gray-700" />
    </div>
    <div>
      <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">E-mail</label>
      <input type="email" placeholder="seu@email.com" className="w-full bg-[#0D0D0E] border border-white/5 rounded-2xl p-4 text-white focus:border-purple-500/50 outline-none transition-all placeholder:text-gray-700" />
    </div>
    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
      Criar Conta Grátis
    </button>
  </form>
);

const CourseModules = () => (
  <div className="font-mono text-sm space-y-3">
    {[
      { id: "01", name: "Fundamentos_Python_IA", status: "READY" },
      { id: "02", name: "Agentes_e_LLMs", status: "READY" },
      { id: "03", name: "Automacao_com_IA", status: "BUILDING" },
      { id: "04", name: "Projeto_Final_Real", status: "LOCKED" }
    ].map((item) => (
      <div key={item.id} className="flex justify-between items-center p-3 bg-[#0D0D0E] border border-white/5 rounded-xl group hover:border-purple-500/20 transition-all">
        <span className="text-purple-500">{item.id} <span className="text-gray-400 group-hover:text-white">.{item.name}()</span></span>
        <span className={`text-[10px] font-bold ${item.status === 'READY' ? 'text-green-500' : 'text-yellow-500/50'}`}>{item.status}</span>
      </div>
    ))}
  </div>
);

// --- Componentes de Seção ---

const Navbar = () => (
  <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
    <div className="text-2xl font-extrabold tracking-tighter text-white">
      PY<span className="text-purple-500">.IA</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
      <a href="#conteudo" className="hover:text-white transition-colors">Conteúdo</a>
      <a href="#comunidade" className="hover:text-white transition-colors">Comunidade</a>
      <a href="#certificado" className="hover:text-white transition-colors">Certificado</a>
    </div>
    <button className="border border-purple-500/30 px-5 py-2 rounded-full text-sm font-bold text-white hover:bg-purple-500/10 transition-all">
      Login
    </button>
  </nav>
);

const Differentials = () => {
  const items = [
    { title: "+40 horas de conteúdo", desc: "Direto ao ponto e sem enrolação.", icon: "⚡" },
    { title: "Python + IA", desc: "Projetos reais desde o módulo 1.", icon: "🤖" },
    { title: "Comunidade", desc: "+20.000 alunos trocando experiências.", icon: "🤝" },
    { title: "Certificado", desc: "Certificado reconhecido pelo mercado.", icon: "🎓" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="group bg-[#1A1A1C] border border-white/5 p-8 rounded-[32px] hover:border-purple-500/40 transition-all hover:-translate-y-2">
            <div className="text-3xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Componente Principal ---

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // 'register', 'modules' ou null

  return (
    <div className="min-h-screen bg-[#0D0D0E] font-sans selection:bg-purple-500/30 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Inscrições Abertas 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tight">
            Aprenda Python <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">do zero e construa projetos reais</span> com IA.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Domine a linguagem mais amada do mundo com foco total no que o mercado exige.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => setActiveModal('register')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all hover:scale-[1.02]"
            >
              Quero começar agora
            </button>
            <button 
              onClick={() => setActiveModal('modules')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              Ver o que vou aprender
            </button>
          </div>
        </div>

        {/* Terminal Interativo */}
        <div className="relative animate-[bounce_6s_ease-in-out_infinite] hidden lg:block">
          <div className="bg-[#1A1A1C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="p-8 font-mono text-sm md:text-base leading-relaxed text-gray-300">
              <p className="text-purple-400">import <span className="text-white">openai</span></p>
              <p className="text-purple-400">from <span className="text-white">python_ia</span> import <span className="text-white">Agent</span></p>
              <p className="mt-4 text-gray-500"># Módulo 1: Criando seu primeiro agente</p>
              <p><span className="text-blue-400">def</span> <span className="text-yellow-400">start_ia</span>():</p>
              <p className="ml-4 text-green-400">print("Iniciando jornada...")</p>
              <p className="mt-4 text-gray-400 animate-pulse">_</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
        </div>
      </section>

      <Differentials />

      {/* Seção CTA Final */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-b from-[#1A1A1C] to-[#0D0D0E] border border-white/10 rounded-[40px] py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-600/5 blur-[120px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Pronto para dominar o futuro?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button 
              onClick={() => setActiveModal('register')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:scale-105 active:scale-95"
            >
              Quero começar agora
            </button>
            <button 
              onClick={() => setActiveModal('modules')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-12 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              Ver o que vou aprender
            </button>
          </div>
        </div>
      </section>

      {/* Modais Overlay */}
      <ModalOverlay 
        isOpen={activeModal === 'register'} 
        onClose={() => setActiveModal(null)}
        title="Inicie sua Carreira em IA"
      >
        <RegisterForm />
      </ModalOverlay>

      <ModalOverlay 
        isOpen={activeModal === 'modules'} 
        onClose={() => setActiveModal(null)}
        title="Módulos do Sistema"
      >
        <CourseModules />
      </ModalOverlay>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          © 2026 Python IA Academy. Criado com React & Tailwind v4.
        </p>
      </footer>
    </div>
  );
}