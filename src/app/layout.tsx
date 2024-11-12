import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Streamify",
  description: "Your music streaming service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
