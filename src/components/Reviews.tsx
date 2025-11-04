import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    // Controleer of het script al bestaat om dubbele laadtijd te voorkomen
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <p className="text-gray-600 mb-10">
          Onze klanten beoordelen <span className="font-semibold text-primary">DAKWERK STERKEN</span> met trots dankzij kwaliteit, betrouwbaarheid en service.
        </p>

        {/* Hier komt jouw Elfsight widget */}
        <div
          className="elfsight-app-6e10676d-fba0-4e7a-b91c-fa5a92bb4a9d"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
