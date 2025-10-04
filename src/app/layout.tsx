// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camilo | Full-Stack Developer",
  description:
    "Portfolio of Camilo, a full-stack developer specializing in Next.js, TypeScript, Tailwind, and AWS.",
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
    title: "Camilo | Full-Stack Developer",
    description:
      "Portfolio of Camilo, a full-stack developer specializing in Next.js, TypeScript, Tailwind, and AWS.",
    type: "website",
    url: "https://camilo777.com",
  },
};

function Navbar() {
  return (
    <nav>
      <img src="/vercel.svg" alt="Camilo's Logo" className="logo"/>
      <ul>
        <li><a>About</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  )
}
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Camilo. All rights reserved.</p>
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
