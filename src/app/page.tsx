"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Portfolio() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center snap-start bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Camilo — Full Stack Developer <br />
          <Typewriter words={["Web Apps", "APIs", "Dashboards", "E-Commerce"]} />
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-xl text-center">
          I build high-performance, scalable, and modern websites with React, Next.js, TypeScript, and full-stack tools.
        </p>
        <div className="flex gap-4">
          <Link href="#projects" className="px-6 py-3 bg-pink-500 rounded shadow hover:bg-pink-600 transition">
            View Projects
          </Link>
          <Link href="#contact" className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="h-screen flex flex-col justify-center items-center snap-start bg-white text-gray-800">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
          <div className="p-4 bg-gray-100 rounded shadow">React</div>
          <div className="p-4 bg-gray-100 rounded shadow">Next.js</div>
          <div className="p-4 bg-gray-100 rounded shadow">TypeScript</div>
          <div className="p-4 bg-gray-100 rounded shadow">Node.js</div>
          <div className="p-4 bg-gray-100 rounded shadow">Databases</div>
          <div className="p-4 bg-gray-100 rounded shadow">APIs & Integrations</div>
        </div>
      </section>

      {/* Services */}
      <section className="h-screen flex flex-col justify-center items-center snap-start bg-gray-50">
        <h2 className="text-4xl font-bold mb-8">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl px-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Websites</h3>
            <p>Pixel-perfect, responsive, and SEO-friendly websites built with Next.js and TypeScript.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Dashboards & Automation</h3>
            <p>Admin panels, data dashboards, and API integrations to streamline workflows.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">E-Commerce & Growth</h3>
            <p>Conversion-focused e-commerce stores with performance and analytics built-in.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="h-screen flex flex-col justify-center items-center snap-start bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl px-6">
          <div className="p-6 bg-gray-800 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p>Personal portfolio built with Next.js, TypeScript, and Tailwind.</p>
            <a href="#" className="text-pink-400 hover:underline">View Demo</a>
          </div>
          <div className="p-6 bg-gray-800 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">E-Commerce App</h3>
            <p>Next.js e-commerce platform with Stripe payments and product management.</p>
            <a href="#" className="text-pink-400 hover:underline">View Demo</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center snap-start bg-gradient-to-br from-pink-500 to-red-500 text-white">
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
        <p className="mb-6 text-lg">Book a free consultation and get a clear plan for your website or app.</p>
        <Link href="mailto:your@email.com" className="px-6 py-3 bg-white text-black rounded shadow hover:bg-gray-200 transition">
          Contact Me
        </Link>
      </section>
    </main>
  );
}