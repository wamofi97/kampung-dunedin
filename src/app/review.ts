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
  {
    id: 4,
    author: "Emma",
    rating: 5,
    text: "The Nasi Lemak was absolutely amazing and hit the spot. The Sambal was a little hotter than I expected, but only added to a dish full of flavour. Every bit of it was gone and we were left very satisfied with our meal. Cannot wait for our next meal!",
  },
  {
    id: 5,
    author: "Jay",
    rating: 5,
    text: "Nasi lemak was spot on, I had 2 portions in one sitting. Looking forward to more variety. The karipap pusing was sublime, one of the best doughs for it. Beautifully crumbles and full of flavour. Better than some I've had in Indonesia and Singapore. Definitely will come back for more!",
  },
  {
    id: 6,
    author: "Hakeema",
    rating: 5,
    text: "I really love that we are able to get a taste of my birth home every weekend! It's probably the first Malaysian cuisine I have eaten in Dunedin and it is tastes amazing!! 🤩🤩 Loved the Nasi Lemak the most and how authentic it looks and tastes! 10/10! It just can't get any better! Best of all is the additional sambal 😍😍",
  },
];

export const shortenReviews: Review[] = [
  {
    id: 1,
    author: "Siti Roziana",
    desc: "Malaysian working in Dunedin",
    rating: 5,
    text: "I have zero regrets trying each item on their menu because it was beyond delicious.",
  },
  {
    id: 2,
    author: "Richard Knights",
    desc: "Admin of What's News Dunedin Group & Programme Host",
    rating: 5,
    text: "Got to try the beef and chicken satay and it was ALL kinds of yum..",
  },
  {
    id: 3,
    author: "Tayla Simpson",
    rating: 5,
    text: "The rendang was so beautiful and I loved how much depth there was - layers of flavours.",
  },
  {
    id: 4,
    author: "Emma",
    rating: 5,
    text: "The Nasi Lemak was absolutely amazing and hit the spot. The Sambal was a little hotter than I expected, but only added to a dish full of flavour.",
  },
  {
    id: 5,
    author: "Jay",
    rating: 5,
    text: "The karipap pusing was sublime, one of the best doughs for it. Beautifully crumbles and full of flavour. Better than some I've had in Indonesia and Singapore.",
  },
];
