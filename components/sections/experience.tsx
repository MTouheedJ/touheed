"use client";

import { m, useReducedMotion } from "framer-motion";

import { PORTFOLIO } from "@/lib/constants";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ExperienceSection() {
  const tone = PORTFOLIO.ui.sectionAtmosphere.experience;
  const items = PORTFOLIO.experience.items;
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="experience"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6"
    >
      <SectionHeading
        title={PORTFOLIO.experience.title}
        tone={tone}
        subtitle={PORTFOLIO.experience.subtitle}
      />

      <div className="mt-10 grid gap-5">
        {items.map((item, i) => (
          <m.div
            key={`${item.title}-${item.period}`}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: i * 0.07,
              duration: 0.55,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Card tone={tone} className="relative overflow-hidden">
              <div
                className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-cyan-400/90 via-violet-500/55 to-fuchsia-500/30"
                aria-hidden
              />
              <CardHeader className="flex flex-col gap-2 p-6 pb-0 pl-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-base font-semibold tracking-tight">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    {item.org} • {item.location}
                  </div>
                </div>
                <div className="text-sm text-muted">{item.period}</div>
              </CardHeader>
              <CardContent className="p-6 pt-4 pl-7">
                  <Separator className="mb-5 opacity-80" />
                  <ul className="space-y-3 text-sm leading-6 text-muted">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-300/90 to-fuchsia-500/60" />
                        <span className="text-pretty">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="soft"
                        className="border-cyan-500/10 bg-cyan-500/5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
