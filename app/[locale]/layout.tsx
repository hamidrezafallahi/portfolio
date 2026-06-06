import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {
  Geist,
  Geist_Mono,
} from 'next/font/google';

import Header from '@layout/customHead';

export const dynamic = "force-dynamic";

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
  // const cookieStore = await cookies();
  // const theme = cookieStore.get("theme")?.value || "default";

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
