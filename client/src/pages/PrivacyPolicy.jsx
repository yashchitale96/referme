import React from "react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, upload content, or contact us. This may include your email address, uploaded files, and any other information you choose to provide."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process your uploads, communicate with you, and ensure the security of our platform."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments."
    },
    {
      title: "Cookies and Tracking",
      content: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser preferences."
    },
    {
      title: "Third-Party Services",
      content: "We may use third-party services such as Firebase for storage and analytics. These services have their own privacy policies, and we encourage you to review them."
    },
    {
      title: "Data Retention",
      content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can also opt out of certain communications and request data portability."
    }
  ];

  const dataTypes = [
    {
      category: "Personal Information",
      examples: ["Email address", "Account preferences", "Upload history"],
      purpose: "Account management and communication"
    },
    {
      category: "Usage Data",
      examples: ["Search queries", "Download history", "Platform interactions"],
      purpose: "Service improvement and analytics"
    },
    {
      category: "Content Data",
      examples: ["Uploaded files", "File metadata", "Content descriptions"],
      purpose: "Platform functionality and content delivery"
    },
    {
      category: "Technical Data",
      examples: ["IP address", "Browser type", "Device information"],
      purpose: "Security and performance optimization"
    }
  ];

  const securityMeasures = [
    {
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols",
      icon: "🔐"
    },
    {
      title: "Access Controls",
      description: "Strict access controls and authentication mechanisms protect your data",
      icon: "🛡️"
    },
    {
      title: "Regular Audits",
      description: "We conduct regular security audits and vulnerability assessments",
      icon: "🔍"
    },
    {
      title: "Secure Infrastructure",
      description: "Our infrastructure is built on secure cloud platforms with redundancy",
      icon: "☁️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use ReferMe.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Privacy Commitment */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">🔒 Our Privacy Commitment</h2>
            <p className="text-lg opacity-90">
              At ReferMe, we are committed to protecting your privacy and ensuring the security of your personal information. We believe in transparency and will always be clear about how we handle your data.
            </p>
          </div>
        </div>

        {/* Data Collection Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            What Data We Collect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {type.category}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Purpose:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{type.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Detailed Privacy Information
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

        {/* Security Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            How We Protect Your Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMeasures.map((measure, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{measure.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {measure.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {measure.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Your Privacy Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">
                ✅ Your Rights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2 mr-3"></div>
                  Access your personal data
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2 mr-3"></div>
                  Update or correct your information
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2 mr-3"></div>
                  Request deletion of your data
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2 mr-3"></div>
                  Opt out of communications
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2 mr-3"></div>
                  Request data portability
                </li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                📧 Contact Us
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  To exercise your privacy rights or ask questions about this policy:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> referme2025@gmail.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Verification:</strong> We may need to verify your identity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Updates and Changes */}
        <div className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Changes to This Policy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </div>
        </div>

       
       
      </div>
    </div>
  );
};

export default PrivacyPolicy; 