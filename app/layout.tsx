
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
  metadataBase: new URL("https://thinknex.com"),
  title: {
    default: "ThinkNex | Ideas Deserve Intelligent Execution",
    template: "%s | ThinkNex",
  },
  description:
    "ThinkNex transforms ideas into digital products, intelligent systems and technology solutions through software engineering, AI, automation and technology consulting.",
  applicationName: "ThinkNex",
  keywords: [
    "ThinkNex",
    "software development",
    "AI solutions",
    "AI agents",
    "business automation",
    "web development",
    "mobile app development",
    "technology consulting",
    "digital product engineering",
  ],
  openGraph: {
    title: "ThinkNex | Ideas Deserve Intelligent Execution",
    description:
      "From concept to creation, we build digital products, intelligent systems and technology solutions.",
    siteName: "ThinkNex",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
