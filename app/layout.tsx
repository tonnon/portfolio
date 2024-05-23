import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./ui/starsbg/StarsBackground";
import Navbar from "./ui/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background-color overflow-y-scroll overflow-x-hidden`}>
        <Navbar/>
        <StarsCanvas/>
        {children}
      </body>
    </html>
  );
}
