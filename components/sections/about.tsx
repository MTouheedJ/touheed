"use client";

import { m, useReducedMotion } from "framer-motion";

import { PORTFOLIO } from "@/lib/constants";
import { iconPadToneClass } from "@/lib/section-tone";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  const tone = PORTFOLIO.ui.sectionAtmosphere.about;
  const reduceMotion = useReducedMotion();

  return (
    <Section id="about" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="soft">{PORTFOLIO.ui.sectionEyebrow}</Badge>
            <Badge>
              <PORTFOLIO.ui.badges.performance.icon className="h-3.5 w-3.5" />
              {PORTFOLIO.ui.badges.performance.label}
            </Badge>
            <Badge>
              <PORTFOLIO.ui.badges.architecture.icon className="h-3.5 w-3.5" />
              {PORTFOLIO.ui.badges.architecture.label}
            </Badge>
          </div>

          <SectionHeading title={PORTFOLIO.about.title} tone={tone} className="mt-5" />
          <p className="mt-4 text-pretty text-lg leading-8 text-muted">
            {PORTFOLIO.about.lead}
          </p>

          <div className="mt-6 space-y-4 text-pretty leading-7 text-muted">
            {PORTFOLIO.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {PORTFOLIO.about.highlights.map((h, idx) => (
            <m.div
              key={h.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Card className="h-full" tone={tone}>
                <CardHeader className="flex flex-row items-center gap-3">
                  <div
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br ring-1 ring-inset ring-white/10",
                      iconPadToneClass(tone),
                    )}
                  >
                    <h.icon className="h-5 w-5 text-white/90" />
                  </div>
                  <div className="text-base font-semibold">{h.title}</div>
                </CardHeader>
                <CardContent className="pt-4 text-sm leading-6 text-muted">
                  {h.description}
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

