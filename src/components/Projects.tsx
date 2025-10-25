import React from "react";

const projects = [
    {
      id: 1,
      title: "Kunststof Dak Woonhuis",
      description: "Nieuwbouw PVC dakbedekking",
      image: "/photos/20250515_152128.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Bedrijfshal Dakbedekking",
      description: "Grote industriële hal voorzien van TPO kunststof dakbedekking",
      image: "/photos/20250905_051929.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Aanbouw Plat Dak",
      description: "Moderne aanbouw met hoogwaardige PVC dakbedekking",
      image: "/photos/20240108_052949_Gallery.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Complete renovatie",
      description: "Volledige renovatie met PVC",
      image: "/photos/20250314_182547.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Kantoorgebouw Dak",
      description: "Energiezuinig kunststof dak met geïntegreerde isolatie",
      image: "/photos/20220317_163556.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Plaatsing zonnepanelen op een nieuw PVC dak",
      description: "Lokale reparatie en versterking bestaand kunststof dak",
      image: "/photos/20240108_052445_Gallery.jpg?auto=compress&cs=tinysrgb&w=800"
    }
];

const Projects = () => {
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
