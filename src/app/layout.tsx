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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
        <Footer />
      </body>
    </html>
  );
}
