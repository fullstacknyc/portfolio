import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section>
      <header>
        <h1 className="h1">Projects</h1>
        <p className="h2">Selected work — case studies and links.</p>
      </header>

      <div style={{ display: "grid", gap: 16, marginTop: 20 }}>
        <article className="card">
          <h3 className="title">Example Project</h3>
          <p className="desc">A short description of the project and impact.</p>
          <div style={{ marginTop: 12 }}>
            <Link href="/projects/example" className="btn btn--neon">View case study</Link>
          </div>
        </article>

        <article className="card">
          <h3 className="title">Another Project</h3>
          <p className="desc">Summary, tech used and outcomes.</p>
        </article>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/" className="btn">Back home</Link>
      </div>
    </section>
  );
}