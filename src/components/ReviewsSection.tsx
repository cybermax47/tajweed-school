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
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-arabic text-4xl md:text-5xl mb-6 text-white">
            What Our Students Say
          </h2>
          <p className="text-elegant text-lg text-white/90 max-w-3xl mx-auto">
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
                  <Card className="p-8 card-islamic max-w-2xl mx-auto text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute top-4 left-4 opacity-20">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">
                        {review.avatar}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-elegant text-lg text-muted-foreground mb-6 italic">
                      "{review.text}"
                    </p>

                    {/* Reviewer Info */}
                    <div>
                      <h4 className="heading-arabic text-xl font-semibold text-primary">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
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
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-sm">
            ⭐ Join hundreds of satisfied families from 25+ countries worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;