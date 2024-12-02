import Headingwbackground from "@/components/Headingwbackground";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { reviews } from "@/app/review";

const Review = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center px-3 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>What Our Customers Are Saying</Headingwbackground>

      <div className="mb-20 flex max-w-4xl flex-col gap-y-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="item-center relative flex min-w-[500px] flex-col gap-4 rounded-lg border-b p-8 text-center"
          >
            <Quote className="absolute left-1/2 top-1/2 h-16 w-16 translate-x-[-50%] translate-y-[-50%] opacity-5" />
            {/* <Quote className="absolute bottom-8 left-8 h-12 w-12 rotate-180 opacity-10" /> */}
            <p className="font-regular mb-8 font-heading text-lg text-neutral-600">{`"${review.text}"`}</p>
            <div className="mx-auto flex items-center">
              {[...Array(review.rating)].map((_, index) => (
                <Star
                  key={index}
                  className="h-3 w-3 fill-amber-200 text-amber-200"
                ></Star>
              ))}
            </div>
            <p className="font-medium">{review.author}</p>
          </div>
        ))}
      </div>

      <Headingwbackground>
        Loved Your Meal? Share Your Thoughts!
      </Headingwbackground>
      <p className="mb-4 text-center">
        Your feedback keeps us motivated and helps us improve. Leave a review
        and let others know about your Kampung Dunedin experience!
      </p>
      <Link href="/contact">
        <Button size="lg">Leave a Review</Button>
      </Link>
    </div>
  );
};

export default Review;
