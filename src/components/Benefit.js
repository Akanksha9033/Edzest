import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Engaging Learning",
      description: "Reduces monotony and makes learning enjoyable.",
      icon: "https://cdn-icons-png.flaticon.com/512/7628/7628788.png", // chart / stats 3D
    },
    {
      title: "Immersive Learning",
      description: "Engages multiple senses making learning active and effective.",
      icon: "https://cdn-icons-png.flaticon.com/512/6989/6989180.png", // VR headset / immersion
    },
    {
      title: "Accelerated Learning",
      description: "Helps grasp concepts faster and retain information longer.",
      icon: "https://cdn-icons-png.flaticon.com/512/7328/7328753.png", // rocket/boost 3D
    },
    {
      title: "Developing Critical Thinking",
      description: "Encourages critical thinking, decision making, and problem solving skills.",
      icon: "https://cdn-icons-png.flaticon.com/512/7963/7963911.png", // target/dart 3D
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Benefits of Practical Learning
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600" style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
