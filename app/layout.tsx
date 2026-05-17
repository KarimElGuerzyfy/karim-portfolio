import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Taskbar from "@/components/Taskbar/Taskbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Karim El Guerzyfy",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={figtree.variable}
      suppressHydrationWarning
    >
      <body className="font-(--font-figtree) antialiased h-full">
        {children}
        <Taskbar />
      </body>
    </html>
  );
}