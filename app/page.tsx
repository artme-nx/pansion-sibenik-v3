import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { RoomsSection } from "@/components/rooms-section";
import { AmenitiesSection } from "@/components/amenities-section";
import { LocationSection } from "@/components/location-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <RoomsSection />
        <AmenitiesSection />
        <LocationSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
