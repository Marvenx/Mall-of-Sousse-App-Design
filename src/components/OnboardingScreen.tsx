import { useState } from 'react';
import { ChevronRight, ShoppingBag, MapPin, Gift, Sparkles } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: ShoppingBag,
    title: "Welcome to Mall of Sousse",
    description: "Your premier shopping destination in Tunisia. Discover hundreds of stores, restaurants, and entertainment options.",
    color: "text-amber-500"
  },
  {
    icon: MapPin,
    title: "Navigate with Ease",
    description: "Interactive mall maps, store locator, and real-time navigation to help you find exactly what you're looking for.",
    color: "text-blue-500"
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn loyalty points, spin the wheel for prizes, and unlock exclusive discounts at your favorite stores.",
    color: "text-purple-500"
  },
  {
    icon: Sparkles,
    title: "Smart Shopping Assistant",
    description: "Get personalized recommendations, movie suggestions, and dining options powered by AI.",
    color: "text-pink-500"
  }
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Skip button */}
      {currentSlide < slides.length - 1 && (
        <div className="flex justify-end p-6">
          <button
            onClick={handleSkip}
            className="text-gray-500 px-4 py-2"
          >
            Skip
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className={`${slide.color} mb-8`}>
          <Icon size={80} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-gray-900 mb-4 px-4">
          {slide.title}
        </h1>
        
        <p className="text-gray-600 max-w-sm mb-12">
          {slide.description}
        </p>

        {/* Dots indicator */}
        <div className="flex gap-2 mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-amber-500'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Next button */}
      <div className="p-6">
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30"
        >
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
