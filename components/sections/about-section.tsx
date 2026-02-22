import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section className="section-anchor section-pad" id="about">
      <Container>
        <MotionReveal>
          <SectionHeading title={siteConfig.about.title} subtitle={siteConfig.about.subtitle} />
          <p className="max-w-4xl text-muted md:text-lg">{siteConfig.about.body}</p>
        </MotionReveal>
      </Container>
    </section>
  );
}
