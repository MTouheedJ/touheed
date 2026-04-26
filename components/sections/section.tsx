"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";

import { PORTFOLIO, type SectionTone } from "@/lib/constants";
import { sectionOrbs } from "@/lib/section-tone";
import { cn } from "@/lib/utils";

function toneForSectionId(id: string): SectionTone | undefined {
  const map = PORTFOLIO.ui.sectionAtmosphere;
  if (id in map) return map[id as keyof typeof map];
  return undefined;
}

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const tone = toneForSectionId(id);

  const orbs = tone ? sectionOrbs(tone) : null;

  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 overflow-hidden", className)}
    >
      {orbs ? (
        <>
          <div
            className={cn(
              "pointer-events-none absolute -right-24 -top-28 h-[min(60vw,22rem)] w-[min(60vw,22rem)] rounded-full bg-gradient-to-br opacity-[0.2] blur-3xl",
              orbs.a,
              orbs.b,
            )}
            aria-hidden
          />
          <div
            className={cn(
              "pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr opacity-15 blur-3xl",
              orbs.b,
              orbs.a,
            )}
            aria-hidden
          />
        </>
      ) : null}

      <m.div
        className="relative"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: reduceMotion ? 0.15 : 0.65,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </m.div>
    </section>
  );
}
