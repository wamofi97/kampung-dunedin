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
  metadataBase: new URL("https://kampungdunedin.nz"),
  keywords: [
    "Kampung Dunedin",
    "Makan sedap New Zealand",
    "Malaysian food Dunedin",
    "Homemade Malaysian cuisine NZ",
    "South Island Malaysian food",
    "Authentic Malaysian meals Dunedin",
    "Dunedin food delivery Malaysian",
    "Halal Malaysian food Dunedin",
  ],
  title: {
    default: "Kampung Dunedin | Authentic Malaysian Food",
    template: "%s | Kampung Dunedin",
  },
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Experience authentic, homemade Malaysian cuisine in Dunedin, New Zealand. Kampung Dunedin brings the rich flavors of Malaysia's traditional dishes to the heart of the South Island.",
  openGraph: {
    title: "Kampung Dunedin",
    description:
      "Authentic Malaysian Food in Dunedin, New Zealand. Discover rich, traditional flavors in the heart of the South Island.",
    url: "https://kampungdunedin.nz",
    images: [
      {
        url: "https://kampungdunedin.nz/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Kampung Dunedin - Authentic Malaysian Food",
      },
    ],
  },
  alternates: {
    canonical: "https://kampungdunedin.nz",
  },
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
