"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* Typewriter Component */
function Typewriter({
  words,
  speed = 70,
  pause = 1100,
}: {
  words: string[];
  speed?: number;
  pause?: number;
}) {
  const [text, setText] = useState("");
  const [iWord, setIWord] = useState(0);

  useEffect(() => {
    let i = 0;
    let mounted = true;
    let interval: ReturnType<typeof setInterval> | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const run = () => {
      interval = setInterval(() => {
        if (!mounted) return;
        i++;
        setText(words[iWord].slice(0, i));
        if (i > words[iWord].length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            if (!mounted) return;
            setIWord((s) => (s + 1) % words.length);
            setText("");
          }, pause);
        }
      }, speed);
    };

    run();
    return () => {
      mounted = false;
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [iWord, words, speed, pause]);

  return (
    <span>
      {text}
      <span className="text-pink-500 animate-pulse">▍</span>
    </span>
  );
}

/* Portfolio Component */
export default function Portfolio() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center snap-start bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          <Typewriter
            words={["Front-end Development", "Back-End Development", "Fullstack Applications", "Next.js & TypeScript", "Web Performance", "SEO Optimization", "Responsive Design", "UI/UX Design", "E-Commerce Solutions", "API Integration", "Database Management", "Cloud Deployment", "Continuous Integration", "Version Control with Git", "Agile Methodologies", "Project Management", "Team Collaboration", "Problem Solving", "Creative Solutions", "User-Centered Design", "Web Accessibility", "Performance Optimization", "Scalable Architecture", "Modern Web Technologies", "Progressive Web Apps", "Mobile-First Design", "Cross-Browser Compatibility", "Code Reviews", "Testing & Debugging", "Open Source Contribution", "Tech Blogging", "Community Engagement", "Learning & Development"]}
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          I am a full-stack developer specializing in the Next.js framework with Tailwind and AWS services.
        </p>
      </section>

      {/* Skills */}
      <section className="h-screen flex flex-col justify-center items-center snap-start bg-white text-gray-800 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "GraphQL",
            "REST APIs",
          ].map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-xl hover:scale-105 transition"
            >
              <p className="text-lg font-medium text-center">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="h-screen flex flex-col justify-center items-center snap-start bg-gray-50 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Shop
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl hover:translate-y-[-5px] transition">
            <h3 className="text-2xl font-semibold mb-3">Custom Websites</h3>
            <p className="text-gray-600">
              Pixel-perfect, responsive, and SEO-friendly websites built with
              Next.js and TypeScript.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl hover:translate-y-[-5px] transition">
            <h3 className="text-2xl font-semibold mb-3">
              Dashboards & Automation
            </h3>
            <p className="text-gray-600">
              Admin panels, data dashboards, and API integrations to streamline
              workflows.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl hover:translate-y-[-5px] transition">
            <h3 className="text-2xl font-semibold mb-3">
              E-Commerce & Growth
            </h3>
            <p className="text-gray-600">
              Conversion-focused e-commerce stores with performance and
              analytics built-in.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="h-screen flex flex-col justify-center items-center snap-start bg-gray-900 text-white px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              Personal portfolio built with Next.js, TypeScript, and Tailwind.
            </p>
            <a
              href="#"
              className="text-pink-400 hover:underline font-medium"
            >
              View Demo
            </a>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">E-Commerce App</h3>
            <p className="text-gray-300 mb-4">
              Next.js e-commerce platform with Stripe payments and product
              management.
            </p>
            <a
              href="#"
              className="text-pink-400 hover:underline font-medium"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center snap-start bg-gradient-to-br from-pink-500 to-red-500 text-white px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Let’s Work Together
        </h2>
        <p className="mb-8 text-lg max-w-xl">
          Book a free consultation and get a clear plan for your website or app.
        </p>
        <Link
          href="mailto:jgomezval@icloud.com"
          className="px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition font-semibold"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}
