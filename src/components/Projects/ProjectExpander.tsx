"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillIcons } from "../Skills/SkillIcons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectType } from "../../../types/projectType";
import Image from "next/image";

interface Props {
  project: projectType;
  onClose: () => void;
}

export default function ProjectExpander({ project, onClose }: Props) {
  const isAcademic = project.type === "academic";
  const borderColor = isAcademic ? "border-green-400" : "border-blue-400";
  const badgeColor = isAcademic ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [imageUrlsLoaded, setImageUrlsLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  console.log("Direction:", direction); // Reset direction to "right" when the component mounts

  useEffect(() => {
    const tryImages = async () => {
      const folder = project.imageFolder;
      const maxImagesToTry = 3;
      const found: string[] = [];

      for (let i = 1; i <= maxImagesToTry; i++) {
        const path = `${folder}/${i}.png`;
        try {
          const res = await fetch(path, { method: "HEAD" });
          if (res.ok) {
            found.push(path);
          } else {
            break;
          }
        } catch {
          break;
        }
      }

      setValidImages(found);
      setCurrentImageIndex(0);
      setImageUrlsLoaded(true);
    };

    if (project.imageFolder) {
      tryImages();
    }
  }, [project.imageFolder]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 backdrop-blur-sm bg-transparent flex items-center justify-center px-4"
        key="backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Always render the container for layoutId animation */}
      <motion.div
        layoutId={`card-container-${project.name}`}
        className={`fixed z-50 top-1/2 left-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-6 transform -translate-x-1/2 -translate-y-1/2 border-2 ${borderColor}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {!imageUrlsLoaded ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400" />
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-4 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-1">{project.name}</h2>
                <p className="text-sm text-gray-500 italic">{project.date}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded ${badgeColor}`}>
                {project.type.toUpperCase()}
              </span>
            </div>

            {/* Technologies */}
            {project.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    title={tech}
                    className="text-blue-700 text-2xl hover:scale-110 transition-transform"
                    onClick={() => {
                      const skillToggle = document.getElementById("__SKILL_TOGGLE__");
                      skillToggle?.dispatchEvent(
                        new CustomEvent("toggle-skill", { detail: tech })
                      );
                      onClose(); // Close the modal immediately
                    }}
                  >
                    {skillIcons[tech] || <span className="text-xs">{tech}</span>}
                  </span>
                ))}
              </div>
            )}

            {/* Image */}
            <div className="relative w-full mb-6 select-none">
              <AnimatePresence mode="wait" initial={false}>
                {imageUrlsLoaded && validImages.length > 0 && (
                  <motion.div
                    key={validImages[currentImageIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="relative w-full"
                    onLoad={() => setIsImageLoaded(true)}
                  >
                    <Image
                      src={validImages[currentImageIndex]}
                      alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                      width={800}
                      height={600}
                      className="rounded w-full h-auto object-contain transition-opacity duration-500"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Spinner while loading image */}
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400" />
                </div>
              )}

              {/* Image navigation */}
              {validImages.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:scale-110 hover:bg-gray-100 transition-all duration-200 z-10 opacity-80 hover:opacity-100"
                    onClick={() => {
                      setIsImageLoaded(false);
                      setDirection("left");
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? validImages.length - 1 : prev - 1
                      );
                    }}
                    aria-label="Previous Image"
                  >
                    <span className="text-2xl font-bold">‹</span>
                  </button>
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:scale-110 hover:bg-gray-100 transition-all duration-200 z-10 opacity-80 hover:opacity-100"
                    onClick={() => {
                      setIsImageLoaded(false);
                      setDirection("right");
                      setCurrentImageIndex((prev) =>
                        prev === validImages.length - 1 ? 0 : prev + 1
                      );
                    }}
                    aria-label="Next Image"
                  >
                    <span className="text-2xl font-bold">›</span>
                  </button>
                </>
              )}
            </div>

            {/* Description and details */}
            <p className="text-gray-800 mb-2">{project.description}</p>

            {project.detailedDescription && (
              <p className="text-gray-700 text-sm mb-4 whitespace-pre-line">
                {project.detailedDescription}
              </p>
            )}

            {Array.isArray(project.features) && project.features.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {project.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.developmentDetails && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Development:</h3>
                <p className="text-sm text-gray-700">{project.developmentDetails}</p>
              </div>
            )}

            {project.awards && project.awards.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1 text-yellow-700">Awards:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                  {project.awards.map((award, idx) => (
                    <li key={idx}>🏆 {award}</li>
                  ))}
                </ul>
              </div>
            )}


            {/* Links */}
            <div className="flex space-x-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-black"
                >
                  <FaGithub className="mr-1" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-1" />
                  Live Demo
                </a>
              )}
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
