import Link from "next/link";

export default function ContactPage() {
  return (
    <section>
      <header>
        <h1 className="h1">Contact</h1>
        <p className="h2">Book a consultation or send a message.</p>
      </header>

      <article className="card" style={{ marginTop: 16 }}>
        <p className="small">Email: <a href="mailto:you@example.com">you@example.com</a></p>
        <p className="small" style={{ marginTop: 8 }}>
          Or use a scheduling / contact form (add one here when ready).
        </p>
        <div style={{ marginTop: 12 }}>
          <Link href="/" className="btn">Back home</Link>
        </div>
      </article>
    </section>
  );
}