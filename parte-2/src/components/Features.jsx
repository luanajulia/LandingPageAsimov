export const Features = () => {
  const items = [
    { t: "+40h de conteúdo", d: "Aulas direto ao ponto." },
    { t: "IA desde o início", d: "Python + OpenAI API." },
    { t: "Comunidade VIP", d: "+20.000 alunos ativos." },
    { t: "Certificado", d: "Válido em todo território." }
  ];

  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[#00f2ff]/30 transition-all group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#00f2ff] transition-colors">{item.t}</h3>
            <p className="text-gray-500 text-sm">{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};