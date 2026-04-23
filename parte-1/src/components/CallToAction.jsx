// src/components/CallToAction.jsx
import CtaIllustration from '../assets/cta-illustration.svg'; // Importe seu SVG exportado aqui

export default function CallToAction() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto max-w-7xl">
        {/* Container Principal com fundo claro e bordas arredondadas */}
        <div className="bg-[#F3F3F3] rounded-[45px] p-10 md:p-16 grid md:grid-cols-[1fr,auto] gap-12 items-center overflow-hidden">
          
          {/* Coluna de Texto à Esquerda */}
          <div className="flex flex-col items-start gap-6">
            {/* Título Principal */}
            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-black max-w-md text-left">
              Let's make things happen
            </h3>
            
            {/* Descrição */}
            <p className="text-lg text-gray-800 leading-relaxed max-w-lg text-left">
              Contact us today to learn more about how our digital marketing 
              services can help your business grow and succeed online.
            </p>
            
            {/* Botão de Ação */}
            <button className="bg-[#191A23] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-black transition-colors duration-300 mt-4 shadow-[0_4px_0_0_rgba(0,0,0,0.15)]">
              Get your free proposal
            </button>
          </div>

          {/* Coluna da Ilustração à Direita */}
          {/* items-center e justify-center garantem que a ilustração fique centralizada verticalmente no grid */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-full max-w-[350px] md:max-w-[450px]">
              {/* object-contain impede que a imagem seja cortada ou distorcida */}
              <img 
                src={CtaIllustration} 
                alt="Digital marketing illustration with character and shapes" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}