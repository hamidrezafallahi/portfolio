"use client";

import {
  useEffect,
  useState,
} from 'react';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();

  const themes = ["default", "dark", "cyberpunk", "aurora"] as const;

  const [themeIndex, setThemeIndex] = useState(0);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Libraries", href: "#opensource" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  /* ================== INIT THEME FROM COOKIE ================== */
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

  /* ================== APPLY THEME ================== */
  const applyTheme = (selectedTheme: string) => {
    if (selectedTheme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }

    document.cookie = `theme=${selectedTheme}; path=/; max-age=31536000`;
  };

  /* ================== NEXT THEME ================== */
  const handleNextTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    setThemeIndex(nextIndex);
    applyTheme(nextTheme);
  };

  /* ================== CHANGE LANGUAGE ================== */
  const handleChangeLang = () => {
    const newLang = locale === "fa" ? "en" : "fa";

    const pathname = window.location.pathname;
    const parts = pathname.split("/").filter(Boolean);

    if (parts.length > 0) {
      parts[0] = newLang;
    } else {
      parts.unshift(newLang);
    }

    const newPath = "/" + parts.join("/");
    router.replace(newPath);
  };

  return (
    <>
      <header className="top-0 z-50 fixed w-full">
        <div className="mx-auto px-6 py-4 container">
          <div className="flex justify-between items-center bg-white/10 shadow-lg hover:shadow-xl backdrop-blur-md p-4 px-6 border border-zinc-200/50 dark:border-white/40 rounded-2xl h-16 transition-all duration-300">

            {/* Logo */}
            <a href="#" className="font-bold text-xl tracking-tight">
              HF
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-zinc-600 hover:text-black dark:hover:text-white dark:text-zinc-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleNextTheme}
                className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-lg transition"
                title="Change Theme"
              >
                🌙
              </button>

              <button
                onClick={handleChangeLang}
                className="hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-2 rounded-lg transition"
              >
                {locale.toUpperCase()}
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? "×" : "="}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-x-0 top-24 z-40 mx-6 rounded-2xl
          border border-zinc-200/50 dark:border-white/40
          bg-white/10  
          backdrop-blur-lg transition-all duration-300 md:hidden
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 pointer-events-none opacity-0"}
        `}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800 px-4 py-3 rounded-xl transition"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-3 mt-4 pt-4 border-t">
            <button
              onClick={handleNextTheme}
              className="flex-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-3 rounded-xl"
            >
              🌙
            </button>

            <button
              onClick={handleChangeLang}
              className="flex-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-3 rounded-xl"
            >
              {locale.toUpperCase()}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}