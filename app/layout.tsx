import '../style/globals.css';

import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
} from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'حمیدرضا فلاحی | Frontend Engineer | Next.js Developer',
  description:
    'سایت شخصی حمیدرضا فلاحی، برنامه‌نویس فرانت‌اند متخصص در Next.js، React، TypeScript، ERP، فروشگاه آنلاین و رابط‌های کاربری سریع و SEO-friendly.',
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  openGraph: {
    title: 'Hamidreza Fallahi | Frontend Engineer',
    description:
      'Frontend Engineer focused on Next.js, React, TypeScript, scalable UI architecture, ERP systems and SEO-friendly web applications.',
    url: 'https://yourdomain.com',
    siteName: 'Hamidreza Fallahi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamidreza Fallahi | Frontend Engineer',
    description:
      'Next.js & TypeScript developer building scalable and SEO-friendly web applications.',
  },
};
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
