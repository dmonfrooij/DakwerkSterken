import React from 'react';
import { Shield, Droplets, Thermometer, Zap, CheckCircle, Star } from 'lucide-react';

const Materials = () => {
  const materials = [
    {
      name: "TPO Membraan",
      icon: <Thermometer className="h-8 w-8" />,
      description: "Thermoplastisch polyolefine biedt uitstekende energie-efficiëntie en duurzaamheid.",
      color: "bg-green-600",
      specifications: [
        "Levensduur: 30+ jaar",
        "Reflectiewaarde: tot 85%",
        "Warmte gelast",
        "Chemisch bestendig",
        "UV bestendig"
      ],
      useCases: [
        "Commerciële gebouwen",
        "Industriële hallen",
        "Energiezuinige projecten",
        "Grote oppervlaktes",
        "Woningbouw"
      ],
      advantages: [
        "Hoge energie-efficiëntie",
        "Sterke lasnaden",
        "Licht van gewicht",
        "Recycleerbaar",
        "Geen weekmakers"
      ]
    },
    {
      name: "PVC Dakbedekking",
      icon: <Droplets className="h-8 w-8" />,
      description: "Polyvinylchloride membranen zijn ideaal voor complexe dakvormen en details.",
      color: "bg-purple-600",
      specifications: [
        "Levensduur: 25+ jaar",
        "Brandvertragend",
        "Chemisch resistent",
        "Flexibel bij lage temperaturen",
        "UV bestendig"
      ],
      useCases: [
        "Complexe dakvormen",
        "Daken met veel doorvoeren",
        "Restaurants en keukens",
        "Chemische industrie",
        "Woning bouw"
      ],
      advantages: [
        "Uitstekende verwerkbaarheid",
        "Hoge chemische weerstand",
        "Brandveilig",
        "Lange garantieperiode"
      ]
    },
    {
      name: "Bitumen Modificaties",
      icon: <Zap className="h-8 w-8" />,
      description: "Gemodificeerd bitumen combineert traditionele betrouwbaarheid met moderne prestaties.",
      color: "bg-orange-600",
      specifications: [
        "Levensduur: 20+ jaar",
        "SBS of APP gemodificeerd",
        "Zelfklevend beschikbaar",
        "Hoge treksterkte"
      ],
      useCases: [
        "Traditionele bouw",
        "Renovatie oude daken",
        "Hellende daken",
        "Budget-vriendelijke projecten"
      ],
      advantages: [
        "Bewezen technologie",
        "Kosteneffectief",
        "Eenvoudige verwerking",
        "Breed toepasbaar"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Bewegende achtergrond elementen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-orange-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kunststof Dakbedekkingen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij werken uitsluitend met hoogwaardige kunststof materialen. Elk materiaal heeft zijn eigen 
            unieke eigenschappen en toepassingsgebieden. Ontdek welke oplossing het beste bij uw project past.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${material.color} p-6 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    {material.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{material.name}</h3>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white text-opacity-90">{material.description}</p>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Specificaties
                    </h4>
                    <ul className="space-y-2">
                      {material.specifications.map((spec, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      Toepassingen
                    </h4>
                    <ul className="space-y-2">
                      {material.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                      Voordelen
                    </h4>
                    <ul className="space-y-2">
                      {material.advantages.map((advantage, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Niet Zeker Welk Materiaal?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Onze experts helpen u graag bij het kiezen van het juiste materiaal voor uw specifieke situatie. 
            Wij kijken naar uw budget, de dakconstructie, en uw wensen om de beste oplossing te vinden.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            Vraag Gratis Advies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Materials;