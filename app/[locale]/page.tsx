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
  // Await کردن params
  const { params } = await props;
  return (
    <main className="w-full">
      <HeroSection params={params}/>
      <HighlightsSection params={params}/>
      <AboutSection params={params}/>
      <FeaturedProjectsSection params={params}/>
      <ExperienceTimelineSection params={params}/>
      <TechStackSection params={params}/>
      <OpenSourceSection params={params}/>
      <ContactSection params={params} />
    </main>
  );
}
