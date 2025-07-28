import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            About ReferMe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering students with comprehensive study materials and fostering a collaborative learning environment.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At ReferMe, we believe that knowledge should be accessible to everyone. Our mission is to create a comprehensive platform where students can easily find, share, and access high-quality study materials.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We're committed to fostering a collaborative learning environment that empowers students to excel in their academic journey.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
              <img
                src="mission3.png"
                alt="Our Mission"
                className="relative rounded-3xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quality Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We ensure that all study materials meet high academic standards and are regularly updated.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a supportive community where students can share knowledge and help each other grow.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously improving our platform with cutting-edge technology and user-friendly features.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">P</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Pixen Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Development & Design</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">R</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">ReferMe Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Content & Management</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">C</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Contributors & Users</p>
            </div>
          </div>
        </div> */}

        {/* CTA Section
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your journey with ReferMe and discover the power of collaborative learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Search"
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Explore Materials
            </Link>
            <Link
              to="/Upload"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Share Knowledge
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs; 