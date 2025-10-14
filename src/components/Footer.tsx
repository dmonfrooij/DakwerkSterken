import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo en beschrijving */}
          <div className="lg:col-span-2">

            <p className="text-gray-400 mb-4 max-w-md">
              DAKWERK STERKEN is uw specialist voor kunststof dakbedekkingen in Neede en omgeving. 
              Met jarenlange ervaring leveren wij kwaliteit en betrouwbaarheid.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/leroy-sterken-0b6016192/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contactgegevens */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <a href="tel:0613027782" className="hover:text-white transition-colors">
                  06 13027782
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@dakwerksterken.nl" className="hover:text-white transition-colors">
                  info@dakwerksterken.nl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <div>
                  <p>Borculoseweg</p>
                  <p>Neede, Nederland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-lg font-bold mb-4">Onze Diensten</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Kunststof Dakbedekking
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Zonnepanelen
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Dakreparaties
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Dakonderhoud
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Dakisolatie
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 DAKWERK STERKEN. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;