"use client";

import { m, useReducedMotion } from "framer-motion";

import { PORTFOLIO } from "@/lib/constants";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const tone = PORTFOLIO.ui.sectionAtmosphere.skills;
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="skills"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6"
    >
      <SectionHeading
        title={PORTFOLIO.skills.title}
        tone={tone}
        subtitle={PORTFOLIO.skills.subtitle}
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {PORTFOLIO.skills.groups.map((group, idx) => (
          <m.div
            key={group.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.07,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Card className="h-full" tone={tone}>
            <CardHeader>
              <div className="text-base font-semibold tracking-tight">
                {group.label}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge key={s} variant="default">
                    {s}
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

