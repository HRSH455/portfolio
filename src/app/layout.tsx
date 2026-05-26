import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsha | Software Engineer",
  description: "Full-stack software engineer specialising in Spring Boot, Angular, and distributed systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
