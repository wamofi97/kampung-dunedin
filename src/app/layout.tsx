import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

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
    "Authentic Malaysian food Dunedin",
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
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Kampung Dunedin | Authentic Malaysian Food",
    description:
      "Experience authentic, homemade Malaysian cuisine in Dunedin, New Zealand. Kampung Dunedin brings the rich flavors of Malaysia's traditional dishes to the heart of the South Island.",
    images: [
      {
        url: "https://kampungdunedin.nz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kampung Dunedin",
      },
      {
        url: "https://kampungdunedin.nz/og-image-square.png",
        width: 400,
        height: 400,
        alt: "Kampung Dunedin",
      },
    ],
    siteName: "Kampung Dunedin",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kampung Dunedin",
            url: "https://kampungdunedin.nz",
            logo: "https://kampungdunedin.nz/favicon.png",
            sameAs: [
              "https://www.facebook.com/kampungdunedin/",
              "https://www.instagram.com/kampungdunedin/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "kampungdunedin@gmail.com",
              contactType: "customer service",
            },
          })}
        </Script>
      </head>
      <body className={`${poppins.variable} ${bespoke.variable} antialiased`}>
        <Navbar />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}
