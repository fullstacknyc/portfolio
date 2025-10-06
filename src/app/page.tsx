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
      <div className="intro">
        <h1>Front-End React Development</h1>
      <SkillRotator skills={skillset} interval={3000} />
      </div>
    </main>
  );
}