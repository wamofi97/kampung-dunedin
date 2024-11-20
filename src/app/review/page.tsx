import Headingwbackground from "@/components/Headingwbackground";
import React from "react";

const Review = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-3 py-32 md:px-6">
      <h1 className="text-3xl">Reviews</h1>
      <Headingwbackground>What Our Customers Are Saying</Headingwbackground>

      <p className="text-sm">
        Every plate we serve comes with a story, and we&apos;re thrilled to hear
        yours! Here&apos;s what our amazing customers have to say about their
        Kampung Dunedin experience.
      </p>
    </div>
  );
};

export default Review;
