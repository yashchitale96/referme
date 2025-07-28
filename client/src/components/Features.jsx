import React from "react";

const Features = () => {
  const features = [
    {
      title: "Notes",
      description: "Get concise notes for any topic, quick review or in-depth study.",
      image: "notes1.jpg",
      icon: "📚",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
    },
    {
      title: "Practicals",
      description: "Apply theory through real-world experiments, and case studies.",
      image: "practical1.jpg",
      icon: "🔬",
      gradient: "from-blue-400 via-purple-400 to-pink-400",
    },
    {
      title: "Projects",
      description: "Take on transformative projects from idea to reality, challenging norms.",
      image: "project2.jpg",
      icon: "💡",
      gradient: "from-purple-400 via-pink-400 to-blue-400",
    },
    {
      title: "Question Paper",
      description: "Access a wide range of past exam papers across subjects.",
      image: "pyq.jpg",
      icon: "📝",
      gradient: "from-blue-400 via-pink-400 to-purple-400",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full flex items-center justify-center"
    >
      {/* Animated background shape */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl animate-spin-slow-reverse"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
                Features
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></span>
            </span>
          </h1>
        </div>

        {/* Grid Layout with animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              tabIndex={0}
              className={`group relative overflow-hidden bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-stretch focus:ring-4 focus:ring-purple-400 transition-all duration-300 animate-fade-in-up hover:scale-[1.03] hover:shadow-3xl hover:border-purple-400/40 cursor-pointer`}
              style={{ minHeight: "260px", animationDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-40 md:h-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-3 left-4 text-4xl md:text-5xl drop-shadow-xl group-hover:animate-bounce">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3
                  className={`font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}
                >
                  {feature.title}
                </h3>
                <p className="text-base text-gray-200 mb-2 font-medium">
                  {feature.description}
                </p>
                <div
                  className={`mt-3 w-20 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
