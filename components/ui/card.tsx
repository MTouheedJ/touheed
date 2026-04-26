import * as React from "react";

import type { SectionTone } from "@/lib/constants";
import { cardToneClass } from "@/lib/section-tone";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: SectionTone;
};

export function Card({ className, tone, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/4 shadow-[0_0_0_1px] shadow-white/3 backdrop-blur-md transition-all duration-500 will-change-transform",
        tone ? cardToneClass(tone) : "hover:-translate-y-0.5 hover:border-white/20",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

