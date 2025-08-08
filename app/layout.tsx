import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/clinic-data";
import SchemaOrg from "@/components/SchemaOrg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "klinik pratama",
    "griya medika candimulyo",
    "dokter magelang",
    "BPJS kesehatan",
    "KIS",
    "pelayanan kesehatan",
    "medical check up",
    "laboratorium",
    "imunisasi",
    "pengobatan gigi",
    "bedah minor",
  ],
  authors: [{ name: "Klinik Pratama Griya Medika Candimulyo" }],
  creator: "Klinik Pratama Griya Medika Candimulyo",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CODE,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id-ID" className="scroll-smooth">
      <body className={inter.className}>
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
