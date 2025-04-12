import type { Metadata } from "next";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "qUALMS – Michigan State Linguistics Club | Join, Learn & Explore Language",
  description: "Discover qUALMS, MSU’s premier undergraduate linguistics club. Join us for meetings, events, and a vibrant community of language enthusiasts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ice-100 text-midnight-900">
        <Header />
        <main className="min-h-[calc(100vh-5rem)]">{children}</main>
      </body>
    </html>
  );
}
