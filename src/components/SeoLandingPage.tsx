import React from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, MapPin, Phone } from "lucide-react";
import { regionPages, servicePages, type SeoPage } from "../data/seoPages";
import { trackEvent } from "../utils/analytics";

type SeoLandingPageProps = {
  mode: "services" | "regions";
};

const SeoLandingPage = ({ mode }: SeoLandingPageProps) => {
  const { slug } = useParams();
  const list = mode === "services" ? servicePages : regionPages;
  const page = list.find((entry) => entry.slug === slug);

  if (!page) {
    return (
      <section className="section-shell bg-gray-50 pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="section-title">Pagina niet gevonden</h1>
          <p className="section-lead mb-8">Deze pagina bestaat niet of is verplaatst.</p>
          <Link to="/" className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors">
            Terug naar home
          </Link>
        </div>
      </section>
    );
  }

  const related = list.filter((entry) => entry.slug !== page.slug).slice(0, 4);
  const secondaryList = mode === "services" ? regionPages.slice(0, 4) : servicePages.slice(0, 4);

  return (
    <section className="section-shell bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="pro-card p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{page.title}</h1>
              <p className="text-lg text-gray-700 mb-4">{page.intro}</p>
              <p className="text-gray-600 leading-relaxed">{page.description}</p>
            </div>

            <div className="pro-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Wat u van ons kunt verwachten</h2>
              <ul className="space-y-3">
                {page.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pro-card p-8 bg-blue-800 text-white">
              <h2 className="text-2xl font-bold mb-3">Interesse in {page.title.toLowerCase()}?</h2>
              <p className="text-blue-100 mb-6">Neem contact op voor advies en een passende offerte op basis van uw situatie.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0613027782"
                  onClick={() => trackEvent("contact_click", { method: "phone", location: "seo_landing" })}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Bel direct
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="pro-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Gerelateerde pagina's</h3>
              <ul className="space-y-2 text-sm">
                {related.map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      to={mode === "services" ? `/diensten/${entry.slug}` : `/regios/${entry.slug}`}
                      className="text-blue-800 hover:text-blue-900"
                    >
                      {entry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pro-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {mode === "services" ? "Regio's" : "Diensten"}
              </h3>
              <ul className="space-y-2 text-sm">
                {secondaryList.map((entry: SeoPage) => (
                  <li key={entry.slug}>
                    <Link
                      to={mode === "services" ? `/regios/${entry.slug}` : `/diensten/${entry.slug}`}
                      className="inline-flex items-start gap-2 text-blue-800 hover:text-blue-900"
                    >
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{entry.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SeoLandingPage;

