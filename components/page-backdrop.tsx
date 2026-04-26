/**
 * Global ambient: ties every section to the same color story as the hero.
 * Static (no client JS) — only CSS animation.
 */
export function PageBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="absolute inset-0 bg-[#06060a]" />
      <div className="ambient-blobs absolute inset-0" />
      <div className="noise-overlay" />
    </div>
  );
}
