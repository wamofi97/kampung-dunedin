import React from "react";
import { Star } from "lucide-react";

type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
};

const reviews: Review[] = [
  {
    id: 1,
    author: "Sarah Thompson",
    rating: 5,
    text: "The best Malaysian food I've had outside of KL! The rendang was perfectly spiced and the roti canai was flaky and authentic.",
    date: "March 2024",
  },
  {
    id: 2,
    author: "James Wilson",
    rating: 5,
    text: "Such a warm, family atmosphere! The nasi lemak transported me straight back to Malaysia. A must-visit in Dunedin!",
    date: "March 2024",
  },
  {
    id: 3,
    author: "Emma Chen",
    rating: 5,
    text: "Finally found authentic Malaysian food in Dunedin! The curry laksa was spectacular and the satay brought tears of joy.",
    date: "February 2024",
  },
  {
    id: 4,
    author: "David Miller",
    rating: 5,
    text: "Incredible flavors and such friendly service! The char kway teow was perfect and the teh tarik was just like I remember from Penang.",
    date: "February 2024",
  },
  {
    id: 5,
    author: "Lisa Anderson",
    rating: 5,
    text: "A true gem! The sambal is perfectly spiced and the atmosphere really makes you feel like you're in a Malaysian kampung.",
    date: "January 2024",
  },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="mx-4 w-96 flex-none rounded-lg bg-white p-6 shadow-md">
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
    <div className="scroll-container my-20 w-full overflow-hidden bg-amber-100/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="animate-slide flex">
            {reviews.concat(reviews).map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
