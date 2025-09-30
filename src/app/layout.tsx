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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div className="navBar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./about">About</a></li>
            <li><a href="./Contact">Contact</a></li>
            <li><a href="./Projects">Projects</a></li>
            <li><a href="./Resume">Resumé</a></li>
          </ul>
        </div>
      </body>
    </html>
  );
}
