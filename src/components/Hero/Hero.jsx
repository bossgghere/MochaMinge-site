import React, { useState, useEffect } from "react";
import heroImage from "../../assets/images/hero.jpeg"; // Make sure you have an image here
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="hero-container">
        {/* Text Content */}
        <div className={`hero-text ${isVisible ? "visible" : ""}`}>
          <div className="text-reveal">
            <h1 className="main-headline">SNAPLAY</h1>
            <h2 className="sub-headline">Relatable Genz shows.</h2>
          </div>

          <div className="text-reveal delay-1">
            <div className="genre-pills">
              <span className="pill">Romance</span>
              <span className="pill">Drama</span>
              <span className="pill">Gossip</span>
              <span className="pill">Controversy</span>
            </div>
          </div>

          <div className="text-reveal delay-2">
            <p>
              Your fav creators bring the stories you live, all in action-packed
              30-40 minute shows. Forget the algorithm, find your next binge.
            </p>
          </div>

          <div className="text-reveal delay-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.company.bingebit"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="button-text">Start Watching Now</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={`hero-visual ${isVisible ? "visible" : ""}`}>
          <div
            className="image-container"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
            }}
          >
            <img
              src={heroImage}
              alt="Snaplay App Interface"
              className="hero-image"
            />
            <div className="image-border"></div>
            <div className="image-reflection"></div>
          </div>

          {/* Floating Cards */}
          <div className="floating-stats">
            <div className="stat-card stat-1">
              <div className="card-icon">🎬</div>
              <div className="card-text">
                <div className="card-title">10+ New Shows</div>
                <div className="card-subtitle">Every Week</div>
              </div>
            </div>
            <div className="stat-card stat-2">
              <div className="card-icon">✨</div>
              <div className="card-text">
                <div className="card-title">Your Fav Creators</div>
                <div className="card-subtitle">Bringing the Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;