import { LabelFrame, SectionKicker, OrnamentDivider, CompassRose } from "@/components/ui/ornaments";

const WAYPOINTS = [
  {
    dir: "50 m",
    title: "Katedrala sv. Jakova",
    text: "UNESCO-ova svjetska baština od 2000. godine — vidljiva s praga kuće, tek pedesetak koraka niz kamenu uličicu.",
  },
  {
    dir: "5 min",
    title: "Gradska riva i plaža",
    text: "Šetnica uz more i gradska plaža dostupne su kratkom šetnjom iz starog grada.",
  },
  {
    dir: "5 min",
    title: "Autobusni kolodvor i trajektna luka",
    text: "Isto tako blizu — praktično za goste koji stižu autobusom, trajektom ili brodicom.",
  },
  {
    dir: "10 min",
    title: "Željeznički kolodvor",
    text: "Pješice dostupan za goste koji putuju vlakom duž dalmatinske obale.",
  },
  {
    dir: "izlet",
    title: "NP Krka i Kornati",
    text: "Šibenik je uobičajena polazna točka za jednodnevne izlete prema slapovima Krke i otočju Kornata.",
  },
];

export function LocationSection() {
  return (
    <section id="lokacija" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <SectionKicker roman="III" label="POLOŽAJ KUĆE" />
        <h2 className="text-balance font-display text-3xl text-burgundy-deep sm:text-4xl">
          Pedeset koraka od katedrale
        </h2>
        <OrnamentDivider className="mt-6" />
        <p className="mx-auto mt-6 max-w-xl font-body text-lg italic text-foreground/75">
          Ul. Kačića Miošića 5 leži usred povijesne jezgre Šibenika, među
          uličicama koje se stoljećima nisu pomaknule ni metra.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl" data-reveal>
        <LabelFrame>
          <div className="grid gap-10 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-center">
            <CompassRose className="mx-auto h-48 w-48 text-burgundy-deep sm:h-56 sm:w-56" />

            <ul className="flex flex-col divide-y divide-burgundy-deep/15">
              {WAYPOINTS.map((wp) => (
                <li key={wp.title} className="flex gap-5 py-4 first:pt-0 last:pb-0">
                  <span className="w-16 shrink-0 font-display text-sm tracking-label text-brass sm:w-20">
                    {wp.dir}
                  </span>
                  <div>
                    <h3 className="font-display text-base text-burgundy-deep sm:text-lg">
                      {wp.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-foreground/80 sm:text-base">
                      {wp.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </LabelFrame>
      </div>
    </section>
  );
}
