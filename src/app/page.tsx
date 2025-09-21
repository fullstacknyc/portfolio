"use client";

import { useState, useEffect } from "react";

/* ----------------------------
   Typewriter Hook
----------------------------- */
function useTypewriter(words: string[], speed = 100) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(words[index].slice(0, i++));
      if (i > words[index].length) {
        clearInterval(interval);
        setTimeout(() => setIndex((index + 1) % words.length), 1000);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [index, words, speed]);

  return text;
}

export default function HomePage() {
  const typed = useTypewriter([
    "Full Stack Developer",
    "Next.js Engineer",
    "Systems Alchemist",
  ]);

  return (
    <main className="snap-container">
      {/* Hero Section */}
      <section className="snap-section text-center section-hero">
        <h1 className="mb-6">
          Hi, I’m Camilo — <span className="text-accent">{typed}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          I build modern, business-ready websites and upgrade existing projects
          with full-stack solutions using Next.js, Node.js, and beyond.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <a href="/projects" className="btn-primary">
            View Projects
          </a>
          <a href="/contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="snap-section section-projects">
        <h2 className="text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="card">
            <h3 className="mb-3">E-Commerce Upgrade</h3>
            <p>
              Migrated a legacy store into a modern Next.js app with improved
              performance and SEO.
            </p>
          </div>
          <div className="card">
            <h3 className="mb-3">Portfolio Redesign</h3>
            <p>
              Built a dynamic portfolio with animations and a dark mode toggle.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="snap-section text-center section-contact">
        <h2>Let’s Work Together</h2>
        <p className="max-w-xl mx-auto mt-4 text-lg">
          Whether it’s building from scratch or upgrading what you already have,
          I’m ready to help you ship professional, business-ready projects.
        </p>
        <a href="/contact" className="btn-primary mt-8 inline-block">
          Get in Touch
        </a>
      </section>
    </main>
  );
}
