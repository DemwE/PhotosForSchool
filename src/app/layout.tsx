import type { Metadata } from "next";
import "./main.css";

export const metadata: Metadata = {
  title: "LensLab",
  description: "Capture Moments, Create Memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-white dark:bg-black">{children}</body>
    </html>
  );
}
