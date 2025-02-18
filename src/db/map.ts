import type { Location } from "@/types/map";

const locations: Location[] = [
  {
    id: "cairnlea-dog-park-water-fountain",
    name: "Cairnlea Dog Park water fountain",
    description: "Place for your pup to quench its thirst",
    type: "WATER_FOUNTAIN",
    coordinates: [-37.759901, 144.793714],
    rating: {
      count: 21,
      value: 4.7,
    },
    features: ["Easy empty handle", "Separate tap", "Additional feature"],
    thumbnail: "/images/map/temp-water-fountain.webp",
  },
  {
    id: "vincent-the-dog",
    name: "Vincent the Dog",
    description:
      "Situated in the heart of Carlton, Vincent the Dog is a haven for both food enthusiasts and dog lovers alike.",
    type: "TREAT",
    coordinates: [-37.7977464, 144.9691607],
    rating: {
      count: 13,
      value: 4.5,
    },
    features: ["Water available", "Medium treat size", "Good coffee & food"],
    thumbnail: "/images/map/temp-cafe.jpg",
  },
  {
    id: "frog-hollow-wetlands",
    name: "Frog's Hollow Wetlands",
    description: "Nice little spot for your furry friend to sniff",
    type: "ADVENTURE",
    coordinates: [-37.7789778, 144.895008],
    rating: {
      count: 4,
      value: 3,
    },
    features: ["tall grass", "Small pond"],
    thumbnail: "/images/map/temp-sniff.jpg",
  },
  {
    id: "altona-beach-dog-off-leash-area",
    name: "Altona Beach Dog Off Leash Area",
    description:
      "A large beach for dog off leashing, fishing, swimming, sunbathing, surfing, walking on the sand (barefooted )and other water sports.",
    type: "SWIM",
    coordinates: [-37.8677749, 144.8460017],
    rating: {
      count: 1,
      value: 4.5,
    },
    features: ["Shallow waters", "Close to Dog park"],
    thumbnail: "/images/map/temp-swim.jpg",
  },
];

export function getLocations() {
  return locations;
}

export async function getLocation(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const location = locations.find((l) => l.id === id);

  if (!location) return null;

  return location;
}
