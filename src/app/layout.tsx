import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Dev Quotes",
  description: "Get a random developer-related quote on every visit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Explicitly convert title to string */}
        <title>{String(metadata.title ?? "Default Title")}</title>
        <meta name="description" content={String(metadata.description ?? "Default description")} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
