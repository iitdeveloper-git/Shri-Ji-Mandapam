import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { MotionProvider } from "@/components/motion-provider";
import { Schema } from "@/components/schema";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "500", "700"], variable: "--font-devanagari", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Shri Ji Mandapam | Premium Banquet Hall & Wedding Lawn in Aonla",
    template: "%s | Shri Ji Mandapam"
  },
  description: "Shri Ji Mandapam is Aonla's premier wedding lawn and air-conditioned banquet hall near Manona Dham. Book us for grand weddings, sangeet, receptions, and celebrations.",
  keywords: ["Shri Ji Mandapam", "banquet hall in Aonla", "wedding lawn in Aonla", "marriage hall in Aonla", "banquet hall near Manona Dham", "Bareilly marriage lawn"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shri Ji Mandapam | Premium Banquet Hall & Lawn",
    description: "Shri Ji Mandapam is Aonla's premier wedding lawn and air-conditioned banquet hall near Manona Dham. Book us for grand weddings, sangeet, receptions, and celebrations.",
    url: "https://www.shrijimandapam.com",
    siteName: "Shri Ji Mandapam",
    images: [{ url: "/shri_ji_1.png", width: 1200, height: 630, alt: "Shri Ji Mandapam Banquet Hall Building View" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Ji Mandapam | Premium Banquet Hall & Lawn",
    description: "Shri Ji Mandapam is Aonla's premier wedding lawn and air-conditioned banquet hall near Manona Dham."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${inter.variable} ${devanagari.variable}`}>
      <body>
        <Schema />
        <MotionProvider>
          <div className="noise" />
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
