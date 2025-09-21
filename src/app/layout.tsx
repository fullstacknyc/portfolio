// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

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
        <header style={{ padding: "1rem", background: "#eee" }}>
          <h1>My Next.js App</h1>
        </header>
        <main className="container">{children}</main>
        <footer style={{ padding: "1rem", background: "#eee", marginTop: "2rem" }}>
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
