
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Fatima Ahmed",
      location: "London, UK",
      rating: 5,
      text: "My daughter gained so much confidence in her recitation. The teacher is very patient and the one-to-one attention is amazing. Highly recommended!",
      avatar: "FA"
    },
    {
      id: 2,
      name: "Mohammad Hassan",
      location: "Dubai, UAE", 
      rating: 5,
      text: "Excellent Tajweed teaching. My son learned proper pronunciation in just a few weeks. The free trial convinced us immediately.",
      avatar: "MH"
    },
    {
      id: 3,
      name: "Aisha Khan",
      location: "Toronto, Canada",
      rating: 5,
      text: "The best online Quran academy we've tried. Flexible timing and dedicated teachers. Our whole family is learning now.",
      avatar: "AK"
    },
    {
      id: 4,
      name: "Ibrahim Ali",
      location: "Sydney, Australia",
      rating: 5,
      text: "Perfect for Hifz revision. The teacher helps me maintain my memorization with proper Tajweed. Very professional service.",
      avatar: "IA"
    },
    {
      id: 5,
      name: "Maryam Osman",
      location: "New York, USA",
      rating: 5,
      text: "Amazing experience! The personalized approach really works. My daughter looks forward to every class.",
      avatar: "MO"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-arabic text-4xl md:text-5xl mb-6 text-emerald-900">
            What Our Students Say
          </h2>
          <p className="text-elegant text-lg text-emerald-600 max-w-3xl mx-auto font-medium">
            Hear from families around the world who have transformed their Quranic journey with us.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 card-islamic max-w-2xl mx-auto text-center relative shadow-lg border-2 border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/30">
                    {/* Quote Icon */}
                    <div className="absolute top-4 left-4 opacity-20">
                      <Quote className="w-8 h-8 text-emerald-600" />
                    </div>
                    
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {review.avatar}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-elegant text-lg text-emerald-800 mb-6 italic leading-relaxed">
                      "{review.text}"
                    </p>

                    {/* Reviewer Info */}
                    <div>
                      <h4 className="heading-arabic text-xl font-semibold text-emerald-900">
                        {review.name}
                      </h4>
                      <p className="text-sm text-emerald-600 font-medium">
                        {review.location}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-emerald-600 scale-110 shadow-lg' 
                    : 'bg-emerald-300 hover:bg-emerald-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-emerald-700 text-sm font-medium">
            ⭐ Join hundreds of satisfied families from 25+ countries worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
