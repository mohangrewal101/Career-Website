// Hero.tsx
// This is a client component for the Hero section of the portfolio page
// It includes a profile image, name, description, and links to GitHub, LinkedIn
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-6">
        {/* Text Section */}
        <div className="flex text-center md::text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mohan Grewal
                </h1>
            <p className="text-lg md:text-xl mb-6">
                Software Engineer | Game Developer | AI Enthusiast
                </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://github.com/mohangrewal101" target="_blank">
                <Button variant="outline">
                    <FaGithub className="mr-2" /> GitHub
                    </Button>
            </a>
            <a href="https://linkedin.com/in/mohan-grewal" target="_blank">
                <Button variant="outline">
                    <FaLinkedin className="mr-2" /> LinkedIn
                    </Button>
            </a>
            <a href="/Hero/Mohan_Grewal_Resume.pdf" download>
                <Button>
                    <Download className="mr-2" /> Resume
                </Button>
            </a>
            <a href="mailto:mohangrewal24@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Mohan%2C%0D%0A%0D%0AI%20saw%20your%20portfolio%20and...">
                <Button variant="outline">
                    Email
                    </Button>
            </a>
            </div>
        </div>
        {/* Profile Image */}
        <div className="relative w-85 h-85 overflow-hidden rounded-full border-4 border-gray-300 shadow-lg">
            <Image
            src="/profilePhotos/Mohan_Grewal_PFP.jpg"
            alt="Mohan Grewal"
            width={256}
            height={256}
            className="object-cover object-[50_35%]" 
        />
        </div>
        </section>
        );
    }
