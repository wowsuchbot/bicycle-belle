import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bicycle Belle - AI-Powered Local Bike Shop Discovery",
  description: "Find your perfect bike at local shops with AI-powered recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
