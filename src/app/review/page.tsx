import Headingwbackground from "@/components/Headingwbackground";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import { REVIEW_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What Our Customers Are Saying",
  alternates: {
    canonical: "https://kampungdunedin.nz/review",
  },
};

export const revalidate = 60;
interface Review {
  _id: string;
  author: string;
  text: string;
}

const Review = async () => {
  const reviews = await client.fetch(REVIEW_QUERY);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center px-3 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>What Our Customers Are Saying</Headingwbackground>

      <div className="mb-20 flex max-w-4xl flex-col-reverse gap-y-8">
        {reviews.map((review: Review) => (
          <div
            key={review._id}
            className="item-center relative flex flex-col gap-4 border-b border-secondary/30 py-8 text-center"
          >
            <Quote className="absolute right-8 top-0 size-16 text-primary opacity-20" />
            <Quote className="absolute bottom-20 left-8 size-12 scale-x-[-1] text-primary opacity-20" />
            <p className="font-regular mb-2 font-heading text-neutral-700 sm:text-lg">{`"${review.text}"`}</p>
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
