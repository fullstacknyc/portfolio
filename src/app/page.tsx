"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* Typewriter effect */
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
    <span aria-hidden="false">
      {text}
      <span aria-hidden className="text-pink-500 animate-pulse">▍</span>
    </span>
  );
}

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Full-Stack Roadmap —{" "}
          <Typewriter words={["JavaScript", "React", "Next.js", "Production Apps"]} />
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Learn step by step: build foundations in JavaScript, move into React, and master Next.js for full-stack development.
        </p>
      </header>

      {/* Roadmap steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <article className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">1. JavaScript Fundamentals</h3>
          <p className="text-gray-600 mb-4">
            Variables, functions, DOM manipulation, ES6+, async/await, and fetch.
          </p>
          <pre className="p-4 bg-gray-900 text-green-400 rounded-lg text-sm overflow-auto">
{`function greet(name) {
  return \`Hello, \${name}\`;
}
console.log(greet("World"));`}
          </pre>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">2. React Framework</h3>
          <p className="text-gray-600 mb-4">
            Build UI with components, manage state, use hooks, and handle props.
          </p>
          <pre className="p-4 bg-gray-900 text-green-400 rounded-lg text-sm overflow-auto">
{`import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
          </pre>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">3. Next.js Full-Stack</h3>
          <p className="text-gray-600 mb-4">
            Combine React with routing, APIs, SSR/SSG, and database integration.
          </p>
          <pre className="p-4 bg-gray-900 text-green-400 rounded-lg text-sm overflow-auto">
{`// pages/api/hello.ts
export default function handler(req, res) {
  res.status(200).json({ message: "Hello Next.js" });
}`}
          </pre>
        </article>
      </div>

      {/* Process display */}
      <section className="mb-12">
        <article className="p-6 bg-white rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4 text-center">Learning Process</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <strong className="block mb-1">Foundations</strong>
              <div className="text-sm text-gray-600">
                Master JavaScript syntax and logic.
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <strong className="block mb-1">Frontend</strong>
              <div className="text-sm text-gray-600">
                Build dynamic UIs with React and hooks.
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <strong className="block mb-1">Full-Stack</strong>
              <div className="text-sm text-gray-600">
                Use Next.js for APIs, routing, and databases.
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-500 mb-6">
          Ready to start your full-stack journey? Book a consultation for a personalized roadmap.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}