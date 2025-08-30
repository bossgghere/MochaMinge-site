import React from "react";
import logo from "../../assets/images/logo.png";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] py-8 px-4 pt-24">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/25 rounded-full blur-[120px] opacity-50 top-10 -left-40 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-orange-400/20 rounded-full blur-[120px] opacity-50 bottom-10 -right-32 animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border border-white/10 z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="Snaplay Logo" 
            className="h-12 w-auto mx-auto mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2">
            Request Account Deletion
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            If you signed in with Google or Apple, and want your data removed from Snaplay, please email us at{" "}
            <a 
              href="mailto:contact@snaplay.tv" 
              className="font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              contact@snaplay.tv
            </a>{" "}
            with your account email ID.
          </p>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <p className="text-gray-300 mb-4">Once verified, we will delete all associated data such as:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Viewing history</li>
              <li>Favorites</li>
              <li>Preferences</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Data not associated with your account (like guest usage) is anonymous and not stored.
            </p>
          </div>

          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <span className="text-yellow-400 text-xl">⚠️</span>
              <p className="text-yellow-200 font-medium">
                Data is deleted within 7 days of confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4">
            <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">Terms of Service</a>
            <a href="/support" className="text-purple-400 hover:text-purple-300 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;