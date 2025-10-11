// app/layout.tsx
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business To Business Development",
  description:
    "Portfolio of Camilo, a full-stack developer specializing in Next.js, TypeScript, Tailwind, AWS, Linux, and Kubernetes.",
  keywords: [
    "React Developer",
    "Next.js Developer",
    "React",
    "TypeScript",
    "Tailwind",     
    "Web Development",
    "Front-End Portfolio",
  ],
  authors: [{ name: "Camilo" }],
  creator: "Camilo",
  openGraph: {
    title: "Business To Business Development",
    description:
      "Portfolio of Camilo, a full-stack developer specializing in Next.js, TypeScript, Tailwind, AWS, Linux, and Kubernetes.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
