import React from "react";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 italic">Last Updated: March 2024</p>
        </div>

        {/* Company Info Box */}
        <div className="bg-orange-500/20 rounded-2xl p-6 mb-8 border border-orange-400/30">
          <p className="text-gray-300 mb-4">
            This Privacy Policy outlines how Mocha Mingle, owned and operated by <strong className="text-white">Cafe Ventures</strong>, a sole proprietorship having its registered address at Coffee District, Delhi, India, 110001 (hereinafter referred to as "Mocha Mingle", "we", "us", "our"), collects, uses, discloses, and protects the personal data of its users (hereinafter referred to as "User", "you", "your") when using our cafe ordering platform.
          </p>
          <p className="text-gray-300">
            Mocha Mingle values your trust and is committed to protecting your privacy through transparent practices, in compliance with applicable laws including the Digital Personal Data Protection Act, 2023.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section 
            title="1. Scope of this Privacy Policy"
            content={
              <div>
                <p>This Privacy Policy applies to all Users accessing the Mocha Mingle platform ("Platform") at www.mochamingle.com and using any of the ordering services offered thereon ("Services"). By using our Platform or Services, you agree to the terms of this Privacy Policy and our Terms and Conditions.</p>
                <p>We may update this Privacy Policy periodically. Any changes will be communicated via the Platform or email.</p>
              </div>
            }
          />

          <Section 
            title="2. Information We Collect"
            content={
              <div>
                <p className="mb-4">Mocha Mingle may collect two types of data:</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-orange-400 mb-3">A. Personal Data:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Full name</li>
                    <li>Contact number</li>
                    <li>Email address</li>
                    <li>Delivery address</li>
                    <li>IP address and geolocation</li>
                    <li>Payment details for order processing</li>
                    <li>Order history and preferences</li>
                    <li>Dietary restrictions and allergies</li>
                    <li>Any other personally identifiable information necessary for order fulfillment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-400 mb-3">B. Non-Personal Data:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Browser and device information</li>
                    <li>Platform usage patterns</li>
                    <li>Mobile network/carrier</li>
                    <li>URLs visited before and after Platform use</li>
                    <li>Device identifiers</li>
                    <li>Cookies and tracking data</li>
                  </ul>
                </div>
              </div>
            }
          />

          <Section 
            title="3. How We Collect Information"
            content={
              <div>
                <p className="mb-3">Mocha Mingle may collect information:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>When you register as a User on the Platform</li>
                  <li>When you place an order</li>
                  <li>When you create a profile or save preferences</li>
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
                  <li>Process and fulfill your coffee and food orders</li>
                  <li>Facilitate payment processing and order tracking</li>
                  <li>Provide customer support and order updates</li>
                  <li>Improve Platform performance and user experience</li>
                  <li>Customize menu recommendations based on preferences</li>
                  <li>Send notifications about order status, promotions, and new menu items</li>
                  <li>Comply with legal obligations and food safety regulations</li>
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
                  <li>Payment processors to facilitate order transactions</li>
                  <li>Delivery partners for order fulfillment</li>
                  <li>Third-party service providers for hosting, analytics, and security</li>
                  <li>Kitchen staff and baristas for order preparation</li>
                  <li>Government authorities when required by law or food safety regulations</li>
                  <li>Business partners for loyalty programs and promotions</li>
                </ul>
                <p className="mt-3 font-medium text-gray-200">We do not sell your personal data to third parties.</p>
              </div>
            }
          />

          <Section 
            title="6. Order Processing and Food Safety"
            content={
              <div>
                <p className="mb-3">Mocha Mingle processes data related to your orders, dietary preferences, and allergies in order to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Prepare your orders according to specifications</li>
                  <li>Ensure food safety and allergy management</li>
                  <li>Track order status and delivery times</li>
                  <li>Maintain quality standards</li>
                </ul>
                <p className="mt-3">All dietary and allergy information is collected solely to ensure safe food preparation.</p>
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
                  <li>Update your dietary preferences and delivery information</li>
                </ul>
                <p className="mt-3">Please contact: <span className="font-medium text-orange-400">contact@mochamingle.com</span> for any of the above requests.</p>
              </div>
            }
          />

          <Section 
            title="9. Security Measures"
            content={
              <p>We use commercially reasonable safeguards including encryption, firewalls, and secure servers to protect your data. Payment information is processed through secure, PCI-compliant systems. However, no system is completely secure. Your use of the Platform is at your own risk.</p>
            }
          />

          <Section 
            title="10. Cookies and Tracking Technologies"
            content={
              <div>
                <p className="mb-3">Mocha Mingle uses cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Keep you logged in</li>
                  <li>Save your order preferences and cart items</li>
                  <li>Track usage and engagement for analytics and personalized recommendations</li>
                  <li>Remember your favorite drinks and food items</li>
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
              <p>Mocha Mingle is intended for users aged 13+. If under 18 or a person with disability, usage is only permitted with verifiable consent of a parent/guardian who agrees to be bound by this policy.</p>
            }
          />

          <Section 
            title="13. Grievance Redressal and Contact Information"
            content={
              <div>
                <p className="mb-3">For any questions, complaints, or requests regarding your personal data, contact our Data Protection Officer:</p>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <p><strong className="text-white">Email:</strong> <span className="text-orange-400">contact@mochamingle.com</span></p>
                  <p><strong className="text-white">Attn:</strong> Data Protection Officer</p>
                  <p><strong className="text-white">Address:</strong> Coffee District, Delhi, India, 110001</p>
                </div>
              </div>
            }
          />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="space-x-4 mb-6">
            <a href="/support" className="text-orange-400 hover:text-orange-300 transition-colors">Support</a>
            <a href="/terms" className="text-orange-400 hover:text-orange-300 transition-colors">Terms of Service</a>
          </div>
          <p className="text-gray-400 italic">
            By using Mocha Mingle, you acknowledge that you have read and understood this Privacy Policy, and agree to its terms.
          </p>
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

export default PrivacyPolicy;