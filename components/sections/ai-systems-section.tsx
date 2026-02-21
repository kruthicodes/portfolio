"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiSystems } from "@/lib/data";

export function AiSystemsSection() {
  const [expanded, setExpanded] = useState<string | null>(aiSystems[0].title);

  return (
    <section className="section-anchor section-pad" id="ai-systems">
      <Container>
        <SectionHeading
          title="AI Systems I've Built"
          subtitle="From enterprise-grade RAG to multi-agent orchestration and fine-tuned domain models."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-6"
        >
          {aiSystems.map((item) => {
            const isOpen = expanded === item.title;

            return (
              <motion.article
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                className="surface interactive-card p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.title)}
                    aria-expanded={isOpen}
                    className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-muted transition hover:text-ink"
                  >
                    {isOpen ? "Hide details" : "Expand details"}
                  </button>
                </div>

                <dl className="mt-5 grid gap-4 text-sm md:text-base">
                  <div>
                    <dt className="font-semibold text-ink">Problem</dt>
                    <dd className="text-muted">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Approach</dt>
                    <dd className="text-muted">{item.approach}</dd>
                  </div>

                  {isOpen ? (
                    <>
                      <div>
                        <dt className="font-semibold text-ink">Architecture</dt>
                        <dd className="text-muted">{item.architecture}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">Tech</dt>
                        <dd className="text-muted">{item.tech.join(" | ")}</dd>
                      </div>
                    </>
                  ) : null}

                  <div>
                    <dt className="font-semibold text-ink">Impact</dt>
                    <dd className="text-muted">{item.impact}</dd>
                  </div>
                </dl>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
