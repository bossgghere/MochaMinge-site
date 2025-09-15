import React from "react";

const Legal = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12 px-4 pt-24">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-orange-500/25 rounded-full blur-[120px] opacity-50 top-10 -left-40 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-amber-400/20 rounded-full blur-[120px] opacity-50 bottom-10 -right-32 animate-pulse"></div>
      </div>

      <div className="relative max-w-5xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 z-10">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center font-extrabold text-3xl mb-8">
            <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent uppercase tracking-tight">
              MOCHA MINGLE
            </span>
            <span className="text-orange-500 ml-1 text-4xl">.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-4">
            Legal Information
          </h1>
          <p className="text-gray-400 italic">Your rights and our responsibilities</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <LegalCard 
            title="Privacy Policy"
            description="Learn about how we collect, use, and protect your personal information when you order from Mocha Mingle."
            href="/privacy"
            icon="🔒"
          />
          <LegalCard 
            title="Terms of Service"
            description="Understand the rules and regulations that govern your use of the Mocha Mingle ordering platform."
            href="/terms"
            icon="📋"
          />
          <LegalCard 
            title="Delete Account"
            description="Request to delete your account and associated data from Mocha Mingle permanently."
            href="/delete-account"
            icon="🗑️"
          />
          <LegalCard 
            title="Support"
            description="Get help with your orders, account issues, or any other questions about our cafe services."
            href="/support"
            icon="☕"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center pt-8 border-t border-white/20">
          <h2 className="text-xl font-bold text-white mb-4">Need Assistance?</h2>
          <p className="text-gray-400 mb-2">Contact our support team at:</p>
          <a 
            href="mailto:contact@mochamingle.com" 
            className="text-orange-400 font-semibold hover:text-orange-300 transition-colors text-lg"
          >
            contact@mochamingle.com
          </a>
          <p className="text-gray-500 text-sm mt-2">Available 6:00 AM - 10:00 PM IST</p>
        </div>

        {/* Business Info */}
        <div className="mt-8 bg-orange-500/10 rounded-2xl p-6 border border-orange-400/20">
          <h3 className="text-white font-bold mb-3 text-center">Business Information</h3>
          <div className="text-center text-gray-300">
            <p><strong className="text-orange-200">Mocha Mingle</strong></p>
            <p>Operated by Cafe Ventures</p>
            <p>Coffee District, Delhi, India, 110001</p>
            <p className="mt-2 text-sm text-gray-400">Registered Cafe & Food Service Provider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LegalCard = ({ title, description, href, icon }) => {
  return (
    <a 
      href={href}
      className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 hover:bg-orange-600/20 hover:border-orange-400/50"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </a>
  );
};

export default Legal;