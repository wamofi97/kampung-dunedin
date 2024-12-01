import React from "react";
import { Quote, Star } from "lucide-react";

type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
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
  <div className="flex min-h-[280px] flex-col items-center justify-between rounded-lg bg-white p-6 shadow-xl shadow-primary/20">
    <div className="w-fit rounded-full bg-accent p-3">
      <Quote className="h-5 w-5" />
    </div>
    <p className="italic">{review.text}</p>
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

const ReviewSlider = () => {
  return (
    <div className="my-12 flex w-full justify-center bg-gradient-to-r from-amber-100/50 via-background to-amber-100/50 px-3 sm:px-6">
      <div
        className="slider hidden max-w-6xl sm:block"
        style={
          {
            "--width": "400px",
            "--height": "350px",
            "--quantity": 5,
          } as React.CSSProperties
        }
      >
        <div className="list">
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="reviewitem flex items-center justify-center"
              style={{ "--position": index } as React.CSSProperties}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
