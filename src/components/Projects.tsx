import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Nieuwbouw PVC",
    description: "Nieuwbouw PVC dakbedekking",
    image: "/photos/Nieuwbouw PVC.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Nieuwbouw TPO",
    description: "Nieuwbouw voorzien van TPO kunststof dakbedekking",
    image: "/photos/Nieuwbouw_TPO.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "PVC Dak Hengelo",
    description: "PVC Dak in Hengelo",
    image: "/photos/Pvc_hengelo.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: "Renovatie",
    description: "Renovatie isolatie over het bestaande bitumen. Daaroverheen PVC",
    image: "/photos/renovatie.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    title: "Hellend dak",
    description: "Hellend dak met TPO",
    image: "/photos/hellend.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    title: "Plat dak woonhuis",
    description: "Plat dak woonhuis met PVC",
    image: "/photos/pvcwoonhuis.jpg?auto=compress&cs=tinysrgb&w=800"
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="section-shell bg-gray-50">
      <div className="bg-gray-50 min-h-screen pt-28">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">
            Onze Projecten
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="pro-card overflow-hidden cursor-pointer group hover:-translate-y-1"
                onClick={() => setSelectedImage(p.image)}
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                      <p className="text-sm text-gray-100">{p.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox overlay */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Vergrote afbeelding"
              className="max-w-3xl max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
