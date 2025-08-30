import React from "react";
import logo from "../../assets/images/logo.png";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-gray-400 italic">Last Updated: March 2024</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section 
            title="1. Acceptance of Terms"
            content={
              <p>By accessing or using Snaplay.tv ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access the Platform.</p>
            }
          />

          <Section 
            title="2. Description of Service"
            content={
              <p>Snaplay is an Over-The-Top (OTT) content platform that allows users to watch and creators to monetize their content exclusively through our mobile application. The Platform is owned and operated by <strong className="text-white">Voix Digital</strong>, a sole proprietorship registered in India.</p>
            }
          />

          <Section 
            title="3. User Accounts"
            content={
              <div>
                <p className="mb-3">To access content on the Platform, you must:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Download the Snaplay app from the App Store</li>
                  <li>Register for an account within the app</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Be at least 18 years old or have parental consent</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="4. Content Guidelines"
            content={
              <div>
                <p className="mb-3">Users can only access content through the Snaplay mobile application. You agree not to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Attempt to access content outside of the official app</li>
                  <li>Share your account credentials with others</li>
                  <li>Use any unauthorized third-party applications to access content</li>
                  <li>Record, download, or redistribute content from the platform</li>
                  <li>Violate any laws or regulations while using the app</li>
                  <li>Infringe on intellectual property rights</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="5. Monetization and Payments"
            content={
              <div>
                <p className="mb-3">Eligible creators may monetize their content through the Platform. Revenue sharing terms are outlined in the Creator Agreement. Snaplay reserves the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Set and modify revenue share percentages</li>
                  <li>Withhold payments for violations of these Terms</li>
                  <li>Require tax information for payment processing</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="6. Intellectual Property"
            content={
              <p>Users retain ownership of their content but grant Snaplay a worldwide, non-exclusive license to use, distribute, and display the content on the Platform.</p>
            }
          />

          <Section 
            title="7. Termination"
            content={
              <p>Snaplay may terminate or suspend your account and access to the Platform for violations of these Terms or for any other reason at our discretion.</p>
            }
          />

          <Section 
            title="8. Limitation of Liability"
            content={
              <p>Snaplay is not liable for any indirect, incidental, or consequential damages arising from your use of the Platform.</p>
            }
          />

          <Section 
            title="9. Changes to Terms"
            content={
              <p>We reserve the right to modify these Terms at any time. Continued use of the Platform after changes constitutes acceptance of the modified Terms.</p>
            }
          />

          <Section 
            title="10. Governing Law"
            content={
              <p>These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of <strong className="text-white">Agra, Uttar Pradesh</strong>.</p>
            }
          />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4">
            <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="/support" className="text-purple-400 hover:text-purple-300 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, content }) => {
  return (
    <div className="border-l-4 border-purple-400/50 pl-6">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-gray-300 space-y-3">
        {content}
      </div>
    </div>
  );
};

export default TermsOfService;