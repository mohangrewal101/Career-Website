// Hero.tsx
// This is a client component for the Hero section of the portfolio page
// It includes a profile image, name, description, and links to GitHub, LinkedIn
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download } from 'lucide-react';

export default function Hero() {
    return (
        <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 px-6">
            {/* Text Section */}
            <div className="text-center md:text-left w-full md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Mohan Grewal
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Software Engineer | Game Developer | AI Enthusiast
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a href="https://github.com/mohangrewal101" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <FaGithub className="mr-2" /> GitHub
                        </Button>
                    </a>
                    <a href="https://linkedin.com/in/mohan-grewal" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </Button>
                    </a>
                    <a href="/Hero/Mohan_Grewal_Resume.pdf" download>
                        <Button>
                            <Download className="mr-2" /> Resume
                        </Button>
                    </a>
                    <a href="mailto:mohangrewal24@gmail.com">
                        <Button variant="outline">
                            Email
                        </Button>
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="w-52 h-52 sm:w-72 sm:h-72 relative rounded-xl border-6 border-gray-300 overflow-hidden ">
                <Image
                    src="/profilePhotos/Mohan_Grewal_PFP.jpg"
                    alt="Mohan Grewal"
                    fill
                    className="object-cover object-[50%_10%]"
                    priority
                />
            </div>
        </section>
    );
}
