export type Review = {
  id: number;
  author: string;
  desc?: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    author: "Aisyah J.",
    rating: 4,
    text: "The Nasi Lemak Daun Pisang is absolutely divine! It took me straight back to my childhood in Malaysia. Thank you for sharing this amazing dish!",
  },
  {
    id: 2,
    author: "Michael T.",
    rating: 4,
    text: "The Sate Ayam is so tender and flavorful, and the peanut sauce is spot on. My kids loved it too!",
  },
  {
    id: 3,
    author: "Daniel K",
    rating: 5,
    text: "Tried the Nasi Kandar Daging Masak Hitam Mamak last week – everything blended so perfectly. Feels like I’ve been transported to Penang!",
  },
  {
    id: 4,
    author: "Jonathan L.",
    rating: 5,
    text: "Kampung Dunedin has truly brought a taste of Malaysia to NZ. Every bite reminded me of my travels to Southeast Asia.",
  },
  {
    id: 5,
    author: "Nurul H.",
    rating: 5,
    text: "The Sate Ayam is so tender and flavorful, and the peanut sauce is spot on. My kids loved it too!",
  },
  {
    id: 6,
    author: "Siti Roziana",
    desc: "Malaysian working in Dunedin",
    rating: 5,
    text: "I have zero regrets trying each item on their menu because it was beyond delicious. The spiciness was just right - mild enough for someone like me to enjoy, but with just the right amount of kick from the spices to bring out those flavors. This means both those with low spice tolerance and those who enjoy extra heat in their food can enjoy it!",
  },
  {
    id: 7,
    author: "Richard Knights",
    desc: "Malaysian working in Dunedin",
    rating: 5,
    text: "Got to try the beef and chicken satay and it was ALL kinds of yum…loved the peanut satay sauce coming in a cute little bag too…was yummy and left me wanting more…the beef was my fave 😋",
  },
];
