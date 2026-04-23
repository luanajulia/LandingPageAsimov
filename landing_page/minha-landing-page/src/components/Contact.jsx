import React from "react";

export default function Contact() {
  return (
    <section className="py-20 px-4">
      {/* Container Principal com fundo cinza claro e bordas arredondadas */}
      <div className="max-w-6xl mx-auto bg-[#F3F3F3] rounded-[45px] overflow-hidden relative min-h-[600px] flex flex-col md:flex-row border border-black shadow-[0_5px_0_0_rgba(0,0,0,1)]">
        
        {/* Lado Esquerdo: Formulário */}
        <div className="w-full md:w-1/2 p-8 md:p-16 z-10 text-left">
          <form className="flex flex-col gap-6">
            
            {/* Seleção de rádio alinhada à esquerda */}
            <div className="flex gap-8 mb-4 justify-start">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type" 
                  className="w-6 h-6 border-2 border-black accent-[#B9FF66]" 
                  defaultChecked 
                />
                <span className="text-black text-lg">Say Hi</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type" 
                  className="w-6 h-6 border-2 border-black accent-[#B9FF66]" 
                />
                <span className="text-black text-lg">Get a Quote</span>
              </label>
            </div>

            {/* Inputs com labels alinhados à esquerda */}
            <div className="flex flex-col gap-2">
              <label className="text-black font-semibold">Name</label>
              <input 
                type="text" 
                placeholder="Name"
                className="w-full p-4 rounded-xl border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-semibold">Email*</label>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full p-4 rounded-xl border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-semibold">Message*</label>
              <textarea 
                placeholder="Message"
                rows="5"
                className="w-full p-4 rounded-xl border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66] resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#191A23] text-white rounded-xl font-bold text-lg hover:bg-black transition-colors mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Lado Direito: Container do SVG posicionado no canto */}
        <div className="hidden md:flex md:w-1/2 relative items-center justify-end overflow-visible">
          <div className="absolute right-[-68%] top-1/2 -translate-y-1/2 scale-110 lg:scale-125">
            {/* O SVG fornecido anteriormente entra aqui */}
            <svg width="692" height="649" viewBox="0 0 692 649" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_341_618" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="41" y="0" width="651" height="649">
                <mask id="path-1-outside-1_341_618" maskUnits="userSpaceOnUse" x="40.7109" y="-0.875" width="651" height="650" fill="black">
                  <rect fill="white" x="40.7109" y="-0.875" width="651" height="650"/>
                  <path d="M366.641 161.686L387.068 0.125L386.909 162.962L427.445 5.22862L407.017 166.79L467.024 15.2764L426.488 173.17L505.007 30.2682L444.841 181.782L540.756 49.8853L462.077 192.787L573.632 73.968L477.876 205.705L603.475 101.878L491.761 220.538L629.489 133.298L503.73 237.124L651.353 167.747L513.625 254.987L668.749 204.589L521.126 273.966L681.356 243.344L526.233 293.743L689.017 283.376L528.786 313.838L691.57 324.045L528.786 334.253L689.017 364.715L526.233 354.508L681.356 404.746L521.126 374.284L668.749 443.661L513.625 393.263L651.353 480.503L503.73 411.126L629.489 514.953L491.761 427.553L603.475 546.372L477.876 442.385L573.632 574.282L462.077 455.463L540.756 598.205L444.841 466.309L505.007 617.822L426.488 475.08L467.024 632.814L407.017 481.301L427.445 643.021L386.909 485.128L387.068 648.125L366.641 486.404L346.213 648.125L346.213 485.128L305.676 643.021L326.264 481.301L266.257 632.814L306.794 475.08L228.274 617.822L288.44 466.309L192.526 598.205L271.205 455.463L159.49 574.282L255.405 442.385L129.806 546.372L241.52 427.553L103.792 514.953L229.551 411.126L81.9282 480.503L219.656 393.263L64.5326 443.661L212.155 374.284L51.9248 404.746L207.048 354.508L44.2644 364.715L204.495 334.253L41.7109 324.045L204.495 313.838L44.2644 283.376L207.048 293.743L51.9248 243.344L212.155 273.966L64.5326 204.589L219.656 254.987L81.9282 167.747L229.551 237.124L103.792 133.298L241.52 220.538L129.806 101.878L255.405 205.705L159.49 73.968L271.205 192.787L192.526 49.8853L288.44 181.782L228.274 30.2682L306.794 173.17L266.257 15.2764L326.264 166.79L305.676 5.22862L346.213 162.962V0.125L366.641 161.686Z"/>
                </mask>
                <path d="M366.641 161.686L387.068 0.125L386.909 162.962L427.445 5.22862L407.017 166.79L467.024 15.2764L426.488 173.17L505.007 30.2682L444.841 181.782L540.756 49.8853L462.077 192.787L573.632 73.968L477.876 205.705L603.475 101.878L491.761 220.538L629.489 133.298L503.73 237.124L651.353 167.747L513.625 254.987L668.749 204.589L521.126 273.966L681.356 243.344L526.233 293.743L689.017 283.376L528.786 313.838L691.57 324.045L528.786 334.253L689.017 364.715L526.233 354.508L681.356 404.746L521.126 374.284L668.749 443.661L513.625 393.263L651.353 480.503L503.73 411.126L629.489 514.953L491.761 427.553L603.475 546.372L477.876 442.385L573.632 574.282L462.077 455.463L540.756 598.205L444.841 466.309L505.007 617.822L426.488 475.08L467.024 632.814L407.017 481.301L427.445 643.021L386.909 485.128L387.068 648.125L366.641 486.404L346.213 648.125L346.213 485.128L305.676 643.021L326.264 481.301L266.257 632.814L306.794 475.08L228.274 617.822L288.44 466.309L192.526 598.205L271.205 455.463L159.49 574.282L255.405 442.385L129.806 546.372L241.52 427.553L103.792 514.953L229.551 411.126L81.9282 480.503L219.656 393.263L64.5326 443.661L212.155 374.284L51.9248 404.746L207.048 354.508L44.2644 364.715L204.495 334.253L41.7109 324.045L204.495 313.838L44.2644 283.376L207.048 293.743L51.9248 243.344L212.155 273.966L64.5326 204.589L219.656 254.987L81.9282 167.747L229.551 237.124L103.792 133.298L241.52 220.538L129.806 101.878L255.405 205.705L159.49 73.968L271.205 192.787L192.526 49.8853L288.44 181.782L228.274 30.2682L306.794 173.17L266.257 15.2764L326.264 166.79L305.676 5.22862L346.213 162.962V0.125L366.641 161.686Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" mask="url(#path-1-outside-1_341_618)"/>
              </mask>
              <g mask="url(#mask0_341_618)">
                <rect  width="1152.83" height="702.852" rx="45" fill="black"/>
              </g>
              <path d="M95.7147 470.221L141.422 495.125L95.7147 520.229L70.7109 565.835L45.7072 520.229L0.000260592 495.125L45.7072 470.221L70.7109 424.414L95.7147 470.221Z" fill="#B9FF66"/>
              <path d="M217.102 243.69L298.777 288.191L217.102 333.05L172.422 414.547L127.742 333.05L46.0666 288.191L127.742 243.69L172.422 161.836L217.102 243.69Z" fill="#191A23"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}