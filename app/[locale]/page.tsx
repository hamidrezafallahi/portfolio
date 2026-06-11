import Image from 'next/image';

import AboutSection from '@components/landing/aboutSection';
import ContactSection from '@components/landing/contactSection';
import ExperienceTimelineSection
  from '@components/landing/experienceTimelineSection';
import FeaturedProjectsSection
  from '@components/landing/featuredProjectsSection';
import HeroSection from '@components/landing/heroSection';
import HighlightsSection from '@components/landing/highlightsSection';
import OpenSourceSection from '@components/landing/openSourceSection';
import TechStackSection from '@components/landing/techStackSection';

export default async function Page(props: {
  params: Promise<{ locale: string }>;
}) {
  const { params } = await props;
  const { locale } = await params;
  return (
    <main className="w-full">
      <HeroSection locale={locale} />
      <div className="relative">
       <div className="top-0 -z-10 sticky blur-lg w-screen h-screen">
  <Image
    src="/images/bg.jpg"
    alt="background"
    fill
    priority
    className="object-cover"
    // onLoad={() => console.log("BG image loaded")}
    // onError={() => console.log("BG image FAILED to load")}
  />
</div>

        <div className="z-10 relative">
          <HighlightsSection locale={locale} />
          <AboutSection locale={locale} />
          <FeaturedProjectsSection locale={locale} />
          <ExperienceTimelineSection locale={locale} />
          <TechStackSection locale={locale} />
          <OpenSourceSection locale={locale} />
          <ContactSection locale={locale} />
        </div>
      </div>
    </main>
  );
}
