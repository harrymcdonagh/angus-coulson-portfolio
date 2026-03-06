import type { Metadata } from "next";
import { Newsreader, Playfair_Display } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anguscoulson.vercel.app"),
  title: "Angus Coulson — Broadcast & Digital Journalist",
  description:
    "Portfolio of Angus Coulson, MA Broadcast & Digital Journalism student at the University of East Anglia. Published work for Daily Mail Sport, The Spurs Web, and more.",
  openGraph: {
    title: "Angus Coulson — Broadcast & Digital Journalist",
    description:
      "Portfolio of Angus Coulson, MA Broadcast & Digital Journalism student at UEA. Published digital and broadcast journalism.",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Angus Coulson — Journalist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angus Coulson — Broadcast & Digital Journalist",
    description:
      "Portfolio of Angus Coulson, MA Broadcast & Digital Journalism student at UEA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
