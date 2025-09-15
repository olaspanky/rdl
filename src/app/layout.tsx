import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Work_Sans } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const work = Work_Sans({
  variable: "--work",
  subsets: ["latin"],
});

const isidora = localFont({
  src: '/fonts/IsidoraSans-Black.otf',
  variable: '--font-isi',
  display: 'swap',
});
const isidora2 = localFont({
  src: '/fonts/IsidoraSans-Light.otf',
  variable: '--font-isidora',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Research Data lab",
  description: "PBR Life sciences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${isidora.variable} ${work.variable} ${isidora2.variable}   antialiased`}
      >
        {children}
      </body>
    </html>
  );
}