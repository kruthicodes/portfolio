import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function SpeakingSection() {
  return (
    <section className="section-anchor section-pad" id="speaking">
      <Container>
        <MotionReveal>
          <SectionHeading
            title="Speaking & Workshops"
            subtitle="Practical talks for engineers and teams shipping modern systems."
          />

          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <article className="surface p-6">
              <h3 className="font-display text-2xl font-semibold">Topics</h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li>Shipping AI features safely in enterprise environments</li>
                <li>System design for scale: reliability patterns that hold up</li>
                <li>Career growth through technical communication and mentoring</li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold">Past Events</h4>
              <ul className="mt-3 space-y-2 text-muted">
                <li>React India Summit 2025</li>
                <li>Global AI Builders Forum 2025</li>
                <li>Women in Engineering Leadership Series</li>
              </ul>
            </article>

            <aside className="surface flex min-h-72 items-center justify-center p-6" aria-label="Featured speaking video placeholder">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-line text-xl">
                  Play
                </div>
                <p className="font-semibold">Featured Talk Video</p>
                <p className="text-sm text-muted">Embedded session preview area</p>
              </div>
            </aside>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
