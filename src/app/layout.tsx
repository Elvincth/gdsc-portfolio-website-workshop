import type { Metadata } from "next";
import { Header } from "@/components/Header";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "John Smith - Portfolio Workshop",
  description:
    "Explore John Smith's portfolio created during the portfolio workshop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-zinc-50">
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
        />
        <Header />
        <main className="bg-white h-full container mx-auto min-h-screen p-10 ring-1 ring-zinc-100">
          <div className="pt-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
