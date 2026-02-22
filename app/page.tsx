import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhatIDoSection } from "@/components/sections/what-i-do-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AiSystemsSection } from "@/components/sections/ai-systems-section";
import { SpeakingSection } from "@/components/sections/speaking-section";
import { MentorshipSection } from "@/components/sections/mentorship-section";
import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {siteConfig.sections.about ? <AboutSection /> : null}
      {siteConfig.sections.whatIDo ? <WhatIDoSection /> : null}
      {siteConfig.sections.projects ? <ProjectsSection /> : null}
      {siteConfig.sections.aiSystems ? <AiSystemsSection /> : null}
      {siteConfig.sections.speaking ? <SpeakingSection /> : null}
      {siteConfig.sections.mentorship ? <MentorshipSection /> : null}
      {siteConfig.sections.contact ? <ContactSection /> : null}
    </main>
  );
}
