import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Taskbar from "@/components/Taskbar/Taskbar";
import { WindowProvider } from "@/context/WindowContext";

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
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body className="antialiased h-screen w-screen overflow-hidden">
        <WindowProvider>
          {children}
          <Taskbar />
        </WindowProvider>
      </body>
    </html>
  );
}