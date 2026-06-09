export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-cyan-600/8 rounded-full blur-3xl" />
      </div>


      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
          Kelwin Richard
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
            Software Engineer
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Full-stack engineer focused on building{" "}
          <span className="text-gray-200">scalable systems</span>,{" "}
          <span className="text-gray-200">AI-powered applications</span>, and{" "}
          <span className="text-gray-200">robust architectures</span> that
          deliver real impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-700 hover:border-violet-500/50 text-gray-300 hover:text-white rounded-lg font-medium transition-all"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/Kelwinpin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg font-medium transition-all flex items-center gap-2 justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>


        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
          {[
            "TypeScript",
            "Node.js",
            "React",
            "Next.js",
            "NestJS",
            "Go",
            "AWS",
            "GCP",
            "Docker",
            "AI/LLMs",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
