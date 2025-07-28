import React from "react";
import { Link } from "react-router-dom";

const CustomerSupport = () => {
    const faqs = [
        {
            question: "How do I search for study materials?",
            answer: "Use our advanced search system by selecting your year, branch, semester, subject, and material type. The platform will instantly show you relevant materials."
        },
        {
            question: "What file formats are supported?",
            answer: "Currently, we support PDF files for study materials. This ensures compatibility and easy access across all devices."
        },
        {
            question: "How do I report inappropriate content?",
            answer: "If you find any inappropriate content, please contact our support team immediately. We take content quality seriously and will review all reports."
        }
    ];

    const supportChannels = [
        {
            title: "Email Support",
            description: "Get detailed responses to your queries",
            contact: "referme2025@gmail.com",
            icon: "📧",
            response: "Within 24 hours",
            gradient: "from-blue-500 via-purple-500 to-pink-500"
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-block p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <span className="text-3xl">🎧</span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
                        Customer Support
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        We're here to help you make the most of ReferMe. Find answers to common questions and get the support you need.
                    </p>
                </div>

                {/* Support Channels */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        How Can We Help You?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {supportChannels.map((channel, index) => (
                            <div
                                key={index}
                                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className={`w-20 h-20 bg-gradient-to-r ${channel.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300`}>
                                    {channel.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                    {channel.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                                    {channel.description}
                                </p>
                                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-xl p-4 mb-4 border border-purple-200 dark:border-purple-700">
                                    <p className="text-purple-800 dark:text-purple-200 font-bold text-base">
                                        {channel.contact}
                                    </p>
                                </div>
                                <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                    <p className="text-green-700 dark:text-green-300 font-semibold text-sm">
                                        {channel.response}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105"
                                style={{ animationDelay: `${index * 300}ms` }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Link
                            to="/Search"
                            className="group bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-10 text-center shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-white"
                        >
                            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-5xl group-hover:scale-110 transition-transform duration-300">
                                🔍
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                Search Materials
                            </h3>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Find the study materials you need quickly and easily
                            </p>
                            <div className="mt-6 inline-flex items-center text-blue-100 group-hover:text-white transition-colors duration-300">
                                <span className="font-semibold">Get Started</span>
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </div>
                        </Link>

                        <Link
                            to="/#contactus"
                            className="group bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-10 text-center shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-white"
                        >
                            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-5xl group-hover:scale-110 transition-transform duration-300">
                                📞
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                Contact Us
                            </h3>
                            <p className="text-purple-100 text-lg leading-relaxed">
                                Get in touch with our support team
                            </p>
                            <div className="mt-6 inline-flex items-center text-purple-100 group-hover:text-white transition-colors duration-300">
                                <span className="font-semibold">Reach Out</span>
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Troubleshooting Guide */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        Troubleshooting Guide
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                                Common Issues & Solutions
                            </h3>
                            <div className="space-y-6">
                                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xl">⚠️</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                                                Can't find materials?
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                                Try different search criteria or check if the material exists for your specific combination of year, branch, and semester.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xl">🔄</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                                                Page not loading?
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                                Clear your browser cache, try a different browser, or check if the site is accessible from your network.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                <img
                                    src="contactus.png"
                                    alt="Support"
                                    className="relative rounded-3xl shadow-2xl w-full max-w-lg group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </div>
            
            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </>
    );
};

export default CustomerSupport; 