'use client';
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="snap-start min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Full Stack Development
        </h1>
        <p className="text-lg mt-4">
          This portfolio displays projects specializing in Next.js, TypeScript, Tailwind and AWS.
        </p>
      </div>
    </section>
  );
}
