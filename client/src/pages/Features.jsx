import React from "react";

const Features = () => {
  const features = [
    {
      title: "Comprehensive Study Materials",
      description: "Access a vast collection of notes, practicals, question papers, and tutorials across all engineering branches and years.",
      icon: "📚",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
      details: [
        "Notes for quick revision",
        "Practical lab guides",
        "Previous year question papers",
        "Tutorial materials",
        "PPT presentations"
      ]
    },
    {
      title: "Advanced Search System",
      description: "Find exactly what you need with our intelligent filtering system based on year, branch, semester, and subject.",
      icon: "🔍",
      gradient: "from-blue-400 via-purple-400 to-pink-400",
      details: [
        "Multi-criteria filtering",
        "Instant search results",
        "Smart categorization",
        "Easy navigation",
        "Quick access to materials"
      ]
    },
    {
      title: "Secure File Upload",
      description: "Share your knowledge with the community through our secure and user-friendly upload system.",
      icon: "📤",
      gradient: "from-purple-400 via-pink-400 to-blue-400",
      details: [
        "Firebase secure storage",
        "Progress tracking",
        "File validation",
        "Metadata management",
        "Community contribution"
      ]
    },
    {
      title: "Responsive Design",
      description: "Access ReferMe seamlessly across all devices with our mobile-first responsive design.",
      icon: "📱",
      gradient: "from-blue-400 via-pink-400 to-purple-400",
      details: [
        "Mobile optimized",
        "Tablet friendly",
        "Desktop experience",
        "Cross-platform compatibility",
        "Touch-friendly interface"
      ]
    },
    {
      title: "Admin Management",
      description: "Comprehensive admin panel for managing content, users, and platform operations.",
      icon: "⚙️",
      gradient: "from-pink-400 via-blue-400 to-purple-400",
      details: [
        "Content moderation",
        "User management",
        "Analytics dashboard",
        "Bulk operations",
        "System monitoring"
      ]
    },
    {
      title: "Real-time Notifications",
      description: "Stay updated with instant notifications for uploads, searches, and platform activities.",
      icon: "🔔",
      gradient: "from-purple-400 via-blue-400 to-pink-400",
      details: [
        "Toast notifications",
        "Success/error feedback",
        "Upload progress",
        "Search results",
        "System alerts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the powerful tools and capabilities that make ReferMe the ultimate study material platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 text-3xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full mr-3`}></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Academic Coverage Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Academic Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">4 Years</h3>
              <p className="text-purple-100">Complete Engineering Curriculum</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">2 Branches</h3>
              <p className="text-blue-100">Computer & IT Engineering</p>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">8 Semesters</h3>
              <p className="text-pink-100">Comprehensive Semester Coverage</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-2">50+ Subjects</h3>
              <p className="text-purple-100">Wide Range of Topics</p>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
              { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400" },
              { name: "MongoDB", icon: "🍃", color: "from-green-500 to-teal-500" },
              { name: "Firebase", icon: "🔥", color: "from-orange-400 to-red-400" },
              { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-blue-400" },
              { name: "Azure", icon: "☁️", color: "from-blue-500 to-indigo-500" }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl`}>
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of ReferMe and transform your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Search"
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Exploring
            </Link>
            <Link
              to="/Upload"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Contribute Content
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Features; 