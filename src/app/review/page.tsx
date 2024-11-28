import Headingwbackground from "@/components/Headingwbackground";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const reviews = [
  {
    id: 1,
    author: "Aisyah J.",
    rating: 5,
    text: "The Nasi Lemak Daun Pisang is absolutely divine! It took me straight back to my childhood in Malaysia. Thank you for sharing this amazing dish!",
    date: "March 2024",
  },
  {
    id: 2,
    author: "Michael T.",
    rating: 5,
    text: "The Sate Ayam is so tender and flavorful, and the peanut sauce is spot on. My kids loved it too!",
    date: "March 2024",
  },
  {
    id: 3,
    author: "Daniel K",
    rating: 5,
    text: "Tried the Nasi Kandar Daging Masak Hitam Mamak last week – everything blended so perfectly. Feels like I’ve been transported to Penang!",
    date: "February 2024",
  },
  {
    id: 4,
    author: "Jonathan L.",
    rating: 5,
    text: "Kampung Dunedin has truly brought a taste of Malaysia to NZ. Every bite reminded me of my travels to Southeast Asia.",
    date: "February 2024",
  },
  {
    id: 5,
    author: "Nurul H.",
    rating: 5,
    text: "The Sate Ayam is so tender and flavorful, and the peanut sauce is spot on. My kids loved it too!",
    date: "January 2024",
  },
];

const Review = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center px-3 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>What Our Customers Are Saying</Headingwbackground>

      <div className="mb-20 max-w-4xl space-y-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="item-center mb-8 flex flex-col gap-6 rounded-lg border-b p-8 text-center"
          >
            <div className="mx-auto flex items-center">
              {[...Array(review.rating)].map((_, index) => (
                <Star
                  key={index}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                ></Star>
              ))}
            </div>
            <p className="italic text-neutral-500">{`"${review.text}"`}</p>
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
