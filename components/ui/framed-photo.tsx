import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A single photo framed like a small vintage engraving / postage-print plate:
 * a thin double-rule border, a plate caption underneath ("Plate II — ..."),
 * sepia-leaning tone. Used in the gallery instead of a modern shadow-card grid.
 */
export function FramedPhoto({
  src,
  alt,
  plate,
  caption,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  plate: string;
  caption: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <div className="relative w-full border border-burgundy-deep/70 p-1.5">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-brass/60">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes ?? "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"}
            className="object-cover [filter:sepia(0.18)_saturate(0.92)_contrast(1.02)]"
          />
        </div>
      </div>
      <figcaption className="mt-2.5 text-center font-display text-[0.65rem] tracking-label text-burgundy-deep/85">
        {plate}
        <span className="mx-1.5 text-brass">—</span>
        <span className="font-body text-sm italic tracking-normal text-foreground/80">{caption}</span>
      </figcaption>
    </figure>
  );
}
