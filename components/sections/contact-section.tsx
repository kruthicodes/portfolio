"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

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
          <p className="text-sm uppercase tracking-[0.16em] text-accent">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s Build, Speak, or Collaborate
          </h2>

          <div className="mt-8 flex flex-col items-center gap-3 text-muted">
            <a href="mailto:kruthi.codes@gmail.com" className="transition hover:text-ink hover:underline">
              kruthi.codes@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kruthika-786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="transition hover:text-ink hover:underline">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
