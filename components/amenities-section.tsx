import { LabelFrame, SectionKicker, OrnamentDivider } from "@/components/ui/ornaments";

const AMENITIES = [
  "Klimatizacija u svim sobama",
  "Besplatan Wi-Fi u cijeloj kući",
  "Vlastita kupaonica, dio s kadom",
  "Pametni TV — terestrijalni i satelitski program",
  "Kamena gradska kuća, mediteranski uređen interijer",
  "Mirna oaza unutar žive povijesne jezgre",
  "5 minuta hoda do gradske plaže",
  "5 minuta hoda do autobusnog kolodvora i trajektne luke",
  "10 minuta hoda do željezničkog kolodvora",
  "Restorani, kafići i trgovine odmah pred vratima",
];

function SprigBullet() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 size-3.5 shrink-0 text-brass" aria-hidden="true">
      <path
        d="M10 2 C10 8 10 12 10 18 M10 6 C6 6 4 4 4 4 C4 8 7 9 10 9 M10 11 C14 11 16 9 16 9 C16 13 13 14 10 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AmenitiesSection() {
  return (
    <section id="sadrzaji" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <SectionKicker roman="II" label="SADRŽAJI KUĆE" />
        <h2 className="text-balance font-display text-3xl text-burgundy-deep sm:text-4xl">
          Popis sastojaka dobrog boravka
        </h2>
        <OrnamentDivider className="mt-6" />
        <p className="mx-auto mt-6 max-w-xl font-body text-lg italic text-foreground/75">
          Sve što je gostima potrebno, ispisano poput stare apotekarske
          recepture — jednostavno, iskreno, bez suvišnog.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl" data-reveal>
        <LabelFrame tight>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {AMENITIES.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-base leading-snug text-foreground/85 sm:text-lg">
                <SprigBullet />
                {item}
              </li>
            ))}
          </ul>
        </LabelFrame>
      </div>
    </section>
  );
}
