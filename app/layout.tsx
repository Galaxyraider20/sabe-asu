import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Association of Business & Engineering",
  description:
    "SABE connects business and engineering students at ASU through hands-on programs, industry events, and interdisciplinary projects.",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "People", href: "/people" },
  { label: "Contact Us", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-white antialiased`}
      >
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.3em] text-slate-200">
            <Link
              href="/"
              className="font-semibold tracking-[0.2em] text-white transition hover:text-amber-200"
            >
              SABE
            </Link>
            <div className="flex flex-wrap gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="pt-28">{children}</div>
      </body>
    </html>
  );
}
