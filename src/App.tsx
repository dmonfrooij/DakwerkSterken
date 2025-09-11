import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Materials />
        <Gallery />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;