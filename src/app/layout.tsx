import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camilo777 — Full Stack Developer",
  description:
    "Portfolio of Camilo, a full-stack developer specializing in Next.js, Node.js, and modern web solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md glass">
          <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" className="font-bold text-xl text-accent">
              Camilo777
            </Link>
            <div className="flex gap-6">
              <Link href="/projects" className="hover:text-accent transition">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-accent transition">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <body>
        {/* Page Content */}
        <div className="pt-20">{children}</div>

        {/* Footer */}
        <footer className="text-center py-8 text-sm text-muted">
          © {new Date().getFullYear()} Camilo777. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
