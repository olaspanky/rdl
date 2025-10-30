import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const work1 = Work_Sans({
  variable: "--work1",
  subsets: ["latin"],
  weight: ["300"], // Light
});

const work2 = Work_Sans({
  variable: "--work2",
  subsets: ["latin"],
  weight: ["400"], // Regular
});

const work3 = Work_Sans({
  variable: "--work3",
  subsets: ["latin"],
  weight: ["500"], // Medium
});

const work4 = Work_Sans({
  variable: "--work4",
  subsets: ["latin"],
  weight: ["600"], // Semi-bold
});

const isidora = localFont({
  src: "/fonts/IsidoraSans-Medium.otf",
  variable: "--font-isi",
  display: "swap",
});

const isidora2 = localFont({
  src: "/fonts/IsidoraSans-Light.otf",
  variable: "--font-isidora",
  display: "swap",
});
const isidora3 = localFont({
  src: "/fonts/IsidoraSans-Black.otf",
  variable: "--font-isidora3",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Research Data Lab",
  description: "PBR Life Sciences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${isidora.variable} ${isidora2.variable} ${isidora3.variable} ${work1.variable} ${work2.variable} ${work3.variable} ${work4.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
