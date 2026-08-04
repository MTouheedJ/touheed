"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";

import { PORTFOLIO } from "@/lib/constants";
import type { SectionTone } from "@/lib/constants";
import { cn, scrollToSection } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const statTones: SectionTone[] = ["fuchsia", "violet", "cyan", "fuchsia"];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-violet-500/25 to-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[-240px] left-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <m.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-wrap items-center gap-3"
            >
              <Badge variant="soft">{PORTFOLIO.person.availabilityBadge}</Badge>
              <Badge>
                {PORTFOLIO.person.location} • {PORTFOLIO.hero.eyebrow}
              </Badge>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {PORTFOLIO.person.name}
              <span className="mt-1 block text-muted">
                {PORTFOLIO.person.role}.{" "}
                <span className="bg-gradient-to-r from-fuchsia-200/95 via-violet-200/90 to-cyan-200/80 bg-clip-text text-transparent">
                  {PORTFOLIO.hero.headlineAccent}
                </span>
              </span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted"
            >
              {PORTFOLIO.person.tagline}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
              href={PORTFOLIO.hero.primaryCta.href}
              onClick={(event) => handleSectionClick(event, "projects")}
            >
              <Button size="lg" variant="glow" className="w-full min-w-[11rem] sm:w-auto">
                {PORTFOLIO.hero.primaryCta.label}
              </Button>
            </a>
            <a
              href={PORTFOLIO.hero.secondaryCta.href}
              onClick={(event) => handleSectionClick(event, "contact")}
            >
              <Button size="lg" variant="secondary" className="w-full min-w-[11rem] sm:w-auto">
                {PORTFOLIO.hero.secondaryCta.label}
              </Button>
            </a>
              <a
                href={PORTFOLIO.resume.href}
                download={PORTFOLIO.resume.downloadFileName}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-full min-w-[11rem] border-violet-500/20 sm:w-auto",
                )}
                aria-label={PORTFOLIO.resume.label}
              >
                <PORTFOLIO.resume.icon className="h-4 w-4 opacity-90" />
                {PORTFOLIO.resume.label}
              </a>
            </m.div>

            <m.div
              className="mt-8 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.5 }}
            >
              {PORTFOLIO.hero.quickFacts.map((fact) => (
                <Badge key={fact} variant="default">
                  {fact}
                </Badge>
              ))}
            </m.div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {PORTFOLIO.hero.stats.map((s, i) => (
              <m.div
                key={s.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.06,
                  duration: 0.55,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Card
                  tone={statTones[i % statTones.length]}
                  className="group relative overflow-hidden p-5"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  >
                    <div
                      className={cn(
                        "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50 blur-2xl",
                        i % 3 === 0 && "bg-fuchsia-500/20",
                        i % 3 === 1 && "bg-violet-500/20",
                        i % 3 === 2 && "bg-cyan-400/20",
                      )}
                    />
                  </div>
                  <div className="text-2xl font-semibold tracking-tight text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </Card>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
