"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const [chipIndex, setChipIndex] = useState(0);
  const skillChips = siteConfig.profile.buildItems;

  useEffect(() => {
    const timer = setInterval(() => {
      setChipIndex((prev) => (prev + 1) % skillChips.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [skillChips.length]);

  return (
    <section className="section-anchor flex min-h-[calc(100vh-4rem)] items-center section-pad" id="home">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto grid max-w-6xl items-center gap-4 md:grid-cols-[1.2fr_auto]"
        >
          <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
            <p className="font-display text-xl font-semibold text-muted md:text-2xl">{siteConfig.profile.greeting}</p>
            <h1 className="mt-1 font-display text-5xl font-extrabold tracking-tight text-ink md:text-7xl">{siteConfig.profile.name}</h1>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <h2 className="text-xl font-medium text-muted md:text-3xl">{siteConfig.profile.roleLabel}</h2>
              <div className="h-14 min-w-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={skillChips[chipIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    className="flex h-14 min-w-[280px] items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-slate-100/75 px-4 backdrop-blur-md dark:border-white/20 dark:bg-white/10 md:min-w-[360px]"
                  >
                    <span className="text-sm font-semibold text-ink md:text-base">{skillChips[chipIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base font-medium text-muted md:text-xl">{siteConfig.profile.summary}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted md:justify-start md:text-base">
              <p>{`📧 ${siteConfig.profile.email}`}</p>
              <p>{`📍 ${siteConfig.profile.location}`}</p>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-start">
            <div className="relative md:-ml-6">
              <div className="relative aspect-square h-64 overflow-hidden rounded-xl border border-violet-200 bg-card shadow-sm md:h-80">
                <img
                  src={siteConfig.profile.photoSrc}
                  alt={siteConfig.profile.photoAlt}
                  className="h-full w-full object-cover object-[center_8%]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
