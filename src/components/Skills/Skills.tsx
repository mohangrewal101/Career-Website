// Skills.tsx
// This is a client component for the Skills section of the portfolio page
// It includes a list of skills with icons and links to relevant projects or experiences.


"use client";

import { skillIcons } from "./SkillIcons";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const ANCHORS = {
  AIWorkoutPlanner: { href: "#AI_Workout_Planner", label: "AI Workout Planner", type: "project" },
  GuitarGuideApp: { href: "#Guitar_Guide_App", label: "Guitar Guide App", type: "project" },
  PathReachability: { href: "#Path-Reachability", label: "Path-Reachability", type: "project" },
  FormBuilder: { href: "#Form-Builder_DSL", label: "Form-Builder DSL", type: "project" },
  PanicTitanic: { href: "#Panic_Titanic", label: "Panic Titanic", type: "project" },
  AIDemoTest: { href: "#AI_Demo_Test", label: "AI Demo Test", type: "project" },
  Roguelike: { href: "#Roguelike", label: "Roguelike", type: "project" },
  Rivian: { href: "#Rivian", label: "Rivian", type: "experience" },
  EastSideGames: { href: "#East_Side_Games", label: "East Side Games", type: "experience" }
};

const PROJECT_SKILLS = {
  AIWorkoutPlanner: [
    "React", "JavaScript", "Python", "Hugging Face", "FastAPI", "Tailwind CSS", "Vercel", "Render", "GPT-2", "GitHub", "Next.js", "UI Design", "Transformer Models", "Prompt Engineering", "Local Model Hosting"
  ],
  GuitarGuideApp: [
    "Java", "C", "C++", "Kotlin", "Python", "Android Studio", "Aubio", "GitHub", "Transformer Models", "NLP", "Signal Processing", "Local Model Hosting"
  ],
  PathReachability: [
    "IntelliJ", "TypeScript", "JavaScript", "React", "FastAPI", "Z3", "GitHub", "Static Code Analysis", "Multithreading"
  ],
  FormBuilder: [
    "IntelliJ", "TypeScript", "ANTLR", "DSLs", "GitHub", "Multithreading"
  ],
  PanicTitanic: [
    "Unity", "C#", "Photon", "GitHub", "Multiplayer Integration", "Game AI", "Agile Development"
  ],
  AIDemoTest: [
    "Unreal Engine", "C++", "Blueprint", "GitHub", "Game AI"
  ],
  Roguelike: [
    "Unity", "C#", "Game AI", "GitHub", "Agile Development"
  ]
};

const EXPERIENCE_SKILLS = {
  Rivian: [
    "Kotlin", "Swift", "Python", "GitLab", "Android Studio", "Xcode", "REST APIs", "Build Pipelines", "Linux", "JIRA", "Confluence", "Operating Systems", "Agile Development", "Environment Variables"
  ],
  EastSideGames: [
    "C#", "Unity", "GitHub", "Game AI", "Multiplayer Integration", "Linux", "JIRA", "Confluence", "Operating Systems", "Agile Development", "Environment Variables"
  ]
};

// Helper to get anchor for a project/experience by skill name
function getAnchorsForSkill(skillName: string) {
  const anchors: { href: string; label: string; type: string }[] = [];

  // Projects
  for (const [projectKey, skills] of Object.entries(PROJECT_SKILLS)) {
    if (skills.includes(skillName)) {
      anchors.push(ANCHORS[projectKey as keyof typeof ANCHORS]);
    }
  }
  // Experiences
  for (const [expKey, skills] of Object.entries(EXPERIENCE_SKILLS)) {
    if (skills.includes(skillName)) {
      anchors.push(ANCHORS[expKey as keyof typeof ANCHORS]);
    }
  }
  return anchors;
}

const skills = [
  {
    category: "Languages",
    items: [
      {
        name: "Java", icon: skillIcons["Java"], linksTo: [
          ...getAnchorsForSkill("Java")
        ]
      },
      {
        name: "JavaScript", icon: skillIcons["JavaScript"], linksTo: [
          ...getAnchorsForSkill("JavaScript")
        ]
      },
      {
        name: "TypeScript", icon: skillIcons["TypeScript"], linksTo: [
          ...getAnchorsForSkill("TypeScript")
        ]
      },
      {
        name: "Kotlin", icon: skillIcons["Kotlin"], linksTo: [
          ...getAnchorsForSkill("Kotlin")
        ]
      },
      {
        name: "Swift", icon: skillIcons["Swift"], linksTo: [
          ...getAnchorsForSkill("Swift")
        ]
      },
      {
        name: "Python", icon: skillIcons["Python"], linksTo: [
          ...getAnchorsForSkill("Python")
        ]
      },
      {
        name: "C#", icon: skillIcons["C#"], linksTo: [
          ...getAnchorsForSkill("C#")
        ]
      },
      {
        name: "C", icon: skillIcons["C"], linksTo: [
          ...getAnchorsForSkill("C")
        ]
      },
      {
        name: "C++", icon: skillIcons["C++"], linksTo: [
          ...getAnchorsForSkill("C++")
        ]
      },
      {
        name: "Blueprint", icon: skillIcons["Blueprint"], linksTo: [
          ...getAnchorsForSkill("Blueprint")
        ]
      }
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        name: "FastAPI", icon: skillIcons["FastAPI"], linksTo: [
          ...getAnchorsForSkill("FastAPI")
        ]
      },
      {
        name: "React", icon: skillIcons["React"], linksTo: [
          ...getAnchorsForSkill("React")
        ]
      },
      {
        name: "Tailwind CSS", icon: skillIcons["Tailwind CSS"], linksTo: [
          ...getAnchorsForSkill("Tailwind CSS")
        ]
      },
      {
        name: "Next.js", icon: skillIcons["Next.js"], linksTo: [
          ...getAnchorsForSkill("Next.js")
        ]
      },
      {
        name: "Framer Motion", icon: skillIcons["Framer Motion"], linksTo: [
          ...getAnchorsForSkill("Framer Motion")
        ]
      },
      {
        name: "Hugging Face", icon: skillIcons["Hugging Face"], linksTo: [
          ...getAnchorsForSkill("Hugging Face")
        ]
      },
      {
        name: "ANTLR", icon: skillIcons["ANTLR"], linksTo: [
          ...getAnchorsForSkill("ANTLR")
        ]
      },
      {
        name: "Z3", icon: skillIcons["Z3"], linksTo: [
          ...getAnchorsForSkill("Z3")
        ]
      },
      {
        name: "Aubio", icon: skillIcons["Aubio"], linksTo: [
          ...getAnchorsForSkill("Aubio")
        ]
      },
      {
        name: "Photon", icon: skillIcons["Photon"], linksTo: [
          ...getAnchorsForSkill("Photon")
        ]
      }
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      {
        name: "GitHub", icon: skillIcons["GitHub"], linksTo: [
          ...getAnchorsForSkill("GitHub")
        ]
      },
      {
        name: "GitLab", icon: skillIcons["GitLab"], linksTo: [
          ...getAnchorsForSkill("GitLab")
        ]
      },
      {
        name: "Android Studio", icon: skillIcons["Android Studio"], linksTo: [
          ...getAnchorsForSkill("Android Studio")
        ]
      },
      {
        name: "Xcode", icon: skillIcons["Xcode"], linksTo: [
          ...getAnchorsForSkill("Xcode")
        ]
      },
      {
        name: "IntelliJ", icon: skillIcons["IntelliJ"], linksTo: [
          ...getAnchorsForSkill("IntelliJ")
        ]
      },
      {
        name: "Unity", icon: skillIcons["Unity"], linksTo: [
          ...getAnchorsForSkill("Unity")
        ]
      },
      {
        name: "Unreal Engine", icon: skillIcons["Unreal Engine"], linksTo: [
          ...getAnchorsForSkill("Unreal Engine")
        ]
      },
      {
        name: "JIRA", icon: skillIcons["JIRA"], linksTo: [
          ...getAnchorsForSkill("JIRA")
        ]
      },
      {
        name: "Confluence", icon: skillIcons["Confluence"], linksTo: [
          ...getAnchorsForSkill("Confluence")
        ]
      },
      {
        name: "Render", icon: skillIcons["Render"], linksTo: [
          ...getAnchorsForSkill("Render")
        ]
      },
      {
        name: "Vercel", icon: skillIcons["Vercel"], linksTo: [
          ...getAnchorsForSkill("Vercel")
        ]
      },
    ],
  },
  {
    category: "Technologies / APIs",
    items: [
      {
        name: "REST APIs", icon: skillIcons["REST APIs"], linksTo: [
          ...getAnchorsForSkill("REST APIs")
        ]
      },
      {
        name: "Signal Processing", icon: skillIcons["Signal Processing"], linksTo: [
          ...getAnchorsForSkill("Signal Processing")
        ]
      },
      {
        name: "GPT-2", icon: skillIcons["GPT-2"], linksTo: [
          ...getAnchorsForSkill("GPT-2")
        ]
      },
    ],
  },
  {
    category: "AI / ML",
    items: [
      {
        name: "NLP", icon: skillIcons["NLP"], linksTo: [
          ...getAnchorsForSkill("NLP")
        ]
      },
      {
        name: "Transformer Models", icon: skillIcons["Transformer Models"], linksTo: [
          ...getAnchorsForSkill("Transformer Models")
        ]
      },
      {
        name: "Prompt Engineering", icon: skillIcons["Prompt Engineering"], linksTo: [
          ...getAnchorsForSkill("Prompt Engineering")
        ]
      },
      {
        name: "Local Model Hosting", icon: skillIcons["Local Model Hosting"], linksTo: [
          ...getAnchorsForSkill("Local Model Hosting")
        ]
      },
    ],
  },
  {
    category: "Cloud Hosting & Concepts",
    items: [
      {
        name: "CORS", icon: skillIcons["CORS"], linksTo: [
          ...getAnchorsForSkill("CORS")
        ]
      },
      {
        name: "Build Pipelines", icon: skillIcons["Build Pipelines"], linksTo: [
          ...getAnchorsForSkill("Build Pipelines")
        ]
      },
      {
        name: "Environment Variables", icon: skillIcons["Environment Variables"], linksTo: [
          ...getAnchorsForSkill("Environment Variables")
        ]
      },
    ],
  },
  {
    category: "General Concepts",
    items: [
      {
        name: "Linux", icon: skillIcons["Linux"], linksTo: [
          ...getAnchorsForSkill("Linux")
        ]
      },
      {
        name: "Operating Systems", icon: skillIcons["Operating Systems"], linksTo: [
          ...getAnchorsForSkill("Operating Systems")
        ]
      },
      {
        name: "Static Code Analysis", icon: skillIcons["Static Code Analysis"], linksTo: [
          ...getAnchorsForSkill("Static Code Analysis")
        ]
      },
      {
        name: "DSLs", icon: skillIcons["DSLs"], linksTo: [
          ...getAnchorsForSkill("DSLs")
        ]
      },
      {
        name: "Multithreading", icon: skillIcons["Multithreading"], linksTo: [
          ...getAnchorsForSkill("Multithreading")
        ]
      },
      {
        name: "Multiplayer Integration", icon: skillIcons["Multiplayer Integration"], linksTo: [
          ...getAnchorsForSkill("Multiplayer Integration")
        ]
      },
      {
        name: "Game AI", icon: skillIcons["Game AI"], linksTo: [
          ...getAnchorsForSkill("Game AI")
        ]
      },
      {
        name: "Agile Development", icon: skillIcons["Agile Development"], linksTo: [
          ...getAnchorsForSkill("Agile Development")
        ]
      },
      {
        name: "UI Design", icon: skillIcons["UI Design"], linksTo: [
          ...getAnchorsForSkill("UI Design")
        ]
      }
    ],
  },
];



export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null); // controls the animation state of the dropdown
  const [visibleSkill, setVisibleSkill] = useState<string | null>(null); // what content is rendered inside dropdown
  const [isAnimating, setIsAnimating] = useState(false); // block clicks during animation

  const dropdownRef = useRef<HTMLDivElement | null>(null); // reference to the dropdown content for scrolling

  const toggleSkill = (name: string) => {
    console.log("Toggling skill before animate check:", name);
    if (isAnimating) return; // prevent clicks mid-animation
    console.log("Toggling skill after animate check:", name);

    const isOpening = name !== expandedSkill && expandedSkill === null;

    if (name === expandedSkill) {
      // close dropdown
      setIsAnimating(true);
      setExpandedSkill(null);

      setTimeout(() => {
        setVisibleSkill(null);
        setIsAnimating(false);
      }, 500);

    } else {
      if (isOpening) {
        // dropdown closed - open immediately
        setExpandedSkill(name);
        setVisibleSkill(name);

        // Scroll after dropdown is open
        setTimeout(() => {
          dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      } else { // isSwitching

        //dropdown open with another skill - close then open new skill
        setIsAnimating(true);
        setExpandedSkill(null);

        setTimeout(() => {
          setExpandedSkill(name);
          setVisibleSkill(name);
          setIsAnimating(false);
          // Scroll after dropdown is open
          setTimeout(() => {
            dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }, 500);
      }
    }
  };

  const activeSkillData = skills.flatMap((section) => section.items).find((skill) => skill.name === visibleSkill);

  // Listen for custom events to toggle skills from Projects or Experience sections
  useEffect(() => {
    const el = document.getElementById("__SKILL_TOGGLE__");
    const listener = (e: Event) => {
      const customEvent = e as CustomEvent;
      const skillName = customEvent.detail as string;
      if (!skillName || isAnimating) return;

      if (skillName === expandedSkill) {
        // Just close it
        toggleSkill(skillName);
      } else if (expandedSkill !== null) {
        // Treat this as a switch — do it manually
        setIsAnimating(true);
        setExpandedSkill(null); // close
        setTimeout(() => {
          setExpandedSkill(skillName); // re-open with new content
          setVisibleSkill(skillName); // swap content
          setIsAnimating(false);

          setTimeout(() => {
            dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }, 500);
      } else {
        // Just open directly
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
          Click a skill to see in which projects and experiences it is used in!
        </p>
        {skills.map((section) => (
          <div key={section.category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{section.category}</h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {section.items.map((skill) => (
                <div
                  key={skill.name}
                  id={`skill-${skill.name.replace(/\s/g, '')}`}
                  className="relative group cursor-pointer"
                  onClick={() => toggleSkill(skill.name)}
                >
                  {/* Icon */}
                  <div
                    className={`p-2 rounded-full transition-transform duration-300
                      ${skill.name === expandedSkill
                        ? "scale-110 bg-gray-200 shadow-md"
                        : "hover:scale-110 hover:shadow-lg"
                      }`}
                  >
                    <span className="text-3xl">{skill.icon}</span>
                  </div>

                  {/* Tooltip on hover */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                  >
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Dropdown */}
        <div
          ref={dropdownRef}
          className={`transition-all duration-500 ease-in-out overflow-hidden
    ${expandedSkill
              ? "max-h-[1000px] opacity-100 translate-y-0 mt-6"
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
                {/* Experiences */}
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold mb-2 text-left">Experiences with {activeSkillData.name}</h4>
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
                {/* Projects */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-left">Projects with {activeSkillData.name}</h4>
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