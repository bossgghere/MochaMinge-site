import React from "react";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8 px-4 pt-24">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-orange-500/25 rounded-full blur-[120px] opacity-50 top-10 -left-40 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-amber-400/20 rounded-full blur-[120px] opacity-50 bottom-10 -right-32 animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border border-white/10 z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center font-extrabold text-2xl mb-6">
            <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent uppercase tracking-tight">
              MOCHA MINGLE
            </span>
            <span className="text-orange-500 ml-1 text-3xl">.</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2">
            Request Account Deletion
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            If you signed in with Google or Apple, and want your data removed from Mocha Mingle, please email us at{" "}
            <a 
              href="mailto:contact@mochamingle.com" 
              className="font-bold text-orange-400 hover:text-orange-300 transition-colors"
            >
              contact@mochamingle.com
            </a>{" "}
            with your account email ID.
          </p>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <p className="text-gray-300 mb-4">Once verified, we will delete all associated data such as:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Order history</li>
              <li>Saved favorites and preferences</li>
              <li>Loyalty program points</li>
              <li>Delivery addresses</li>
              <li>Payment information</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Data not associated with your account (like anonymous usage analytics) is not linked to your identity.
            </p>
          </div>

          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <span className="text-yellow-400 text-xl">⚠️</span>
              <div>
                <p className="text-yellow-200 font-medium mb-2">
                  Important Information:
                </p>
                <ul className="text-yellow-100 text-sm space-y-1">
                  <li>• Account deletion is permanent and cannot be undone</li>
                  <li>• You will lose all loyalty points and rewards</li>
                  <li>• Data is deleted within 7 days of confirmation</li>
                  <li>• Pending orders may need to be completed first</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 border border-orange-400/30 rounded-xl p-6">
            <h3 className="text-orange-200 font-bold mb-3">Alternative Options</h3>
            <p className="text-gray-300 mb-3">
              Instead of deleting your account, you can:
            </p>
            <ul className="text-gray-300 space-y-1">
              <li>• Clear your order history in app settings</li>
              <li>• Update your privacy preferences</li>
              <li>• Temporarily deactivate notifications</li>
              <li>• Contact support for specific data concerns</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4">
            <a href="/privacy" className="text-orange-400 hover:text-orange-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-orange-400 hover:text-orange-300 transition-colors">Terms of Service</a>
            <a href="/support" className="text-orange-400 hover:text-orange-300 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;