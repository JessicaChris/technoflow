import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaUsers,
  FaProjectDiagram,
  FaCogs,
  FaRocket,
  FaLightbulb,
  FaOilCan,
} from "react-icons/fa";
import { motion } from "framer-motion";




const Home = () => {
const epdcRef = useRef(null);
const mechanicalRef = useRef(null);
const vesselRef = useRef(null);
const panelRef = useRef(null);
const siteRef = useRef(null);
const installationRef = useRef(null);
const instrumentRef = useRef(null);
  const [activeTab, setActiveTab] = useState("EPDC");

  const scrollToSection = (ref, tab) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const projects = [
  {
    title: "Waters Edge At Yas Island",
    image: "https://source.unsplash.com/800x600/?island,architecture",
  },
  {
    title: "Mamsha Al Saadiyat",
    image: "https://source.unsplash.com/800x600/?beach,urban",
  },
  {
    title: "Louvre Museum",
    image: "https://source.unsplash.com/800x600/?museum,modern",
  },
  {
    title: "Hilton Al Saadiyat",
    image: "https://source.unsplash.com/800x600/?hotel,luxury",
  },
];

  return (
    <div className="font-sans bg-white-900 text-white">
      {/* Hero Section Slider */}
<section className="relative h-[90vh] overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover brightness-50"
  >
    <source src="/videos/video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
    <h1 className="text-5xl font-bold mb-4 animate-fade-in">
      Welcome to Technoflow
    </h1>
    <p className="text-xl max-w-2xl mx-auto animate-fade-in delay-200">
      Engineering the future through innovation and smart infrastructure.
    </p>
  </div>
</section>
      {/* About Section (below hero) */}
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Column - Text */}
<div>
  <h2 className="text-4xl font-extrabold text-blue-800 mb-4">About Technoflow</h2>
  <p className="text-lg leading-relaxed">
    At Technoflow, we are dedicated to delivering next-generation engineering solutions across electrical
    power systems, mechanical services, oil & gas instrumentation, and industrial automation.
  </p>
  <p className="mt-4 text-md text-gray-600">
    Our technology-first approach enables us to provide turnkey systems—from SCADA and switchgears to
    precision pump control, water systems, and IoT-based automation across 25+ sectors.
  </p>

  {/* Contact Info */}
  <div className="mt-6 text-md text-gray-700">
    <p><span className="font-semibold">Contact:</span> +971 4 3473700</p>
    <p className="mt-1"><span className="font-semibold">Email:</span> info@technoflow.com</p>
  </div>
</div>


    {/* Right Column - Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div className="bg-white shadow rounded-xl py-6 px-4 border border-blue-100 hover:shadow-lg transition">
        <FaUsers className="text-4xl text-blue-600 mb-2 mx-auto" />
        <h3 className="text-2xl font-bold text-blue-800">10+</h3>
        <p className="text-sm text-gray-600">Clients Served</p>
      </div>
      <div className="bg-white shadow rounded-xl py-6 px-4 border border-blue-100 hover:shadow-lg transition">
        <FaProjectDiagram className="text-4xl text-blue-600 mb-2 mx-auto" />
        <h3 className="text-2xl font-bold text-blue-800">25+</h3>
        <p className="text-sm text-gray-600">Projects Completed</p>
      </div>
      <div className="bg-white shadow rounded-xl py-6 px-4 border border-blue-100 hover:shadow-lg transition">
        <FaCogs className="text-4xl text-blue-600 mb-2 mx-auto" />
        <h3 className="text-2xl font-bold text-blue-800">25+</h3>
        <p className="text-sm text-gray-600">Industry Sectors</p>
      </div>
    </div>
  </div>

  {/* Decorative Illustration (optional gear) */}
  <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none hidden md:block">
    <img src="/images/gear-decor.svg" alt="gear pattern" className="w-full h-full object-contain" />
  </div>
</section>


   {/* Floating Sidebar */}
<div className="fixed top-32 left-4 z-50 hidden md:block">
  <div className="bg-white/90 text-blue-900 shadow-xl rounded-xl overflow-hidden border border-blue-100">
    {[
      { label: "EPDC", ref: epdcRef },
      { label: "MECHANICAL", ref: mechanicalRef },
      { label: "ELECTRICAL WORK IN VESSEL IN PORT", ref: vesselRef },
      { label: "PANEL WORK", ref: panelRef },
      { label: "SITE-WORK PICTURE", ref: siteRef },
      { label: "PANEL INSTALLATION", ref: installationRef },
      { label: "INSTRUMENT INSTALLATION", ref: instrumentRef },
    ].map(({ label, ref }) => (
      <button
        key={label}
        onClick={() => scrollToSection(ref, label)}
        className={`block px-6 py-3 w-56 text-left text-base leading-relaxed font-medium tracking-wide transition-all duration-300 ${
          activeTab === label
            ? "bg-blue-600 text-white font-semibold"
            : "hover:bg-blue-50 text-blue-900"
        }`}
      >
        {label}
      </button>
    ))}
  </div>
</div>


      {/* Sections */}
      <main className="space-y-24 px-6 py-16 max-w-6xl mx-auto">
<section ref={epdcRef} className="relative bg-white text-black px-6 py-20 overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
  >
    {/* Left: Modern Info Block */}
    <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-4">Electrical Power Distribution & Control (EPDC)</h2>
      <p className="text-md text-black-300 mb-6 leading-relaxed">
        At Technoflow, our EPDC division delivers advanced solutions for 
        <span className="font-semibold text-black"> LV/MV switchgears</span>, 
        <span className="font-semibold text-black"> energy automation</span>, 
        <span className="font-semibold text-black"> instrumentation</span>, and 
        <span className="font-semibold text-black"> protection systems</span>.
      </p>
      <p className="text-sm text-black-400 mb-4">
        Supporting smart infrastructure including substations and industrial control centers through:
      </p>
      <ul className="space-y-2 text-sm text-black-100 pl-4 list-disc">
        <li>LV/MV Switchboards and Control Panels</li>
        <li>SCADA & PLC Automation Integration</li>
        <li>Protection Relays & Panel Retrofitting</li>
        <li>Commissioning & Maintenance Support</li>
      </ul>
      <p className="text-sm text-black-400 mt-6">
        We ensure <span className="text-black font-medium">reliable, scalable, and safe systems</span> across sectors like 
        <em> utilities, oil & gas, and manufacturing</em>.
      </p>
    </div>

    {/* Right: Animated Image Card */}
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition"
    >
      <img
        src="/images/epdc1.jpg"
        alt="Switchgear Cabinets - EPDC"
        className="rounded-2xl w-full object-cover h-full transform hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
        <h3 className="text-white text-xl font-semibold">Smart Switchgear Systems</h3>
      </div>
    </motion.div>
  </motion.div>
</section>

<section  ref={mechanicalRef} className="relative bg-white text-black px-6 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500">
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4">Mechanical Division</h2>
          <p className="text-md text-black-300 mb-6">
            Technoflow provides expert services for <span className="text-black font-semibold">pumps, generators, HVAC</span>, and <span className="text-black font-semibold">solar energy systems</span>, optimizing efficiency and sustainability.
          </p>
          <ul className="space-y-2 text-sm text-black-100 pl-4 list-disc">
            <li>Solar AC & Water Heating</li>
            <li>Diesel UPS & Pumping Systems</li>
            <li>HVAC & Chiller Installations</li>
            <li>Energy Optimization & Support</li>
          </ul>
          <p className="text-sm text-black-400 mt-6">
            Tailored solutions ensure <span className="text-black font-medium">reliable mechanical infrastructure</span>.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition"
        >
          <img
            src="/images/mech.jpg"
            alt="Mechanical Division"
            className="rounded-2xl w-full object-cover h-full transform hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
            <h3 className="text-white text-xl font-semibold">Advanced Mechanical Systems</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* --- vessel --- */}
    <section ref={vesselRef} className="relative bg-white text-black px-6 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500">
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4">ELECTRICAL WORK IN VESSEL IN PORT</h2>
          <p className="text-md text-black-300 mb-6">
           At Technoflow, we specialize in providing comprehensive electrical solutions for vessels docked in port — ensuring safety, efficiency, and full operational readiness.
          </p>
          <ul className="space-y-2 text-sm text-black-100 pl-4 list-disc">
            <li> Power distribution system upgrades</li>
            <li>Lighting installation and maintenance (interior & exterior)</li>
            <li>Motor and generator servicing</li>
            <li>Troubleshooting and fault diagnostics</li>
          </ul>
          <p className="text-sm text-black-400 mt-6">
            Ensuring <span className="text-black font-medium">compliance, safety, and productivity</span>.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition"
        >
          <img
            src="/images/work1.png"
            alt="Oil and Gas"
            className="rounded-2xl w-full object-cover h-full transform hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
            <h3 className="text-white text-xl font-semibold">Electrical Work</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* --- Panel Work --- */}
    <section ref={panelRef} className="relative bg-white text-black px-6 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500">
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4">PANEL WORK</h2>
          <p className="text-md text-black-300 mb-6">
           Technoflow delivers custom-designed electrical panel solutions for marine and industrial applications — built for durability, safety, and smart control.
          </p>
          <ul className="space-y-2 text-sm text-black-100 pl-4 list-disc">
            <li> Fabrication of LT & HT Panels</li>
            <li>Control panel wiring & component integration</li>
            <li>Lighting distribution panels</li>
            <li>PLC & automation panel design</li>
          </ul>
          <p className="text-sm text-black-400 mt-6">
            Driving <span className="text-black font-medium">automation, analytics, and insight</span> for modern industries.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition"
        >
          <img
            src="/images/work4.png"
            alt="Panel Work"
            className="rounded-2xl w-full object-cover h-full transform hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
            <h3 className="text-white text-xl font-semibold">Panel Work Image</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* --- Site Work --- */}
    <section ref={siteRef} className="relative bg-white text-black px-6 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500">
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4">SITE WORK</h2>
          <p className="text-md text-black-300 mb-6">
           At Technoflow, we don't just plan — we execute on-site with precision and power. From cable laying to complete system integration, our experienced team ensures every electrical project is delivered with zero shortcuts and full safety compliance.
          </p>
          <ul className="space-y-2 text-sm text-black-100 pl-4 list-disc">
            <li> Electrical cable routing & laying (underground & overhead)</li>
            <li>Termination & jointing for LT/HT cables</li>
            <li>Conduit and tray installations</li>
            <li> On-site panel mounting & commissioning</li>
          </ul>
          <p className="text-sm text-black-400 mt-6">
            Driving <span className="text-black font-medium">automation, analytics, and insight</span> for modern industries.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition"
        >
          <img
            src="/images/work6.png"
            alt="Panel Work"
            className="rounded-2xl w-full object-cover h-full transform hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
            <h3 className="text-white text-xl font-semibold">Site Work Image</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* --- PANEL INSTALLATION --- */}
    <section ref={installationRef} className="relative bg-white text-black px-6 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500">
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4">PANEL INSTALLATION</h2>
          <p className="text-md text-black-300 mb-6">
           When it comes to precision electrical panel installation, Technoflow brings expertise that ensures every connection is safe, stable, and future-ready.
We handle everything from mounting to live testing
          </p>
          <ul className="space-y-2 text-sm text-black-100 pl-4 list-disc">
            <li>Wall-mounted & floor-standing panel setup</li>
            <li>Cable gland fitting and termination</li>
            <li>Load distribution checks</li>
            <li>Tightening & torque testing of bus bars and terminals</li>
          </ul>
          <p className="text-sm text-black-400 mt-6">
            Driving <span className="text-black font-medium">automation, analytics, and insight</span> for modern industries.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition"
        >
          <img
            src="/images/work7.png"
            alt="Panel Work"
            className="rounded-2xl w-full object-cover h-full transform hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
            <h3 className="text-white text-xl font-semibold">Panel Installation Image</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* --- INSTRUMENT INSTALLATION --- */}
    <section ref={instrumentRef} className="relative bg-white text-black px-6 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-500">
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4">INSTRUMENT INSTALLATION</h2>
          <p className="text-md text-black-300 mb-6">
           Technoflow offers precise and reliable instrument installation services for vessels, ports, and industrial systems — ensuring your operations run with maximum accuracy and control.
We install a wide range of instruments used for monitoring, measurement, and automation, all done with tight calibration and clean cable management.
          </p>
          <ul className="space-y-2 text-sm text-black-100 pl-4 list-disc">
            <li>  Temperature, pressure & level transmitters</li>
            <li>Flow meters & sensors</li>
            <li>Voltage/current measuring instruments</li>
            <li> Control and signal transmitters</li>
          </ul>
          <p className="text-sm text-black-400 mt-6">
            Driving <span className="text-black font-medium">automation, analytics, and insight</span> for modern industries.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition"
        >
          <img
            src="/images/work12.png"
            alt="Panel Work"
            className="rounded-2xl w-full object-cover h-full transform hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
            <h3 className="text-white text-xl font-semibold">Instrument Installation Image</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>


    <section className="bg-white text-black py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-16 text-blue-400"
    >
      Completed Projects
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className="relative overflow-hidden group shadow-lg rounded-xl border border-gray-800"
        >
          <img
            src="/images/company-2.jpg"
            alt={project.title}
            className="w-full h-60 object-cover group-hover:scale-110 group-hover:brightness-75 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  {/* <section className="bg-gray-950 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          Completed Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg group relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Let’s Build the Future Together</h2>
        <p className="text-lg max-w-xl mx-auto">
          Whether you need automation, industrial solutions, or digital transformation — Technoflow is your trusted partner.
        </p>
        <button className="mt-6 bg-white text-blue-800 px-6 py-2 rounded-full text-lg shadow hover:bg-blue-200">
          Contact Us
        </button>
      </section>
      <footer className="bg-gray-100 text-gray-700 pt-16 pb-8 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-gray-300 pb-12">

    {/* Logo + Socials */}
    <div>
      <img src="/images/logo.png" alt="Technoflow Logo" className="h-24 mb-4" />
      <p className="text-sm text-gray-500 mb-4">© {new Date().getFullYear()} Technoflow. All rights reserved.</p>
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
          <strong>Technoflow HQ</strong><br />
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
  <div className="text-center text-xs text-gray-400 pt-6">
    Built by TrendAce Software Solutions · Powered by React & Tailwind
  </div>
</footer>

    </div>
  );
};

export default Home;