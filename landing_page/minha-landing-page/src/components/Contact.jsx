// src/components/Contact.jsx
export default function Contact() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-bold font-sans">Contact Us</h2>
        <p className="text-lg text-gray-600 font-sans max-w-xl">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="bg-brand-light-bg rounded-3xl grid md:grid-cols-[1fr,40%] gap-12 overflow-hidden">
        <div className="p-12 md:p-16">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-brand-green focus:border-brand-green" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input type="email" id="email" name="email" placeholder="john@doe.com" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-brand-green focus:border-brand-green" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
              <textarea id="message" name="message" rows="5" placeholder="Let's make things happen" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-brand-green focus:border-brand-green"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-dark text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white p-12 flex items-center justify-center relative">
          {/* Adicione a ilustração real aqui */}
          <span className="text-black text-[15rem] leading-none">✶</span>
          <span className="absolute bottom-12 left-12 text-black text-9xl leading-none">✦</span>
          <span className="absolute top-12 right-12 text-brand-green text-8xl leading-none">✹</span>
        </div>
      </div>
    </section>
  );
}