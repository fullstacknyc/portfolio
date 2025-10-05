// components/SkillRotator.tsx
"use client";

import { useState, useEffect } from "react";

type ProjectRotatorProps = {
  projects: string[];
  interval?: number; // optional, defaults to 3000ms
};

export default function ProjectRotator({ projects, interval = 3000 }: ProjectRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, interval);

    return () => clearInterval(timer); // cleanup on unmount
  }, [projects, interval]);

  return (
    <div>
      {projects[index]}
    </div>
  );
}
