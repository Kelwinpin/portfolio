const categories = [
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Go",
      "Java",
      "REST APIs",
      "Prisma",
      "PostgreSQL",
      "SQL",
      "Jest",
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "React Native",
      "Tailwind CSS",
      "Styled Components",
      "HTML & CSS",
      "Vite",
      "Responsive Design",
    ],
  },
  {
    title: "AI & Integrations",
    icon: "🤖",
    skills: [
      "LLM Integrations",
      "Prompt Engineering",
      "Generative AI",
      "AI Tooling",
      "n8n Workflows",
      "Chatbot Design",
      "Image Generation",
    ],
  },
  {
    title: "Architecture",
    icon: "🏗️",
    skills: [
      "Microservices",
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Hexagonal Architecture",
      "Scalable Systems",
      "OOP",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Firebase",
      "CI/CD",
      "Git",
      "Linux",
      "BigQuery",
      "Airbyte",
    ],
  },
  {
    title: "Methodologies",
    icon: "📋",
    skills: [
      "Agile / SCRUM",
      "Code Review",
      "Technical Docs",
      "Storybook",
      "TDD",
      "Clean Code",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Technologies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & Tools
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-950 rounded-2xl p-6 border border-gray-800 hover:border-violet-800/40 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-lg">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 text-sm border border-gray-700 hover:border-violet-700 hover:text-violet-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
