"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { skillIcons } from "../Skills/SkillIcons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectExpander from "./ProjectExpander";
import Project from "./Project";
import { projectType } from "../../../types/projectType";
import { useIsMobile } from "../../../hooks/useIsMobile";  // Import the hook

interface ProjectLayoutProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectLayoutProps) {
  const [expandedProject] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<projectType | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handler = (e: Event) => {
      const expandProjectEvent = e as CustomEvent;
      const projectName = expandProjectEvent.detail as string;
      const targetProject = projects.find((p) => p.name == projectName);
      if (!targetProject) {
        console.warn(`Project with name "${projectName}" not found.`);
        return;
      }

      const cardId = `project-${projectName.replace(/\s+/g, "_")}`;
      const cardElement = document.getElementById(cardId);

      if (!cardElement) return;

      cardElement.scrollIntoView({ behavior: "smooth", block: "center" });

      const observer = new IntersectionObserver(
        (entries, observerInstance) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            observerInstance.disconnect();
            setTimeout(() => {
              setModalProject(targetProject);
            }, 100);
          }
        },
        { root: null, threshold: 1 }
      );

      observer.observe(cardElement);
    };

    const el = document.getElementById("__PROJECT_EXPANDER__");
    el?.addEventListener("expand-project", handler);

    return () => el?.removeEventListener("expand-project", handler);
  }, [projects]);

  return (
    <section className="bg-white py-16 px-6 text-gray-900" id="projects">
      <div id="__PROJECT_EXPANDER__" style={{ display: "none" }} />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Click a project to expand and learn more about it, or check out its Github repository!
        </p>
        <div className="grid gap-y-10 gap-x-8 md:grid-cols-2">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.name;
            const isAcademic = project.type === "academic";
            const borderColor = isAcademic ? "border-green-400" : "border-blue-400";
            const badgeColor = isAcademic ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
            const previewImage = project.imageFolder ? `${project.imageFolder}/1.png` : null;

            const showDrawer = isMobile || hoveredProject == project.name;

            return (
              <motion.div
                key={project.name}
                id={`project-${project.name.replace(/\s+/g, "_")}`}
                layoutId={`card-container-${project.name}`}
                onClick={() => setModalProject(project)}
                className={`relative border-2 ${borderColor} bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
                onMouseEnter={() => !isMobile && setHoveredProject(project.name)}
                onMouseLeave={() => !isMobile && setHoveredProject(null)}
                whileHover={!isMobile ? "hover" : undefined}
                initial="rest"
                animate="rest"
                variants={{
                  rest: {
                    y: 0,
                    scale: 1,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  },
                  hover: {
                    y: -8,
                    scale: 1.03,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  },
                }}

                whileTap={isMobile ? { scale: 0.98 } : undefined}
              >
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${badgeColor} mb-1`}>
                  {project.type.toUpperCase()}
                </span>
                <p className="text-xs text-gray-500 mb-2 italic">{project.date}</p>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      title={tech}
                      className="text-blue-700 text-xl hover:scale-110 transition-transform cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        const skillToggle = document.getElementById("__SKILL_TOGGLE__");
                        skillToggle?.dispatchEvent(new CustomEvent("toggle-skill", { detail: tech }));
                      }}
                    >
                      {skillIcons[tech] || <span className="text-xs">{tech}</span>}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-black">
                      <FaGithub className="mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                      <FaExternalLinkAlt className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>

                {isExpanded && (
                  <div className="mt-4 border-t border-gray-300 pt-4">
                    {previewImage && (
                      <Image
                        src={previewImage}
                        alt={project.name}
                        width={600}
                        height={350}
                        className="rounded mb-4 object-cover"
                      />
                    )}

                    {project.features && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-md mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.developmentDetails && (
                      <div>
                        <h4 className="font-semibold text-md mb-2">Development:</h4>
                        <p className="text-sm text-gray-700">{project.developmentDetails}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* One-liner Drawer */}
                <motion.div
                  className="absolute bottom-[-2.5rem] left-0 right-0 px-4 py-2 bg-blue-50 border-t border-blue-200 text-blue-700 font-medium rounded-b shadow-inner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: showDrawer ? 1 : 0, y: showDrawer ? 0 : 10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {project.oneLiner}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {modalProject && <ProjectExpander project={modalProject} onClose={() => setModalProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
