"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section className="section-anchor section-pad pb-24" id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="surface mx-auto max-w-3xl p-8 text-center md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.16em] text-accent">{siteConfig.contact.title}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {siteConfig.contact.heading}
          </h2>

          <div className="mt-8 flex flex-col items-center gap-3 text-muted">
            <a href={`mailto:${siteConfig.contact.email}`} className="transition hover:text-ink hover:underline">
              {siteConfig.contact.email}
            </a>
            <a href={siteConfig.contact.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-ink hover:underline">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
