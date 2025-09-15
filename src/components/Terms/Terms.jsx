import React from "react";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-gray-400 italic">Last Updated: March 2024</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section 
            title="1. Acceptance of Terms"
            content={
              <p>By accessing or using Mocha Mingle ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access the Platform.</p>
            }
          />

          <Section 
            title="2. Description of Service"
            content={
              <p>Mocha Mingle is a cafe ordering platform that allows users to browse our menu, place orders for coffee and food items, and arrange for pickup or delivery. The Platform is owned and operated by <strong className="text-white">Cafe Ventures</strong>, a sole proprietorship registered in India.</p>
            }
          />

          <Section 
            title="3. User Accounts"
            content={
              <div>
                <p className="mb-3">To place orders on the Platform, you must:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Download the Mocha Mingle app or use our website</li>
                  <li>Register for an account</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Be at least 13 years old or have parental consent</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="4. Ordering and Payment"
            content={
              <div>
                <p className="mb-3">When placing orders, you agree to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Provide accurate delivery or pickup information</li>
                  <li>Pay the total amount including taxes and delivery fees</li>
                  <li>Collect your order within the specified time frame</li>
                  <li>Be available at the delivery address during estimated delivery time</li>
                  <li>Inform us of any allergies or dietary restrictions</li>
                  <li>Accept that menu items and prices may change without notice</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="5. Order Modifications and Cancellations"
            content={
              <div>
                <p className="mb-3">Order changes are subject to the following conditions:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Modifications can be made within 2 minutes of placing the order</li>
                  <li>Cancellations after preparation has begun may incur charges</li>
                  <li>Refunds will be processed to the original payment method within 3-5 business days</li>
                  <li>Custom orders may not be eligible for cancellation once preparation starts</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="6. Food Safety and Quality"
            content={
              <div>
                <p className="mb-3">Mocha Mingle is committed to food safety and quality:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>All food items are prepared fresh according to food safety standards</li>
                  <li>We cannot guarantee complete allergen-free preparation due to shared equipment</li>
                  <li>Customers with severe allergies should exercise caution</li>
                  <li>Report any food safety concerns immediately</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="7. Delivery and Pickup"
            content={
              <div>
                <p className="mb-3">For delivery and pickup orders:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Delivery times are estimates and may vary due to weather or traffic</li>
                  <li>Additional delivery charges may apply for locations outside our standard area</li>
                  <li>Pickup orders must be collected within 15 minutes of notification</li>
                  <li>We are not responsible for orders left unattended after delivery</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="8. Loyalty Program"
            content={
              <p>Our loyalty program allows you to earn points ("Coffee Beans") on purchases. Points have no cash value and cannot be transferred. Program terms may change with notice.</p>
            }
          />

          <Section 
            title="9. Intellectual Property"
            content={
              <p>All content on the Platform, including menu items, recipes, logos, and app design, is the property of Mocha Mingle and protected by intellectual property laws.</p>
            }
          />

          <Section 
            title="10. Limitation of Liability"
            content={
              <p>Mocha Mingle's liability is limited to the cost of your order. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Platform or consumption of our products.</p>
            }
          />

          <Section 
            title="11. Termination"
            content={
              <p>Mocha Mingle may terminate or suspend your account for violations of these Terms, fraudulent activity, or for any other reason at our discretion.</p>
            }
          />

          <Section 
            title="12. Changes to Terms"
            content={
              <p>We reserve the right to modify these Terms at any time. Continued use of the Platform after changes constitutes acceptance of the modified Terms.</p>
            }
          />

          <Section 
            title="13. Governing Law"
            content={
              <p>These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of <strong className="text-white">Delhi, India</strong>.</p>
            }
          />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4">
            <a href="/privacy" className="text-orange-400 hover:text-orange-300 transition-colors">Privacy Policy</a>
            <a href="/support" className="text-orange-400 hover:text-orange-300 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, content }) => {
  return (
    <div className="border-l-4 border-orange-400/50 pl-6">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-gray-300 space-y-3">
        {content}
      </div>
    </div>
  );
};

export default TermsOfService;