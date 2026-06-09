"use client";

import { useState } from "react";
import Image from "next/image";
import images from "@/config/image.json";

const [portrait] = images;

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "3", label: "Companies" },
  { value: "10+", label: "Products shipped" },
  { value: "2", label: "Cloud platforms" },
];

const hobbies = [
  {
    icon: "🎮",
    title: "Video Game Collector",
    description:
      "Passionate about collecting retro and modern video games, with a special focus on the Pokémon franchise — games, cards, and everything in between.",
  },
  {
    icon: "🚗",
    title: "Road Trips",
    description:
      "Love hitting the open road and exploring new places by car. There's something unique about the freedom of choosing your own route and pace.",
  },
  {
    icon: "🍽️",
    title: "Food Explorer",
    description:
      "Always on the lookout for great restaurants and new cuisines. Good food is one of life's best experiences — the atmosphere matters as much as the dish.",
  },
];

type Tab = "about" | "hobbies";

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl overflow-hidden border border-gray-700 ring-1 ring-violet-500/20">
                <Image
                  src={portrait.image}
                  alt={portrait.alt}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-300 text-sm font-medium">
                  Open to work
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              About me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building products that matter
            </h2>

            <div className="flex gap-1 mb-6 bg-gray-800 p-1 rounded-xl w-fit">
              {(["about", "hobbies"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                    activeTab === tab
                      ? "bg-violet-600 text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "about" ? (
              <div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I&apos;m a full-stack Software Engineer with 5+ years of
                    experience building scalable systems, intelligent
                    applications, and robust architectures. Currently working at{" "}
                    <span className="text-violet-300 font-medium">Cogna</span>{" "}
                    as a Mid-Level Software Engineer, where I focus on
                    AI-powered products and microservices.
                  </p>
                  <p>
                    My background spans the entire stack — from building RESTful
                    APIs with NestJS and Go, to crafting responsive UIs with
                    React and Next.js, to integrating LLMs and deploying on AWS
                    and GCP. I hold a{" "}
                    <span className="text-gray-200 font-medium">
                      Bachelor&apos;s in Computer Engineering (Summa Cum Laude)
                    </span>{" "}
                    and I&apos;m completing a Postgraduate in Generative AI.
                  </p>
                  <p>
                    Passionate about clean code, SOLID principles, and
                    delivering real value through technology.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-violet-700/50 transition-colors"
                    >
                      <p className="text-3xl font-bold text-violet-400">
                        {stat.value}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href="https://linkedin.com/in/kelwin-richard-bb05651a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Kelwinpin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="flex gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-violet-700/50 transition-colors"
                  >
                    <span className="text-3xl shrink-0">{hobby.icon}</span>
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {hobby.title}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
