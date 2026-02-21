import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhatIDoSection } from "@/components/sections/what-i-do-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AiSystemsSection } from "@/components/sections/ai-systems-section";
import { SpeakingSection } from "@/components/sections/speaking-section";
import { MentorshipSection } from "@/components/sections/mentorship-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      {/* <ProjectsSection /> */}
      {/* <AiSystemsSection /> */}
      {/* <SpeakingSection /> */}
      <MentorshipSection />
      <ContactSection />
    </main>
  );
}
