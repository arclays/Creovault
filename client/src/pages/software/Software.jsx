import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaDownload,
  FaRocket,
  FaCode,
  FaTools,
  FaGamepad,
  FaMobileAlt,
} from "react-icons/fa";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { motion } from "framer-motion";
import { SoftwareSearch } from "../../components/cards/software/SoftwareSearch";

export default function Software() {
  const [releaseCount, setReleaseCount] = useState(100);
  const [downloadCount, setDownloadCount] = useState(5000);
  const [activeTab, setActiveTab] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const navigate = useNavigate();

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
      "Software D",
      "Software E",
      "Software F",
      "Software G",
      "Software H",
      "Software I",
      "Software J",
      "Software K",
      "Software L",
      "Software M",
      "Software N",
      "Software O",
      "Software H",
      "Software I",
      "Software J",
      "Software K",
      "Software L",
      "Software M",
      "Software N",
      "Software O",
      "Software H",
      "Software I",
      "Software J",
      "Software K",
      "Software L",
      "Software M",
      "Software N",
      "Software O",
    ],
    Popular: [
      "Software P",
      "Software Q",
      "Software R",
      "Software P",
      "Software Q",
      "Software R",
      "Software P",
      "Software Q",
      "Software R",
    ],
    Dev: ["Software S", "Software T", "Software U"],
    Utilities: ["Software V", "Software W", "Software X"],
    Games: ["Software Y", "Software Z", "Software AA"],
    Mobile: ["Software BB", "Software CC", "Software DD"],
  };

  const currentSoftware = softwareList[activeTab].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(softwareList[activeTab].length / itemsPerPage);

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
        <SoftwareSearch />
        <p className="text-gray-300 mb-6 text-lg">
          Explore the latest, most popular software releases.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 pb-4 mb-6 border-b border-neutral-700">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveTab(category.name);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-lg text-lg flex items-center space-x-2 ${
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

        {/* Software List with Pagination */}
        <div className="p-6 bg-neutral-700 rounded-xl shadow-md w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">{activeTab} Software</h2>
          <ul className="text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentSoftware.map((software, index) => (
              <li
                key={index}
                className="p-4 bg-neutral-800 rounded-md flex flex-col items-center cursor-pointer"
                onClick={() => navigate("/software_details")}
              >
                <FaDownload className="text-5xl mb-2" />
                <span className="mb-2 font-semibold text-center">
                  {software}
                </span>
                <button
                  className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  Download
                </button>
              </li>
            ))}
          </ul>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4 space-x-2">
              <IoIosArrowDropleftCircle
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="cursor-pointer text-4xl text-neutral-600 hover:text-neutral-200"
              />
              <span className="px-4 py-2 font-extrabold rounded-lg">
                {currentPage} of {totalPages}
              </span>
              <IoIosArrowDroprightCircle
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="cursor-pointer text-4xl text-neutral-600 hover:text-neutral-200"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
