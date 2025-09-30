// src/app/page.tsx
"use client";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Hero />
      <Skills />
      <Shop />
      <Changelog />
      <Contact />
    </main>
  );
}
