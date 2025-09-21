import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camilo | Full Stack Developer",
  description: "Professional portfolio showcasing full-stack upgrades, modern web apps, and business-ready solutions.",
  keywords: ["Next.js", "Full Stack", "Portfolio", "Web Development", "Business Websites"],
  openGraph: {
    title: "Camilo | Full Stack Developer",
    description: "Professional portfolio showcasing full-stack upgrades and modern web applications.",
    url: "https://camilo777.com",
    siteName: "Camilo Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Camilo Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "//icons8-favicon-forma-thin-filled-sharp-32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <header className="border-b border-gray-200 bg-white">
            <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <ul className="flex gap-6">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/projects" className="hover:text-blue-600">Projects</Link></li>
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
        <footer className="border-t border-gray-200 text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Camilo777 — Built with Next.js
        </footer>
      </body>
    </html>
  );
}
