import React, { useState, useEffect } from "react";
import heroImage from "../../assets/images/img.jpeg";

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] overflow-hidden px-4 md:px-12 pt-20 md:pt-0">
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

        {/* Hero Image with iPhone Frame & Floating Cards */}
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
            {/* iPhone Frame Container */}
            <div className="relative">
              {/* iPhone Frame - Realistic Deep Blue/Black */}
              <div className="relative bg-gradient-to-b from-[#1a1d29] via-[#0f1419] to-[#000000] p-2.5 rounded-[2.75rem] shadow-[0_0_60px_rgba(0,0,0,0.8),0_25px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.03)] border border-[#2a2f3a]/50">
                
                {/* Metallic Frame Edge */}
                <div className="absolute inset-[1px] rounded-[2.65rem] bg-gradient-to-b from-[#2a2f3a]/25 to-transparent pointer-events-none"></div>
                <div className="absolute inset-[2px] rounded-[2.6rem] bg-gradient-to-r from-transparent via-[#1a1d29]/50 to-transparent pointer-events-none"></div>
                
                {/* Screen Container */}
                <div className="relative bg-black rounded-[2.4rem] overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="w-[120px] h-[32px] bg-black rounded-full shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] border border-[#1a1d29]/80">
                      {/* Camera lens */}
                      <div className="absolute left-[20px] top-1/2 transform -translate-y-1/2 w-[12px] h-[12px] bg-[#0a0c10] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)]">
                        <div className="absolute inset-[2px] bg-gradient-radial from-[#1a1d29] to-[#000] rounded-full"></div>
                      </div>
                      {/* Speaker */}
                      <div className="absolute right-[25px] top-1/2 transform -translate-y-1/2 w-[8px] h-[3px] bg-[#0a0c10] rounded-full opacity-80"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="relative rounded-[2.3rem] overflow-hidden p-1">
                    <img
                      src={heroImage}
                      alt="Snaplay App Interface"
                      className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] h-auto object-cover rounded-[2.2rem]"
                    />
                    
                    {/* Screen subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-[#1a1d29]/5 pointer-events-none rounded-[2.2rem]"></div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[134px] h-[4px] bg-white/40 rounded-full z-30"></div>
                </div>
                
                {/* Volume Buttons */}
                <div className="absolute left-[-2px] top-[70px] w-[3px] h-[30px] bg-gradient-to-r from-[#0f1419] to-[#1a1d29] rounded-l-full shadow-[inset_1px_0_2px_rgba(0,0,0,0.4)]"></div>
                <div className="absolute left-[-2px] top-[110px] w-[3px] h-[30px] bg-gradient-to-r from-[#0f1419] to-[#1a1d29] rounded-l-full shadow-[inset_1px_0_2px_rgba(0,0,0,0.4)]"></div>
                <div className="absolute left-[-2px] top-[150px] w-[3px] h-[50px] bg-gradient-to-r from-[#0f1419] to-[#1a1d29] rounded-l-full shadow-[inset_1px_0_2px_rgba(0,0,0,0.4)]"></div>
                
                {/* Power Button */}
                <div className="absolute right-[-2px] top-[95px] w-[3px] h-[70px] bg-gradient-to-l from-[#0f1419] to-[#1a1d29] rounded-r-full shadow-[inset_-1px_0_2px_rgba(0,0,0,0.4)]"></div>
                
                {/* Lightning Port */}
                <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[25px] h-[3px] bg-[#000] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"></div>
                
                {/* Speaker Holes */}
                <div className="absolute bottom-[10px] left-[25px] flex gap-[3px]">
                  {[...Array(5)].map((_, i) => (
                    <div key={`left-${i}`} className="w-[2px] h-[8px] bg-[#000] rounded-full"></div>
                  ))}
                </div>
                <div className="absolute bottom-[10px] right-[25px] flex gap-[3px]">
                  {[...Array(5)].map((_, i) => (
                    <div key={`right-${i}`} className="w-[2px] h-[8px] bg-[#000] rounded-full"></div>
                  ))}
                </div>
              </div>
              
              {/* Realistic Environmental Lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/4 via-transparent to-white/6 rounded-[2.75rem] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/20 rounded-[2.75rem] pointer-events-none"></div>
              
              {/* Ambient Reflection */}
              <div className="absolute top-[15%] left-[20%] w-[60%] h-[30%] bg-gradient-to-br from-blue-500/6 via-transparent to-purple-500/4 rounded-[2rem] blur-xl pointer-events-none"></div>
              
              {/* Phone Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/12 via-purple-500/8 to-transparent rounded-[2.75rem] blur-2xl scale-110 opacity-60"></div>
            </div>

            {/* Reflection Effect */}
            <div className="absolute bottom-[-70px] left-0 w-full h-[40%] bg-gradient-to-b from-[#0f1419]/25 via-[#000]/15 to-transparent scale-y-[-1] rounded-b-[2.75rem] blur-md opacity-40"></div>
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