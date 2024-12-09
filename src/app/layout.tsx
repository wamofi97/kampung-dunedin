import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const bespoke = localFont({
  src: "../../public/fonts/BespokeSerif-Variable.woff2",
  variable: "--font-bespoke",
});

export const metadata: Metadata = {
  title: {
    default: "Kampung Dunedin",
    template: "%s | Kampung Dunedin",
  },
  description: "Authentic Malaysian Food in Dunedin, New Zealand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bespoke.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
