"use client";
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

export default function Home() {
  return (
    <main>
      <div>
      <h1>Juan Gomez</h1>
      <h2>Portfolio & Project Management</h2>
      <SkillRotator skills={skillset} interval={3000} />
      </div>
    </main>
  );
}