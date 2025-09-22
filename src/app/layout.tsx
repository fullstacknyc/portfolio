// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Learning Next.js like HTML, CSS, and JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* decorative animated background */}
        <div className="dazzle-canvas" aria-hidden />

        <header className="container" style={{ paddingTop: 20 }}>
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h1 className="h1" style={{ margin: 0, fontSize: "1.25rem" }}>My Next.js App</h1>
              <p className="small" style={{ margin: 0 }}>Full‑stack Next.js & TypeScript</p>
            </div>

            <nav className="row">
              <Link href="/" className="btn">Home</Link>
              <Link href="/projects" className="btn">Projects</Link>
              <Link href="/contact" className="btn btn--neon">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="container" style={{ marginTop: 24 }}>
          <div className="divider" />
          <p className="small">© 2025 — Built with Next.js</p>
        </footer>
      </body>
    </html>
  );
}
