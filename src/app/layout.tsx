import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Ark Ascension",
  description: "The sun is dying. Five civilizations race to build their Ark and escape before the supernova claims them all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#05070f]">
        <Sidebar />
        <main className="md:ml-[280px] min-h-screen pt-16 md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
