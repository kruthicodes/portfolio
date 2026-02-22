"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

export function WhatIDoSection() {
  return (
    <section className="section-anchor section-pad" id="what-i-do">
      <Container>
        <SectionHeading title={siteConfig.whatIDo.title} subtitle={siteConfig.whatIDo.subtitle} />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {siteConfig.whatIDo.cards.map((card) => (
            <motion.article
              key={card.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="surface interactive-card p-6 shadow-sm transition-shadow hover:shadow-bloom"
            >
              <h3 className="font-display text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-muted md:text-base">{card.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
