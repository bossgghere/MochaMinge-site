import React, { useState, useEffect } from "react";
import heroImage from "../../assets/images/hero.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] overflow-hidden px-4 md:px-12">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/25 rounded-full blur-[120px] opacity-50 top-10 -left-40 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-orange-400/20 rounded-full blur-[120px] opacity-50 bottom-10 -right-32 animate-pulse"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl z-10">
        {/* Text Content */}
        <div
          className={`flex-1 transition-all duration-700 text-center lg:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent leading-none tracking-tight">
            SNAPLAY
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
            Relatable GenZ shows.
          </h2>

          {/* Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
            {["Romance", "Drama", "Gossip", "Controversy"].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-purple-600/20 hover:border-purple-400/50 transition"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.company.bingebit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-base md:text-lg rounded-full shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:from-purple-500 hover:to-pink-400"
          >
            Download Now
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
            >
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

        {/* Hero Image & Floating Cards */}
        <div
          className={`flex-1 relative transition-all duration-1000 flex justify-center ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div
            className="relative transition-transform"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
            }}
          >
            <img
              src={heroImage}
              alt="Snaplay App Interface"
              className="rounded-2xl border border-white/10 shadow-2xl relative z-10 
                w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] max-w-full"
            />
            {/* Reflection */}
            <div className="absolute bottom-[-40px] left-0 w-full h-1/3 bg-gradient-to-b from-black/70 to-transparent scale-y-[-1] rounded-b-2xl"></div>
          </div>

          {/* Floating Stat Cards */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 -left-8 bg-black/60 backdrop-blur-lg border border-white/20 rounded-lg px-3 py-2 flex items-center gap-2 animate-bounce">
              <span className="text-sm">🎬</span>
              <div>
                <div className="text-white font-semibold text-xs sm:text-sm">
                  10+ New Shows
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs">
                  Every Week
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -right-8 bg-black/60 backdrop-blur-lg border border-white/20 rounded-lg px-3 py-2 flex items-center gap-2 animate-bounce delay-200">
              <span className="text-sm">✨</span>
              <div>
                <div className="text-white font-semibold text-xs sm:text-sm">
                  Your Fav Creators
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs">
                  Bringing the Stories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 flex flex-col items-center opacity-70">
        <div className="w-1 h-8 md:h-10 bg-gradient-to-b from-purple-500 to-transparent animate-pulse"></div>
        <span className="text-gray-400 text-xs mt-2">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;