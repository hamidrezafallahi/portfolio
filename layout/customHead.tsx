"use client";

import {
  useEffect,
  useState,
} from 'react';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import HeaderReveal from '@components/ui/HeaderReveal';

export default function Header() {
  const [open, setOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();

  const themes = ["default", "dark", "cyberpunk", "aurora"] as const;

  const [themeIndex, setThemeIndex] = useState(0);

  const navItems = [
    { label: "Projects", href: `/${locale}/projects` },
    { label: "Libraries", href: `/${locale}/libraries` },
    { label: "Highlight", href: "#highlight" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
     { label: "Contact", href: "#contact" },
  ];

  /* ================= INIT THEME ================= */

  useEffect(() => {
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1];

    if (savedTheme) {
      const index = themes.indexOf(savedTheme as any);

      if (index !== -1) {
        setThemeIndex(index);

        applyTheme(savedTheme);
      }
    }
  }, []);

  const applyTheme = (selectedTheme: string) => {
    if (selectedTheme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }

    document.cookie = `theme=${selectedTheme}; path=/; max-age=31536000`;
  };

  const handleNextTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;

    const nextTheme = themes[nextIndex];

    setThemeIndex(nextIndex);

    applyTheme(nextTheme);
  };

  const handleChangeLang = () => {
    const newLang = locale === "fa" ? "en" : "fa";

    const pathname = window.location.pathname;

    const parts = pathname.split("/").filter(Boolean);

    if (parts.length > 0) {
      parts[0] = newLang;
    } else {
      parts.unshift(newLang);
    }

    router.replace("/" + parts.join("/"));
  };

  return (
    <HeaderReveal>
      <header className="top-0 z-50 fixed w-full">
        <div className="mx-auto px-6 py-4 container">
          {/* MAIN GLASS BAR */}

          <div className="relative flex justify-between items-center bg-white/5 hover:bg-white/10 dark:bg-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl backdrop-saturate-150 p-3 px-5 border border-white/20 dark:border-white/15 rounded-[28px] h-16 transition-all duration-300">
            {/* glass highlight */}

            <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-60 rounded-[28px] pointer-events-none" />

            {/* LOGO */}

            <Link href={`/${locale}`} className="relative font-bold text-xl tracking-tight">
              HRF
            </Link>

            {/* DESKTOP NAV */}

            <nav className="hidden relative md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-600 hover:text-black dark:hover:text-white dark:text-zinc-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ACTIONS */}

            <div className="hidden relative md:flex items-center gap-3">
              <button
                onClick={handleNextTheme}
                className="hover:bg-white/20 backdrop-blur-md p-2 rounded-full transition"
              >
                🌙
              </button>

              <button
                onClick={handleChangeLang}
                className="hover:bg-white/20 backdrop-blur-md px-3 py-2 rounded-full transition"
              >
                {locale.toUpperCase()}
              </button>
            </div>

            {/* MOBILE BUTTON */}

            <button
              className="md:hidden relative hover:bg-white/20 rounded-full w-10 h-10 transition"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? "×" : "="}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`
          fixed
          inset-x-0
          top-24

          z-40

          mx-6


          rounded-[28px]


          border
          border-white/20


          bg-white/5
          dark:bg-white/8


          backdrop-blur-2xl
          backdrop-saturate-150


          shadow-[0_20px_60px_rgba(0,0,0,0.18)]


          transition-all
          duration-300


          md:hidden


          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 pointer-events-none opacity-0"
          }
        `}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:bg-white/20 px-4 py-3 rounded-2xl transition"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-3 mt-4 pt-4 border-white/20 border-t">
            <button
              onClick={handleNextTheme}
              className="flex-1 hover:bg-white/20 p-3 rounded-2xl transition"
            >
              🌙
            </button>

            <button
              onClick={handleChangeLang}
              className="flex-1 hover:bg-white/20 p-3 rounded-2xl transition"
            >
              {locale.toUpperCase()}
            </button>
          </div>
        </nav>
      </div>
    </HeaderReveal>
  );
}
