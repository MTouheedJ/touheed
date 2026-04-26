"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { PORTFOLIO } from "@/lib/constants";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const tone = PORTFOLIO.ui.sectionAtmosphere.contact;
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="contact"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6"
    >
      <SectionHeading
        title={PORTFOLIO.contact.title}
        tone={tone}
        subtitle={PORTFOLIO.contact.subtitle}
      />

      <m.div
        className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Card
          tone={tone}
          className="relative h-full overflow-hidden ring-1 ring-fuchsia-500/10"
        >
          <CardContent className="relative p-6 sm:p-8">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-violet-500/15 to-cyan-400/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-violet-500/10 to-cyan-400/5 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <p className="text-base font-medium leading-7 text-white/95">
                {PORTFOLIO.contact.subtitle}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={PORTFOLIO.contact.cta.href}>
                  <Button size="lg" variant="glow" className="w-full min-w-[10rem] sm:w-auto">
                    {PORTFOLIO.contact.cta.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#projects" className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="w-full min-w-[10rem]">
                    {PORTFOLIO.hero.primaryCta.label}
                  </Button>
                </a>
              </div>

              <Separator className="relative z-10 mt-8" />

              <div
                id="resume"
                className="relative z-10 mt-8 flex scroll-mt-28 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                    {PORTFOLIO.resume.shortLabel}
                  </p>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-muted">
                    {PORTFOLIO.resume.description}
                  </p>
                </div>
                <a
                  href={PORTFOLIO.resume.href}
                  download={PORTFOLIO.resume.downloadFileName}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "default" }),
                    "w-full shrink-0 sm:w-auto",
                    "border-fuchsia-500/20",
                  )}
                  aria-label={PORTFOLIO.resume.label}
                >
                  <PORTFOLIO.resume.icon className="h-4 w-4" />
                  {PORTFOLIO.resume.label}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card tone={tone} className="h-full">
          <CardContent className="p-6 sm:p-8">
            <div className="text-sm font-medium text-white/90">
              {PORTFOLIO.person.name}
            </div>
            <div className="mt-1 text-sm text-muted">{PORTFOLIO.person.location}</div>

            <div className="mt-6 flex flex-wrap gap-2">
              {PORTFOLIO.social.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group inline-flex"
                >
                  <Badge
                    variant="soft"
                    className="border-white/5 bg-white/[0.04] transition-[background,border,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-fuchsia-500/25 group-hover:bg-fuchsia-500/10"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </Badge>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </m.div>
    </Section>
  );
}
