import React from 'react';
import { Home, Wrench, Shield, Zap, Droplets, Sun } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Kunststof Dakbedekking",
      description: "Professionele installatie van hoogwaardige kunststof daken voor woningen en bedrijven.",
      features: ["TPO membranen", "PVC dakbedekking", "Resitrix"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Dakreparaties",
      description: "Snelle en effectieve reparaties aan bestaande daken.",
      features: ["Lek reparaties", "Voegen vernieuwen", "Beschadigingen herstellen"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Dakonderhoud",
      description: "Regelmatig onderhoud om de levensduur van uw dak te verlengen.",
      features: ["Jaarlijkse inspectie", "Preventief onderhoud", "Garantie service"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Dakisolatie",
      description: "Energiezuinige isolatieoplossingen gecombineerd met kunststof dakbedekking.",
      features: ["PIR isolatie", "Koudebruggen voorkomen", "Energie besparing"]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Dakafwatering",
      description: "Complete systemen voor optimale waterafvoer van uw dak.",
      features: ["Dakgoten systemen", "Hemelwaterafvoer", "Drainage oplossingen"]
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Zonnepanelen Montage",
      description: "Professionele montage van zonnepanelen.",
      features: ["Ballast systemen", "Ballastvrije verankering", "Optimale oriëntatie"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Diensten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als specialist in kunststof daken bieden wij een compleet pakket aan diensten 
            voor zowel particulieren als bedrijven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-blue-800 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-800 text-white p-8 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Waarom Kiezen voor DAKWERK STERKEN?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">✓ Gespecialiseerd in Kunststof</h4>
                  <p className="text-blue-100 text-sm">Jarenlange ervaring met kunststof dakbedekkingen</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ Kwaliteit Gegarandeerd</h4>
                  <p className="text-blue-100 text-sm">Uitgebreide garantie op al onze werkzaamheden</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ Lokaal & Betrouwbaar</h4>
                  <p className="text-blue-100 text-sm">Gevestigd in Neede, actief heel Nederland</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ Scherpe Prijzen</h4>
                  <p className="text-blue-100 text-sm">Transparante prijzen zonder verrassingen</p>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-semibold mb-4">Klaar voor een Offerte?</h4>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Neem Contact Op
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;