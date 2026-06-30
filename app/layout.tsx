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
  keywords: [
    "الاستشارات المالية",
    "دراسة جدوى اقتصادية",
    "تأسيس إدارات محاسبية",
    "الاستشارات الزكوية والضريبية",
    "حوكمة الحسابات",
    "مكتب جواد الخرس الاستشاري",
    "الاستقرار المالي للمنشآت",
    "الشركات المتوسطة والصغيرة السعودية"
  ],
  authors: [{ name: "مكتب جواد الخرس" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://jawadadvisory.vercel.app/",
    title: "مكتب جواد بن عبدالله الخرس للاستشارات المالية",
    description: "استشارات مالية وضريبية رصينة مبنية على أسس أكاديمية لدعم استقرار ونمو منشآتكم التجارية بالمملكة.",
    siteName: "مكتب جواد الخرس للاستشارات المالية",
  },
  twitter: {
    card: "summary_large_image",
    title: "مكتب جواد بن عبدالله الخرس للاستشارات المالية",
    description: "استشارات مالية وضريبية رصينة مبنية على أسس أكاديمية لدعم استقرار ونمو منشآتكم التجارية بالمملكة.",
  }
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
