import React, { useRef } from "react";

const Contact = () => {
  const aboutRef = useRef(null);

  return (
    <div className="font-sans bg-white text-black min-h-screen fade-in">
      {/* Inline CSS for animations */}
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
          style={{ backgroundImage: "url('/images/contact.webp')" }} // swap with /images/contact-hero.jpg later
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Contact Us</h1>
          <p className="text-lg max-w-2xl fade-in-up delay-1">
            We’d love to hear from you. Reach out to Technoflow for inquiries,
            collaborations, or project discussions.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6 md:px-20 fade-in-up delay-2">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you have a question about our services, want to discuss a
              potential project, or just want to say hello — we’re here to help.
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li><strong>Email:</strong> info@technoflow.com</li>
              <li><strong>Phone:</strong> +971 551387960</li>
              <li><strong>Toll Free:</strong> 800-TECHFLOW</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Send a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
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

export default Contact;


