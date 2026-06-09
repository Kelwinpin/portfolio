const projects = [
  {
    title: "Internal Tooling Platform",
    description:
      "Full-featured internal platform built with NestJS and Next.js, enabling teams to manage workflows, integrations, and AI-powered features through a unified interface.",
    tags: ["NestJS", "Next.js", "TypeScript", "Docker", "PostgreSQL"],
    category: "Platform",
    github: "https://github.com/Kelwinpin",
  },
  {
    title: "AI Chatbot with LLM Integration",
    description:
      "Conversational AI solution with multi-turn dialogue, persona management, and LLM integrations. Designed for enterprise use with reliability and consistency at scale.",
    tags: ["TypeScript", "LLMs", "NestJS", "Prompt Engineering"],
    category: "AI",
    github: "https://github.com/Kelwinpin",
  },
  {
    title: "AI Image Generation Module",
    description:
      "AI-powered image generation system integrated with registered user personas, allowing teams to generate and edit images directly within the platform.",
    tags: ["TypeScript", "Generative AI", "REST APIs", "GCP"],
    category: "AI",
    github: "https://github.com/Kelwinpin",
  },
  {
    title: "Event-Driven Analytics System",
    description:
      "User behavior logging pipeline capturing real-time events and storing structured data in Google BigQuery for analytics, monitoring, and product insights.",
    tags: ["TypeScript", "BigQuery", "GCP", "Airbyte", "Event-Driven"],
    category: "Data",
    github: "https://github.com/Kelwinpin",
  },
  {
    title: "React Native Mobile App",
    description:
      "Cross-platform mobile app built with Expo featuring push notifications, geolocation, and CI/CD pipelines for automated publishing to both app stores.",
    tags: ["React Native", "Expo", "AWS", "CI/CD", "TypeScript"],
    category: "Mobile",
    github: "https://github.com/Kelwinpin",
  },
  {
    title: "Internal CRM System",
    description:
      "Full-stack CRM platform with Vue 3 frontend and Node.js MVC backend, integrating payment gateways, notification services, and third-party data providers.",
    tags: ["Vue 3", "Node.js", "REST APIs", "AWS", "PostgreSQL"],
    category: "Platform",
    github: "https://github.com/Kelwinpin",
  },
];

const categoryColor: Record<string, string> = {
  Platform: "bg-blue-950 text-blue-300 border-blue-900",
  AI: "bg-violet-950 text-violet-300 border-violet-900",
  Data: "bg-cyan-950 text-cyan-300 border-cyan-900",
  Mobile: "bg-emerald-950 text-emerald-300 border-emerald-900",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of products and systems I built across my career —
            spanning AI, platforms, mobile, and data engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-800/50 transition-all hover:shadow-lg hover:shadow-violet-900/10 group flex flex-col"
            >

              <div className="flex items-start justify-between mb-3">
                <span
                  className={`text-xs px-2.5 py-1 rounded-md border font-medium ${categoryColor[p.category]}`}
                >
                  {p.category}
                </span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-400 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Kelwinpin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-violet-500/50 text-gray-400 hover:text-white rounded-lg font-medium transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
