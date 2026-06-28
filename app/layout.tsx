import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { profile } from "./data";

export const metadata: Metadata = {
  title: `${profile.name} — portfolio`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 px-7 py-10 md:px-16 md:py-16">
            <div className="mx-auto max-w-2xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
