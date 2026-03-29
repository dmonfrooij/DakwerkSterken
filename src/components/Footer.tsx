import React from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "PVC dakbedekking", to: "/diensten/pvc-dakbedekking" },
  { label: "TPO dakbedekking", to: "/diensten/tpo-dakbedekking" },
  { label: "Dakrenovatie", to: "/diensten/dakrenovatie" },
  { label: "Dakonderhoud", to: "/diensten/dakonderhoud" },
];

const regionLinks = [
  { label: "Gelderland", to: "/regios/gelderland" },
  { label: "Overijssel", to: "/regios/overijssel" },
  { label: "Utrecht", to: "/regios/utrecht" },
  { label: "Noord-Holland", to: "/regios/noord-holland" },
  { label: "Zuid-Holland", to: "/regios/zuid-holland" },
  { label: "Noord-Brabant", to: "/regios/noord-brabant" },
  { label: "Limburg", to: "/regios/limburg" },
  { label: "Drenthe", to: "/regios/drenthe" },
  { label: "Friesland", to: "/regios/friesland" },
  { label: "Groningen", to: "/regios/groningen" },
  { label: "Flevoland", to: "/regios/flevoland" },
  { label: "Zeeland", to: "/regios/zeeland" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo en beschrijving */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/1714796366235.jpg"
                alt="Dakwerk Sterken logo"
                className="h-14 w-auto rounded"
              />
            </Link>

            <p className="text-gray-400 mb-4 max-w-md">
              DAKWERK STERKEN is uw specialist voor kunststof dakbedekkingen in heel Nederland.
              Met jarenlange ervaring leveren wij kwaliteit en betrouwbaarheid.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/leroy-sterken-0b6016192/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
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
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:0613027782" className="hover:text-white transition-colors">
                  06 13027782
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:info@dakwerksterken.nl" className="hover:text-white transition-colors">
                  info@dakwerksterken.nl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <div>
                  <p>Borculoseweg</p>
                  <p>Neede, Nederland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-lg font-bold mb-4">Diensten</h3>
            <ul className="space-y-2 text-gray-400">
              {serviceLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regio's */}
          <div>
            <h3 className="text-lg font-bold mb-4">Regio's (selectie)</h3>
            <ul className="space-y-2 text-gray-400">
              {regionLinks.slice(0, 4).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Volledige regio-grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 pt-8 border-t border-gray-800">
          <div className="col-span-full mb-2">
            <h3 className="text-lg font-bold">Werkgebied: alle 12 provincies</h3>
          </div>
          {regionLinks.map((item) => (
            <div key={item.to}>
              <Link to={item.to} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} DAKWERK STERKEN. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/projecten" className="hover:text-white transition-colors">
                Projecten
              </Link>
              <Link to="/regios/gelderland" className="hover:text-white transition-colors">
                Werkgebied
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;