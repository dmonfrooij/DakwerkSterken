import { Link } from "react-router-dom";
import { Camera, FileText, Clock, ArrowRight } from "lucide-react";
import { trackEvent } from "../utils/analytics";

const DroneTeaser = () => {
  return (
    <section className="section-shell bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden relative">
      {/* Achtergrond decoratie */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-orange-500/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div>
            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Nieuw bij Dakwerk Sterken
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Drone Inspectie<br />
              <span className="text-orange-400">voor Platte Daken</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Weet u zeker hoe uw dak eraan toe is? Met onze intelligente drone-inspectie brengen wij
              elk detail in kaart — snel, veilig en zonder steigers. Binnen 24 uur een helder rapport in uw mailbox.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { icon: <Camera className="h-5 w-5" />, label: "HD-beelden + thermisch" },
                { icon: <FileText className="h-5 w-5" />, label: "Professioneel rapport" },
                { icon: <Clock className="h-5 w-5" />, label: "Rapport binnen 24 uur" },
              ].map(({ icon, label }, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 text-sm font-medium">
                  <span className="text-orange-400">{icon}</span>
                  {label}
                </div>
              ))}
            </div>

            <Link
              to="/drone-inspectie"
              onClick={() => trackEvent("drone_teaser_cta_click", { location: "homepage_teaser" })}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition shadow-xl text-lg"
            >
              Meer over drone-inspectie
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Foto */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square max-h-[480px]">
            <img
              src="/photos/drone.png"
              alt="Drone boven plat dak inspectie Dakwerk Sterken"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 text-white text-sm font-medium">
                🚁 Gecertificeerde drone-piloot · Heel Nederland
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneTeaser;

