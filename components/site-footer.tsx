import { PORTFOLIO } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>{PORTFOLIO.ui.footer.builtWithLabel}</div>
        <div>
          © {year} {PORTFOLIO.person.name}. {PORTFOLIO.ui.footer.copyrightLabel}
        </div>
      </div>
    </footer>
  );
}

