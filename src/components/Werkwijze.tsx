import React from "react";
import { ClipboardList, MessageSquare, Hammer, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-800" />,
    step: "01",
    title: "Vrijblijvend contact",
    description:
      "Neem contact op via telefoon, WhatsApp of het formulier. We reageren binnen 24 uur.",
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-blue-800" />,
    step: "02",
    title: "Dakinspectie & offerte",
    description:
      "Wij komen langs voor een inspectie op locatie. Daarna ontvangt u een transparante offerte zonder verborgen kosten.",
  },
  {
    icon: <Hammer className="h-8 w-8 text-blue-800" />,
    step: "03",
    title: "Professionele uitvoering",
    description:
      "Na akkoord plannen wij de uitvoering snel in. We werken netjes, stipt en met oog voor detail.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-800" />,
    step: "04",
    title: "Garantie & nazorg",
    description:
      "U ontvangt garantie op materiaal én arbeid. We blijven bereikbaar voor vragen of nazorg.",
  },
];

const Werkwijze = () => {
  return (
    <section className="section-shell bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Zo werken wij</h2>
          <p className="section-lead max-w-2xl">
            Van eerste contact tot klaar dak — helder, eerlijk en zonder gedoe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Connector line between steps (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-blue-100 z-0" />
              )}

              <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-100 mb-5">
                {s.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-500 text-white px-10 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md"
          >
            Offerte aanvragen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Werkwijze;

