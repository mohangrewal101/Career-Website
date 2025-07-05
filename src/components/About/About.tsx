// About.tsx
// This is a client component for the About Me section of the portfolio page
// It includes a brief introduction, background, and interests.

import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="bg-white py-12 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m <strong>Mohan Grewal</strong> — a passionate Software Engineer based in British Columbia, Canada. I graduated from
            the University of British Columbia with a degree in Computer Science. I love building immersive experiences, solving technical challenges, 
            and exploring the worlds of AI, gaming, and fitness both in the industry and my hobbies.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I have experience working in QA, mobile development, video game development, and recently started working on full-stack.
            Whether it’s using Python to train models, Kotlin for Android apps, Unity/Unreal for engaging gaming experiences, or React/Next.js to deploy UIs, 
            I strive to build tools that are practical and polished for both the backend and frontend.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Outside of coding, I enjoy lifting weights and reading. In the summer, I go on bicycle rides, and in the winter, I hit the slopes for snowboarding.
            Currently I'm improving my snowboarding skills and learning acoustic guitar to keep pushing my creativity and discipline. 
            I’m always up for collaborating on exciting projects inspired by my hobbies to grow as a developer and teammate!
          </p>
          <p className="text-lg leading-relaxed">
            It's best to always learn something when you first understand the joy of doing it! 
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 w-full flex justify-center">
          <div className="w-100 h-100 relative rounded-xl shadow-md overflow-hidden">
            <Image
              src="/profilePhotos/Mohan_Grewal_Snowboarding.JPG"
              alt="Mohan Snowboarding"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
