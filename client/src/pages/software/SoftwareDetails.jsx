import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaDownload, FaArrowLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SoftwareDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const softwareName = location.state?.software || "Unknown Software";

  // Mock software details
  const softwareDetails = {
    name: softwareName,
    version: "v2.3.1",
    releaseDate: "January 15, 2025",
    rating: 4.8,
    description:
      "Experience the next level of efficiency with cutting-edge technology. This software offers a seamless user experience with top-tier performance and security enhancements.",
    features: [
      "🔥 High-performance and optimized for speed",
      "🔒 Advanced security with end-to-end encryption",
      "⚡ Seamless integration with multiple platforms",
      "🎨 Intuitive and user-friendly interface",
      "📡 Cloud-based synchronization with instant updates",
      "🛠️ Extensive plugin and extension support",
      "🚀 AI-powered automation features",
    ],
    platforms: ["Windows", "Mac", "Linux"],
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-neutral-800 text-white px-4 py-2 rounded-lg flex items-center hover:bg-neutral-700 transition"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      {/* Main Content Card */}
      <motion.div
        className="w-full max-w-4xl p-8 rounded-2xl shadow-lg bg-neutral-800/60 backdrop-blur-md text-center border border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Software Title */}
        <h1 className="text-4xl font-bold mb-2">{softwareDetails.name}</h1>
        <p className="text-gray-400 text-lg mb-4">
          Version: <span className="text-white">{softwareDetails.version}</span>{" "}
          | Released on{" "}
          <span className="text-white">{softwareDetails.releaseDate}</span>
        </p>

        {/* Star Rating */}
        <div className="flex justify-center items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-yellow-400 ${
                index < Math.floor(softwareDetails.rating)
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-300">{softwareDetails.rating}/5</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-md mb-6">
          {softwareDetails.description}
        </p>

        {/* Feature List */}
        <div className="text-left mb-6 bg-neutral-700/50 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-3">Key Features:</h2>
          <ul className="list-none space-y-2 text-gray-300">
            {softwareDetails.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Download Section */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-3">Download for:</h2>
          <div className="flex justify-center gap-4">
            {softwareDetails.platforms.map((platform, index) => (
              <motion.button
                key={index}
                className="bg-neutral-700/50 px-3 md:px-6 py-3 rounded-lg text-white flex items-center space-x-2 hover:bg-transparent hover:border transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span className="text-sm md:text-md">{platform}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
