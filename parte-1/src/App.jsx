// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionHeader from './components/SectionHeader';
import CaseStudies from './components/CaseStd';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <Header />
        <main>
          <Hero />
          <Companies />
          <Services />
          <CallToAction />
          <SectionHeader 
            title="Case Studies" 
            description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" 
          />
          <CaseStudies/>
          <SectionHeader 
            title="Our Working Process" 
            description="Step-by-Step Guide to Achieving Your Business Goals" 
          />
          <Process />
          <SectionHeader 
            title="Team" 
            description="Meet the skilled and experienced team behind our successful digital marketing strategies" 
          />
          <Team />
          <SectionHeader 
            title="Testimonials" 
            description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" 
          />
          <Testimonials />
          <br /><br /><br />
          <SectionHeader 
            title="Contact Us" 
            description="Connect with Us: Let's Discuss Your Digital Marketing Needs" 
          />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;