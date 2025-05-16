import React from "react";

export default function PreparationOptions() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center transition-all duration-300">
        Learning Options
      </h1>
      <p
        className="text-lg sm:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        style={{ fontFamily: "sans-serif", lineHeight: "1.8" }}
      >
        Empower your certification journey with our comprehensive preparation options.
        Choose from expert-led training, and real exam-like mock tests to achieve exam
        success confidently.
      </p>

      {/* Centered Card Section */}
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="grid grid-cols-1 gap-10 justify-items-center">
          {/* Card */}
          <div className="animated-card bg-gradient-to-br from-purple-200 via-indigo-100 to-white rounded-3xl shadow-lg p-8 max-w-md w-full text-center flex flex-col items-center transition-transform duration-500 hover:scale-105 hover:shadow-purple-400">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-5 tracking-wide animate-title">
              Live Online Training
            </h2>

            <ul className="text-gray-700 text-left text-base sm:text-lg list-disc mb-6 space-y-2 px-4 animate-fade">
              <li>Live, Online, Zoom (Sat/Fri ME timings)</li>
              <li>7 weeks (5 hrs/week) – 35 hrs (35 contact hours)</li>
              <li>Practical Project Practitioner course (48 hrs recorded)</li>
              <li>Weekly Tests (7 × 60) = 420 questions</li>
              <li>Mock Exam Simulators (5 × 180) = 900 questions</li>
              <li>PMI Licensed Content + 1:1 Discussion Support</li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-auto w-full animate-fade">
              <a
                href="https://exams.edzest.org/learn/PMP-training-Apr-25-batch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2"
              >
                <button className="bg-[#4748ac] hover:bg-[#3737ac] transition-all duration-300 text-white font-semibold py-3 rounded-lg w-full">
                  Learn More
                </button>
              </a>
              <a href="/training" className="w-full sm:w-1/2">
                <button className="bg-[#4748ac] hover:bg-[#3737ac] transition-all duration-300 text-white font-semibold py-3 rounded-lg w-full">
                  Explore More
                </button>
              </a>
            </div>

            {/* Keyframe Styles */}
            <style>
              {`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @keyframes scaleIn {
                  from {
                    opacity: 0;
                    transform: scale(0.95);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }

                .animated-card {
                  animation: scaleIn 0.8s ease-out forwards;
                }

                .animate-fade {
                  animation: fadeInUp 1s ease-in-out forwards;
                }

                .animate-title {
                  animation: fadeInUp 0.8s ease-in-out forwards;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
}
