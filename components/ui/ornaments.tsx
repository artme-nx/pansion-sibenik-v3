import { cn } from "@/lib/utils";

/**
 * Hand-drawn-looking corner flourish, used at the four corners of a LabelFrame.
 * Base artwork is authored for the top-left corner; other corners are produced
 * by CSS transform (rotate/scale) rather than redrawing the path.
 */
function CornerFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={cn("absolute size-9 sm:size-11", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 56 L3 22 C3 15 6 10 13 7.5 C18 5.6 22.5 7 23.5 12.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M56 3 L22 3 C15 3 10 6 7.5 13 C5.6 18 7 22.5 12.5 23.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="9.5" r="2.1" fill="currentColor" />
      <path
        d="M15 15 C19 13 22 15 22 19"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * The nested "wine label" panel treatment: an outer ornamental border, a thin
 * inner brass hairline, corner flourishes, and an inner content panel — like a
 * real label's layered framing. Wrap any section body in this.
 */
export function LabelFrame({
  children,
  className,
  tight = false,
}: {
  children: React.ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border-[3px] border-double border-burgundy-deep/80 text-burgundy-deep",
        className
      )}
    >
      <CornerFlourish className="-left-0.5 -top-0.5" />
      <CornerFlourish className="-right-0.5 -top-0.5 rotate-90 scale-x-[-1]" />
      <CornerFlourish className="-left-0.5 -bottom-0.5 -scale-y-100" />
      <CornerFlourish className="-right-0.5 -bottom-0.5 rotate-90 scale-x-[-1] -scale-y-100" />

      <div className={cn("m-2.5 border border-brass/70 sm:m-3.5", tight ? "p-5 sm:p-8" : "p-6 sm:p-12")}>
        <div className="text-foreground">{children}</div>
      </div>
    </div>
  );
}

/**
 * Small uppercase kicker set like a label's engraved category line, e.g.
 * "ROOMS · No. II" — used above section headings instead of a plain eyebrow.
 */
export function SectionKicker({
  roman,
  label,
}: {
  roman: string;
  label: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3 text-burgundy-deep">
      <span className="h-px w-8 bg-burgundy-deep/50" />
      <span className="font-display text-xs tracking-label-lg">
        {label} <span className="text-brass">· No. {roman}</span>
      </span>
      <span className="h-px w-8 bg-burgundy-deep/50" />
    </div>
  );
}

/**
 * The house emblem: a shield bearing the initial "P", flanked by a laurel
 * wreath, sitting above a small engraved banner. Pure hand-built line art —
 * no photography.
 */
export function Emblem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 235" className={cn("mx-auto", className)} aria-hidden="true">
      {/* laurel — left branch */}
      <path
        d="M100 152 C70 150 40 160 30 148 C22 138 30 110 45 100 C60 90 75 80 87.5 77"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      {[
        { x: 87.5, y: 77.1, r: -10 },
        { x: 64, y: 85.65, r: -30 },
        { x: 44.85, y: 101.72, r: -50 },
        { x: 32.34, y: 123.38, r: -70 },
        { x: 28, y: 148, r: -90 },
        { x: 32.34, y: 172.62, r: -110 },
        { x: 44.85, y: 194.28, r: -130 },
      ].map((leaf, i) => (
        <ellipse
          key={`l-${i}`}
          cx={leaf.x}
          cy={leaf.y}
          rx="6.5"
          ry="12.5"
          transform={`rotate(${leaf.r} ${leaf.x} ${leaf.y})`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}

      {/* laurel — right branch (mirrored) */}
      <path
        d="M100 152 C130 150 160 160 170 148 C178 138 170 110 155 100 C140 90 125 80 112.5 77"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      {[
        { x: 112.5, y: 77.1, r: 10 },
        { x: 136, y: 85.65, r: 30 },
        { x: 155.15, y: 101.72, r: 50 },
        { x: 167.66, y: 123.38, r: 70 },
        { x: 172, y: 148, r: 90 },
        { x: 167.66, y: 172.62, r: 110 },
        { x: 155.15, y: 194.28, r: 130 },
      ].map((leaf, i) => (
        <ellipse
          key={`r-${i}`}
          cx={leaf.x}
          cy={leaf.y}
          rx="6.5"
          ry="12.5"
          transform={`rotate(${leaf.r} ${leaf.x} ${leaf.y})`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}

      {/* ribbon crossing the base of the wreath */}
      <path
        d="M60 190 C80 200 120 200 140 190"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />

      {/* eight-point compass mark above the shield */}
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M100 18 L100 40 M89 29 L111 29 M92.5 21.5 L107.5 36.5 M107.5 21.5 L92.5 36.5" />
        <circle cx="100" cy="29" r="15" />
      </g>

      {/* shield */}
      <path
        d="M72 55 H128 V108 C128 132 116 150 100 160 C84 150 72 132 72 108 Z"
        fill="var(--color-parchment)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M78 61 H122 V107 C122 127 112 142 100 151 C88 142 78 127 78 107 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="var(--font-display, serif)"
        fontSize="42"
        fill="currentColor"
      >
        P
      </text>
    </svg>
  );
}

/** Thin flourish rule used between stacked content blocks inside a label panel. */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 24"
      className={cn("mx-auto h-5 w-40 text-burgundy-deep sm:w-56", className)}
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 12 H120" stroke="currentColor" strokeWidth="1" />
      <path d="M180 12 H300" stroke="currentColor" strokeWidth="1" />
      <path
        d="M120 12 C130 2 140 2 150 12 C160 22 170 22 180 12"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
      />
      <circle cx="150" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}

/** Compass rose used in the Location section, with distance callouts positioned around it. */
export function CompassRose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={cn(className)} aria-hidden="true">
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <g stroke="currentColor" strokeWidth="0.7">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const long = i % 4 === 0;
          const r1 = long ? 78 : 78;
          const r2 = long ? 62 : 70;
          const rad = (angle * Math.PI) / 180;
          const x1 = 100 + r1 * Math.sin(rad);
          const y1 = 100 - r1 * Math.cos(rad);
          const x2 = 100 + r2 * Math.sin(rad);
          const y2 = 100 - r2 * Math.cos(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <path
        d="M100 26 L112 100 L100 174 L88 100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M26 100 L100 112 L174 100 L100 88 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M100 26 L106 100 L100 174 Z" fill="currentColor" opacity="0.85" />
      <path d="M26 100 L100 106 L174 100 Z" fill="currentColor" opacity="0.55" />
      <circle cx="100" cy="100" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text
        x="100"
        y="18"
        textAnchor="middle"
        fontFamily="var(--font-display, serif)"
        fontSize="11"
        fill="currentColor"
      >
        N
      </text>
    </svg>
  );
}
