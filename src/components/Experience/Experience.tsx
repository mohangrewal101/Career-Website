// Experience.tsx
// This is a client component for the Experience section of the portfolio page
// It includes details about internships and work experience with images.

'use client';

import Image from "next/image";
import { skillIcons } from "../Skills/SkillIcons";

export default function Experience() {
  return (
    <section className="bg-gray-50 py-12 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        {/* Internship 1 - Rivian */}
        <div id="Rivian" className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/internshipPhotos/rivian-logo.jpg"
                alt="Rivian Internship Logo"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
              <Image
                src="/internshipPhotos/rivian-photo-1.jpg"
                alt="Rivian Interns Photo 1"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <div className="w-1/2">
                <Image
                  src="/internshipPhotos/rivian-photo-2.jpg"
                  alt="Rivian Interns Photo 2"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md object-cover w-full h-auto"
                />

              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">Software Engineer Intern</h3>
            <p className="text-sm text-gray-600 mb-1">Rivian · Jan 2023 – Aug 2023 · Vancouver, BC</p>

            <div className="flex flex-wrap gap-2 my-3">
              {[
                "Kotlin", "Swift", "Python", "GitLab", "Android Studio", "Xcode", "REST APIs", "Build Pipelines", 
                "Linux", "JIRA", "Confluence", "Operating Systems", "Agile Development", "Environment Variables"
              ].map((tech) => (
                <span
                  key={tech}
                  title={tech}
                  className="text-blue-700 text-xl hover:scale-110 transition-transform cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const skillToggle = document.getElementById("__SKILL_TOGGLE__");
                    skillToggle?.dispatchEvent(
                      new CustomEvent("toggle-skill", { detail: tech })
                    );
                  }}
                >
                  {skillIcons[tech] || <span className="text-xs">{tech}</span>}
                </span>
              ))}
            </div>

            <p className="text-base leading-relaxed">
              At Rivian, I worked on mobile apps connected to Rivian vehicles, focusing on QA and developer workflow improvements.
              I helped build a debug menu that auto-generated JIRA tickets and adapted a Python test suite into Kotlin to speed up testing cycles.
            </p>
            <p className="text-base leading-relaxed">
              These tools made it easier for QA and mobile devs to identify and fix bugs quickly, reducing time spent on manual testing and reporting.
              The experience gave me a deeper understanding of how software supports hardware-driven products in high-pressure environments.
            </p>
            <p className="text-base leading-relaxed">
              I collaborated with a small, focused team where communication and speed were critical.
              It taught me the value of building the right internal tools to empower entire engineering teams.
            </p>
          </div>
        </div>

        {/* Internship 2 - East Side Games */}
        <div id="East_Side_Games" className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">Software Engineer Intern</h3>
            <p className="text-sm text-gray-600 mb-1">East Side Games · Sep 2020 – Apr 2021 · Vancouver, BC</p>
            
            <div className="flex flex-wrap gap-2 my-3">
              {[
                "C#", "Unity", "GitHub", "Game AI", "Multiplayer Integration", "Linux", "JIRA", "Confluence",
                "Operating Systems", "Agile Development", "Environment Variables"
              ].map((tech) => (
                <span
                  key={tech}
                  title={tech}
                  className="text-blue-700 text-xl hover:scale-110 transition-transform cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const skillToggle = document.getElementById("__SKILL_TOGGLE__");
                    skillToggle?.dispatchEvent(
                      new CustomEvent("toggle-skill", { detail: tech })
                    );
                  }}
                >
                  {skillIcons[tech] || <span className="text-xs">{tech}</span>}
                </span>
              ))}
            </div>
            
            <p className="text-base leading-relaxed">
              At East Side Games, I built a subscription system and live-service tools for the TPB mobile game using Unity and C#.
              I implemented in-app purchases for both Android and iOS and helped design a debugging menu to resolve service issues.
            </p>
            <p className="text-base leading-relaxed">
              This was my first industry role, and it showed me how agile teams work together across design, QA, and engineering.
              I gained experience working in sprints, collaborating closely with stakeholders, and delivering features under real deadlines.
            </p>
            <p className="text-base leading-relaxed">
              The internship helped shape my product-thinking mindset — balancing user experience with scalability and maintainability.
              It laid the groundwork for how I approach game development and teamwork today.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="/internshipPhotos/East-Side-Games-Logo.jpg"
              alt="East Side Games Logo"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
            <Image
              src="/internshipPhotos/esg-office.jpg"
              alt="East Side Games Office"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
