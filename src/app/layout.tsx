import type { Metadata } from "next";
import { Header } from "@/components/Header";

import "@/styles/tailwind.css";

// Here we define the metadata for the site
// The metadata is used to define the title and description of the site
// The metadata is used by search engines and social media platforms
export const metadata: Metadata = {
  title: "John Doe - Portfolio Workshop",
  description:
    "Explore John Doe's portfolio created during the portfolio workshop.",
};

//Here is the root layout which shared across all pages
//This layout includes the header and the main content
export default function RootLayout({
  children, // The children prop is a reserved prop in React. It is used to render the content of the component.
}: {
  children: React.ReactNode; // React.ReactNode is a type that represents any type of content that can be rendered in React.
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/*  This is the favicon using an SVG */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
        />
        <Header />
        <main className="container min-h-screen px-4 sm:px-10 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
