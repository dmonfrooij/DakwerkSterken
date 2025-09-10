import React from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Offerte</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klaar voor uw kunststof dakproject? Neem contact met ons op voor een vrijblijvende 
            offerte en professioneel advies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Informatie */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Adres</h4>
                    <p className="text-gray-600">
                      Borculoseweg<br />
                      Neede, Nederland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefoon</h4>
                    <a 
                      href="tel:0613027782" 
                      className="text-blue-800 hover:text-blue-900 transition-colors"
                    >
                      06 13027782
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <a 
                      href="mailto:info@dakwerksterken.nl" 
                      className="text-blue-800 hover:text-blue-900 transition-colors"
                    >
                      info@dakwerksterken.nl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Werktijden</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Maandag - Vrijdag: 07:00 - 18:00</p>
                      <p>Zaterdag: 08:00 - 16:00</p>
                      <p>Zondag: Op afspraak</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Linkedin className="h-6 w-6 text-blue-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/leroy-sterken-0b6016192/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-900 transition-colors"
                    >
                      Leroy Sterken
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Direct Contact Opnemen?</h3>
              <p className="text-blue-100 mb-6">
                Voor spoedeisende zaken of directe vragen kunt u ons bellen. 
                Wij staan altijd klaar om u te helpen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0613027782"
                  className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
                >
                  Bel Direct
                </a>
                <a 
                  href="mailto:info@dakwerksterken.nl"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-white hover:text-blue-800 transition-colors"
                >
                  E-mail Sturen
                </a>
              </div>
            </div>
          </div>

          {/* Contact Formulier */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;