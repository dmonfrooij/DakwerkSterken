import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    trackEvent('hero_cta_click', { cta_type: 'scroll', section_id: sectionId });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Achtergrond afbeelding voor kunststof dak */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url("/photos/20241007_145636.jpg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Specialist in{' '}
              <span className="text-blue-800 dark:text-blue-400">Kunststof Daken</span>
            </h1>
            <p className="text-xl text-black-600 dark:text-gray-300 mb-8 leading-relaxed">
              Dakwerk Sterken levert duurzame kunststof dakoplossingen voor woning en bedrijf.
              Vraag vandaag nog een vrijblijvende offerte aan en ontvang snel persoonlijk advies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">20+ Jaar Ervaring</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Volledig Verzekerd</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-orange-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Gecertificeerd</span>
              </div>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-400 mb-6 font-medium">
              Reactie binnen 24 uur - Vrijblijvende offerte - Actief in heel Nederland
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Vraag Offerte Aan</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="tel:0613027782"
                onClick={() => trackEvent('hero_cta_click', { cta_type: 'phone' })}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center"
              >
                Bel direct
              </a>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-800 dark:border-blue-400 text-blue-800 dark:text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors font-medium"
              >
                Onze Diensten
              </button>
            </div>
          </div>
          
          <div className="lg:text-right">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Waarom Kiezen Voor Kunststof Daken?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-left">Duurzaam & Onderhoudsvrij</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm text-left">Kunststof daken gaan decennia mee met een bewezen duur van 40 jaar of langer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-left">Weerbestendig</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm text-left">Bestand tegen alle weersomstandigheden extreem goed bestand tegen UV straling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-left">Kosteneffectief</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm text-left">Lagere kosten op lange termijn</p>
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