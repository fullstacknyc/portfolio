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
      <span className="cursor" aria-hidden>
        ▍
      </span>
    </span>
  );
}

export default function HomePage() {
  return (
    <section>
      <header>
        <h1 className="h1">
          Next.js development at your fingertips —{" "}
          <Typewriter words={["fast", "reliable", "accessible"]} />
        </h1>
        <p className="h2">
          Create full stack React apps with Next.js — production-ready, fast, and
          accessible.
        </p>
      </header>

      <div className="grid-2" style={{ margin: "1.25rem 0" }}>
        <div>
          <article className="card" style={{ position: "relative" }}>
            <h3
              className="title"
              style={{
                margin: 0,
                fontSize: "1.125rem",
                fontWeight: 700,
              }}
            >
              Custom web applications that grow your business
            </h3>

            <p
              className="desc"
              style={{ marginTop: 8, color: "var(--muted)" }}
            >
              Full‑stack Next.js & TypeScript solutions focused on conversion,
              reliability, and maintainability.
            </p>

            <ul
              style={{
                marginTop: ".75rem",
                paddingLeft: "1.25rem",
                color: "var(--muted)",
              }}
            >
              <li>Pixel‑perfect marketing sites & e‑commerce</li>
              <li>Admin dashboards, integrations, and automation</li>
              <li>SEO, performance tuning, and analytics</li>
            </ul>

            <div style={{ marginTop: ".75rem" }}>
              <strong className="small">Tech stack:</strong>
              <div className="row" style={{ marginTop: ".5rem" }}>
                <span className="kbd">Next.js</span>
                <span className="kbd">React</span>
                <span className="kbd">TypeScript</span>
                <span className="kbd">APIs</span>
              </div>
            </div>

            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              <Link href="/projects" className="btn btn--neon">
                View Work
              </Link>
              <Link href="/contact" className="btn">
                Book Consultation
              </Link>
            </div>
          </article>
        </div>

        <pre
          className="card"
          style={{
            margin: 0,
            background: "#071023",
            color: "#cfeee7",
            padding: ".75rem",
            borderRadius: 8,
          }}
        >
          {`import { fullStackSkills} from 'my-skills';
          
export default function MyApp() {
  // front-end
  const { React, NextJS, TypeScript, HTML, CSS } = fullStackSkills.frontend;
  
  // back-end
  const { NodeJS, Databases, APIs } = fullStackSkills.backend;
  
  // devOps
  const { Vercel, Git, CI_CD } = fullStackSkills.devOps;
  
  return <div>Full stack Next.js & TypeScript development at your fingertips!</div>;n 
}`}
        </pre>
      </div>

      <section style={{ marginTop: 18 }}>
        <article className="card" style={{ padding: 16 }}>
          <h4
            style={{
              margin: 0,
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            What I solve
          </h4>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            I build and ship production web apps that are fast, secure, and easy
            to maintain. Below is a quick summary of how I approach projects:
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 12,
              flexWrap: "wrap",
            }}
          >
            <div
              className="card"
              style={{
                padding: 12,
                borderRadius: 10,
                minWidth: 180,
              }}
            >
              <strong>Discovery</strong>
              <div className="small" style={{ marginTop: 6 }}>
                Clear milestones, pricing, and delivery plan.
              </div>
            </div>
            <div
              className="card"
              style={{
                padding: 12,
                borderRadius: 10,
                minWidth: 180,
              }}
            >
              <strong>Build</strong>
              <div className="small" style={{ marginTop: 6 }}>
                Accessible, tested components and fast pages.
              </div>
            </div>
            <div
              className="card"
              style={{
                padding: 12,
                borderRadius: 10,
                minWidth: 180,
              }}
            >
              <strong>Ship</strong>
              <div className="small" style={{ marginTop: 6 }}>
                Monitoring, performance, and SEO optimizations.
              </div>
            </div>
          </div>
        </article>
      </section>

      <p className="small" style={{ marginTop: 12, color: "var(--muted)" }}>
        Book a free 30‑minute consultation — a clear roadmap, milestone pricing,
        and a timeline so you know exactly how your site will deliver results.
      </p>

      <div style={{ marginTop: 12 }}>
        <Link href="/contact" className="btn btn--neon">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
