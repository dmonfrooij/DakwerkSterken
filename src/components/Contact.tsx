import React from "react";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titel en Intro */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Contact & Offerte
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Klaar voor uw kunststof dakproject? Neem contact met ons op voor een vrijblijvende offerte en professioneel advies.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Onze Gegevens
              </h3>

              <div className="space-y-7">
                {[
                  {
                    Icon: MapPin,
                    title: "Adres",
                    content: (
                      <>
                        Borculoseweg<br />Neede, Nederland
                      </>
                    ),
                  },
                  {
                    Icon: Phone,
                    title: "Telefoon",
                    content: (
                      <a
                        href="tel:0613027782"
                        className="text-blue-800 hover:text-blue-900 transition-colors"
                      >
                        06 13027782
                      </a>
                    ),
                  },
                  {
                    Icon: Mail,
                    title: "E-mail",
                    content: (
                      <a
                        href="mailto:info@dakwerksterken.nl"
                        className="text-blue-800 hover:text-blue-900 transition-colors"
                      >
                        info@dakwerksterken.nl
                      </a>
                    ),
                  },
                  {
                    Icon: Clock,
                    title: "Werktijden",
                    content: (
                      <div className="text-gray-600 space-y-1">
                        <p>Ma - Vr: 07:00 - 18:00</p>
                        <p>Za: 08:00 - 16:00</p>
                        <p>Zo: Op afspraak</p>
                      </div>
                    ),
                  },
                  {
                    Icon: Linkedin,
                    title: "LinkedIn",
                    content: (
                      <a
                        href="https://www.linkedin.com/in/leroy-sterken-0b6016192/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-900 transition-colors"
                      >
                        Leroy Sterken
                      </a>
                    ),
                  },
                ].map(({ Icon, title, content }, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Icon className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {title}
                      </h4>
                      <div className="text-gray-600">{content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-800 text-white p-10 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Direct contact opnemen?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Voor spoedeisende zaken of directe vragen kunt u ons bellen. Wij staan altijd klaar om u te helpen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0613027782"
                  className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition"
                >
                  Bel direct
                </a>
                <a
                  href="mailto:info@dakwerksterken.nl"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-white hover:text-blue-800 transition"
                >
                  E-mail sturen
                </a>
              </div>
            </div>
          </div>

          {/* Contactformulier */}
          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
