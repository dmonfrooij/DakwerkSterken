import { useEffect, useState } from "react";
import { Menu, X, Mail, Sun, Moon } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import { useTheme } from "../utils/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    trackEvent("navigate_section_click", {
      section_id: sectionId,
      current_path: location.pathname,
    });

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-white dark:bg-gray-900 fixed w-full top-0 z-50 transition-all duration-300 ${
        isCompact ? "shadow-md" : "shadow-lg"
      }`}
    >
      <div className={`bg-white dark:bg-gray-900 px-4 transition-all duration-300 ${isCompact ? "py-2" : "py-4"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo + contactinfo */}
          <div className="flex items-center space-x-8">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/1714796366235.jpg"
                alt="DAKWERK STERKEN Logo"
                className={`w-auto transition-all duration-300 ${isCompact ? "h-14" : "h-20"}`}
              />
            </Link>
            <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-800 dark:text-blue-400" />
                <span>info@dakwerksterken.nl</span>
              </div>
              <div className="text-blue-800 dark:text-blue-400 font-medium">
                Sterk in vakwerk, Sterk in resultaat!
              </div>
            </div>
          </div>

          {/* Desktop navigatie */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors">Home</button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors">Diensten</button>
            <button onClick={() => scrollToSection("gallery")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors">Voorbeelden</button>
            <button onClick={() => scrollToSection("videos")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors">Video's</button>

            <Link
              to="/projecten"
              className={`font-medium transition-colors ${location.pathname === "/projecten" ? "text-blue-800 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projecten
            </Link>

            <Link
              to="/drone-inspectie"
              className={`font-medium transition-colors flex items-center gap-1 ${location.pathname === "/drone-inspectie" ? "text-blue-800 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              🚁 Drone Inspectie
            </Link>

            <button onClick={() => scrollToSection("contact")} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Contact
            </button>

            <a
              href="tel:0613027782"
              onClick={() => trackEvent("contact_click", { method: "phone", location: "header_desktop" })}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium"
            >
              Bel direct
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Wissel thema"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile: dark toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Wissel thema"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-3 pt-4 pb-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-800 dark:text-blue-400" />
                <span>info@dakwerksterken.nl</span>
              </div>
            </div>
            <nav className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium text-left">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium text-left">Diensten</button>
              <button onClick={() => scrollToSection("gallery")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium text-left">Voorbeelden</button>
              <button onClick={() => scrollToSection("videos")} className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium text-left">Video's</button>

              <Link
                to="/projecten"
                className={`font-medium text-left ${location.pathname === "/projecten" ? "text-blue-800 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projecten
              </Link>

              <Link
                to="/drone-inspectie"
                className={`font-medium text-left ${location.pathname === "/drone-inspectie" ? "text-blue-800 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                🚁 Drone Inspectie
              </Link>

              <button onClick={() => scrollToSection("contact")} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors w-fit">
                Contact
              </button>

              <a
                href="tel:0613027782"
                onClick={() => trackEvent("contact_click", { method: "phone", location: "header_mobile" })}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors w-fit text-sm font-medium"
              >
                Bel direct
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
