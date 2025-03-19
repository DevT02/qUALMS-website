import type { Metadata } from "next";
import Header from "@/components/Header";
import "../globals.css";

export const metadata: Metadata = {
  title: "qualms (MSU Linguistics Club)",
  description: "A vibrant community for linguistics enthusiasts.",
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
