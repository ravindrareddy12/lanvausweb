import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import 'animate.css';
import AOS from 'aos';

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
