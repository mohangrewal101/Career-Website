"use client";

import { skillIcons } from "./SkillIcons";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Project from "../Projects/Project";

interface SkillsProps {
  projects: Project[];
}

export default function Skills({ projects }: SkillsProps) {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [visibleSkill, setVisibleSkill] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const dynamicAnchors: Record<string, { href: string; label: string; type: string }> = {};
  const skillToAnchorsMap: Record<string, { href: string; label: string; type: string }[]> = {};

  projects.forEach((project) => {
    const key = project.name.replace(/\s+/g, "_");
    dynamicAnchors[key] = {
      href: `#${key}`,
      label: project.name,
      type: "project",
    };

    (project.technologies || []).forEach((tech) => {
      if (!skillToAnchorsMap[tech]) {
        skillToAnchorsMap[tech] = [];
      }
      skillToAnchorsMap[tech].push(dynamicAnchors[key]);
    });
  });

  // TODO: make these experiences dynamic later too maybe
  const EXPERIENCE_SKILLS = {
    Rivian: [
      "Kotlin", "Swift", "Python", "GitLab", "Android Studio", "Xcode", "REST APIs", "Build Pipelines",
      "Linux", "JIRA", "Confluence", "Operating Systems", "Agile Development", "Environment Variables"
    ],
    EastSide_Games: [
      "C#", "Unity", "GitHub", "Game AI", "Multiplayer Integration", "Linux", "JIRA", "Confluence",
      "Operating Systems", "Agile Development", "Environment Variables"
    ]
  };

  Object.entries(EXPERIENCE_SKILLS).forEach(([expName, skills]) => {
    const key = expName.replace(/\s+/g, "_");
    dynamicAnchors[key] = {
      href: `#${key}`,
      label: expName.replace(/_/g, " "),
      type: "experience",
    };

    skills.forEach((tech) => {
      if (!skillToAnchorsMap[tech]) {
        skillToAnchorsMap[tech] = [];
      }
      skillToAnchorsMap[tech].push(dynamicAnchors[key]);
    });
  });

  const toggleSkill = (name: string) => {
    if (isAnimating) return;

    const isOpening = name !== expandedSkill && expandedSkill === null;

    if (name === expandedSkill) {
      setIsAnimating(true);
      setExpandedSkill(null);
      setTimeout(() => {
        setVisibleSkill(null);
        setIsAnimating(false);
      }, 500);
    } else {
      if (isOpening) {
        setExpandedSkill(name);
        setVisibleSkill(name);
        setTimeout(() => {
          dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      } else {
        setIsAnimating(true);
        setExpandedSkill(null);
        setTimeout(() => {
          setExpandedSkill(name);
          setVisibleSkill(name);
          setIsAnimating(false);
          setTimeout(() => {
            dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }, 500);
      }
    }
  };

  const categorizedSkills = [
    {
      category: "Languages",
      items: [
        "Java", "JavaScript", "TypeScript", "Kotlin", "Swift",
        "Python", "C#", "C", "C++", "Blueprint"
      ].map((skillName) => ({
        name: skillName,
        icon: skillIcons[skillName],
        linksTo: skillToAnchorsMap[skillName] || [],
      })),
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "FastAPI", "React", "Tailwind CSS", "Next.js", "Framer Motion",
        "Hugging Face", "ANTLR", "Z3", "Aubio", "Photon"
      ].map((skillName) => ({
        name: skillName,
        icon: skillIcons[skillName],
        linksTo: skillToAnchorsMap[skillName] || [],
      })),
    },
    {
      category: "Tools & Platforms",
      items: [
        "GitHub", "GitLab", "Android Studio", "Xcode", "IntelliJ",
        "Unity", "Unreal Engine", "JIRA", "Confluence", "Render", "Vercel"
      ].map((skillName) => ({
        name: skillName,
        icon: skillIcons[skillName],
        linksTo: skillToAnchorsMap[skillName] || [],
      })),
    },
    {
      category: "Technologies / APIs",
      items: [
        "REST APIs", "Signal Processing", "GPT-2"
      ].map((skillName) => ({
        name: skillName,
        icon: skillIcons[skillName],
        linksTo: skillToAnchorsMap[skillName] || [],
      })),
    },
    {
      category: "AI / ML",
      items: [
        "NLP", "Transformer Models", "Prompt Engineering", "Local Model Hosting"
      ].map((skillName) => ({
        name: skillName,
        icon: skillIcons[skillName],
        linksTo: skillToAnchorsMap[skillName] || [],
      })),
    },
    {
      category: "Cloud Hosting & Concepts",
      items: [
        "CORS", "Build Pipelines", "Environment Variables"
      ].map((skillName) => ({
        name: skillName,
        icon: skillIcons[skillName],
        linksTo: skillToAnchorsMap[skillName] || [],
      })),
    },
    {
      category: "General Concepts",
      items: [
        "Linux", "Operating Systems", "Static Code Analysis", "DSLs",
        "Multithreading", "Multiplayer Integration", "Game AI",
        "Agile Development", "UI Design"
      ].map((skillName) => ({
        name: skillName,
        icon: skillIcons[skillName],
        linksTo: skillToAnchorsMap[skillName] || [],
      })),
    },
  ];

  const activeSkillData = categorizedSkills
    .flatMap((section) => section.items)
    .find((skill) => skill.name === visibleSkill);

  useEffect(() => {
    const el = document.getElementById("__SKILL_TOGGLE__");
    const listener = (e: Event) => {
      const customEvent = e as CustomEvent;
      const skillName = customEvent.detail as string;
      if (!skillName || isAnimating) return;

      if (skillName === expandedSkill) {
        toggleSkill(skillName);
      } else if (expandedSkill !== null) {
        setIsAnimating(true);
        setExpandedSkill(null);
        setTimeout(() => {
          setExpandedSkill(skillName);
          setVisibleSkill(skillName);
          setIsAnimating(false);
          setTimeout(() => {
            dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }, 500);
      } else {
        toggleSkill(skillName);
      }
    };

    el?.addEventListener("toggle-skill", listener);
    return () => el?.removeEventListener("toggle-skill", listener);
  }, [expandedSkill, isAnimating]);

  return (
    <section className="bg-white py-12 px-6 text-gray-900 font-sans" id="skills">
      <div id="__SKILL_TOGGLE__" className="hidden" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Click a skill to see which projects and experiences use it!
        </p>
        {categorizedSkills.map((section) => (
          <div key={section.category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{section.category}</h3>
            <div
              className="
                grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-4 justify-start
                sm:flex sm:flex-wrap sm:gap-4 sm:justify-start
              "
            >
              {section.items.map((skill) => (
                <div
                  key={skill.name}
                  id={`skill-${skill.name.replace(/\s/g, '')}`}
                  className="
                    relative group cursor-pointer
                    flex flex-col items-center justify-start
                    min-h-[6.5rem] sm:min-h-0
                  "
                  onClick={() => toggleSkill(skill.name)}
                >
                  <div
                    className={`p-2 rounded-full transition-transform duration-300
                      ${skill.name === expandedSkill
                        ? "scale-110 bg-gray-200 shadow-md"
                        : "hover:scale-110 hover:shadow-lg"
                      }`}
                  >
                    <span className="text-3xl">{skill.icon}</span>
                  </div>
                  {/* Desktop tooltip */}
                  <div
                    className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-2
                    text-sm bg-gray-700 text-white rounded px-2 py-1
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    pointer-events-none z-20 select-none whitespace-nowrap"
                  >
                    {skill.name}
                  </div>

                  {/* Mobile Tooltip: Always visible */}
                  <div className="block sm:hidden mt-2 text-sm text-gray-700 font-medium text-center truncate w-full max-w-[5.5rem]">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          ref={dropdownRef}
          className={`transition-all duration-500 ease-in-out overflow-hidden
            ${expandedSkill ? "max-h-[1000px] opacity-100 translate-y-0 mt-6"
              : "max-h-0 opacity-0 -translate-y-4 mt-0"
            }
          `}
        >
          {activeSkillData && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 shadow-2xl border border-gray-300 hover:shadow-3xl transition-shadow duration-300 font-sans backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{activeSkillData.icon}</span>
                <h3 className="text-2xl font-extrabold">{activeSkillData.name}</h3>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold mb-2 text-left">Experiences</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {activeSkillData.linksTo
                      .filter((item) => item.type === "experience")
                      .map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setExpandedSkill(null)}
                            className="relative inline-block font-semibold text-blue-800 transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 rounded px-1"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-left">Projects</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {activeSkillData.linksTo
                      .filter((item) => item.type === "project")
                      .map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              const eventTarget = document.getElementById("__PROJECT_EXPANDER__");
                              eventTarget?.dispatchEvent(
                                new CustomEvent("expand-project", { detail: item.label })
                              );
                              setExpandedSkill(null);
                            }}
                            className="relative inline-block font-semibold text-blue-800 transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 rounded px-1"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
