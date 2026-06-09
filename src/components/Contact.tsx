"use client";

import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "richardkelwin0634@gmail.com",
    href: "mailto:richardkelwin0634@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "kelwin-richard",
    href: "https://linkedin.com/in/kelwin-richard-bb05651a3",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Kelwinpin",
    href: "https://github.com/Kelwinpin",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setForm((prev) => {
        const next = { ...prev, [field]: value };
        if (touched[field]) {
          const errs = validate(next);
          setErrors((prev) => ({ ...prev, [field]: errs[field] }));
        }
        return next;
      });
    };
  }

  function blur(field: keyof FormState) {
    return () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const errs = validate(form);
      setErrors((prev) => ({ ...prev, [field]: errs[field] }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-600 transition-colors";

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind or want to discuss an opportunity? I&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Get in touch directly
            </h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-violet-700/50 transition-all group"
                >
                  <span className="text-violet-400 group-hover:text-violet-300 transition-colors">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      {link.label}
                    </p>
                    <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-violet-950/30 border border-violet-800/30">
              <p className="text-violet-300 text-sm font-medium mb-1">
                Currently based in Belo Horizonte, Brazil
              </p>
              <p className="text-gray-400 text-sm">
                Open to remote positions worldwide and relocation opportunities.
              </p>
            </div>
          </div>

          <div>
            {status === "success" ? (
              <div className="h-full flex items-center justify-center py-12 bg-gray-800 rounded-2xl border border-gray-700">
                <div className="text-center">
                  <p className="text-4xl mb-4">✅</p>
                  <p className="text-white font-semibold text-lg">Message sent!</p>
                  <p className="text-gray-400 mt-2 text-sm">
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    onBlur={blur("name")}
                    className={`${inputClass}${errors.name ? " border-red-500" : ""}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    onBlur={blur("email")}
                    className={`${inputClass}${errors.email ? " border-red-500" : ""}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    onBlur={blur("message")}
                    className={`${inputClass} resize-none${errors.message ? " border-red-500" : ""}`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
