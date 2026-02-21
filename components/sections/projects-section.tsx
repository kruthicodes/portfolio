"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="section-anchor section-pad" id="projects">
      <Container>
        <SectionHeading title="Projects" subtitle="A selection of product and platform work across full-stack and AI delivery." />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="surface interactive-card p-6 shadow-sm transition-shadow hover:shadow-bloom"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-3 text-muted">{project.impact}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
                {project.tech.map((stackItem) => (
                  <li key={stackItem} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {stackItem}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4 text-sm">
                <a className="font-semibold text-accent hover:underline" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="font-semibold text-accent hover:underline" href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
