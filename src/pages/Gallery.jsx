import React, { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const IMAGES = [
    "/images/work1.png","/images/work4.png","/images/work12.png",
    "/images/work6.png","/images/work7.png","/images/mech.jpg",
    "/images/oil.jpg","/images/hero2.jpg","/images/hero3.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const aboutRef = useRef(null);

  // keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % IMAGES.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <div className="font-sans bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/company-2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg max-w-2xl">
            A glimpse of our work, projects, and the people behind Technoflow.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-400 mb-8">Project Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => { setIndex(i); setIsOpen(true); }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-transform"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="fixed z-[9999] top-6 right-6 bg-white text-gray-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Image wrapper */}
          <div
            className="max-w-5xl mx-auto px-6 pt-32 pb-16 flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[index]}
              alt={`Expanded ${index + 1}`}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length); }}
            className="fixed left-6 top-1/2 -translate-y-1/2 bg-white text-gray-900 w-12 h-12 rounded-full shadow-lg hover:bg-gray-100"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % IMAGES.length); }}
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-white text-gray-900 w-12 h-12 rounded-full shadow-lg hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-100 mt-20 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Socials */}
          <div>
            <img src="/images/logo.png" alt="Technoflow Logo" className="h-24 mb-4" />
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

export default Gallery;
