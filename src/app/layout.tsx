import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteName = "Africano Catering";
const siteUrl = "https://www.africanocatering.nl";
const description =
  "Africano Catering verzorgt halal catering en foodtruck service voor feesten, bruiloften en bedrijfsevents. Verse gerechten met karakter, vanaf 20 personen.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Halal Catering & Foodtruck`,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "Africano Catering",
    "halal catering",
    "foodtruck",
    "Somalische catering",
    "catering Zeeland",
    "event catering",
    "bruiloft catering",
    "bedrijfsfeest catering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName,
    title: `${siteName} | Halal Catering & Foodtruck`,
    description,
    images: [
      {
        url: "/brand/africano-logo.png",
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Halal Catering & Foodtruck`,
    description,
    images: ["/brand/africano-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
