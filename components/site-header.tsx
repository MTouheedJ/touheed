"use client";

import * as React from "react";
import Link from "next/link";
import { m } from "framer-motion";

import { PORTFOLIO, type NavSectionId } from "@/lib/constants";
import { useNavStore } from "@/lib/nav-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function useActiveSectionObserver(sectionIds: NavSectionId[]) {
  const setActive = useNavStore((s) => s.setActive);

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0]?.target?.id as NavSectionId | undefined;
        if (top) setActive(top);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds, setActive]);
}

export function SiteHeader() {
  const active = useNavStore((s) => s.active);

  const sectionIds = React.useMemo(
    () => PORTFOLIO.nav.map((n) => n.id),
    [],
  );
  useActiveSectionObserver(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-zinc-950/55 shadow-[0_1px_0_0] shadow-fuchsia-500/10 backdrop-blur-2xl supports-backdrop-filter:bg-zinc-950/40">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        {PORTFOLIO.ui.skipToContent}
      </a>

      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="group inline-flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-linear-to-br from-fuchsia-500/10 via-zinc-900/80 to-violet-500/10 text-sm font-semibold tracking-tight ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-[1.02] group-hover:ring-fuchsia-500/25">
            {PORTFOLIO.person.name
              .split(" ")
              .slice(0, 2)
              .map((p) => p[0])
              .join("")}
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-5">
              {PORTFOLIO.person.name}
            </div>
            <div className="text-xs text-muted">{PORTFOLIO.person.role}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {PORTFOLIO.nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-white",
                  isActive && "text-white",
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive ? (
                  <m.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full border border-fuchsia-500/20 bg-linear-to-r from-fuchsia-500/15 via-violet-500/10 to-cyan-500/5 shadow-[0_0_24px_-4px] shadow-fuchsia-500/15"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={PORTFOLIO.resume.href}
            download={PORTFOLIO.resume.downloadFileName}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-white md:inline-flex"
            aria-label={PORTFOLIO.resume.label}
          >
            <PORTFOLIO.resume.icon className="h-4 w-4" />
            <span>{PORTFOLIO.resume.shortLabel}</span>
          </a>
          <a href={PORTFOLIO.ui.navbarCta.href}>
            <Button
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <span>{PORTFOLIO.ui.navbarCta.label}</span>
              <PORTFOLIO.ui.navbarCta.icon className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact" className="sm:hidden">
            <Button variant="secondary" size="sm">
              {PORTFOLIO.ui.navbarCta.label}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

