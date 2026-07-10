import Image from "next/image";
import { LabelFrame, OrnamentDivider } from "@/components/ui/ornaments";
import { IMAGES } from "@/lib/images";

export function HeroSection() {
  return (
    <section id="top" className="px-4 pb-14 pt-8 sm:px-8 sm:pt-12">
      <div className="mx-auto max-w-4xl" data-reveal>
        <LabelFrame>
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-[0.65rem] tracking-label-lg text-burgundy-deep/80">
              GUEST HOUSE · EST. STARI GRAD ŠIBENIK
            </span>

            <div className="relative mt-6 aspect-[4/3] w-full max-w-sm overflow-hidden rounded-[50%/40%] border-[3px] border-double border-burgundy-deep/70 shadow-[0_0_0_7px_var(--color-parchment),0_0_0_8px_rgba(97,31,40,0.35)]">
              <Image
                src={IMAGES.heroTown}
                alt="Pogled na stari grad Šibenik s katedralom sv. Jakova"
                fill
                priority
                sizes="(min-width: 640px) 24rem, 90vw"
                className="object-cover [filter:sepia(0.15)_saturate(0.95)]"
              />
            </div>

            <h1 className="mt-7 font-script text-6xl leading-none text-burgundy-deep sm:text-7xl">
              Pansion Šibenik
            </h1>
            <p className="mt-2 font-display text-sm tracking-label text-burgundy-deep/85 sm:text-base">
              STARI GRAD · ŠIBENIK · HRVATSKA
            </p>

            <OrnamentDivider className="mt-6" />

            <p className="mt-6 max-w-lg text-balance font-body text-lg italic leading-relaxed text-foreground/85 sm:text-xl">
              Kamena gradska kuća iz starih vremena, sobe i apartman u srcu
              povijesne jezgre — na tek pedeset koraka od katedrale sv. Jakova,
              spomenika pod zaštitom UNESCO-a.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border border-brass/70 bg-parchment/60 px-5 py-2.5 font-display text-xs tracking-label text-burgundy-deep">
              <span className="text-brass">✦</span>
              50 M OD KATEDRALE SV. JAKOVA
              <span className="text-brass">✦</span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#upit"
                className="border-2 border-burgundy-deep bg-burgundy-deep px-8 py-3 font-display text-xs tracking-label text-parchment transition-opacity hover:opacity-85"
              >
                POŠALJITE UPIT
              </a>
              <a
                href="#sobe"
                className="border-2 border-burgundy-deep px-8 py-3 font-display text-xs tracking-label text-burgundy-deep transition-colors hover:bg-burgundy-deep/10"
              >
                POGLEDAJTE SOBE
              </a>
            </div>
          </div>
        </LabelFrame>
      </div>
    </section>
  );
}
