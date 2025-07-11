// This file is part of the portfolio project and is used to render the portfolio page.
// It fetches both hardcoded and dynamic projects, sorts them, and displays them on the correct sections
"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Projects/Project";
import ProjectLayout from "@/components/Projects/ProjectLayout";
import Extras from "@/components/Extras/Extras";

const hardcodedProjects = [
  new Project({
    name: "AI Workout Planner",
    type: "personal",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-06-30"),
    description: "AI-powered workout planner that generates custom routines, exercise tips, and visual demos. Built with FastAPI, React, and AI algorithms.",
    detailedDescription: `Designed and developed a full-stack workout planner web application that leverages AI to generate personalized workout routines based on user inputs. I implemented the backend using FastAPI to handle API requests and managed AI content via K-nearest neighbours algorithm, logicstic regression, and using pandas for transformations. The frontend was built in React with Tailwind CSS to provide a responsive, user-friendly interface, including rotating fitness tips powered by logistic regression models for targeted advice. Deployed the backend and frontend on Render and Vercel respectively, enabling smooth public access and continuous integration with GitHub.`,
    technologies: ["React", "JavaScript", "Python", "GitHub", "Hugging Face", "FastAPI", "Tailwind CSS", "Vercel", "Render", "GPT-2", "CORS", "Transformer Models", "Prompt Engineering", "Local Model Hosting"],
    github: "https://github.com/mohangrewal101/Workout-AI-Planner",
    demo: "",
    date: "April 2025 – June 2025",
    imageFolder: "/AI_Workout_Planner",
    features: [
      "Custom workout generation based on muscle groups",
      "AI-powered rotating exercise tips",
      "Utilized AI algrorithms for exercise recommendations",
    ],
    developmentDetails: "Used FastAPI for backend logic and React with Tailwind for UI. Implemented kNN and logistic regression models for generating content. Deployed using Render and Vercel.",
    oneLiner: "Your AI fitness coach in a click 💪"
  }),
  new Project({
    name: "Guitar Guide App",
    type: "personal",
    startDate: new Date("2024-10-01"),
    endDate: new Date(), // Present
    description: "Android app to help users play songs with real-time chord recognition, tuner feedback, and practice breakdowns using signal processing.",
    detailedDescription: `Creating an Android application focused on real-time guitar chord detection using signal processing techniques with the Aubio library integrated through JNI. Developing core chord recognition logic in Kotlin and Java, with Python scripts for prototyping audio feature extraction and AI model integration to map audio to playable notes. Future implementation will include a circular tuner interface that provides instant visual feedback for tuning accuracy.`,
    technologies: ["Java", "C", "C++", "Kotlin", "Python", "Android Studio", "Aubio", "GitHub", "Transformer Models", "NLP", "Signal Processing", "Local Model Hosting"],
    github: "https://github.com/mohangrewal101/GuitarGuide",
    demo: "",
    date: "October 2024 – Present",
    imageFolder: "/Guitar_Guide",
    features: [
      "Real-time tuner with visual feedback",
      "Chord detection from audio input",
      "Songs broken down into chords"
    ],
    developmentDetails: "Implementing signal processing using Aubio, integrating it with Android Studio via JNI. Developing chord recognition in Kotlin and using Python for prototyping signal features.",
    oneLiner: "Play any song on guitar with this chord recognition app! 🎸"
  }),
  new Project({
    name: "Path-Reachability",
    type: "academic",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-04-30"),
    description: "Visual static analysis tool that identifies all viable execution paths in TypeScript code using Z3 to evaluate path conditions.",
    detailedDescription: `Collaborated with a team of 5 to build a static analysis tool that parses TypeScript programs and visualizes all possible execution paths to help detect logic bugs early. I was responsible for designing the parser and converting conditional statements into logical formulas compatible with the Z3 SMT solver, which evaluates path satisfiability. The tool supports variable reassignments and boolean/number conditions and presents a user-friendly UI for uploading code and viewing path results. This project enhanced program verification techniques using formal methods and automated theorem proving.`,
    technologies: ["IntelliJ", "TypeScript", "JavaScript", "React", "FastAPI", "GitHub", "Z3", "Static Code Analysis", "Multithreading"],
    github: "https://github.com/mohangrewal101/Path-Reachability",
    demo: "",
    date: "March 2024 – April 2024",
    imageFolder: "/Path_Reachability",
    features: [
      "Static analysis for JavaScript/TypeScript",
      "Path condition evaluation using Z3",
      "Syntax-aware highlighting of logic branches"
    ],
    developmentDetails: "Wrote a parser in TypeScript, translated conditionals into Z3 expressions, and visualized reachable branches with a custom UI.",
    oneLiner: "Visualize all execution paths in your TypeScript code! 🛤️"
  }),
  new Project({
    name: "Form-Builder DSL",
    type: "academic",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-02-28"),
    description: "Custom DSL for building quizzes/forms with ANTLR and the Visitor pattern to convert input into evaluable ASTs.",
    detailedDescription: `Worked in a team of 5 to design and implement a domain-specific language (DSL) aimed at simplifying quiz and form creation for educational use. My primary contribution was defining the DSL grammar using ANTLR4 and implementing the Visitor pattern in TypeScript to traverse parse trees and produce an abstract syntax tree (AST) suitable for evaluation. We iterated the DSL design through user studies to improve usability and incorporated conditional logic to make dynamic forms possible. This project bridged language theory, which is allowing us to create our own specific languages, with practical form-building applications.`,
    technologies: ["IntelliJ", "TypeScript", "ANTLR", "GitHub", "DSLs", "Multithreading"],
    github: "https://github.com/mohangrewal101/Form-Builder",
    demo: "",
    date: "January 2024 – February 2024",
    imageFolder: "/Form-Builder",
    features: [
      "DSL syntax for declarative form building",
      "AST construction and evaluation",
      "Supports conditional logic in forms"
    ],
    developmentDetails: "Designed grammar in ANTLR4, implemented semantic evaluation via Visitor pattern in TypeScript, and created a simple test suite.",
    oneLiner: "Short on time? Build forms and quizzes in minutes with a custom DSL! 📝"
  }),
  new Project({
    name: "Panic Titanic",
    type: "personal",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2021-03-31"),
    description: "3D multiplayer party game inspired by Among Us. Built complex voting systems and real-time player task handling using Unity RPCs.",
    detailedDescription: `Contributed to a 10-person team to develop a multiplayer 3D social deduction game inspired by Among Us, focusing on real-time networking and player interactions. I implemented the core voting mechanics using Photon RPCs to synchronize votes instantly across all players and built task management systems that update player progress live. Additionally, I helped design the player roles and minigame mechanics to create engaging gameplay loops. This project deepened my expertise in multiplayer game architecture and Unity C# development.`,
    technologies: ["Unity", "C#", "Photon", "GitHub", "Multiplayer Integration", "Game AI", "Agile Development"],
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
    awards: ["Audience Choice Award - UBC Game Dev 2021", "Best Audio Award - UBC Game Dev 2021"],
    oneLiner: "Among Us meets Titanic in this 3D multiplayer party game! 🚢"
  }),
  new Project({
    name: "AI Demo Test",
    type: "personal",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-09-30"),
    description: "Unreal Engine 4 project demonstrating AI state management and behavior switching using both C++ and Blueprint.",
    detailedDescription: `Created an AI demonstration project in Unreal Engine 4 combining C++ and Blueprint scripting to manage complex AI behaviors. I architected five distinct AI states and implemented smooth transitions between them using finite state machines in C++, as mathematical calculations. Blueprint was used an abstraction for tweaking behavior parameters, integrating colliders to influence AI decisions based on player proximity and positions. This project improved my skills in game AI programming and Unreal’s hybrid development workflows.`,
    technologies: ["Unreal Engine", "C++", "Blueprint", "GitHub", "Game AI"],
    github: "https://github.com/mohangrewal101/ThirdPersonCombat",
    demo: "",
    date: "July 2021 – September 2022",
    imageFolder: "/AI_Demo_Test",
    features: [
      "Finite state machine AI",
      "Behavior tree switching",
      "Integration of C++ with Blueprint logic"
    ],
    developmentDetails: "Implemented state transitions using C++ inheritance. Used Unreal’s visual scripting engine, Blueprint, for rapid iteration of AI behavior logic.",
    oneLiner: "Understand AI state management in Unreal Engine with this demo! 🤖"
  }),
  new Project({
    name: "Roguelike",
    type: "personal",
    startDate: new Date("2019-09-01"),
    endDate: new Date("2020-03-31"),
    description: "Classic roguelike built in Unity with asynchronous combat, animation handling, and modular code using SOLID principles.",
    detailedDescription: `Developed a roguelike game in Unity focused on procedural dungeon generation and asynchronous combat mechanics. I implemented smooth player movement and attack animations using Unity’s Animator system and controlled asynchronous game flow with coroutines. The player was able to smoothly be controlled with gameplay being controlled by their speed and acceleration. The codebase was architected with SOLID principles, including single reponsibility principle with low coupling and high cohesion, to maintain modularity, allowing seamless addition of new enemy types and mechanics. This project was key to honing my skills in game development, design patterns, and animation integration.`,
    technologies: ["Unity", "C#", "GitHub", "Game AI", "Agile Development"],
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
    awards: ["Best Gameplay Award - UBC Game Dev 2020",],
    oneLiner: "Experience fast-paced roguelike combat with this Unity game! ⚔️"
  })
];


export default function PortfolioPage() {

  const [unsortedProjects, setAllProjects] = useState<Project[]>(hardcodedProjects);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/fetchProjects");
        if (!res.ok) throw new Error("Failed to fetch dynamic projects");
        const dynamicRepos = await res.json();

        const dynamicProjects = dynamicRepos.map((repo: any) =>
          new Project({
            name: repo.name.replace(/^"(.*)"$/, "$1"), // Remove outer quotes if present
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
            oneLiner: repo.oneLiner || "Click me!",
          })
        );

        setAllProjects((prev) => {
          const existingNames = new Set(prev.map((p) => p.name));
          const filteredDynamic = dynamicProjects.filter((dp: { name: string }) => !existingNames.has(dp.name));
          return [...prev, ...filteredDynamic];
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProjects();
  }, []);

  // Sort projects
  const allProjects = [...unsortedProjects].sort((a, b) => {
    const endA = a.getEndTimeForSort();
    const endB = b.getEndTimeForSort();

    if (endA !== endB) {
      return endB - endA;
    }

    return b.getStartTimeForSort() - a.getStartTimeForSort();
  });


  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <Hero />
      <About />
      <Experience />
      <Skills projects={allProjects} />
      <ProjectLayout key={allProjects.length} projects={allProjects} />
      <Extras />
    </main>
  );
}
