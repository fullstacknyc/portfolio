"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="snap-start min-h-screen flex items-center bg-[var(--bg-2)]">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="lead mt-2">Get in touch — I&apos;m available for freelance and full‑time work.</p>
        <div className="mt-6">
          <a className="btn btn-primary" href="jgomezval@icloud.com">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
