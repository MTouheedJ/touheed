import type { SectionTone } from "@/lib/constants";
import { sectionTitleLineClass } from "@/lib/section-tone";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  tone,
  subtitle,
  className,
}: {
  title: string;
  tone: SectionTone;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={cn(
          "mb-4 h-0.5 w-14 rounded-full bg-gradient-to-r",
          sectionTitleLineClass(tone),
        )}
      />
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-pretty text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
