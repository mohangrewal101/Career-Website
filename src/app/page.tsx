
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import ProjectLayout from "@/components/Projects/ProjectLayout";
import Extras from "@/components/Extras/Extras";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectLayout />
      <Extras />
    </main>
  );
}
