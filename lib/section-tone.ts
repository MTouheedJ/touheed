import type { SectionTone } from "@/lib/constants";

const toneSurface: Record<SectionTone, string> = {
  violet:
    "hover:-translate-y-0.5 hover:border-violet-400/35 hover:shadow-[0_0_40px_-8px] hover:shadow-violet-500/25",
  fuchsia:
    "hover:-translate-y-0.5 hover:border-fuchsia-400/35 hover:shadow-[0_0_40px_-8px] hover:shadow-fuchsia-500/25",
  cyan:
    "hover:-translate-y-0.5 hover:border-cyan-400/35 hover:shadow-[0_0_40px_-8px] hover:shadow-cyan-500/20",
};

const toneOrb: Record<SectionTone, { a: string; b: string }> = {
  violet: { a: "from-violet-500/30", b: "to-fuchsia-600/5" },
  fuchsia: { a: "from-fuchsia-500/28", b: "to-cyan-500/5" },
  cyan: { a: "from-cyan-500/25", b: "to-violet-600/8" },
};

const toneLine: Record<SectionTone, string> = {
  violet: "from-violet-400/90 via-fuchsia-300/50 to-cyan-300/30",
  fuchsia: "from-fuchsia-400/90 via-violet-400/55 to-cyan-200/30",
  cyan: "from-cyan-300/90 via-violet-400/45 to-fuchsia-400/35",
};

const toneIcon: Record<SectionTone, string> = {
  violet: "from-violet-500/30 to-fuchsia-500/15",
  fuchsia: "from-fuchsia-500/30 to-cyan-400/15",
  cyan: "from-cyan-400/25 to-violet-500/20",
};

export function cardToneClass(tone: SectionTone | undefined) {
  if (!tone) return "";
  return toneSurface[tone];
}

export function sectionOrbs(tone: SectionTone) {
  return toneOrb[tone];
}

export function sectionTitleLineClass(tone: SectionTone) {
  return toneLine[tone];
}

export function iconPadToneClass(tone: SectionTone) {
  return toneIcon[tone];
}
