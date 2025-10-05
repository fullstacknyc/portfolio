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
  return (<>
    <header className="logoAndNav">
  <div className="navLogo">
    <a href="https://www.camilo777.com" target="_blank">
      <img src="/logo.png" alt="Logo" />
    </a>
  </div>
  <nav>
    <ul>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      <li><a>Projects</a></li>
    </ul>
  </nav>
</header>

    </>
  )
}
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Camilo Gomez. All rights reserved.</p>
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
        <div className="logoAndNav">
        <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
