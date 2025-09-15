import React from "react";

const Support = () => {
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
            Support Center
          </h1>
        </div>

        {/* Contact Info */}
        <div className="bg-orange-500/20 rounded-2xl p-6 mb-8 text-center border border-orange-400/30">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-4">For any support inquiries, please email us at:</p>
          <div className="text-xl font-bold text-orange-400 mb-4">
            <a href="mailto:contact@mochamingle.com" className="hover:text-orange-300 transition-colors">
              contact@mochamingle.com
            </a>
          </div>
          <p className="text-gray-400">Business hours: Monday to Sunday, 6:00 AM - 10:00 PM IST</p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <FAQItem 
            question="How do I place an order on Mocha Mingle?"
            answer="To place an order, download our app from the App Store or Google Play Store, create an account, browse our menu, add items to your cart, and proceed to checkout. You can choose pickup or delivery options."
          />
          
          <FAQItem 
            question="What are your delivery hours?"
            answer="We deliver from 7:00 AM to 9:00 PM every day. Pickup orders can be placed from 6:00 AM to 10:00 PM. Some locations may have different hours."
          />
          
          <FAQItem 
            question="How can I modify or cancel my order?"
            answer="You can modify or cancel your order within 2 minutes of placing it through the app. After that, please contact our support team immediately, and we'll do our best to help."
          />
          
          <FAQItem 
            question="Do you accommodate dietary restrictions and allergies?"
            answer="Yes! We offer various options for dietary restrictions including dairy-free, sugar-free, and gluten-free alternatives. Please specify your allergies when placing your order, and our baristas will take extra care."
          />
          
          <FAQItem 
            question="What payment methods do you accept?"
            answer="We accept all major credit cards, debit cards, UPI payments, digital wallets, and cash on delivery for orders above ₹200."
          />

          <FAQItem 
            question="How does the loyalty program work?"
            answer="Every purchase earns you coffee beans (points). Collect 100 beans to get a free drink of your choice. Premium members get double beans and exclusive discounts."
          />

          <FAQItem 
            question="What if my order is incorrect or unsatisfactory?"
            answer="We're sorry if your order isn't perfect! Contact us immediately through the app or email, and we'll make it right with a replacement or full refund."
          />
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-500/20 rounded-2xl p-6 border border-red-400/30">
          <h3 className="text-lg font-bold text-white mb-2">Urgent Issues</h3>
          <p className="text-gray-300 mb-2">For urgent issues during business hours, call us directly:</p>
          <p className="text-red-400 font-bold text-lg">+91 98765 43210</p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4">
            <a href="/privacy" className="text-orange-400 hover:text-orange-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-orange-400 hover:text-orange-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm">
      <div className="font-bold text-orange-400 mb-3 text-lg">{question}</div>
      <p className="text-gray-300 leading-relaxed">{answer}</p>
    </div>
  );
};

export default Support;