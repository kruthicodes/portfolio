"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

function useCountUp(target: number, active: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const started = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - started) / durationMs, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(frame);
    };

    const rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [active, durationMs, target]);

  return value;
}

export function MentorshipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const [studentTarget, workshopTarget] = siteConfig.mentorship.stats;
  const studentCount = useCountUp(studentTarget.value, inView);
  const workshopCount = useCountUp(workshopTarget.value, inView);

  const stats = useMemo(
    () => [
      { label: studentTarget.label, value: `${studentCount}+` },
      { label: workshopTarget.label, value: `${workshopCount}+` }
    ],
    [studentCount, workshopCount, studentTarget.label, workshopTarget.label]
  );

  return (
    <section className="section-anchor section-pad" id="mentorship">
      <Container>
        <MotionReveal>
          <SectionHeading title={siteConfig.mentorship.title} subtitle={siteConfig.mentorship.subtitle} />

          <div className="surface p-6 md:p-8" ref={ref}>
            <p className="max-w-4xl text-muted">{siteConfig.mentorship.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted md:text-base">
              {siteConfig.mentorship.focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={siteConfig.mentorship.topmateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-lg border border-violet-300 bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              {siteConfig.mentorship.topmateLabel}
            </a>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-line p-5">
                  <p className="font-display text-4xl font-semibold text-accent">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
