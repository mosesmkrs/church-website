import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingChatButton from "@/app/components/floating-chat-button";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
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
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className={`${geistSans.className} min-h-full flex flex-col`}>
          <Navbar/>
          {children}
          <Footer/>
          <FloatingChatButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
