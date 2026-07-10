import { LabelFrame, SectionKicker, OrnamentDivider } from "@/components/ui/ornaments";
import { FramedPhoto } from "@/components/ui/framed-photo";
import { IMAGES } from "@/lib/images";

const PLATES = [
  { roman: "I", src: IMAGES.cathedralDetail, alt: "Kamena rezbarija na katedrali sv. Jakova u Šibeniku", caption: "Katedrala sv. Jakova, detalj" },
  { roman: "II", src: IMAGES.narrowAlley, alt: "Uska kamena uličica starog grada Šibenika", caption: "Uličica starog grada" },
  { roman: "III", src: IMAGES.cobbleStreet, alt: "Popločana ulica u starom gradu Šibeniku", caption: "Kaldrma pred vratima" },
  { roman: "IV", src: IMAGES.roomWarm, alt: "Svijetla, jednostavno uređena soba", caption: "Ugođaj sobe" },
  { roman: "V", src: IMAGES.waterfront, alt: "Šetnica uz more u Šibeniku", caption: "Riva u suton" },
  { roman: "VI", src: IMAGES.harbourBoat, alt: "Brodica u luci Šibenika", caption: "Gradska luka" },
  { roman: "VII", src: IMAGES.roomLinen, alt: "Uređena soba u toplim tonovima lana", caption: "Kutak za odmor" },
  { roman: "VIII", src: IMAGES.aerialBay, alt: "Pogled iz zraka na Šibenik i zaljev", caption: "Šibenik i zaljev" },
] as const;

export function GallerySection() {
  return (
    <section id="galerija" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <SectionKicker roman="IV" label="GALERIJA PLOČA" />
        <h2 className="text-balance font-display text-3xl text-burgundy-deep sm:text-4xl">
          Osam prizora starog grada
        </h2>
        <OrnamentDivider className="mt-6" />
      </div>

      <div className="mx-auto mt-10 max-w-5xl" data-reveal>
        <LabelFrame tight>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {PLATES.map((plate, i) => (
              <FramedPhoto
                key={plate.roman}
                src={plate.src}
                alt={plate.alt}
                plate={`PLOČA ${plate.roman}`}
                caption={plate.caption}
                priority={i === 0}
              />
            ))}
          </div>
        </LabelFrame>
      </div>
    </section>
  );
}
