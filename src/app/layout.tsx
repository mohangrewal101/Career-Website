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

const bodyClass = `${geistSans.variable} ${geistMono.variable} antialiased`;

export const metadata: Metadata = {
  title: "Mohan Grewal – Portfolio",
  description: "Personal portfolio of Mohan Grewal showcasing projects, skills, and experience.",
  icons: {
    icon: "FaviconIcon/favicon.ico",
    shortcut: "FaviconIcon/favicon.ico",
    apple: "FaviconIcon/favicon.ico",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={bodyClass}
      >
        {children}
      </body>
    </html>
  );
}
