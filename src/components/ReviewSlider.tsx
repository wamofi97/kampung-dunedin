import React from "react";
import { Star } from "lucide-react";

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
    rating: 3,
    text: "“The Nasi Lemak Daun Pisang is absolutely divine! It took me straight back to my childhood in Malaysia. Thank you for sharing this amazing dish!”",
    date: "March 2024",
  },
  {
    id: 2,
    author: "Michael T.",
    rating: 4,
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

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="w-(--width) h-[(--height)] rounded-lg bg-white p-6 shadow-md">
    <div className="mb-4 flex items-center">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="mb-4 text-gray-700">{review.text}</p>
    <div className="flex items-center justify-between">
      <span className="font-medium text-gray-900">{review.author}</span>
      <span className="text-sm text-gray-500">{review.date}</span>
    </div>
  </div>
);

const ReviewSlider = () => {
  return (
    <div
      className="slider my-4 max-w-7xl"
      style={
        {
          "--width": "300px",
          "--height": "250px",
          "--quantity": 5,
        } as React.CSSProperties
      }
    >
      <div className="list">
        {reviews.concat(reviews).map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className="reviewitem"
            style={{ "--position": index } as React.CSSProperties}
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
