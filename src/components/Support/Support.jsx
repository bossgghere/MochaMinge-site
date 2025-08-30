import React from "react";
import logo from "../../assets/images/logo.png";

const Support = () => {
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
            Support Center
          </h1>
        </div>

        {/* Contact Info */}
        <div className="bg-purple-500/20 rounded-2xl p-6 mb-8 text-center border border-purple-400/30">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-4">For any support inquiries, please email us at:</p>
          <div className="text-xl font-bold text-purple-400 mb-4">
            <a href="mailto:contact@snaplay.tv" className="hover:text-purple-300 transition-colors">
              contact@snaplay.tv
            </a>
          </div>
          <p className="text-gray-400">Business hours: Monday to Friday, 9:00 AM - 6:00 PM IST</p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <FAQItem 
            question="How do I access Snaplay?"
            answer="To access Snaplay, download our app from the App Store or Google Play Store and create an account. Content is only available through our official mobile application."
          />
          
          <FAQItem 
            question="Can I watch content on a web browser?"
            answer="No, Snaplay is exclusively available through our mobile application. Content cannot be accessed through web browsers or any other platforms."
          />
          
          <FAQItem 
            question="How do I report technical issues?"
            answer="If you experience any technical issues while using the app, please email us at contact@snaplay.tv with details about your device and the problem you're experiencing."
          />
          
          <FAQItem 
            question="Can I download content for offline viewing?"
            answer="No, Snaplay does not support offline viewing. All content must be streamed through the app with an active internet connection."
          />
          
          <FAQItem 
            question="What devices are supported?"
            answer="Snaplay is available for both iOS and Android devices. Download the app from the App Store or Google Play Store. Make sure your device meets the minimum system requirements for optimal streaming experience."
          />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4">
            <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm">
      <div className="font-bold text-purple-400 mb-3 text-lg">{question}</div>
      <p className="text-gray-300 leading-relaxed">{answer}</p>
    </div>
  );
};

export default Support;