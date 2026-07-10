import { BedDouble, Bath, Wifi, Snowflake, Tv } from "lucide-react";
import { LabelFrame, SectionKicker, OrnamentDivider } from "@/components/ui/ornaments";

const ENTRIES = [
  {
    roman: "I",
    title: "Sobe u kamenoj kući",
    text: "Funkcionalno uređene sobe u mediteranskom stilu, smještene unutar stare kamene gradske kuće. Svaka soba ima vlastitu kupaonicu (dio s kadom), pametni TV s terestrijalnim i satelitskim programom, klimatizaciju i besplatan Wi-Fi.",
    icons: [BedDouble, Bath, Tv],
  },
  {
    roman: "II",
    title: "Obiteljski apartman",
    text: "Prostraniji apartman pogodan za obitelji i veće skupine gostiju koji putuju zajedno, s istom razinom udobnosti i opremljenosti kao i sobe kuće — miran kutak tik uz najprometnije uličice starog grada.",
    icons: [BedDouble, Wifi, Snowflake],
  },
  {
    roman: "III",
    title: "Kapacitet i pravila kuće",
    text: "Cijela kuća prima do 8 gostiju na oko 100 m². Prijava od 14:00, odjava do 11:00. Kuća nema bazen, a ljubimci nažalost nisu dopušteni. Trenutna dostupnost i cijene provjeravaju se putem rezervacijskih platformi ili izravnim upitom.",
    icons: [BedDouble, Bath],
  },
];

export function RoomsSection() {
  return (
    <section id="sobe" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <SectionKicker roman="I" label="SOBE I APARTMAN" />
        <h2 className="text-balance font-display text-3xl text-burgundy-deep sm:text-4xl">
          Odsjednite u srcu starog grada
        </h2>
        <OrnamentDivider className="mt-6" />
      </div>

      <div className="mx-auto mt-10 max-w-3xl" data-reveal>
        <LabelFrame tight>
          <div className="divide-y divide-burgundy-deep/15">
            {ENTRIES.map((entry) => (
              <div key={entry.roman} className="flex gap-5 py-6 first:pt-0 last:pb-0 sm:gap-8">
                <span className="shrink-0 font-display text-3xl text-brass sm:text-4xl">
                  {entry.roman}
                </span>
                <div>
                  <h3 className="font-display text-lg text-burgundy-deep sm:text-xl">
                    {entry.title}
                  </h3>
                  <p className="mt-2 font-body text-base leading-relaxed text-foreground/80 sm:text-lg">
                    {entry.text}
                  </p>
                  <div className="mt-3 flex gap-3 text-burgundy-deep/70">
                    {entry.icons.map((Icon, i) => (
                      <Icon key={i} className="size-4" strokeWidth={1.4} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LabelFrame>
      </div>
    </section>
  );
}
