import React from 'react';
import { Link } from 'react-router-dom';
import AdBanner from './AdBanner';
import heroImage from '../Assets/YourImage.png'; // ✅ Replace with your actual image

const Hero = () => {
  return (
    <>
      {/* Dynamic Ad Banner */}
      <AdBanner />

      <section className="relative h-[80vh] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 overflow-hidden bg-white">
        {/* Left Text Section */}
        <div className="relative z-10 text-center lg:text-left p-4 sm:p-6 flex-1">
          <h1 className="font-openSansBold font-extrabold leading-tight text-gray-800">
            <span className="block lg:-translate-x-[80px] leading-[1.2] text-[40px] sm:text-[50px] lg:text-[70px]">
              Learn.
            </span>
            <span className="block lg:-translate-x-[80px] leading-[1.2] text-[40px] sm:text-[50px] lg:text-[70px]">
              Apply.
            </span>
            <span className="block lg:-translate-x-[5px] leading-[1.2] text-[40px] sm:text-[50px] lg:text-[70px]">
              Deliver Successful Projects.
            </span>
          </h1>

          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-center lg:text-left" style={{ fontFamily: "sans-serif", fontSize: "18px", lineHeight: "1.8" }}>
            At Edzest Project Academy, we deliver training that goes beyond theory—empowering project professionals with real-world skills, recognized certifications, and the confidence to deliver successful projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-6 mt-3 sm:mt-10">
            <Link
              to="/training"
              className="bg-[#4748ac] hover:bg-[#37378c] text-white font-semibold 
              py-2 px-3 text-sm sm:text-base lg:text-lg 
              sm:py-3 sm:px-6 lg:py-4 lg:px-8 
              w-[120px] sm:w-[150px] lg:w-[180px] 
              rounded-lg transition duration-300 text-center"
              style={{ textDecoration: "none" }}
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={heroImage}
            alt="Right side visual"
            className="max-w-[90%] lg:max-w-[500px] h-auto object-contain"
            style={{ border: 'none', boxShadow: 'none', borderRadius: '0' }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
