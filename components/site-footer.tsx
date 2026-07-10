import { Emblem, OrnamentDivider } from "@/components/ui/ornaments";

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t-2 border-double border-burgundy-deep/60 px-4 py-10 text-center sm:px-8">
      <Emblem className="h-12 w-auto text-burgundy-deep/80" />
      <p className="mt-3 font-script text-3xl text-burgundy-deep">Pansion Šibenik</p>
      <OrnamentDivider className="mt-3" />
      <p className="mx-auto mt-4 max-w-md font-body text-sm italic text-foreground/65">
        Stari grad Šibenik · Ul. Kačića Miošića 5 · 50 m od katedrale sv. Jakova
      </p>
      <p className="mt-4 font-display text-[0.6rem] tracking-label text-foreground/45">
        © {new Date().getFullYear()} PANSION ŠIBENIK — SVA PRAVA PRIDRŽANA
      </p>
    </footer>
  );
}
