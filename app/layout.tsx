import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "South Bend First Seventh-day Adventist Church ",
  description: "Welcome to the South Bend First Seventh-day Adventist Church website! We are a vibrant community of believers dedicated to sharing the love of Christ and serving our community. Explore our site to learn more about our worship services, ministries, and how you can get involved. Join us as we grow in faith and fellowship together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar/>
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer/>
    </html>
  );
}
