import ContactSection from '@components/landing/contactSection';
import ExperienceSection from '@components/landing/experienceSection';
import HeroSection from '@components/landing/heroSection';
import OpenSourceSection from '@components/landing/openSourceSection';
import ProjectsSection from '@components/landing/projectsSection';
import TechStackSection from '@components/landing/techStackSection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />

      <TechStackSection />

      <ExperienceSection />

      <ProjectsSection />

      <OpenSourceSection />

      <ContactSection />
    </main>
  );
}