import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {
  Geist,
  Geist_Mono,
} from 'next/font/google';

import Header from '@layout/customHead';

// export const dynamic = "force-dynamic";

// const myFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/IRANSansWeb(FaNum).woff",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--IRANSans-font",
//   display: "swap",
// });
export async function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
 

  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable}  h-full antialiased`}
      dir={locale === "fa" ? "rtl" : "ltr"}
      lang={locale}
      data-scroll-behavior="smooth"
      // data-theme={theme}
    >
      <body className="min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {

  const { locale } = await params;

 
  const isFa = locale === "fa";

  return {
    title: isFa
      ? "حمیدرضا فلاحی | توسعه‌دهنده فرانت‌اند"
      : "Hamidreza Fallahi | Frontend Engineer",

    description: isFa
      ? "سایت شخصی حمیدرضا فلاحی، متخصص React و Next.js"
      : "Personal portfolio of a Frontend Engineer specialized in Next.js",

    alternates: {
      canonical: `https://www.hamidrezafalahi.ir/${locale}`,
      languages: {
        fa: "https://www.hamidrezafalahi.ir/fa",
        en: "https://www.hamidrezafalahi.ir/en",
        "x-default": "https://www.hamidrezafalahi.ir/fa",
       },
    },

    openGraph: {
      title: isFa
        ? "حمیدرضا فلاحی | فرانت‌اند دولوپر"
        : "Hamidreza Fallahi | Frontend Engineer",

      description: isFa
        ? "توسعه‌دهنده React و Next.js"
        : "React & Next.js Developer",

      url: `https://www.hamidrezafalahi.ir/${locale}`,
      siteName: "Hamidreza Fallahi",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isFa
        ? "حمیدرضا فلاحی"
        : "Hamidreza Fallahi",
      description: isFa
        ? "فرانت‌اند دولوپر"
        : "Frontend Engineer",
    },
  };
}