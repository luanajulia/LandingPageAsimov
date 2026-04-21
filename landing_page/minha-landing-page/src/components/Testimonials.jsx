// src/components/Testimonials.jsx

const testimonials = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Jane Doe", role: "CEO at ABC Inc." },
  { quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Michael Brown", role: "Founder at Def Company" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-dark rounded-3xl my-24 p-12 md:p-16 text-white">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More About Our Digital Marketing Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-900 p-8 rounded-2xl relative">
            <p className="text-xl leading-relaxed mb-6">"{testimonial.quote}"</p>
            <p className="font-semibold text-brand-green">{testimonial.name}</p>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-900 rotate-45"></span>
          </div>
        ))}
        {/* Placeholder para controles de paginação se necessário */}
        <div className="col-span-full flex justify-center gap-2 mt-12">
            <span className="w-3 h-3 rounded-full bg-brand-green"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
        </div>
      </div>
    </section>
  );
}