import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/learn-more"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0A2540] mb-8 font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Learn More</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-6">
              <Shield size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Privacy Policy</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 13, 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-xl font-bold text-[#0A2540] mt-0 mb-2">Introduction</h3>
              <p className="text-gray-700 mb-0">
                Welcome to <strong>TheWorkingZone</strong>. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
              </p>
            </div>

            {/* Add full privacy policy content here - I'll add key sections */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">1.1 Information You Provide Directly</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Account Registration Information:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Full name</li>
                  <li>Phone number (primary identifier)</li>
                  <li>Email address (optional)</li>
                  <li>Date of birth or age confirmation</li>
                  <li>User role (Worker, Contractor, Company, Individual)</li>
                  <li>Password (encrypted)</li>
                </ul>

                <p className="text-gray-700 mt-6 mb-4">
                  <strong>Profile Information varies by user type:</strong>
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                  <div>
                    <h4 className="font-bold text-[#0A2540] mb-2">For Workers:</h4>
                    <p className="text-gray-700 text-sm">
                      Skills, experience, expected wage, work availability, profile photo, location, certifications, and work history.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2540] mb-2">For Contractors:</h4>
                    <p className="text-gray-700 text-sm">
                      Business name, contractor type, specialization, service areas, and business registration details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2540] mb-2">For Companies:</h4>
                    <p className="text-gray-700 text-sm">
                      Company name, industry, size, contact details, business address, and GST number.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your information for:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Platform Services:</strong> Create accounts, match workers with jobs, facilitate communication</li>
                  <li><strong>Platform Improvement:</strong> Analyze usage patterns, develop new features</li>
                  <li><strong>Communication:</strong> Send job alerts, updates, and support responses</li>
                  <li><strong>Safety & Security:</strong> Verify identity, detect fraud, enforce terms</li>
                  <li><strong>Legal Compliance:</strong> Comply with legal obligations and protect rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">3. How We Share Your Information</h2>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-2xl">
                  <p className="text-gray-700 mb-0">
                    <strong>We do not sell your personal data.</strong> We share information only as necessary for platform functionality, with service providers under confidentiality agreements, or as required by law.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">4. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access and update your information</li>
                  <li>Delete your account</li>
                  <li>Control privacy settings and location sharing</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures including encryption, secure authentication, regular security audits, and access controls. However, no system is completely secure, and you use the platform at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">6. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For questions about this Privacy Policy or your personal data:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@theworkingzone.com</p>
                  <p className="text-gray-700 mb-2"><strong>Support:</strong> support@theworkingzone.com</p>
                  <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@theworkingzone.com</p>
                </div>
              </section>

              <div className="bg-blue-50 p-6 rounded-2xl mt-12">
                <p className="text-sm text-gray-600 mb-0">
                  <strong>Note:</strong> This is a summary of our Privacy Policy. For complete details, please refer to the full document or contact us directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
