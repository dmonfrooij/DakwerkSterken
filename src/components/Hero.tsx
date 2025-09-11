import React from 'react';
import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Achtergrond afbeelding voor kunststof dak */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Specialist in{' '}
              <span className="text-blue-800">Kunststof Daken</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              DAKWERK STERKEN is uw betrouwbare partner voor hoogwaardige dakwerkzaamheden. 
              Gespecialiseerd in kunststof daken bieden wij duurzame oplossingen voor uw woning of bedrijf.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Ruime Ervaring</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Volledig Verzekerd</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-orange-600" />
                <span className="text-gray-700 font-medium">Gecertificeerd</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Vraag Offerte Aan</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-colors font-medium"
              >
                Onze Diensten
              </button>
            </div>
          </div>
          
          <div className="lg:text-right">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Waarom Kunststof Daken?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-left">Duurzaam & Onderhoudsvrij</h4>
                    <p className="text-gray-600 text-sm text-left">Kunststof daken gaan decennia mee zonder onderhoud</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-left">Weerbestendig</h4>
                    <p className="text-gray-600 text-sm text-left">Bestand tegen alle weersomstandigheden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-left">Kosteneffectief</h4>
                    <p className="text-gray-600 text-sm text-left">Lagere kosten op lange termijn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;