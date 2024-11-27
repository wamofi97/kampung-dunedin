import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";
import { Quote, Star } from "lucide-react";

type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
};

const reviews = [
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
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="flex min-h-[280px] flex-col items-center justify-between rounded-lg bg-white p-8 shadow-xl shadow-primary">
    <div className="w-fit rounded-full bg-accent p-3">
      <Quote className="h-5 w-5" />
    </div>
    <p className="text-sm italic">{review.text}</p>
    <div className="flex flex-col items-center">
      <div className="mb-2 flex items-center">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="font-medium text-primary-foreground">
        {review.author}
      </span>
    </div>
  </div>
);

export default function ReviewCarousel() {
  return (
    <Carousel className="my-12 h-[350px] max-w-80">
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ReviewCard review={review} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
