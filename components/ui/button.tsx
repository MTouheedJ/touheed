import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
        secondary:
          "bg-white/10 text-white hover:bg-white/15 border border-white/15 backdrop-blur",
        ghost: "text-white hover:bg-white/10",
        glow:
          "gradient-shimmer border border-white/20 bg-gradient-to-r from-fuchsia-600/95 via-violet-600/90 to-fuchsia-700/85 text-white shadow-[0_0_0_1px] shadow-fuchsia-500/15 hover:from-fuchsia-500 hover:via-violet-500 hover:to-fuchsia-600",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

