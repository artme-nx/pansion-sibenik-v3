import { Phone, MapPin } from "lucide-react";
import { SectionKicker, OrnamentDivider, Emblem } from "@/components/ui/ornaments";
import { InquiryForm } from "@/components/inquiry-form";

const PLATFORMS = ["Laganini.com", "Booking.com", "visitcroatia.net"];

export function ContactSection() {
  return (
    <section id="upit" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <SectionKicker roman="V" label="UPIT I KONTAKT" />
        <h2 className="text-balance font-display text-3xl text-burgundy-deep sm:text-4xl">
          Zapišite svoj dolazak
        </h2>
        <OrnamentDivider className="mt-6" />
      </div>

      <div className="mx-auto mt-10 max-w-3xl" data-reveal>
        <div className="relative border-[3px] border-double border-brass/80 bg-burgundy-deep text-parchment">
          <div className="m-2.5 border border-brass/50 p-6 sm:m-3.5 sm:p-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <Emblem className="h-16 w-auto text-parchment" />
                <p className="mt-6 flex items-start gap-2 font-body text-base italic text-parchment/85">
                  <MapPin className="mt-1 size-4 shrink-0 text-brass" strokeWidth={1.4} />
                  Ul. Kačića Miošića 5, Stari grad, 22000 Šibenik, Hrvatska
                </p>
                <a
                  href="tel:+385989801862"
                  className="mt-4 flex items-center gap-2 font-display text-lg tracking-label text-brass"
                >
                  <Phone className="size-4" strokeWidth={1.4} />
                  +385 98 980 1862
                </a>

                <p className="mt-8 font-display text-[0.65rem] tracking-label text-parchment/60">
                  DOSTUPNI I NA REZERVACIJSKIM PLATFORMAMA
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-body text-sm italic text-parchment/80">
                  {PLATFORMS.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
