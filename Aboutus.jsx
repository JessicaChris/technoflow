import React from "react";

const AboutUs = () => {
  return (
    <div className="font-sans bg-white text-black min-h-screen fade-in">
      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 1s ease-out forwards; }
        .fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .delay-1 { animation-delay: .2s; }
        .delay-2 { animation-delay: .4s; }
        .delay-3 { animation-delay: .6s; }
      `}</style>

      {/* Header Section */}
      <section className="relative h-[60vh] overflow-hidden fade-in">
        <img
          src="/images/company-2.jpg"
          alt="About Technoflow"
          className="absolute w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">About Technoflow</h1>
          <p className="text-lg max-w-2xl fade-in-up delay-1">
            Redefining infrastructure with innovation, sustainability, and cutting-edge engineering.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-20 space-y-20 fade-in-up delay-2">
        {/* Who We Are */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 fade-in-up">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Technoflow is a forward-thinking engineering company focused on providing smart infrastructure
              solutions. With a team of visionary engineers and innovators, we bring cutting-edge technology
              to the world of construction, design, and infrastructure development.
            </p>
          </div>
          <div className="md:w-1/2 fade-in-up delay-1">
            <img
              src="/images/about-us.jpg"
              alt="Who We Are"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 fade-in-up">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We aim to bridge the gap between traditional infrastructure and futuristic possibilities.
              Our mission is to deliver sustainable, intelligent, and efficient solutions that empower
              communities and transform landscapes.
            </p>
          </div>
          <div className="md:w-1/2 fade-in-up delay-1">
            <img
              src="/images/hero1.jpg"
              alt="Our Mission"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto space-y-6 fade-in-up">
          <h2 className="text-3xl font-semibold text-blue-400">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Expertise in advanced engineering technologies</li>
            <li>Client-centric approach with customized solutions</li>
            <li>Strong commitment to quality and innovation</li>
            <li>Proven track record of successful projects</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
