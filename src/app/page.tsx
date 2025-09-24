"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* Small safe typewriter */
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
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Next.js development at your fingertips —{" "}
          <Typewriter words={["fast", "reliable", "accessible"]} />
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Create full stack React apps with Next.js — production-ready, fast, and accessible.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <article className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">
              Custom web applications that grow your business
            </h3>

            <p className="text-gray-600 mb-4">
              Full-stack Next.js & TypeScript solutions focused on conversion, reliability, and maintainability.
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Pixel-perfect marketing sites & e-commerce</li>
              <li>Admin dashboards, integrations, and automation</li>
              <li>SEO, performance tuning, and analytics</li>
            </ul>

            <div className="mb-4">
              <strong>Tech stack:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-sm bg-gray-200 rounded">Next.js</span>
                <span className="px-2 py-1 text-sm bg-gray-200 rounded">React</span>
                <span className="px-2 py-1 text-sm bg-gray-200 rounded">TypeScript</span>
                <span className="px-2 py-1 text-sm bg-gray-200 rounded">APIs</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/projects"
                className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 transition"
              >
                Book Consultation
              </Link>
            </div>
          </article>
        </div>

        <pre className="p-6 bg-gray-900 text-green-400 rounded-lg overflow-auto text-sm">
{`import { fullStackSkills } from 'my-skills';
          
export default function MyApp() {
  // front-end
  const { React, NextJS, TypeScript, HTML, CSS } = fullStackSkills.frontend;
  
  // back-end
  const { NodeJS, Databases, APIs } = fullStackSkills.backend;
  
  // devOps
  const { Vercel, Git, CI_CD } = fullStackSkills.devOps;
  
  return <div>Full stack Next.js & TypeScript development at your fingertips!</div>;
}`}
        </pre>
      </div>

      <section className="mb-12">
        <article className="p-6 bg-white rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-2">What I solve</h4>
          <p className="text-gray-600 mb-6">
            I build and ship production web apps that are fast, secure, and easy to maintain. 
            Below is a quick summary of how I approach projects:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <strong className="block mb-1">Discovery</strong>
              <div className="text-sm text-gray-600">
                Clear milestones, pricing, and delivery plan.
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <strong className="block mb-1">Build</strong>
              <div className="text-sm text-gray-600">
                Accessible, tested components and fast pages.
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <strong className="block mb-1">Ship</strong>
              <div className="text-sm text-gray-600">
                Monitoring, performance, and SEO optimizations.
              </div>
            </div>
          </div>
        </article>
      </section>

      <p className="text-sm text-gray-500 mb-6">
        Book a free 30-minute consultation — a clear roadmap, milestone pricing,
        and a timeline so you know exactly how your site will deliver results.
      </p>

      <div>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}