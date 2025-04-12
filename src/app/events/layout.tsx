import type { Metadata } from "next";
import Header from "@/components/Header";
import "../globals.css";

export const metadata: Metadata = {
  title: "qUALMS – Michigan State Linguistics Club | Join, Learn & Explore Language",
  description: "Join qUALMS, Michigan State’s premier undergraduate linguistics club, where language enthusiasts connect, learn through tutoring and workshops, and explore the art of linguistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ice-100 text-midnight-900">
        <main className="min-h-[calc(100vh-5rem)]">{children}</main>
      </body>
    </html>
  );
}
