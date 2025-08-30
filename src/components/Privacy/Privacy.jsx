import React from "react";
import logo from "../../assets/images/logo.png";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 italic">Last Updated: March 2024</p>
        </div>

        {/* Company Info Box */}
        <div className="bg-purple-500/20 rounded-2xl p-6 mb-8 border border-purple-400/30">
          <p className="text-gray-300 mb-4">
            This Privacy Policy outlines how Snaplay.tv, owned and operated by <strong className="text-white">Voix Digital</strong>, a sole proprietorship having its registered address at Kamla Nagar, Agra, Uttar Pradesh, India, 282005 (hereinafter referred to as "Snaplay", "we", "us", "our"), collects, uses, discloses, and protects the personal data of its users (hereinafter referred to as "User"/"Creator", "you", "your") when using our platform.
          </p>
          <p className="text-gray-300">
            Snaplay values your trust and is committed to protecting your privacy through transparent practices, in compliance with applicable laws including the Digital Personal Data Protection Act, 2023.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section 
            title="1. Scope of this Privacy Policy"
            content={
              <div>
                <p>This Privacy Policy applies to all UserCreators accessing the Snaplay platform ("Platform") at www.snaplay.tv and using any of the services offered thereon ("Services"). By using our Platform or Services, you agree to the terms of this Privacy Policy and our Terms and Conditions.</p>
                <p>We may update this Privacy Policy periodically. Any changes will be communicated via the Platform or email.</p>
              </div>
            }
          />

          <Section 
            title="2. Information We Collect"
            content={
              <div>
                <p className="mb-4">Snaplay may collect two types of data:</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-purple-400 mb-3">A. Personal Data:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Full name</li>
                    <li>Gender</li>
                    <li>Contact number</li>
                    <li>Email address</li>
                    <li>IP address and geolocation</li>
                    <li>Bank account/payment details (if applicable for payouts)</li>
                    <li>Identification documents (if required for KYC or revenue compliance)</li>
                    <li>User preferences, activity, and uploaded content metadata</li>
                    <li>Any other personally identifiable information necessary for the performance of Services</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-3">B. Non-Personal Data:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Browser and device information</li>
                    <li>Platform usage patterns</li>
                    <li>Mobile network/carrier</li>
                    <li>URLs visited before and after Platform use</li>
                    <li>Device identifiers</li>
                    <li>Cookies and tracking data (see Section 13)</li>
                  </ul>
                </div>
              </div>
            }
          />

          <Section 
            title="3. How We Collect Information"
            content={
              <div>
                <p className="mb-3">Snaplay may collect information:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>When you register as a UserCreator on the Platform</li>
                  <li>When you upload content</li>
                  <li>When you apply for monetization or engage in revenue-sharing</li>
                  <li>When you use our Services, contact support, or participate in surveys</li>
                  <li>Through third-party tools such as analytics, cookies, beacons, and login services</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="4. Use of Your Information"
            content={
              <div>
                <p className="mb-3">We use your Personal Data to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Operate and maintain the Snaplay Platform and Services</li>
                  <li>Enable content uploads, discoverability, and monetization</li>
                  <li>Calculate and disburse revenue share payments</li>
                  <li>Improve Platform performance and user experience</li>
                  <li>Customize content and deliver targeted communications</li>
                  <li>Send notifications about account activity, changes to terms, and promotions</li>
                  <li>Comply with legal obligations, detect misuse, and enforce rights</li>
                </ul>
              </div>
            }
          />

          <Section 
            title="5. Sharing of Information"
            content={
              <div>
                <p className="mb-3">We may share your data with:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Payment processors to facilitate earnings transfers</li>
                  <li>Third-party service providers for hosting, analytics, and security</li>
                  <li>Business partners involved in content discovery or monetization programs</li>
                  <li>Social media platforms if you connect your account</li>
                  <li>Government authorities when required by law</li>
                  <li>Affiliates under Voix Digital for operational purposes</li>
                </ul>
                <p className="mt-3 font-medium text-gray-200">We do not sell your personal data to third parties.</p>
              </div>
            }
          />

          <Section 
            title="6. Revenue-Sharing and Monetization"
            content={
              <div>
                <p className="mb-3">Snaplay processes data related to your uploads, views, engagement, and other metrics in order to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Track content performance</li>
                  <li>Calculate your revenue share</li>
                  <li>Issue payments based on our Creator Agreement</li>
                </ul>
                <p className="mt-3">All financial and KYC information is collected solely to enable accurate and secure monetization.</p>
              </div>
            }
          />

          <Section 
            title="7. Data Retention"
            content={
              <p>We retain your information as long as needed to provide Services, comply with legal requirements, or resolve disputes. If you delete your account, we will delete your Personal Data unless retention is required for legal or legitimate business purposes.</p>
            }
          />

          <Section 
            title="8. Your Rights"
            content={
              <div>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Withdraw consent (may result in termination of your account)</li>
                  <li>Request access, correction, or deletion of your data</li>
                  <li>File a grievance with us or the Data Protection Board</li>
                  <li>Nominate a representative to act on your behalf in the event of incapacity</li>
                </ul>
                <p className="mt-3">Please contact: <span className="font-medium text-purple-400">contact@snaplay.tv</span> for any of the above requests.</p>
              </div>
            }
          />

          <Section 
            title="9. Security Measures"
            content={
              <p>We use commercially reasonable safeguards including encryption, firewalls, and secure servers to protect your data. However, no system is completely secure. Your use of the Platform is at your own risk.</p>
            }
          />

          <Section 
            title="10. Cookies and Tracking Technologies"
            content={
              <div>
                <p className="mb-3">Snaplay uses cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Keep you logged in</li>
                  <li>Save preferences</li>
                  <li>Track usage and engagement for analytics and advertising</li>
                </ul>
                <p className="mt-3">You may disable cookies via your browser settings, though this may limit functionality.</p>
              </div>
            }
          />

          <Section 
            title="11. International Data Transfers"
            content={
              <p>Your data may be processed outside India, subject to legal protections. We comply with cross-border transfer norms under Indian law and applicable foreign laws for international users.</p>
            }
          />

          <Section 
            title="12. Children and Persons with Disabilities"
            content={
              <p>Snaplay is intended for users aged 18+. If under 18 or a person with disability, usage is only permitted with verifiable consent of a parent/guardian who agrees to be bound by this policy.</p>
            }
          />

          <Section 
            title="13. Grievance Redressal and Contact Information"
            content={
              <div>
                <p className="mb-3">For any questions, complaints, or requests regarding your personal data, contact our Consent Manager:</p>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <p><strong className="text-white">Email:</strong> <span className="text-purple-400">contact@snaplay.tv</span></p>
                  <p><strong className="text-white">Attn:</strong> Consent Manager / Data Protection Officer</p>
                </div>
              </div>
            }
          />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4 mb-6">
            <a href="/support" className="text-purple-400 hover:text-purple-300 transition-colors">Support</a>
            <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">Terms of Service</a>
          </div>
          <p className="text-gray-400 italic">
            By using Snaplay, you acknowledge that you have read and understood this Privacy Policy, and agree to its terms.
          </p>
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

export default PrivacyPolicy;
