import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center min-h-screen py-8`}
      >
        <header className="m-10">
          <h1 className="text-4xl font-bold">API Request Samples</h1>
          <div className="my-5">
            <Link
              href="/csr"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              CSR (Client-side Rendering)
            </Link>
            {" / "}
            <Link
              href="/ssr"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              SSR (Server-side Rendering)
            </Link>
            {" / "}
            <Link
              href="/ssg"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              SSG (Static-site Generation)
            </Link>
            {" / "}
            <Link
              href="/isr"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              ISR (Incremental Static Regeneration)
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
