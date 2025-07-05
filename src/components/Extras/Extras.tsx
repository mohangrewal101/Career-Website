"use client";

import { FaGamepad, FaHandsHelping, FaBookOpen, FaGuitar, FaBiking, FaSnowboarding, FaDumbbell, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

export default function Extras() {
    return (
        <section className="bg-gray-50 py-16 px-6 text-gray-900" id="extras">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Extras</h2>
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Left Column: Extracurriculars */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">🎮 Extracurriculars</h3>
                        <div className="space-y-4">
                            {[
                                {
                                    icon: <FaGamepad className="text-blue-600 text-2xl mt-1" />,
                                    title: "UBC Game Development Club",
                                    text: "Contributed to collaborative game projects, participated in team-based development sprints, and participated in game competitions to refine my Unity and Unreal Engine skills.",
                                },
                                {
                                    icon: <FaHandsHelping className="text-green-600 text-2xl mt-1" />,
                                    title: "City of Surrey & BC Cancer Volunteer",
                                    text: "Assisted in community outreach and public events for either environmental awareness or to help get donations for cancer research, helping coordinate activities and support services for diverse audiences.",
                                },
                                {
                                    icon: <FaHandsHelping className="text-purple-600 text-2xl mt-1" />,
                                    title: "Canucks Autism Network Volunteer",
                                    text: "Supported children and youth with autism in recreational sport programs and camps, fostering inclusivity and teamwork.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-3"
                                    variants={leftVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {item.icon}
                                    <div>
                                        <h4 className="font-semibold text-lg">{item.title}</h4>
                                        <p className="text-gray-700 text-sm">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Interests */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">✨ Interests & Off-Time</h3>
                        <div className="space-y-4">
                            {[
                                {
                                    icon: <FaBookOpen className="text-pink-600 text-2xl mt-1" />,
                                    text: "Reading both fiction and non-fiction books, with a focus on science fiction, fantasy, and technology.",
                                },
                                {
                                    icon: <FaGuitar className="text-yellow-600 text-2xl mt-1" />,
                                    text: "Playing acoustic guitar and working on new songs to learn along with my projects.",
                                },
                                {
                                    icon: <FaGamepad className="text-red-500 text-2xl mt-1" />,
                                    text: "Exploring game design ideas and building personal game prototypes.",
                                },
                                {
                                    icon: <FaBiking className="text-orange-500 text-2xl mt-1" />,
                                    text: "Biking around local trails and enjoying the outdoors.",
                                },
                                {
                                    icon: <FaSnowboarding className="text-blue-500 text-2xl mt-1" />,
                                    text: "Snowboarding in the winter and exploring the mountain passes.",
                                },
                                {
                                    icon: <FaDumbbell className="text-green-500 text-2xl mt-1" />,
                                    text: "Staying active with strength training and learning about fitness science.",
                                },
                                {
                                    icon: <FaRobot className="text-indigo-500 text-2xl mt-1" />,
                                    text: "Following tech and gaming trends, experimenting with AI tools.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-3"
                                    variants={rightVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {item.icon}
                                    <p className="text-gray-700 text-sm">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}