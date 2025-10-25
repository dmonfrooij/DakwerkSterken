import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from "./components/Projects";

function App() {
  return (
  <div className="bg-gray-50 min-h-screen pt-28">
    <div className="min-h-screen">

      <main>
        <Hero />
        <Services />
        <Materials />
        <Gallery />
        <Videos />
        <Contact />
      </main>

    </div>
    </div>
  );
}

export default App;