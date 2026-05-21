import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-100 mb-6">
              <FileText size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Terms & Conditions</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-4">
              Terms and Conditions
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
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-xl font-bold text-[#0A2540] mt-0 mb-2">Introduction and Acceptance</h3>
              <p className="text-gray-700 mb-0">
                Welcome to <strong>TheWorkingZone</strong>. These Terms and Conditions govern your access to and use of our mobile application, website, and related services. By accessing or using TheWorkingZone, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">1. Eligibility and Account Registration</h2>
                
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Age Requirement</h3>
                <p className="text-gray-700 mb-4">
                  You must be at least <strong>18 years of age</strong> to use this Platform.
                </p>

                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Account Types</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-[#0A2540] mb-2">Worker</h4>
                    <p className="text-sm text-gray-700">Skilled individuals seeking employment</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-[#0A2540] mb-2">Contractor</h4>
                    <p className="text-sm text-gray-700">Users managing worker pools</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-[#0A2540] mb-2">Company/Client</h4>
                    <p className="text-sm text-gray-700">Businesses posting workforce requirements</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-[#0A2540] mb-2">Individual</h4>
                    <p className="text-sm text-gray-700">Persons hiring for short-term tasks</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">2. User Responsibilities</h2>
                
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Worker Responsibilities</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide accurate information about skills and experience</li>
                  <li>Maintain professional conduct</li>
                  <li>Complete accepted jobs to the best of ability</li>
                  <li>Comply with all applicable labor laws</li>
                </ul>

                <h3 className="text-xl font-bold text-[#0A2540] mb-3 mt-6">Hirer Responsibilities</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Post accurate job descriptions</li>
                  <li>Provide safe working conditions</li>
                  <li>Pay agreed-upon wages timely</li>
                  <li>Treat workers with respect and dignity</li>
                  <li>Not discriminate based on protected characteristics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">3. Platform Services</h2>
                <p className="text-gray-700 mb-4">TheWorkingZone provides:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Job Posting:</strong> Hirers can post legitimate employment opportunities</li>
                  <li><strong>Job Applications:</strong> Workers can apply to matching jobs</li>
                  <li><strong>Communication:</strong> In-app messaging for job-related discussions</li>
                  <li><strong>Ratings & Reviews:</strong> Users can rate each other after engagements</li>
                  <li><strong>Location Services:</strong> Match workers with nearby jobs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">4. Prohibited Activities</h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl">
                  <p className="text-gray-700 mb-3"><strong>Users must not:</strong></p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-0">
                    <li>Use the Platform for illegal purposes</li>
                    <li>Post offensive, abusive, or harassing content</li>
                    <li>Manipulate ratings or reviews</li>
                    <li>Discriminate against users</li>
                    <li>Circumvent platform features or fees</li>
                    <li>Create fake accounts or impersonate others</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">5. Employment Relationship</h2>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <p className="text-gray-700 mb-0">
                    <strong>Important:</strong> TheWorkingZone is a platform connecting users. We are not an employer, employment agency, or labor contractor. Workers are independent contractors, not employees of TheWorkingZone. The employment relationship exists between Workers and Hirers.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">6. Disclaimers and Limitations</h2>
                <p className="text-gray-700 mb-4">
                  The Platform is provided "AS IS" without warranties. We do not guarantee:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Quality, safety, or legality of jobs or workers</li>
                  <li>Accuracy of user-provided information</li>
                  <li>That users will fulfill their obligations</li>
                  <li>Specific results from using the Platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">7. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms are governed by the <strong>laws of India</strong>. Disputes shall be subject to the exclusive jurisdiction of courts in India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">8. Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@theworkingzone.com</p>
                  <p className="text-gray-700 mb-2"><strong>Support:</strong> support@theworkingzone.com</p>
                  <p className="text-gray-700"><strong>Grievance Officer:</strong> grievance@theworkingzone.com</p>
                </div>
              </section>

              <div className="bg-orange-50 p-6 rounded-2xl mt-12">
                <p className="text-sm text-gray-600 mb-0">
                  <strong>Note:</strong> This is a summary of our Terms and Conditions. For complete details including all legal provisions, please refer to the full document or contact us directly.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-2xl mt-8">
                <p className="text-gray-700 mb-0">
                  <strong>By using TheWorkingZone, you acknowledge that you have read and understood these Terms and agree to be bound by them.</strong>
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

export default TermsConditions;
