import React, { useState, useEffect } from "react";
import trainingpageimageimg from "../Assets/Trainingpageimage.png";
import liveTrainingImg from "../Assets/Livetraining.png";
import recordedVideosImg from "../Assets/recordedvideos.png";
import flashcardsImg from "../Assets/flashcard.png";
import personalizedsupportimg from "../Assets/personalizedsupport.png";
import mockExamImg from "../Assets/mockexam.png";
import applicationSupportImg from "../Assets/Applicationsupport.png";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  const [country, setCountry] = useState("India");
  const [price, setPrice] = useState("₹16500 + 18% GST");

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes("Asia/Kolkata")) {
      setCountry("India");
      setPrice("₹16500 + 18% GST");
    } else {
      setCountry("Other");
      setPrice("USD 299");
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-20" style={{ fontFamily: "sans-serif" }}>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-10">
          {/* Left */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4 animate-fade-in-up">
              PMP<span className="text-gray-900">®</span> Exam Prep<br />
              by <span className="text-[#4748ac]">edzest</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
              Prepare for your PMP certification exam with expert-led training to pass in your first attempt!
            </p>
            <div className="mt-6">
              <a href="https://exams.edzest.org/learn/PMP--exam-prep-March--25-batch" target="_blank" rel="noopener noreferrer"
                className="btn btn-primary rounded-pill px-4 py-2 text-white bg-[#4748ac] hover:bg-[#3636ac] transition-all duration-300">
                Enroll Now
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">Current Pricing ({country}):</p>
              <h2 className="text-2xl font-bold text-[#4748ac]">{price}</h2>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgyNWMzZjkzZWE0ODE5MTlmYTk2ZDhlN2MyMWE0N2M6ZmlsZV8wMDAwMDAwMDIwM2M2MWY3OWY4OTMyYTVjNGUyMjhhOSIsInRzIjoiNDg1MzYyIiwicCI6InB5aSIsInNpZyI6ImYzNmRlY2U3ODQ5Mzg1YWUzOTQyMDhmMDg0NGRjYTEwMzdlNGIzOGUzN2U0MGI4MzUyNmYyY2UxMzFmYzM0MDkiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
              alt="Training"
              // className="rounded-lg shadow-lg w-full max-w-md hover:scale-105 transform transition duration-300 animate-float"
            />
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
            @keyframes floatImage {
              0% { transform: translateY(0px) rotateY(0deg); }
              50% { transform: translateY(-10px) rotateY(5deg); }
              100% { transform: translateY(0px) rotateY(0deg); }
            }

            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-float {
              animation: floatImage 4s ease-in-out infinite;
            }

            .animate-fade-in-up {
              animation: fadeInUp 1s ease-out both;
            }
          `}
        </style>
      </section>

      {/* Live Training Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Live Zoom Training Schedule</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-5 shadow-lg rounded-lg bg-light hover:shadow-2xl transition">
                <h3 className="text-2xl text-[#4748ac] font-semibold mb-2">Friday Sessions (Middle East)</h3>
                <p className="text-muted">Every Friday • 5 hours • 7 weeks</p>
                <p className="text-sm text-gray-500 mt-2">Zoom link shared after enrollment</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-5 shadow-lg rounded-lg bg-light hover:shadow-2xl transition">
                <h3 className="text-2xl text-[#4748ac] font-semibold mb-2">Saturday Sessions (India)</h3>
                <p className="text-muted">Every Saturday • 5 hours • 7 weeks</p>
                <p className="text-sm text-gray-500 mt-2">Zoom link shared after enrollment</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-700">Total Duration: <span className="font-bold">7 weeks (50 hours)</span></p>
          </div>
        </div>
      </section>

      {/* Practical Practitioner Course */}
      <section className="py-16 bg-gradient-to-r from-pink-100 via-indigo-100 to-purple-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Practical Project Practitioner Course</h2>
          <p className="text-gray-600 text-lg mb-2">Self-paced recorded videos of <strong>48+ hours</strong>.</p>
          <p className="text-gray-500 text-sm">Continuously updated with real-world case studies and examples.</p>
        </div>
      </section>

      {/* One-on-One Mentorship */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">One-on-One Mentorship</h2>
          <p className="text-gray-700 text-lg">
            Book 1:1 mentoring sessions with trainers after each weekly session!
          </p>
        </div>
      </section>

      {/* Weekly Tests and Mock Simulators */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Weekly Tests and Mock Exams</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-md p-5 bg-white hover:scale-105 transition">
                <h4 className="text-2xl text-[#4748ac] font-semibold">Weekly Tests</h4>
                <p className="text-gray-600 mt-2">Topic-based quizzes every week to sharpen your skills.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-md p-5 bg-white hover:scale-105 transition">
                <h4 className="text-2xl text-[#4748ac] font-semibold">Mock Exam Simulators</h4>
                <p className="text-gray-600 mt-2">Practice full PMP® style mock exams with explanations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs, Contact and Footer */}
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Hero;
