"use client";
import React from "react";

export default function Blog() {
  return (
    <section id="blog" className="snap-start min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Blog</h2>
        <p className="lead mt-2">Thoughts, tutorials and articles.</p>
        <div className="mt-6">
          <div className="card">No posts yet — add your posts here.</div>
        </div>
      </div>
    </section>
  );
}
