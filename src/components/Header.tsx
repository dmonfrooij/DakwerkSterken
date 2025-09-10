import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img 
              src="/1714796366235.jpg" 
              alt="DAKWERK STERKEN Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-800" />
                <span>06 13027782</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-800" />
                <span>info@dakwerksterken.nl</span>
              </div>
              <div className="text-blue-800 font-medium">
                Specialist in kunststof daken
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Diensten
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Voorbeelden
            </button>
            <button 
              onClick={() => scrollToSection('videos')}
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Video's
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-3 pt-4 pb-4 border-b border-gray-200 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-800" />
                <span>06 13027782</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-800" />
                <span>info@dakwerksterken.nl</span>
              </div>
            </div>
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Diensten
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Voorbeelden
              </button>
              <button 
                onClick={() => scrollToSection('videos')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Video's
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors w-fit"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;