// Curated real Unsplash photos (verified live, HTTP 200) for Pansion Šibenik.
// Šibenik-tagged shots (old town, cathedral, waterfront) are genuine location imagery;
// interior shots are generic, tastefully chosen Mediterranean-style rooms used for
// mood/illustration since no property-specific interior photos were available.
function u(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=78&auto=format&fit=crop`;
}

export const IMAGES = {
  // Old town / cathedral / waterfront — genuinely tagged Šibenik on Unsplash
  heroTown: u("1554393478-7e87effa46ed", 1800), // Šibenik, bird's-eye view of the old town
  cathedralDetail: u("1712692295146-db8cdd428a83", 1400), // Šibenik — stone architectural / cathedral detail
  cathedralStone: u("1712605207519-38fe575d1ef8", 1400), // Šibenik — carved stonework
  narrowAlley: u("1725304075711-f8d401b26c48", 1400), // Šibenik old town, narrow stone alley
  cobbleStreet: u("1713112070254-0f08b46091b9", 1400), // Šibenik old town, cobblestone street
  churchSteeple: u("1713110842025-370decb7083b", 1400), // Šibenik, church steeple
  waterfront: u("1712690184971-a0f889015df1", 1400), // Šibenik riva, waterfront walk
  harbourBoat: u("1600881838824-0581bdd8f23f", 1400), // Šibenik harbour, boat
  aerialBay: u("1629640728156-4203c66dd521", 1600), // Šibenik, aerial view near the bay

  // Interior mood shots — generic Mediterranean-style rooms (illustrative)
  roomWarm: u("1726108397211-6507220a6a21", 1200), // bright, simple bedroom
  roomLinen: u("1720027395024-07891ad7c83d", 1200), // cozy bedroom, linen tones
  roomMorning: u("1720582611572-baf85ba10ed3", 1200), // morning light bedroom corner
} as const;
