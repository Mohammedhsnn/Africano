/** Ronde "100% halal"-stempel, gebaseerd op de badge op de flyer. */
export function HalalStamp({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`h-32 w-32 -rotate-[8deg] items-center justify-center rounded-full bg-flame p-1.5 text-white shadow-[0_16px_32px_-14px_rgba(215,25,31,0.7)] ${className ?? "flex"}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-dashed border-white/70 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em]">
          100%
        </span>
        <span className="font-display text-3xl font-extrabold uppercase leading-none">
          Halal
        </span>
        <span className="mt-1 text-base leading-none" lang="ar">
          حلال
        </span>
      </div>
    </div>
  );
}
