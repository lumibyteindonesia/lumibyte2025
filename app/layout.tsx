import type { Metadata } from "next";
import { Open_Sans, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navigationbar from "@/components/navigation";
import Footer from "@/components/footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Sesuaikan dengan kebutuhan
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <Navigationbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
