import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Quote, Star } from "lucide-react";
import { shortenReviews } from "@/app/review";

type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="flex min-h-[280px] flex-col items-center justify-between rounded-lg bg-white p-8 shadow-xl shadow-primary/50">
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
        {shortenReviews.map((review, index) => (
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
