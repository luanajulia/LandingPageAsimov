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
            title="Our Process" 
            description="We follow a structured approach to deliver exceptional results for our clients." 
          />
          <CaseStudies/>
          <Process />
          <Team />
          <Testimonials />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;