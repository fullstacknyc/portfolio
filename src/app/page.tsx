"use client";
import ProjectRotator from "./components/ProjectRotator";
import SkillRotator from "./components/SkillRotator";

import { useState, useEffect } from "react";

const skillset = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "AWS",
  "Docker",
  "Kubernetes",
  "Linux",
]

const projectsset = [
  "File Transfer App",
  "Gamify Your Tasks",
  "Weather Dashboard",
  "Sales Page",
  "Blog Platform",
  "Chat Application",
  "E-commerce Site",
  "Portfolio Website",
]
export default function Home() {
  return (
    <main>
      <SkillRotator skills={skillset} interval={3000} />
      <ProjectRotator projects={projectsset} interval={3000} />
    </main>
  );
}