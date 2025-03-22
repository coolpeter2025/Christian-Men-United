import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

// Use dynamic imports with no SSR for client components
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Christian Men United",
    default: "Christian Men United | Men of Integrity",
  },
  description: "Christian Men United is committed to building faithful communities of men through biblical teaching, fellowship, and service.",
  keywords: ["Christian men", "men's ministry", "Bible study", "fellowship", "prayer", "men of integrity", "Christian leadership"],
  alternates: {
    canonical: "https://christianmenunited.org",
    languages: {
      "en": "https://christianmenunited.org",
      "x-default": "https://christianmenunited.org",
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
