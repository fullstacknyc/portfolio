"use client";
import React, { useEffect, useState } from "react";

const SKILLS: string[] = ["Next.js", "React", "TypeScript", "Tailwind", "AWS", "Node.js"];

export default function Skills() {
  const [index, setIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Timing controls (ms)
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_AFTER_COMPLETE = 1200;

  useEffect(() => {
    let timeoutId: number;

    const current = SKILLS[index % SKILLS.length];

    if (!isDeleting && text.length < current.length) {
      // type next character
      timeoutId = window.setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && text.length === current.length) {
      // pause on full word, then start deleting
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_COMPLETE);
    } else if (isDeleting && text.length > 0) {
      // delete next character
      timeoutId = window.setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && text.length === 0) {
      // move to next skill and start typing
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % SKILLS.length);
      }, 200);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, index]);

  return (
    <section id="skills" className="snap-start min-h-screen flex items-center bg-[var(--bg-2)]">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="lead mt-2">Technologies and tools I work with regularly.</p>
        <div className="mt-6">
          <span className="px-3 py-1 rounded-full border text-sm bg-white inline-flex items-center">
            <span className="min-w-[6ch]">{text}</span>
            <span className="inline-block border-r-2 border-current h-5 ml-1 animate-pulse" />
          </span>
        </div>
      </div>
    </section>
  );
}
