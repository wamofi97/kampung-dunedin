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
    author: "Siti Roziana",
    desc: "Malaysian working in Dunedin",
    rating: 5,
    text: "I have zero regrets trying each item on their menu because it was beyond delicious. The spiciness was just right - mild enough for someone like me to enjoy, but with just the right amount of kick from the spices to bring out those flavors. This means both those with low spice tolerance and those who enjoy extra heat in their food can enjoy it!",
  },
  {
    id: 2,
    author: "Richard Knights",
    desc: "Admin of What's News Dunedin Group & Programme Host",
    rating: 5,
    text: "Got to try the beef and chicken satay and it was ALL kinds of yum.. Loved the peanut satay sauce coming in a cute little bag too - was yummy and left me wanting more. The beef was my fave 😋",
  },
  {
    id: 3,
    author: "Tayla Simpson",
    rating: 5,
    text: "I really really loved the peanuts in the nasi lemak, they were so addicting! As for the rendang, it was so beautiful and I loved how much depth there was - layers of flavours. Also, the pressed rice was so fun to eat texture wise! ",
  },
];
