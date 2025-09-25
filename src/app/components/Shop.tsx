"use client";
import React, { useState } from "react";

type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
};

type Upgrade = {
  id: string;
  title: string;
  price: string;
  details: string;
};

type Project = {
  id: string;
  title: string;
  excerpt: string;
  thumbnail?: string;
  url?: string;
};

export default function Shop() {
  const [view, setView] = useState<"buy" | "upgrade" | "projects">("buy");
  const [selected, setSelected] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: "starter",
      title: "Starter Website",
      price: "$799",
      description: "Simple brochure site, responsive, SEO basics.",
      features: ["Up to 5 pages", "Contact form", "Basic SEO"],
    },
    {
      id: "business",
      title: "Business Website",
      price: "$1499",
      description: "More pages, CMS integration and performance tuning.",
      features: ["Up to 15 pages", "CMS setup", "Performance optimizations"],
    },
    {
      id: "ecommerce",
      title: "E-commerce Store",
      price: "$2999",
      description: "Full store with product pages, cart and checkout.",
      features: ["Product catalog", "Payment integration", "Admin panel"],
    },
  ];

  const upgrades: Upgrade[] = [
    {
      id: "seo",
      title: "SEO Audit & Fixes",
      price: "$399",
      details: "Crawl your site, fix technical SEO issues, metadata improvements.",
    },
    {
      id: "speed",
      title: "Performance Tune-up",
      price: "$299",
      details: "Image optimization, caching, bundle splitting and CDN setup.",
    },
    {
      id: "redesign",
      title: "Partial Redesign",
      price: "$999",
      details: "Modernize selected pages/components keeping your brand intact.",
    },
  ];

  const projects: Project[] = [
    {
      id: "proj-1",
      title: "Portfolio A",
      excerpt: "A modern portfolio site for a photographer.",
      thumbnail: undefined,
      url: "#",
    },
    {
      id: "proj-2",
      title: "SaaS Landing",
      excerpt: "Marketing-first landing with signup flow for a SaaS product.",
      thumbnail: undefined,
      url: "#",
    },
    {
      id: "proj-3",
      title: "Local Store",
      excerpt: "Small business site with online ordering and map integration.",
      thumbnail: undefined,
      url: "#",
    },
  ];

  function handlePrimaryAction() {
    if (!selected) return alert("Please select an option first.");
    if (view === "buy") {
      const p = products.find((x) => x.id === selected);
      alert(`Proceed to purchase: ${p?.title} (${p?.price})`);
      // TODO: open checkout, navigate to order page, or open modal
    } else if (view === "upgrade") {
      const u = upgrades.find((x) => x.id === selected);
      alert(`Request upgrade: ${u?.title} (${u?.price})`);
      // TODO: open upgrade form with selected upgrade prefilled
    } else {
      const proj = projects.find((x) => x.id === selected);
      if (proj?.url) {
        window.open(proj.url, "_blank");
      } else {
        alert(`Open project: ${proj?.title}`);
      }
    }
  }

  return (
    <section id="shop" className="snap-start min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Shop / Products</h2>
        <p className="lead mt-2">
          Choose whether you want to buy a new website, upgrade an existing one,
          or browse past projects.
        </p>

        <div className="mt-6 flex gap-2">
          <button
            className={`px-4 py-2 rounded ${view === "buy" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            onClick={() => {
              setView("buy");
              setSelected(null);
            }}
          >
            Buy Website
          </button>
          <button
            className={`px-4 py-2 rounded ${view === "upgrade" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            onClick={() => {
              setView("upgrade");
              setSelected(null);
            }}
          >
            Upgrade Website
          </button>
          <button
            className={`px-4 py-2 rounded ${view === "projects" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            onClick={() => {
              setView("projects");
              setSelected(null);
            }}
          >
            Existing Projects
          </button>
        </div>

        <div className="mt-6">
          {view === "buy" && (
            <>
              <h3 className="text-xl font-semibold mb-4">Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className={`card p-4 rounded border cursor-pointer hover:shadow ${
                      selected === p.id ? "ring-2 ring-blue-400" : ""
                    }`}
                    onClick={() => setSelected(p.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelected(p.id)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold">{p.title}</h4>
                      <span className="text-lg font-semibold">{p.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                    <ul className="mt-3 text-sm list-disc list-inside">
                      {p.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

          {view === "upgrade" && (
            <>
              <h3 className="text-xl font-semibold mb-4">Upgrade Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upgrades.map((u) => (
                  <div
                    key={u.id}
                    className={`card p-4 rounded border cursor-pointer hover:shadow ${
                      selected === u.id ? "ring-2 ring-blue-400" : ""
                    }`}
                    onClick={() => setSelected(u.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelected(u.id)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold">{u.title}</h4>
                      <span className="text-lg font-semibold">{u.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{u.details}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {view === "projects" && (
            <>
              <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((pr) => (
                  <div
                    key={pr.id}
                    className={`card p-4 rounded border cursor-pointer hover:shadow ${
                      selected === pr.id ? "ring-2 ring-blue-400" : ""
                    }`}
                    onClick={() => setSelected(pr.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelected(pr.id)}
                  >
                    <h4 className="font-bold">{pr.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{pr.excerpt}</p>
                    <div className="mt-3 text-xs text-gray-500">Click to view</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            className="px-5 py-2 rounded bg-green-600 text-white disabled:opacity-50"
            onClick={handlePrimaryAction}
            disabled={!selected}
          >
            {view === "buy" ? "Buy Selected" : view === "upgrade" ? "Request Upgrade" : "Open Project"}
          </button>
          <button
            className="px-5 py-2 rounded bg-gray-200"
            onClick={() => {
              setSelected(null);
            }}
          >
            Clear Selection
          </button>

          <div className="ml-auto text-sm text-gray-600">
            {selected ? `Selected: ${selected}` : "No selection"}
          </div>
        </div>
      </div>
    </section>
  );
}
