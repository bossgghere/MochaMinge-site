import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <span>Snaplay</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.company.bingebit"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download App
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-download"
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