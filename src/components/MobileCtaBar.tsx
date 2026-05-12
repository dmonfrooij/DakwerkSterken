import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

const MobileCtaBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOfferte = () => {
    trackEvent("contact_click", { method: "scroll_contact", location: "mobile_cta_bar" });
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <a
        href="tel:0613027782"
        onClick={() =>
          trackEvent("contact_click", { method: "phone", location: "mobile_cta_bar" })
        }
        className="flex flex-1 items-center justify-center gap-2 py-3 text-blue-800 dark:text-blue-400 font-semibold text-sm"
      >
        <Phone className="h-5 w-5" />
        Bel direct
      </a>

      <div className="w-px bg-gray-200 dark:bg-gray-700" />

      <button
        onClick={handleOfferte}
        className="flex flex-1 items-center justify-center gap-2 py-3 bg-orange-500 text-white font-semibold text-sm"
      >
        <MessageCircle className="h-5 w-5" />
        Vraag offerte aan
      </button>
    </div>
  );
};

export default MobileCtaBar;

