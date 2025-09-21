@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* -------------------------------
   Global Theme Variables
   Dark first (preferred), light fallback
---------------------------------- */
:root {
  --bg: #0a0a0a;
  --surface: #111112;
  --fg: #e5e7eb;
  --muted: #9ca3af;
  --accent: #3b82f6; /* Tailwind blue-600 */
  --accent-hover: #2563eb;
  --radius: 12px;
  --card-padding: 1rem;
  --glass: rgba(255, 255, 255, 0.04);

  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, "Helvetica Neue", Arial;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono",
    monospace;

  scroll-behavior: smooth;
}

@media (prefers-color-scheme: light) {
  :root {
    --bg: #ffffff;
    --surface: #f9fafb;
    --fg: #111827;
    --muted: #6b7280;
    --glass: rgba(0, 0, 0, 0.04);
  }
}

/* -------------------------------
   Universal Reset
---------------------------------- */
html,
body,
#__next {
  height: 100%;
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}

/* Typography scale (smooth + responsive) */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 3.75rem);
}

h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
}

h3 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
}

/* Paragraph rhythm */
p {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--muted);
}

/* Links */
a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease, opacity 0.2s ease;
}

a:hover {
  color: var(--accent-hover);
  opacity: 0.9;
}

/* -------------------------------
   Components & Utilities
---------------------------------- */

/* Buttons */
.btn-primary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  background: var(--accent);
  color: #fff;
  font-weight: 500;
  transition: background 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.btn-outline {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--muted);
  color: var(--fg);
  font-weight: 500;
  transition: border 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-1px);
}

/* Cards */
.card {
  background: var(--surface);
  border-radius: var(--radius);
  padding: var(--card-padding);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* Glass effect (optional utility) */
.glass {
  background: var(--glass);
  backdrop-filter: blur(12px);
  border-radius: var(--radius);
}

/* Smooth section spacing */
section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

/* Print safety */
@media print {
  body {
    background: #fff;
    color: #000;
  }
}
