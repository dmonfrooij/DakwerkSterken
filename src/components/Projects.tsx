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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="bg-gray-50 min-h-screen pt-28">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Onze Projecten
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedImage(p.image)}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-600">{p.description}</p>
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
