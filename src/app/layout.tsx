// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camilo | Next.js Portfolio",
  description:
    "Portfolio of Camilo, a full-stack developer specializing in Next.js, TypeScript, Tailwind, AWS, Linux, and Kubernetes.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Camilo" }],
  creator: "Camilo",
  openGraph: {
    title: "Camilo | Next.js Portfolio",
    description:
      "Portfolio of Camilo, a full-stack developer specializing in Next.js, TypeScript, Tailwind, AWS, Linux, and Kubernetes.",
    type: "website",
    url: "https://camilo777.com",
  },
};

function Navbar() {
  return (
    <nav>
      <img src="/next.svg" alt="Logo" className="logo"/>
      <ul>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><a>Projects</a></li>
      </ul>
    </nav>
  )
}
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 fullstacknyc. All rights reserved.</p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
