import React from "react";

const TermsConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using ReferMe, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on ReferMe for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
    },
    {
      title: "User Responsibilities",
      content: "Users are responsible for the content they upload and must ensure it is accurate, appropriate, and does not violate any copyright or intellectual property rights. Users must not upload malicious content or attempt to harm the platform."
    },
    {
      title: "Content Guidelines",
      content: "All uploaded content must be educational in nature, relevant to engineering studies, and comply with academic standards. Inappropriate, offensive, or copyrighted content will be removed."
    },
    {
      title: "Privacy and Data",
      content: "We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data."
    },
    {
      title: "Intellectual Property",
      content: "The content on ReferMe is provided for educational purposes. Users retain rights to their original content, but grant ReferMe a license to host and distribute their materials for educational use."
    },
    {
      title: "Limitation of Liability",
      content: "ReferMe shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
    }
  ];

  const restrictions = [
    "Uploading copyrighted material without permission",
    "Sharing inappropriate or offensive content",
    "Attempting to hack or disrupt the platform",
    "Using the platform for commercial purposes",
    "Violating any applicable laws or regulations",
    "Impersonating others or providing false information"
  ];

  const permissions = [
    "Download study materials for personal use",
    "Upload original educational content",
    "Share materials with fellow students",
    "Provide feedback and suggestions",
    "Use the platform for academic purposes",
    "Access content across multiple devices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using ReferMe. By using our platform, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">⚠️ Important Notice</h2>
            <p className="text-lg opacity-90">
              These terms and conditions govern your use of ReferMe. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Terms of Service
          </h2>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Permissions and Restrictions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            What You Can and Cannot Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">
                ✅ Permitted Activities
              </h3>
              <ul className="space-y-3">
                {permissions.map((permission, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2 mr-3"></div>
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">
                ❌ Prohibited Activities
              </h3>
              <ul className="space-y-3">
                {restrictions.map((restriction, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2 mr-3"></div>
                    {restriction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Legal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Governing Law
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Dispute Resolution
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Any disputes arising from these terms will be resolved through arbitration in accordance with Indian law, unless otherwise specified.
              </p>
            </div>
          </div>
        </div>

        {/* Updates and Changes */}
        <div className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Changes to Terms
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Your continued use of ReferMe after any changes constitutes acceptance of the new terms.
            </p>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default TermsConditions; 