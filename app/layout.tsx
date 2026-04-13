import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrackingInterview — AI-Powered Technical Assistant for Interviews",
  description:
    "Real-time AI solutions for coding, system design, and verbal interviews. Extract problems, capture screenshots, record audio — get instant, expert-level answers.",
  keywords: [
    "AI interview assistant",
    "coding interview",
    "system design",
    "LeetCode",
    "technical interview",
    "AI copilot",
  ],
  openGraph: {
    title: "CrackingInterview — AI-Powered Technical Assistant for Interviews",
    description:
      "Real-time AI solutions for coding, system design, and verbal interviews.",
    url: "https://crackinginterview.org",
    siteName: "CrackingInterview",
    images: [
      {
        url: "/images/algorithm.png",
        width: 1200,
        height: 630,
        alt: "CrackingInterview AI Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrackingInterview — AI-Powered Technical Assistant for Interviews",
    description:
      "Real-time AI solutions for coding, system design, and verbal interviews.",
    images: ["/images/algorithm.png"],
  },
  icons: {
    icon: "/images/app-icon.png",
    apple: "/images/app-icon.png",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
