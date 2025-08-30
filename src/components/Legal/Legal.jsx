import React from "react";
import logo from "../../assets/images/logo.png";

const Legal = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] py-12 px-4 pt-24">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/25 rounded-full blur-[120px] opacity-50 top-10 -left-40 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-orange-400/20 rounded-full blur-[120px] opacity-50 bottom-10 -right-32 animate-pulse"></div>
      </div>

      <div className="relative max-w-5xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 z-10">
        {/* Logo */}
        <div className="text-center mb-12">
          <img 
            src={logo} 
            alt="Snaplay Logo" 
            className="h-16 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-4">
            Legal Information
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <LegalCard 
            title="Privacy Policy"
            description="Learn about how we collect, use, and protect your personal information when you use Snaplay."
            href="/privacy"
          />
          <LegalCard 
            title="Terms of Service"
            description="Understand the rules and regulations that govern your use of the Snaplay platform."
            href="/terms"
          />
          <LegalCard 
            title="Delete Account"
            description="Request to delete your account and associated data from Snaplay."
            href="/delete-account"
          />
          <LegalCard 
            title="Support"
            description="Get help with your account, technical issues, or any other questions you may have."
            href="/support"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-gray-400 mb-2">Need assistance? Contact us at:</p>
          <a 
            href="mailto:contact@snaplay.tv" 
            className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
          >
            contact@snaplay.tv
          </a>
        </div>
      </div>
    </div>
  );
};

const LegalCard = ({ title, description, href }) => {
  return (
    <a 
      href={href}
      className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 hover:bg-purple-600/20 hover:border-purple-400/50"
    >
      <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </a>
  );
};

export default Legal;