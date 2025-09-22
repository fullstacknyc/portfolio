import Link from "next/link";

// app/page.tsx
export default function HomePage() {
  return (
    <section>
      <header>
        <h2 className="h1">Next.js development at your fingertips.</h2>
        <p className="h2">
          Create full stack React apps with Next.js, the React framework for
          production.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          alignItems: "start",
          margin: "1.25rem 0",
        }}
      >
        <div>
          <article className="card card--float">
            <h3 className="title">
              Custom web applications that grow your business
            </h3>
            <p className="desc">
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
            fontSize: ".9rem",
            overflowX: "auto",
          }}
        >
          {`// Small example: fetch leads and render
export async function getLeads() {
  const res = await fetch('/api/leads');
  if (!res.ok) throw new Error('Failed to load');
  return res.json();
}`}
        </pre>
      </div>

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
