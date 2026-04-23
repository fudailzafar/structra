import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Structra — Site Documentation Software for Construction Teams",
  description:
    "Turn field photos and notes into structured progress reports. Structra helps architects and contractors document sites with precision.",
  openGraph: {
    title: "Structra — Site Documentation Software",
    description:
      "Turn field photos and notes into structured progress reports. Structra helps architects and contractors document sites with precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
