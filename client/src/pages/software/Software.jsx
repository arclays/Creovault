import React, { useState, useEffect } from "react";
import {
  FaDownload,
  FaRocket,
  FaCode,
  FaTools,
  FaGamepad,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Software() {
  const [releaseCount, setReleaseCount] = useState(100);
  const [downloadCount, setDownloadCount] = useState(5000);
  const [activeTab, setActiveTab] = useState("Latest");

  useEffect(() => {
    const interval = setInterval(() => {
      setReleaseCount((prev) => prev + 1);
      setDownloadCount((prev) => prev + Math.floor(Math.random() * 10));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "Latest", icon: <FaRocket /> },
    { name: "Popular", icon: <FaDownload /> },
    { name: "Dev", icon: <FaCode /> },
    { name: "Utilities", icon: <FaTools /> },
    { name: "Games", icon: <FaGamepad /> },
    { name: "Mobile", icon: <FaMobileAlt /> },
  ];

  const softwareList = {
    Latest: [
      "Software A",
      "Software B",
      "Software C",
      "Software C",
      "Software A",
      "Software B",
      "Software C",
      "Software C",
      "Software B",
      "Software C",
      "Software C",
      "Software A",
      "Software B",
      "Software C",
      "Software C",
    ],
    Popular: ["Software D", "Software E", "Software F"],
    Dev: ["Software G", "Software H", "Software I"],
    Utilities: ["Software J", "Software K", "Software L"],
    Games: ["Software M", "Software N", "Software O"],
    Mobile: ["Software P", "Software Q", "Software R"],
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl p-8 rounded shadow-lg bg-neutral-800 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Our Software Hub
        </motion.h1>
        <p className="text-gray-300 mb-6 text-lg">
          Explore the latest, most popular software releases. Download for
          Windows, Mac, Linux, or Mobile.
        </p>
        <div className="flex justify-center space-x-4 mb-6 relative">
          <select className="bg-neutral-700 text-white px-4 py-2 rounded cursor-pointer">
            <option>Windows</option>
            <option>Mac</option>
            <option>Linux</option>
            <option>Mobile</option>
          </select>
        </div>
        {/* Tabs for Categories */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-neutral-700 pb-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`px-6 py-2 rounded-lg text-lg flex items-center space-x-2 flex-1 min-w-[45%] sm:min-w-0 ${
                activeTab === category.name
                  ? "bg-blue-600"
                  : "bg-neutral-700 hover:bg-neutral-600"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        {/* Display selected category with software list */}
        <div className="p-6 bg-neutral-700 rounded-xl shadow-md w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">{activeTab} Software</h2>
          <ul className="text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareList[activeTab].map((software, index) => (
              <li
                key={index}
                className="p-4 bg-neutral-800 rounded-md flex flex-col items-center"
              >
                <FaDownload className="text-5xl mb-2" />{" "}
                {/* Increased icon size */}
                <span className="mb-2 font-semibold text-center">
                  {software}
                </span>
                <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-500 flex items-center">
                  <FaDownload className="mr-2" /> Download
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Counters */}
        <div className="flex flex-wrap justify-around text-lg font-semibold mt-6 w-full max-w-4xl mx-auto">
          <div className="bg-neutral-700 p-6 rounded-lg flex flex-col items-center w-full sm:w-1/2 md:w-1/4 mb-4">
            {" "}
            {/* Adjusted width and margin */}
            <span className="text-2xl">{releaseCount}</span>
            <p className="text-sm">New Releases</p>
          </div>
          <div className="bg-neutral-700 p-6 rounded-lg flex flex-col items-center w-full sm:w-1/2 md:w-1/4 mb-4">
            {" "}
            {/* Adjusted width and margin */}
            <span className="text-2xl">{downloadCount}</span>
            <p className="text-sm">Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
}
