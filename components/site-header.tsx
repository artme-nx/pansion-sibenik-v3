"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Emblem } from "@/components/ui/ornaments";

const NAV_LEFT = [
  { href: "#sobe", label: "Sobe" },
  { href: "#sadrzaji", label: "Sadržaji" },
];

const NAV_RIGHT = [
  { href: "#lokacija", label: "Lokacija" },
  { href: "#galerija", label: "Galerija" },
];

const NAV_ALL = [...NAV_LEFT, ...NAV_RIGHT, { href: "#upit", label: "Upit" }];

// NOTE: the mobile nav panel is rendered as a SIBLING of <header>, not nested
// inside it — nesting inside a header with backdrop-blur/transform traps
// position:fixed children and breaks full-screen overlay behavior.
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
        <div className="hidden justify-center gap-2 border-b border-burgundy-deep/25 bg-burgundy-deep px-4 py-1.5 text-center font-display text-[0.6rem] tracking-label-lg text-parchment sm:flex">
          <span>STARI GRAD · ŠIBENIK</span>
          <span className="text-brass">—</span>
          <span>UL. KAČIĆA MIOŠIĆA 5</span>
          <span className="text-brass">—</span>
          <span>+385 98 980 1862</span>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 border-b-2 border-double border-burgundy-deep/70 px-5 py-3 sm:px-8">
          <nav className="hidden lg:flex items-center justify-start gap-7 font-display text-xs tracking-label text-burgundy-deep">
            {NAV_LEFT.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-brass">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#top" className="flex items-center justify-center gap-2.5">
            <Emblem className="h-11 w-auto text-burgundy-deep sm:h-12" />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-script text-4xl leading-none text-burgundy-deep">Pansion</span>
              <span className="font-display text-sm tracking-label text-burgundy-deep">ŠIBENIK</span>
            </span>
          </a>

          <div className="flex items-center justify-end gap-4">
            <nav className="hidden lg:flex items-center gap-7 font-display text-xs tracking-label text-burgundy-deep">
              {NAV_RIGHT.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-brass">
                  {item.label}
                </a>
              ))}
              <a
                href="#upit"
                className="border border-burgundy-deep px-4 py-2 text-burgundy-deep transition-colors hover:bg-burgundy-deep hover:text-parchment"
              >
                Upit
              </a>
            </nav>

            <button
              type="button"
              aria-label="Otvori izbornik"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center border border-burgundy-deep/60 text-burgundy-deep lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav — sibling of header, fixed at viewport root */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background px-6 py-6 transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b-2 border-double border-burgundy-deep/70 pb-4">
          <span className="font-script text-4xl text-burgundy-deep">Pansion Šibenik</span>
          <button
            type="button"
            aria-label="Zatvori izbornik"
            onClick={() => setOpen(false)}
            className="grid size-10 place-items-center border border-burgundy-deep/60 text-burgundy-deep"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-1 font-display text-xl tracking-label text-burgundy-deep">
          {NAV_ALL.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-burgundy-deep/20 py-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 border-t border-burgundy-deep/20 pt-6 font-body text-base text-foreground/80">
          <span>Ul. Kačića Miošića 5, Stari grad, Šibenik</span>
          <a href="tel:+385989801862" className="text-burgundy-deep">
            +385 98 980 1862
          </a>
        </div>
      </div>
    </>
  );
}
