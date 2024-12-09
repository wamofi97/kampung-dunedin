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
  description:
    "Experience authentic, homemade Malaysian cuisine in Dunedin, New Zealand. Kampung Dunedin brings the rich flavors of Malaysia's traditional dishes to the heart of the South Island.",
  alternates: {
    canonical: "https://kampungdunedin.nz",
  },
  openGraph: {
    type: "website",
    url: "https://kampungdunedin.nz",
    title: "Kampung Dunedin | Authentic Malaysian Food",
    description:
      "Experience authentic, homemade Malaysian cuisine in Dunedin, New Zealand. Kampung Dunedin brings the rich flavors of Malaysia's traditional dishes to the heart of the South Island.",
    images: [
      {
        url: "https://kampungdunedin.nz/opengraph-image.png?v=1",
        width: 1200,
        height: 630,
        alt: "Kampung Dunedin logo and preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.variable} ${bespoke.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
