import type { Metadata } from "next";
import { Tajawal, Outfit } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "مكتب جواد بن عبدالله الخرس للاستشارات المالية",
  description: "نقدم حلولاً ودراسات جدوى واستشارات ضريبية ومحاسبية مبنية على أسس أكاديمية وعلمية رصينة لدعم اتخاذ القرار وحوكمة منشآتكم الاستثمارية والمالية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-deep text-text-light">{children}</body>
    </html>
  );
}
