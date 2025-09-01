import React from "react";

const Blog = () => {
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
          {[
            {
              title: "Vessel Maintenance & Port Operations",
              img: "/images/work1.png", // uploaded ship photo
              desc: `Our team recently carried out extensive maintenance operations 
              on cargo vessels docked at the port. From hull inspections to onboard electrical checks, 
              we ensured compliance with international safety standards. These projects highlight 
              Technoflow’s capability to handle large-scale marine infrastructure tasks efficiently.`,
            },
            {
              title: "On-Deck Engineering for Cargo Vessels",
              img: "/images/work12.png", // uploaded top-deck ship view
              desc: `Working directly on the upper deck of large cargo carriers, 
              our engineers were responsible for installing and upgrading mechanical systems. 
              This project required high precision and coordination with port authorities, 
              ensuring minimal downtime and maximum operational efficiency.`,
            },
            {
              title: "Industrial Electrical Panel Installation",
              img: "/images/work4.png", // uploaded electrical panel
              desc: `As part of our instrumentation and electrical projects, 
              we designed and installed advanced electrical distribution panels. 
              These panels are equipped with safety protections, smart monitoring, 
              and optimized load management. Our expertise guarantees reliability 
              and safety in both industrial and marine environments.`,
            },
          ].map((post, i) => (
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
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
