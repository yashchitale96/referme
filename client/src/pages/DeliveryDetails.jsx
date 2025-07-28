import React from "react";

const DeliveryDetails = () => {
  const deliveryMethods = [
    {
      title: "Instant Access",
      description: "Download study materials immediately after finding them",
      features: [
        "No waiting time",
        "Direct PDF download",
        "Available 24/7",
        "No registration required for downloads"
      ],
      icon: "⚡",
      gradient: "from-yellow-400 via-orange-400 to-red-400"
    },
    {
      title: "Secure Storage",
      description: "All materials are stored securely in the cloud",
      features: [
        "Firebase secure storage",
        "Backup systems",
        "Data encryption",
        "Reliable access"
      ],
      icon: "🔒",
      gradient: "from-green-400 via-blue-400 to-purple-400"
    },
    {
      title: "Quality Assurance",
      description: "All uploaded content is reviewed for quality",
      features: [
        "Content moderation",
        "Quality checks",
        "User feedback system",
        "Regular updates"
      ],
      icon: "✅",
      gradient: "from-purple-400 via-pink-400 to-red-400"
    },
    {
      title: "Cross-Platform",
      description: "Access materials from any device, anywhere",
      features: [
        "Mobile responsive",
        "Desktop optimized",
        "Tablet friendly",
        "Offline reading support"
      ],
      icon: "📱",
      gradient: "from-blue-400 via-cyan-400 to-green-400"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Search",
      description: "Use our advanced search to find relevant materials",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Select",
      description: "Choose the material that best fits your needs",
      icon: "📋"
    },
    {
      step: "3",
      title: "Download",
      description: "Click to download the PDF file instantly",
      icon: "⬇️"
    },
    {
      step: "4",
      title: "Study",
      description: "Access your materials offline and start learning",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Delivery Details
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn how ReferMe delivers high-quality study materials to students quickly, securely, and efficiently.
          </p>
        </div>

        {/* Delivery Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            How We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6 text-3xl`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Delivery Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                  {step.icon}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Platform Infrastructure
              </h3>
              <div className="space-y-4">
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Cloud Storage</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    All materials are stored securely in Firebase Cloud Storage with automatic backups and redundancy.
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">CDN Delivery</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Content is delivered through a global CDN for fast download speeds worldwide.
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Security</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    All downloads are secured with HTTPS encryption and protected against unauthorized access.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                File Specifications
              </h3>
              <div className="space-y-4">
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Format Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Currently supporting PDF files for optimal compatibility and accessibility across all devices.
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">File Size</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Maximum file size of 50MB per upload to ensure fast downloads and efficient storage.
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Quality Standards</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    All materials are reviewed for quality, relevance, and educational value before being made available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       

      
       
      </div>
    </div>
  );
};

export default DeliveryDetails; 