import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-orange-400/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-3">
        {/* Text Logo */}
        <div className="flex items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">
            MOCHA MINGLE
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white hover:text-orange-400 transition-colors font-medium">
            Home
          </a>
          <a href="/legal" className="text-white hover:text-orange-400 transition-colors font-medium">
            Legal
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.company.mochamingle"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-orange-600 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-orange-500 hover:to-amber-400 shadow-md transition transform hover:-translate-y-0.5"
        >
          Download App
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white rounded transition ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white rounded transition ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white rounded transition ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-black/95 backdrop-blur-md px-6 py-6 border-t border-white/10">
          <a href="/" onClick={() => setIsMenuOpen(false)} className="text-white font-medium">Home</a>
          <a href="/legal" onClick={() => setIsMenuOpen(false)} className="text-white font-medium">Legal</a>
          <a
            href="https://play.google.com/store/apps/details?id=com.company.mochamingle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-3 rounded-lg text-center font-semibold hover:from-orange-500 hover:to-amber-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;