// components/Projects.tsx

"use client";

import { skillIcons } from "../Skills/SkillIcons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProjectExpander from "./ProjectExpander";
import Project from "./Project";
import { projectType } from "../../../types/projectType";

const hardcodedProjects = [
  new Project({
    name: "AI Workout Planner",
    type: "personal",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-06-30"),
    description: "AI-powered workout planner that generates custom routines, exercise tips, and visual demos. Built with FastAPI, React, and AI algorithms.",
    detailedDescription: `Designed and developed a full-stack workout planner web application that leverages AI to generate personalized workout routines based on user inputs. I implemented the backend using FastAPI to handle API requests and managed AI content via K-nearest neighbours algorithm, logicstic regression, and using pandas for transformations. The frontend was built in React with Tailwind CSS to provide a responsive, user-friendly interface, including rotating fitness tips powered by logistic regression models for targeted advice. Deployed the backend and frontend on Render and Vercel respectively, enabling smooth public access and continuous integration with GitHub.`,
    technologies: ["React", "JavaScript", "Python", "Hugging Face", "FastAPI", "Tailwind CSS", "Vercel", "Render", "GPT-2", "Transformer Models", "Prompt Engineering", "Local Model Hosting"],
    github: "https://github.com/mohangrewal101/Workout-AI-Planner",
    demo: "https://workout-ai-planner-one.vercel.app/",
    date: "April 2025 – June 2025",
    imageFolder: "/AI_Workout_Planner",
    features: [
      "Custom workout generation based on muscle groups",
      "AI-powered rotating exercise tips",
      "Utilized AI algrorithms for exercise recommendations",
    ],
    developmentDetails: "Used FastAPI for backend logic and React with Tailwind for UI. Implemented kNN and logistic regression models for generating content. Deployed using Render and Vercel."
  }),
  new Project({
    name: "Guitar Guide App",
    type: "personal",
    startDate: new Date("2024-10-01"),
    endDate: new Date(), // Present
    description: "Android app to help users play songs with real-time chord recognition, tuner feedback, and practice breakdowns using signal processing.",
    detailedDescription: `Creating an Android application focused on real-time guitar chord detection using signal processing techniques with the Aubio library integrated through JNI. Developing core chord recognition logic in Kotlin and Java, with Python scripts for prototyping audio feature extraction and AI model integration to map audio to playable notes. Future implementation will include a circular tuner interface that provides instant visual feedback for tuning accuracy.`,
    technologies: ["Java", "C", "C++", "Kotlin", "Python", "Android Studio", "Aubio", "Transformer Models", "NLP", "Signal Processing", "Local Model Hosting"],
    github: "https://github.com/mohangrewal101/GuitarGuide",
    demo: "",
    date: "October 2024 – Present",
    imageFolder: "/Guitar_Guide",
    features: [
      "Real-time tuner with visual feedback",
      "Chord detection from audio input",
      "Songs broken down into chords"
    ],
    developmentDetails: "Implementing signal processing using Aubio, integrating it with Android Studio via JNI. Developing chord recognition in Kotlin and using Python for prototyping signal features."
  }),
  new Project({
    name: "Path-Reachability",
    type: "academic",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-04-30"),
    description: "Visual static analysis tool that identifies all viable execution paths in TypeScript code using Z3 to evaluate path conditions.",
    detailedDescription: `Collaborated with a team of 5 to build a static analysis tool that parses TypeScript programs and visualizes all possible execution paths to help detect logic bugs early. I was responsible for designing the parser and converting conditional statements into logical formulas compatible with the Z3 SMT solver, which evaluates path satisfiability. The tool supports variable reassignments and boolean/number conditions and presents a user-friendly UI for uploading code and viewing path results. This project enhanced program verification techniques using formal methods and automated theorem proving.`,
    technologies: ["IntelliJ", "TypeScript", "JavaScript", "React", "FastAPI", "Z3", "Static Code Analysis", "Multithreading"],
    github: "https://github.com/mohangrewal101/Path-Reachability",
    demo: "",
    date: "March 2024 – April 2024",
    imageFolder: "/Path_Reachability",
    features: [
      "Static analysis for JavaScript/TypeScript",
      "Path condition evaluation using Z3",
      "Syntax-aware highlighting of logic branches"
    ],
    developmentDetails: "Wrote a parser in TypeScript, translated conditionals into Z3 expressions, and visualized reachable branches with a custom UI."
  }),
  new Project({
    name: "Form-Builder DSL",
    type: "academic",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-02-28"),
    description: "Custom DSL for building quizzes/forms with ANTLR and the Visitor pattern to convert input into evaluable ASTs.",
    detailedDescription: `Worked in a team of 5 to design and implement a domain-specific language (DSL) aimed at simplifying quiz and form creation for educational use. My primary contribution was defining the DSL grammar using ANTLR4 and implementing the Visitor pattern in TypeScript to traverse parse trees and produce an abstract syntax tree (AST) suitable for evaluation. We iterated the DSL design through user studies to improve usability and incorporated conditional logic to make dynamic forms possible. This project bridged language theory, which is allowing us to create our own specific languages, with practical form-building applications.`,
    technologies: ["IntelliJ", "TypeScript", "ANTLR", "DSLs", "Multithreading"],
    github: "https://github.com/mohangrewal101/Form-Builder",
    demo: "",
    date: "January 2024 – February 2024",
    imageFolder: "/Form-Builder",
    features: [
      "DSL syntax for declarative form building",
      "AST construction and evaluation",
      "Supports conditional logic in forms"
    ],
    developmentDetails: "Designed grammar in ANTLR4, implemented semantic evaluation via Visitor pattern in TypeScript, and created a simple test suite."
  }),
  new Project({
    name: "Panic Titanic",
    type: "personal",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2021-03-31"),
    description: "3D multiplayer party game inspired by Among Us. Built complex voting systems and real-time player task handling using Unity RPCs.",
    detailedDescription: `Contributed to a 10-person team to develop a multiplayer 3D social deduction game inspired by Among Us, focusing on real-time networking and player interactions. I implemented the core voting mechanics using Photon RPCs to synchronize votes instantly across all players and built task management systems that update player progress live. Additionally, I helped design the player roles and minigame mechanics to create engaging gameplay loops. This project deepened my expertise in multiplayer game architecture and Unity C# development.`,
    technologies: ["Unity", "C#", "Photon", "Multiplayer Integration", "Game AI", "Agile Development"],
    github: "https://github.com/2020-21-UBC-Game-Dev-Team-3/team3-game",
    demo: "",
    date: "September 2020 – March 2021",
    imageFolder: "/Panic_Titanic",
    features: [
      "Multiplayer roles and minigame mechanics",
      "Real-time seamless gameplay and voting systems",
      "Team-based objectives and addicting gameplay loops"
    ],
    developmentDetails: "Developed in Unity with Photon RPC for multiplayer sync. Designed gameplay loop, player roles, and implemented minigame logic.",
    awards: ["Audience Choice Award - UBC Game Dev 2021", "Best Audio Award - UBC Game Dev 2021"]
  }),
  new Project({
    name: "AI Demo Test",
    type: "personal",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-09-30"),
    description: "Unreal Engine 4 project demonstrating AI state management and behavior switching using both C++ and Blueprint.",
    detailedDescription: `Created an AI demonstration project in Unreal Engine 4 combining C++ and Blueprint scripting to manage complex AI behaviors. I architected five distinct AI states and implemented smooth transitions between them using finite state machines in C++, as mathematical calculations. Blueprint was used an abstraction for tweaking behavior parameters, integrating colliders to influence AI decisions based on player proximity and positions. This project improved my skills in game AI programming and Unreal’s hybrid development workflows.`,
    technologies: ["Unreal Engine", "C++", "Blueprint", "Game AI"],
    github: "https://github.com/mohangrewal101/ThirdPersonCombat",
    demo: "",
    date: "July 2021 – September 2022",
    imageFolder: "/AI_Demo_Test",
    features: [
      "Finite state machine AI",
      "Behavior tree switching",
      "Integration of C++ with Blueprint logic"
    ],
    developmentDetails: "Implemented state transitions using C++ inheritance. Used Unreal’s visual scripting engine, Blueprint, for rapid iteration of AI behavior logic."
  }),
  new Project({
    name: "Roguelike",
    type: "personal",
    startDate: new Date("2019-09-01"),
    endDate: new Date("2020-03-31"),
    description: "Classic roguelike built in Unity with asynchronous combat, animation handling, and modular code using SOLID principles.",
    detailedDescription: `Developed a roguelike game in Unity focused on procedural dungeon generation and asynchronous combat mechanics. I implemented smooth player movement and attack animations using Unity’s Animator system and controlled asynchronous game flow with coroutines. The player was able to smoothly be controlled with gameplay being controlled by their speed and acceleration. The codebase was architected with SOLID principles, including single reponsibility principle with low coupling and high cohesion, to maintain modularity, allowing seamless addition of new enemy types and mechanics. This project was key to honing my skills in game development, design patterns, and animation integration.`,
    technologies: ["Unity", "C#", "Game AI", "Agile Development"],
    github: "https://github.com/gwck/cultyroguelike.git",
    demo: "",
    date: "September 2019 – March 2020",
    imageFolder: "/Roguelike",
    features: [
      "Procedural dungeon generation",
      "Gameplay based around speed and timing",
      "Modular character and enemy classes"
    ],
    developmentDetails: "Built using Unity's tilemap system and coroutines for asynchronous gameplay. Applied SOLID principles to keep entities decoupled and reusable.",
    awards: ["Best Gameplay Award - UBC Game Dev 2020",]
  })
];



export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(hardcodedProjects);
  const [expandedProject] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<projectType | null>(null);



  // Fetch dynamic GitHub projects
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/fetchProjects");
        if (!res.ok) {
          console.error("Failed to fetch portfolio projects");
          return;
        }
        const dynamicRepos = await res.json();

        const dynamicProjects = dynamicRepos.map((repo: any) => {
          return new Project({
            name: repo.name,
            type: repo.type || "personal",
            startDate: repo.startDate ? new Date(repo.startDate) : new Date(repo.created_at),
            endDate: repo.endDate ? new Date(repo.endDate) : new Date(repo.updated_at),
            description: repo.description || "No description provided.",
            detailedDescription: repo.detailedDescription || "",
            technologies: repo.technologies || [],
            github: repo.github,
            demo: repo.demo || "",
            date: `${repo.startDate || new Date(repo.created_at).toLocaleDateString()} – ${repo.endDate || "Present"}`,
            imageFolder: repo.imageFolder || "",
            features: repo.features || [],
            developmentDetails: repo.developmentDetails || "",
          });
        });

        // Merge hardcoded projects with dynamic ones
        setProjects((prev) => {
          const existingNames = new Set(prev.map(p => p.name));
          const filteredDynamic = dynamicProjects.filter((dp: { name: string; }) => !existingNames.has(dp.name));
          return [...prev, ...filteredDynamic];
        });
      } catch (error) {
        console.error("Error fetching dynamic projects: ", error);
      }
    }
    fetchProjects();
  }, []);


  // Sort projects
  const sortedProjects = [...projects].sort((a, b) => {
    const endA = a.getEndTimeForSort();
    const endB = b.getEndTimeForSort();

    if (endA !== endB) {
      return endB - endA;
    }

    return b.getStartTimeForSort() - a.getStartTimeForSort();
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const expandProjectEvent = e as CustomEvent;
      const projectName = expandProjectEvent.detail as string;

      const targetProject = projects.find((p) => p.name === projectName);
      if (!targetProject) return;

      const cardId = `project-${projectName.replace(/\s/g, "")}`;
      const cardElement = document.getElementById(cardId);
      if (!cardElement) return;

      // Scroll to card
      cardElement.scrollIntoView({ behavior: "smooth", block: "center" });

      // Wait until the element is fully in view
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
        {
          root: null,
          threshold: 1,
        }
      );

      observer.observe(cardElement);
    };

    const el = document.getElementById("__PROJECT_EXPANDER__");
    el?.addEventListener("expand-project", handler);

    return () => el?.removeEventListener("expand-project", handler);
  }, []);


  return (
    <section className="bg-white py-16 px-6 text-gray-900" id="projects">
      <div id="__PROJECT_EXPANDER__" style={{ display: "none" }} />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {sortedProjects.map((project) => {
            const isExpanded = expandedProject === project.name;
            const isAcademic = project.type === "academic";
            const borderColor = isAcademic ? "border-green-400" : "border-blue-400";
            const badgeColor = isAcademic ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
            const previewImage = project.imageFolder ? `${project.imageFolder}/1.png` : null;


            return (
              <motion.div
                key={project.name}
                id={`project-${project.name.replace(/\s/g, "")}`}
                layoutId={`card-container-${project.name}`}
                onClick={() => setModalProject(project)}
                className={`border-2 ${borderColor} bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
              >
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${badgeColor} mb-1`}>
                  {project.type.toUpperCase()}
                </span>
                <p className="text-xs text-gray-500 mb-2 italic">{project.date}</p>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">

                  {project.technologies.map((tech) => {
                    return (
                      <span
                        key={tech}
                        title={tech}
                        className="text-blue-700 text-xl hover:scale-110 transition-transform cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent click from toggling project expansion
                          // Trigger custom skill toggle event in Skills.tsx
                          const skillToggle = document.getElementById("__SKILL_TOGGLE__");
                          skillToggle?.dispatchEvent(
                            new CustomEvent("toggle-skill", { detail: tech })
                          );
                        }}>
                        {skillIcons[tech] || <span className="text-xs">{tech}</span>}
                      </span>
                    );
                  })}
                </div>
                <div className="flex space-x-4">

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
              </motion.div>
            )
          })}
        </div>
      </div>
      <AnimatePresence>
        {modalProject && (
          <ProjectExpander
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
