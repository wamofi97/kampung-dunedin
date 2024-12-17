import React from "react";
import { Quote, Star } from "lucide-react";
// import { shortenReviews } from "@/app/review";
import { client } from "@/sanity/lib/client";
import { SHORTENED_REVIEW_QUERY } from "@/sanity/lib/queries";

type Review = {
  _id: number;
  author: string;
  shortText: string;
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="flex min-h-[280px] flex-col items-center justify-between rounded-lg bg-white p-6 shadow-xl shadow-primary/20">
    <div className="w-fit rounded-full bg-accent p-3">
      <Quote className="h-5 w-5" />
    </div>
    <p className="italic">{review.shortText}</p>
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

const ReviewSlider = async () => {
  const shortenedReviews = await client.fetch(SHORTENED_REVIEW_QUERY);
  const filteredShortenedReviews = shortenedReviews.filter(
    (review: Review) => review.shortText !== null,
  );

  return (
    <div className="my-12 flex w-full justify-center bg-gradient-to-r from-amber-100/50 via-background to-amber-100/50 px-3 sm:px-6">
      <div
        className="slider hidden max-w-6xl sm:block"
        style={
          {
            "--width": "400px",
            "--height": "350px",
            "--quantity": filteredShortenedReviews.length,
          } as React.CSSProperties
        }
      >
        {filteredShortenedReviews.map((review: Review, index: number) => (
          <div className="list" key={review._id}>
            <>
              <div
                className="reviewitem flex items-center justify-center"
                style={{ "--position": index } as React.CSSProperties}
              >
                <ReviewCard review={review} />
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
