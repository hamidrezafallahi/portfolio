import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Grid Background */}
      <div className="-z-10 absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* Glow */}
      <div className="top-40 left-1/2 -z-10 absolute bg-[radial-gradient(circle,var(--glow-color)_0%,transparent_70%)] opacity-40 blur-3xl rounded-full w-150 h-150 -translate-x-1/2" />

      <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2 mx-auto px-6 container">
        {/* LEFT */}
        <div className="lg:text-left text-center">
          <span className="inline-block mb-6 px-4 py-2 text-sm rounded-full border border-(--primary-color)/30 backdrop-blur-md bg-[color-mix(in_srgb,var(--neutral-color)_70%,transparent)]">
            مهندس فرانت‌اند | Frontend Engineer
          </span>

          <h1 className="font-bold text-(--foreground-color) text-4xl md:text-6xl leading-tight">
            حمیدرضا فلاحی
            <span className="block mt-3 font-medium text-[color-mix(in_srgb,var(--foreground-color)_65%,transparent)] text-xl md:text-2xl">
              Hamidreza Fallahi — Next.js & TypeScript Developer
            </span>
          </h1>

          <h2 className="mx-auto lg:mx-0 mt-6 max-w-xl font-medium text-[color-mix(in_srgb,var(--foreground-color)_85%,transparent)] text-xl md:text-2xl">
            طراحی و توسعه سیستم‌های ERP، فروشگاه‌های آنلاین و اپلیکیشن‌های وب
            مقیاس‌پذیر با معماری مدرن
            <br />
            <span className="font-normal text-[color-mix(in_srgb,var(--foreground-color)_65%,transparent)] text-base">
              Building scalable ERP systems, e‑commerce platforms and modern web
              applications with clean architecture.
            </span>
          </h2>

          <p className="mx-auto lg:mx-0 mt-6 max-w-xl text-[color-mix(in_srgb,var(--foreground-color)_70%,transparent)]">
            تمرکز من روی ساخت رابط‌های کاربری سریع، قابل نگهداری و بهینه برای
            SEO است.
            <br />I focus on performance-driven, maintainable, and SEO‑optimized
            user interfaces.
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 mt-8 text-sm">
            <div>
              <p className="font-bold text-(--primary-color) text-lg">3+</p>
              <p className="text-[color-mix(in_srgb,var(--foreground-color)_70%,transparent)]">
                سال تجربه | Years Experience
              </p>
            </div>

            <div>
              <p className="font-bold text-(--primary-color) text-lg">10+</p>
              <p className="text-[color-mix(in_srgb,var(--foreground-color)_70%,transparent)]">
                پروژه واقعی | Projects
              </p>
            </div>

            <div>
              <p className="font-bold text-(--primary-color) text-lg">
                Open Source
              </p>
              <p className="text-[color-mix(in_srgb,var(--foreground-color)_70%,transparent)]">
                Contributor
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-xl text-white bg-(--primary-color) hover:scale-[1.03] active:scale-95 transition"
            >
              مشاهده پروژه‌ها | View Projects
            </Link>

            <Link
              href="/documents/hamidreza-fallahi-resume-1405-01.pdf"
              className="px-6 py-3 border border-(--primary-color) rounded-xl hover:bg-(--primary-color) hover:text-white transition"
            >
              دانلود رزومه | Download Resume
            </Link>
          </div>

          {/* Social */}
          <div className="flex justify-center lg:justify-start gap-6 mt-8 text-[color-mix(in_srgb,var(--foreground-color)_70%,transparent)] text-sm">
            <a href="https://github.com/hamidrezafallahi" target="_blank">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hamidreza-falahi"
              target="_blank"
            >
              LinkedIn
            </a>

            <a href="https://t.me/hamidrezafalahi" target="_blank">
              Telegram
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <div className="absolute bg-[radial-gradient(circle,var(--primary-color)_0%,transparent_70%)] opacity-40 blur-2xl rounded-full w-80 h-80" />

          <div className="relative p-4 rounded-2xl border border-(--primary-color)/20 shadow-xl backdrop-blur-xl bg-[color-mix(in_srgb,var(--neutral-color)_60%,transparent)]">
            <Image
              src="/images/cyberpunk.png"
              alt="Hamidreza Fallahi Frontend Engineer"
              width={300}
              height={300}
              priority
              className="rounded-xl w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
