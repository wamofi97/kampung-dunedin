import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Quote, Star } from "lucide-react";
import { SHORTENED_REVIEW_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

type Review = {
  _id: number;
  author: string;
  shortText: string;
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="flex min-h-[280px] flex-col items-center justify-between rounded-lg bg-white p-8 shadow-xl shadow-primary/50">
    <div className="w-fit rounded-full bg-accent p-3">
      <Quote className="h-5 w-5" />
    </div>
    <p className="text-sm italic">{review.shortText}</p>
    <div className="flex flex-col items-center gap-2">
      <div className="mx-auto flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="h-3 w-3 fill-amber-300 text-amber-300"
          ></Star>
        ))}
      </div>
      <span className="font-medium text-primary-foreground">
        {review.author}
      </span>
    </div>
  </div>
);

export default async function ReviewCarousel() {
  const shortenedReviews = await client.fetch(SHORTENED_REVIEW_QUERY);
  const filteredShortenedReviews = shortenedReviews.filter(
    (review: Review) => review.shortText !== null,
  );
  return (
    <Carousel className="my-12 h-[350px] max-w-80">
      <CarouselContent>
        {filteredShortenedReviews.map((review: Review) => (
          <CarouselItem key={review._id}>
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
