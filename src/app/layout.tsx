import type { Metadata } from "next";
import { Header } from "@/components/Header";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "John Doe - Portfolio Workshop",
  description:
    "Explore John Doe's portfolio created during the portfolio workshop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
        />
        <Header />
        <main className="container mx-auto min-h-screen p-10">
          <div className="pt-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
