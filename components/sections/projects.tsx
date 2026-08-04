"use client";

import { m, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { PORTFOLIO } from "@/lib/constants";
import { iconPadToneClass } from "@/lib/section-tone";
import { cn } from "@/lib/utils";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const tone = PORTFOLIO.ui.sectionAtmosphere.projects;
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6"
    >
      <SectionHeading
        title={PORTFOLIO.projects.title}
        tone={tone}
        subtitle={PORTFOLIO.projects.subtitle}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {PORTFOLIO.projects.items.map((p) => (
          <m.div
            key={p.title}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 440, damping: 40 }}
            className="h-full"
          >
            <Card tone={tone} className="group relative h-full overflow-hidden">
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-violet-500/8 to-cyan-400/6 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-base font-semibold tracking-tight text-white">
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-muted">
                      {p.description}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 ring-1 ring-inset ring-white/10",
                      "bg-gradient-to-br",
                      iconPadToneClass(tone),
                    )}
                  >
                    <ExternalLink className="h-5 w-5 text-white/90" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm leading-6 text-muted">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-300/80 to-cyan-300/50" />
                      <span className="text-pretty">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge
                      key={s}
                      variant="soft"
                      className="border-fuchsia-500/10 bg-fuchsia-500/[0.06]"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.live && p.links.live.href !== "#" ? (
                    <a
                      href={p.links.live.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="secondary" size="sm">
                        {p.links.live.label}
                      </Button>
                    </a>
                  ) : null}
                  {p.links.github && p.links.github.href !== "#" ? (
                    <a
                      href={p.links.github.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="ghost" size="sm">
                        {p.links.github.label}
                      </Button>
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
