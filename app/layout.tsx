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
  title: "Pongsakorn — Full Stack Software Engineer",
  description: "Portfolio of Pongsakorn, a Full Stack Software Engineer building practical and scalable web applications.",
  openGraph: {
    title: "Pongsakorn — Full Stack Software Engineer",
    description: "Building practical, scalable, and business-focused systems that matter.",
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Pongsakorn — Full Stack Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pongsakorn — Full Stack Software Engineer",
    description: "Building practical, scalable, and business-focused systems that matter.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
