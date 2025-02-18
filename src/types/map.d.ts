export interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [lat, lon]
  rating: {
    count: number;
    value: number;
  };
  features: string[];
  thumbnail: string;
  type: "WATER_FOUNTAIN" | "TREAT" | "ADVENTURE" | "SWIM";
}
