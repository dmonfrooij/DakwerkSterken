import { Link } from "react-router-dom";
import { CheckCircle, Camera, FileText, Clock, Shield, Zap, Eye, ArrowRight, Phone } from "lucide-react";
import { trackEvent } from "../utils/analytics";

const voordelen = [
  {
    icon: <Eye className="h-7 w-7" />,
    title: "100% Dak in beeld",
    desc: "Elke vierkante centimeter van uw plat dak wordt vastgelegd — ook moeilijk bereikbare hoeken en aansluitingen.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Veilig & niet-destructief",
    desc: "Geen stellages, geen beschadigingen. De drone inspecteert contactloos terwijl uw bedrijfsvoering gewoon doorgaat.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Snelle resultaten",
    desc: "Binnen 24 uur ontvangt u een gedetailleerd rapport met HD-beelden en een duidelijke prioriteitenlijst.",
  },
  {
    icon: <Camera className="h-7 w-7" />,
    title: "Thermische camera",
    desc: "Optioneel met warmtebeeldcamera: vocht en isolatieproblemen zichtbaar nog vóór ze zichtbaar lekken.",
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: "Professioneel rapport",
    desc: "Overzichtelijk PDF-rapport met foto's, aandachtspunten en concreet onderhoudsadvies.",
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: "Tijdig ingrijpen bespaart kosten",
    desc: "Kleine gebreken vroegtijdig ontdekken voorkomt grote reparaties en waterschade aan uw pand.",
  },
];

const stappen = [
  {
    nr: "01",
    title: "Aanvraag & planning",
    desc: "U neemt contact op. Wij overleggen over uw dak, de oppervlakte en de gewenste output, en plannen een datum in.",
  },
  {
    nr: "02",
    title: "Drone-vlucht",
    desc: "Onze gecertificeerde piloot voert de vlucht uit. HD-video, foto's en optioneel thermische beelden worden vastgelegd.",
  },
  {
    nr: "03",
    title: "Analyse & rapport",
    desc: "De beelden worden geanalyseerd op scheuren, blaasvorming, wateraccumulatie en dakrandproblemen.",
  },
  {
    nr: "04",
    title: "Advies & offerte",
    desc: "U ontvangt het rapport én een vrijblijvende offerte voor eventuele reparaties of onderhoud.",
  },
];

const DroneInspectie = () => {
  const handleCta = (location: string) => {
    trackEvent("drone_inspectie_cta_click", { location });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-28">
      {/* ── Hero ── */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/drone.png"
            alt="Drone dakinspectie boven een plat dak"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Innovatieve inspectietechnologie
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Intelligente<br />
              <span className="text-orange-400">Drone Inspectie</span><br />
              voor Platte Daken
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10">
              Wij inspecteren uw plat dak met geavanceerde drone-technologie — snel, veilig en tot op de millimeter nauwkeurig.
              Geen steigers, geen overlast, wél een volledig beeld van de staat van uw dak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contact"
                onClick={() => {
                  handleCta("hero");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg text-center"
              >
                Inspectie aanvragen
              </Link>
              <a
                href="tel:0613027782"
                onClick={() => handleCta("hero_phone")}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all text-center"
              >
                Bel: 06 13027782
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="bg-orange-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg font-semibold">
              ✓ Gecertificeerde drone-piloot &nbsp;·&nbsp; ✓ Rapport binnen 24 uur &nbsp;·&nbsp; ✓ Geheel Nederland
            </p>
            <Link
              to="/#contact"
              onClick={() => {
                handleCta("strip");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
              }}
              className="bg-white text-orange-600 font-bold px-6 py-2 rounded-lg hover:bg-orange-50 transition whitespace-nowrap"
            >
              Vraag nu aan →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Voordelen ── */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Waarom een Drone Inspectie?</h2>
            <p className="section-lead">
              Traditionele dakinspecties zijn tijdrovend en soms riskant. Met drone-technologie brengen wij de staat van uw
              dak in kaart zonder één voet erop te zetten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voordelen.map((v, i) => (
              <div key={i} className="pro-card p-8 flex flex-col gap-4">
                <div className="bg-blue-100 text-blue-800 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Werkwijze ── */}
      <section className="section-shell bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Zo Werkt Het</h2>
            <p className="section-lead">
              Van aanvraag tot helder rapport — in vier eenvoudige stappen weet u precies hoe uw dak eraan toe is.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stappen.map((s, i) => (
              <div key={i} className="relative">
                {i < stappen.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0" />
                )}
                <div className="pro-card p-8 relative z-10">
                  <div className="text-5xl font-black text-blue-100 mb-4 leading-none">{s.nr}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Drone foto breed ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/photos/drone.png"
          alt="Drone boven plat dak inspectie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-2xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
              "Weet u zeker dat uw dak er goed bij staat?"
            </p>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Laat ons een drone-inspectie uitvoeren en kom erachter — voordat de eerste lekkage een feit is.
            </p>
          </div>
        </div>
      </section>

      {/* ── Wat inbegrepen ── */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wat is inbegrepen?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Een drone-inspectie door Dakwerk Sterken is meer dan alleen een rondje vliegen.
                U ontvangt een volledig inspectierapport met concrete aanbevelingen, zodat u weet
                wat er nu, binnenkort, of later aandacht nodig heeft.
              </p>
              <ul className="space-y-4">
                {[
                  "HD-videoverslag van de volledige dakoppervlakte",
                  "Gemarkeerde foto's van alle aandachtspunten",
                  "Professioneel PDF-inspectierapport",
                  "Prioriteitenlijst: urgent / op termijn / geen actie",
                  "Mondeling toelichting op het rapport",
                  "Vrijblijvende offerte voor eventuele reparaties",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-800 text-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Geschikt voor</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Woningen met plat dak",
                  "Bedrijfspanden & hallen",
                  "Appartementcomplexen & VvE's",
                  "Scholen & zorggebouwen",
                  "Nieuwbouw oplevering controle",
                  "Verzekerings- of aankoopinspectie",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <ArrowRight className="h-4 w-4 text-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                onClick={() => {
                  handleCta("geschikt_voor");
                  setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
                }}
                className="block bg-orange-500 hover:bg-orange-600 text-white font-bold text-center px-8 py-4 rounded-xl transition"
              >
                Inspectie aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Klaar voor een slimme dakinspectie?
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Neem vandaag nog contact op. Wij plannen de drone-inspectie in op een moment dat het u uitkomt,
            door het hele land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              onClick={() => {
                handleCta("cta_bottom");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl transition shadow-xl text-lg"
            >
              Inspectie aanvragen
            </Link>
            <a
              href="tel:0613027782"
              onClick={() => handleCta("cta_bottom_phone")}
              className="flex items-center justify-center gap-2 border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition text-lg"
            >
              <Phone className="h-5 w-5" />
              06 13027782
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneInspectie;

