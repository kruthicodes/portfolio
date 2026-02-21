import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="section-anchor section-pad" id="about">
      <Container>
        <MotionReveal>
          <SectionHeading
            title="About"
            subtitle="I build software that scales with product ambition and engineer AI systems that stay reliable in production."
          />
          <p className="max-w-4xl text-muted md:text-lg">
            I am an SDE 2 at Amex focused on distributed backend platforms, resilient full-stack products, and practical AI
            applications. Alongside engineering, I mentor developers, teach modern web and AI workflows, and speak about
            architecture decisions that improve both system reliability and team velocity.
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}
