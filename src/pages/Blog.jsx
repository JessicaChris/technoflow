import React, { useRef, useState } from "react";

const Blog = () => {
  const aboutRef = useRef(null);

  // posts with short + extra content
  const posts = [
    {
      title: "Vessel Maintenance & Port Operations",
      img: "/images/work1.png",
      short: `Our team recently carried out extensive maintenance operations 
on cargo vessels docked at the port. From hull inspections to onboard electrical checks, 
we ensured compliance with international safety standards. These projects highlight 
Technoflow’s capability to handle large-scale marine infrastructure tasks efficiently.`,
      more: `Beyond routine inspections, we deployed condition-based monitoring on propulsion and auxiliary systems, 
using vibration analysis and thermal imaging to catch early faults. Our crews coordinated with port authorities 
to optimize dry-dock windows, cutting idle time by 18%. We also upgraded ballast water management units to IMO D-2 
standards and implemented a digital maintenance log that syncs with shore—giving clients real-time visibility into 
task progress, spares usage, and compliance certificates.`,
    },
    {
      title: "On-Deck Engineering for Cargo Vessels",
      img: "/images/work12.png",
      short: `Working directly on the upper deck of large cargo carriers, 
our engineers were responsible for installing and upgrading mechanical systems. 
This project required high precision and coordination with port authorities, 
ensuring minimal downtime and maximum operational efficiency.`,
      more: `Scope included winch overhauls, load-testing of cranes, and replacement of high-pressure hydraulic lines 
with certified hoses and quick-release couplings. We redesigned pipe supports with corrosion-resistant alloys and 
added anti-vibration mounts to reduce noise levels by 12 dB during cargo operations. The team also commissioned 
PLC-based interlocks for deck machinery, adding diagnostics screens that cut troubleshooting time from hours to minutes.`,
    },
    {
      title: "Industrial Electrical Panel Installation",
      img: "/images/work4.png",
      short: `As part of our instrumentation and electrical projects, 
we designed and installed advanced electrical distribution panels. 
These panels are equipped with safety protections, smart monitoring, 
and optimized load management. Our expertise guarantees reliability 
and safety in both industrial and marine environments.`,
      more: `We delivered form-4b MCC panels with segregated busbars, integrated ARC-flash relays, 
and Type-tested assemblies (TTA). Energy meters feed data to a cloud dashboard over MODBUS/TCP with 
predictive alerts on harmonics and peak demand. The panels include ATS logic for seamless genset switchover 
(<150 ms) and selective coordination studies ensured breakers isolate faults without plant-wide trips. 
Commissioning wrapped with IR tests, relay coordination checks, and operator training.`,
    },
  ];

  const [expanded, setExpanded] = useState(posts.map(() => false));

  const toggle = (i) =>
    setExpanded((prev) =>
      prev.map((v, idx) => (idx === i ? !v : v))
    );

  return (
    <div className="font-sans bg-white text-black min-h-screen fade-in">
      {/* inline CSS for animations */}
      <style>{`
        @keyframes fadeIn { from {opacity:0} to {opacity:1} }
        @keyframes fadeInUp { from {opacity:0; transform:translateY(20px)} to {opacity:1; transform:translateY(0)} }
        .fade-in { animation: fadeIn .8s ease-out forwards; }
        .fade-in-up { animation: fadeInUp .8s ease-out forwards; }
        .delay-1 { animation-delay:.2s }
        .delay-2 { animation-delay:.4s }
        .delay-3 { animation-delay:.6s }
      `}</style>

      {/* HERO */}
      <section className="relative h-[60vh] overflow-hidden fade-in">
        <div
          className="absolute inset-0 bg-center bg-cover bg-slate-800"
          style={{ backgroundImage: "url('/images/company-2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Our Blog</h1>
          <p className="text-lg max-w-2xl fade-in-up delay-1">
            Stories and highlights from Technoflow projects at sea, in port, and
            on-site installations.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6 md:px-20 fade-in-up delay-2">
        <div className="max-w-6xl mx-auto space-y-12">
          {posts.map((post, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-8 fade-in-up"
              style={{ animationDelay: `${0.3 + i * 0.2}s` }}
            >
              <div className="md:w-1/3 w-full">
                <div className="w-full h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
              <div className="md:w-2/3 w-full">
                <h2 className="text-2xl font-semibold text-blue-500 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {post.short}
                  {expanded[i] && (
                    <span className="block mt-3">{post.more}</span>
                  )}
                </p>
                <button
                  onClick={() => toggle(i)}
                  className="mt-3 text-blue-600 font-semibold hover:underline"
                >
                  {expanded[i] ? "See less ▲" : "See more ▼"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 mt-20 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Socials */}
          <div>
            <p className="text-sm text-gray-500 mb-4">
              © {new Date().getFullYear()} Technoflow. All rights reserved.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="text-blue-700 hover:text-blue-900 transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-800 hover:text-black transition">
                <i className="fab fa-x-twitter text-xl"></i>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Media Center</a></li>
              <li><a href="#" className="hover:text-blue-600">CSR</a></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Portfolio</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Engineering & Contracting</a></li>
              <li><a href="#" className="hover:text-blue-600">Manufacturing & Trading</a></li>
              <li><a href="#" className="hover:text-blue-600">Industrial & Retail</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <strong>Technoflow HQ</strong>
                <br />
                +971 551387960 <br />
                +971 4 3473700<br />
                info@technoflow.com
              </li>
              <li>
                <strong>Toll Free</strong><br />
                800-TECHFLOW
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div ref={aboutRef} className="text-center text-xs text-gray-400 pt-6">
          Built by TrendAce Software Solutions · Powered by React & Tailwind
        </div>
      </footer>
    </div>
  );
};

export default Blog;

