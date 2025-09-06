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
  title: "Saiprasath B - Full Stack Developer",
  description: "Full Stack Developer with expertise in Node.js, Django, React Native, and DevOps. Building scalable web applications and mobile apps with modern technologies.",
  keywords: ["Full Stack Developer", "Backend Developer", "Mobile App Developer", "Node.js", "Django", "React Native", "DevOps"],
  authors: [{ name: "Saiprasath B" }],
  creator: "Saiprasath B",
  openGraph: {
    title: "Saiprasath B - Full Stack Developer",
    description: "Full Stack Developer with expertise in Node.js, Django, React Native, and DevOps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saiprasath B - Full Stack Developer",
    description: "Full Stack Developer with expertise in Node.js, Django, React Native, and DevOps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
