import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Placeholder YouTube video IDs - vervang deze door echte video IDs
  const videos = [
    {
      id: "BVPaybXDJno", // Placeholder - vervang door echte YouTube video ID
      title: "Kunststof Dak Installatie Process",
      description: "Bekijk hoe wij professioneel een kunststof dak installeren van begin tot eind.",
      thumbnail: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "dQw4w9WgXcQ", // Placeholder - vervang door echte YouTube video ID
      title: "EPDM Rubber Dakbedekking",
      description: "Alles over de voordelen en installatie van EPDM rubber dakbedekkingen.",
      thumbnail: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "dQw4w9WgXcQ", // Placeholder - vervang door echte YouTube video ID
      title: "Dakonderhoud Tips",
      description: "Praktische tips voor het onderhoud van uw kunststof dak om de levensduur te verlengen.",
      thumbnail: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "dQw4w9WgXcQ", // Placeholder - vervang door echte YouTube video ID
      title: "Voor en Na Transformaties",
      description: "Indrukwekkende transformaties van oude daken naar moderne kunststof oplossingen.",
      thumbnail: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="videos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Video's & Tutorials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk onze video's om meer te leren over kunststof daken, installatieprocessen 
            en onderhoudstips van onze experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-40 transition-all">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                    <Play className="h-8 w-8 text-blue-800 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Meer Video's Bekijken?</h3>
          <p className="text-gray-600 mb-6">
            Bezoek ons YouTube kanaal voor meer tips, tutorials en projectoverzichten.
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Bezoek Ons YouTube Kanaal
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;