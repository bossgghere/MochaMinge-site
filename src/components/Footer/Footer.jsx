import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-purple-700/30 px-6 md:px-12 py-12 font-inter">
      {/* Gradient top border effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Brand Section */}
        <div className="text-center">
          <div className="flex items-center justify-center font-extrabold text-2xl mb-2">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent uppercase tracking-tight">
              Snaplay
            </span>
            <span className="text-purple-500 ml-1 text-3xl">.</span>
          </div>
          <p className="text-gray-400 text-sm italic">
            Your feed is the movie
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium">
          <a
            href="#privacy"
            className="relative text-gray-400 hover:text-white transition"
          >
            Privacy Policy
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#terms"
            className="relative text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </a>
          <a
            href="#support"
            className="relative text-gray-400 hover:text-white transition"
          >
            Support
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.company.bingebit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-semibold hover:bg-amber-500 hover:text-black hover:-translate-y-1 transition"
          >
            Download App
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 pt-6 border-t border-white/5">
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {currentYear} Snaplay. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xs font-medium">Follow us</span>
            <div className="flex gap-3">
              {/* Twitter */}
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10 hover:-translate-y-1 transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10 hover:-translate-y-1 transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
