import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Videos = () => {
  // Placeholder YouTube video IDs - vervang deze door echte video IDs
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=BVPaybXDJno", // Placeholder - vervang door echte YouTube URL
      title: "Kunststof Dak Installatie Process",
      description: "Bekijk hoe wij professioneel een kunststof dak installeren.",
      thumbnail: "/photos/2025-10-14 144844.png?auto=compress&cs=tinysrgb&w=600"
    },
    {
      url: "https://www.youtube.com/watch?v=KBKBcIjNr38", // Placeholder - vervang door echte YouTube URL
      title: "Het Begint Met Een Goede Start",
      description: "Kwaliteit en snelheid is onze standaard",
      thumbnail: "/photos/2025-10-14 150608.png?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  const openVideo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
              onClick={() => openVideo(video.url)}
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-40 transition-all">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all flex items-center space-x-2">
                    <Play className="h-6 w-6 text-blue-800" />
                    <ExternalLink className="h-4 w-4 text-blue-800" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  YouTube
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-3">{video.description}</p>
                <div className="flex items-center text-blue-800 text-sm font-medium">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span>Bekijk op YouTube</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Meer Video's Bekijken?</h3>
          <p className="text-gray-600 mb-6">
            Bezoek ons YouTube kanaal voor meer tips en projectoverzichten.
          </p>
          <a 
            href="https://www.youtube.com/@leethatsme4491" 
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