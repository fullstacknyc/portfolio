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
          <h3 className="title">AudioCloud</h3>
          <p className="desc">Using Next.js, I collaborated with a senior JavaScript engineer and a music production engineer to create a file transfer app for clients of the business.</p>
          <div style={{ marginTop: 12 }}>
            <Link href="https://www.fullstacknyc.com/fullstacknyc/portfolio.git" className="btn btn--neon">View case study</Link>
          </div>
        </article>

        <article className="card">
          <h3 className="title">Alexandra Valencia</h3>
          <p className="desc">Using Next.js, I created a new website created to retain customers and boost sales by upgrading the framework, and design.</p>
          <Link href="https://www.alexandravalencia.com" className="btn btn--neon" style={{ marginTop: 12 }}>Visit site</Link>
        </article>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/" className="btn">Back home</Link>
      </div>
    </section>
  );
}