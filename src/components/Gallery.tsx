import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - in een echte applicatie zouden dit echte projectfoto's zijn
  const projects = [
    {
      id: 1,
      title: "Kunststof Dak Woonhuis",
      description: "Nieuwbouw PVC dakbedekking",
      image: "src/photos/20250515_152128.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Bedrijfshal Dakbedekking",
      description: "Grote industriële hal voorzien van TPO kunststof dakbedekking",
      image: "src/photos/20250905_051929.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Aanbouw Plat Dak",
      description: "Moderne aanbouw met hoogwaardige PVC dakbedekking",
      image: "src/photos/20240108_052949_Gallery.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Dakrenovatie",
      description: "Volledige renovatie met PVC over bitumen",
      image: "src/photos/20250314_182547.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Kantoorgebouw Dak",
      description: "Energiezuinig kunststof dak met geïntegreerde isolatie",
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Plaatsing Zonnepanelen",
      description: "Plaatsing zonnepanelen op een nieuw kunststof dak",
      image: "src/photos/20240108_052445_Gallery.jpg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const nextImage = () => {
    setSelectedImage(selectedImage === null ? 0 : (selectedImage + 1) % projects.length);
  };

  const prevImage = () => {
    setSelectedImage(selectedImage === null ? 0 : selectedImage === 0 ? projects.length - 1 : selectedImage - 1);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Projecten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk enkele voorbeelden van onze kunststof dakprojecten. Elk project wordt uitgevoerd 
            met de hoogste kwaliteitsstandaarden en aandacht voor detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Klik voor volledige weergave</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal voor volledige weergave */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <img 
                src={projects[selectedImage].image} 
                alt={projects[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projects[selectedImage].title}
                </h3>
                <p className="text-gray-200">
                  {projects[selectedImage].description}
                </p>
              </div>
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft className="h-12 w-12" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight className="h-12 w-12" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;