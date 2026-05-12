import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Werkwijze from './components/Werkwijze';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import DroneTeaser from './components/DroneTeaser';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-28">
      <div className="min-h-screen">
        <main className="pb-16 md:pb-0">
          <Hero />
          <Services />
          <Werkwijze />
          <Materials />
          <Gallery />
          <DroneTeaser />
          <Videos />
          <Contact />
          <Reviews />
        </main>
      </div>
    </div>
  );
}

export default App;