const experiences = [
  {
    company: "Cogna",
    role: "Mid-Level Software Engineer",
    period: "2025 — Present",
    current: true,
    highlights: [
      "Developed microservices using TypeScript with clean architecture and SOLID principles in a distributed systems environment.",
      "Built an internal tooling platform using NestJS (backend), Next.js (frontend), and Docker-based environments.",
      "Designed and implemented AI-powered chatbot solutions with conversational flows and LLM integrations.",
      "Built an AI image generation module integrated with registered personas.",
      "Created automated workflows using n8n, integrating internal systems and third-party services.",
      "Developed an event-driven logging system capturing behavioral data in Google BigQuery (GCP).",
    ],
    tags: ["TypeScript", "NestJS", "Next.js", "Docker", "GCP", "LLMs", "n8n"],
  },
  {
    company: "Clube Certo",
    role: "Junior Software Engineer II",
    period: "2024 — 2025",
    current: false,
    highlights: [
      "Led mobile development, overseeing architecture decisions for a React Native (Expo) app with push notifications and geolocation.",
      "Developed an internal CRM using Vue 3 on the frontend and Node.js with MVC architecture on the backend.",
      "Set up CI/CD pipelines for automated publishing to Google Play Store and Apple App Store.",
      "Managed AWS cloud services to support application infrastructure and scalability.",
    ],
    tags: ["React Native", "Expo", "Vue 3", "Node.js", "AWS", "CI/CD"],
  },
  {
    company: "Grupo Fácil",
    role: "Junior Software Developer",
    period: "2022 — 2024",
    current: false,
    highlights: [
      "Built and maintained frontend applications using React with TypeScript, focusing on component reusability and performance.",
      "Created and maintained component documentation using Storybook.",
      "Developed RESTful APIs following Hexagonal Architecture and microservices patterns.",
      "Worked in Agile teams using SCRUM methodology for sprint planning and delivery.",
    ],
    tags: ["React", "TypeScript", "Node.js", "REST APIs", "Storybook"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >

                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-violet-500 border-2 border-gray-950 -translate-x-1 md:-translate-x-1.5 z-10" />


                <div className="hidden md:block md:w-1/2" />


                <div className="pl-6 md:pl-0 md:w-1/2 md:px-8">
                  <div
                    className={`bg-gray-900 border rounded-2xl p-6 transition-colors hover:border-violet-800/50 ${exp.current ? "border-violet-800/40" : "border-gray-800"}`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-white font-bold text-lg">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="flex items-center gap-1.5 text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-violet-300 font-medium mb-1">
                      {exp.role}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-gray-400 text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-violet-500 mt-1 shrink-0">
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-800 text-gray-400 border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
