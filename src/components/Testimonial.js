import React from "react";

const testimonials = [
  {
    name: "Jawed Ahmad",
    feedback:
      "I am thrilled to share my successful journey of passing the PMP exam with Above Target in all three domains, and it wouldn’t have been possible without the incredible support of Mr. Amit",
    image: "/assets/Jawed Ahmad.png",
  },
  {
    name: "Bhavani Ramaswamy",
    feedback:
      "I saw some of Amit's YouTube videos when I started my PMP preparation and was impressed with the clarity. He immediately responded on LinkedIn and shared all the materials.",
    image: "/assets/bhavani.png",
  },
  {
    name: "Junaid Amid Khan",
    feedback:
      "PMP & ACP courses provided a lot of valuable insights and techniques. The instructor is knowledgeable and passionate, which made the lessons impactful.",
    image: "/assets/junaid Amid khan.png",
  },
  {
    name: "Kalesh Nair",
    feedback:
      "Learning with Amit at Edzest was exceptional. He shifts your mindset to think like a PM and supports you comprehensively.",
    image: "/assets/Kalesh Nair.png",
  },
  {
    name: "Kishore kumar chelikhani",
    feedback:
      "Amit conducted a comprehensive project management program for our company that added immense value to our team’s knowledge and skills.",
    image: "/assets/Kishore kumar chelikhani.png",
  },
  {
    name: "Lakmal jeewananda",
    feedback:
      "The course is excellent. MOC questions are structured just like the real exam. Helped me build confidence for PMP.",
    image: "/assets/Lakmal jeewananda.png",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Testimonials
      </h2>

      {/* Sliding Wrapper */}
      <div className="w-full overflow-hidden relative group">
        <div
          className="flex animate-slide gap-8 px-6 w-max"
          style={{ animationDuration: "30s" }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-72 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 min-h-[360px] hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-24 h-24 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {testimonial.name}
              </h3>
              <div className="flex-grow">
                <p
                  className="text-gray-600 mt-4 text-center"
                  style={{ fontFamily: "sans-serif", fontSize: "17px" }}
                >
                  {testimonial.feedback}
                </p>
              </div>
              <a
                href="https://www.google.com/search?q=edzest+education+services"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full px-4 py-2 bg-[#4748ac] text-white rounded-lg hover:bg-[#37378c] text-center"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-slide {
            animation-name: slide;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-play-state: running;
          }

          .group:hover .animate-slide {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
