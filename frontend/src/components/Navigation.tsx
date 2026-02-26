import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Flake Colors", href: "#flake-colors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-concrete-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick("#home")}>
            <img
              src="/assets/IMG_2255.jpeg"
              alt="Newgate Coatings Logo"
              className="h-[4.375rem] w-auto object-contain"
            />
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-base leading-tight tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-concrete-900" : "text-white"
                }`}
              >
                Newgate Coatings
              </span>
              <span
                className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-copper-600" : "text-copper-300"
                }`}
              >
                Polyaspartic Specialists
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-copper-500/10 hover:text-copper-600 ${
                  isScrolled ? "text-concrete-700" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-3 px-5 py-2 bg-copper-500 hover:bg-copper-600 text-white text-sm font-bold rounded-md transition-colors duration-200 shadow-sm"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? "text-concrete-800 hover:bg-concrete-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-concrete-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-semibold text-concrete-700 hover:bg-copper-50 hover:text-copper-600 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-4 py-3 bg-copper-500 hover:bg-copper-600 text-white text-sm font-bold rounded-md transition-colors"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
