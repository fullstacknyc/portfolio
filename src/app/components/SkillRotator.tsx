// components/SkillRotator.tsx
"use client";

import { useState, useEffect } from "react";

type SkillRotatorProps = {
  skills: string[];
  interval?: number; // optional, defaults to 3000ms
};

export default function SkillRotator({ skills, interval = 3000 }: SkillRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, interval);

    return () => clearInterval(timer); // cleanup on unmount
  }, [skills, interval]);

  return (
    <div className="m-8 sm:m-16 md:m-32 p-6 bg-gray-50 rounded-2xl text-center font-bold text-2xl hover:bg-gray-200">
      {skills[index]}
    </div>
  );
}
