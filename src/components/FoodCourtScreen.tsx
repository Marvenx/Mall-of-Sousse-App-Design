import { useState } from 'react';
import { Search, SlidersHorizontal, ArrowLeft, Star, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface FoodCourtScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const restaurants = [
  { id: 1, name: "Starbucks", category: "Café", cuisine: "Coffee & Pastries", rating: 4.7, price: "$$", time: "15-20 min", image: "https://images.unsplash.com/photo-1604552914267-90a8d81a4254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjQ2MTQyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080", popular: "Caramel Frappuccino", offer: "Buy 1 Get 1 Free" },
  { id: 2, name: "McDonald's", category: "Fast Food", cuisine: "Burgers & Fries", rating: 4.5, price: "$", time: "10-15 min", image: "https://images.unsplash.com/photo-1755003858507-408a1a683790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGNvdXJ0fGVufDF8fHx8MTc2NDY5MjAxMHww&ixlib=rb-4.1.0&q=80&w=1080", popular: "Big Mac Meal" },
  { id: 3, name: "Pizza Hut", category: "Restaurant", cuisine: "Italian", rating: 4.6, price: "$$", time: "20-25 min", image: "https://images.unsplash.com/photo-1755003858507-408a1a683790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGNvdXJ0fGVufDF8fHx8MTc2NDY5MjAxMHww&ixlib=rb-4.1.0&q=80&w=1080", popular: "Pepperoni Pan Pizza" },
  { id: 4, name: "Sushi House", category: "Restaurant", cuisine: "Japanese", rating: 4.8, price: "$$$", time: "25-30 min", image: "https://images.unsplash.com/photo-1755003858507-408a1a683790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGNvdXJ0fGVufDF8fHx8MTc2NDY5MjAxMHww&ixlib=rb-4.1.0&q=80&w=1080", popular: "Salmon Sashimi" },
  { id: 5, name: "Le Comptoir", category: "Restaurant", cuisine: "French", rating: 4.7, price: "$$$", time: "30-35 min", image: "https://images.unsplash.com/photo-1604552914267-90a8d81a4254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjQ2MTQyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080", popular: "Croissant & Espresso" },
  { id: 6, name: "Tacos Express", category: "Fast Food", cuisine: "Mexican", rating: 4.4, price: "$", time: "10-15 min", image: "https://images.unsplash.com/photo-1755003858507-408a1a683790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGNvdXJ0fGVufDF8fHx8MTc2NDY5MjAxMHww&ixlib=rb-4.1.0&q=80&w=1080", popular: "Beef Tacos" },
  { id: 7, name: "Gelato Bar", category: "Café", cuisine: "Desserts", rating: 4.9, price: "$", time: "5-10 min", image: "https://images.unsplash.com/photo-1604552914267-90a8d81a4254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjQ2MTQyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080", popular: "Pistachio Gelato" },
  { id: 8, name: "Wok & Roll", category: "Restaurant", cuisine: "Asian", rating: 4.5, price: "$$", time: "15-20 min", image: "https://images.unsplash.com/photo-1755003858507-408a1a683790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGNvdXJ0fGVufDF8fHx8MTc2NDY5MjAxMHww&ixlib=rb-4.1.0&q=80&w=1080", popular: "Pad Thai" },
];

const cuisines = ["All", "Fast Food", "Café", "Italian", "Japanese", "French", "Mexican", "Asian"];

export function FoodCourtScreen({ onNavigate }: FoodCourtScreenProps) {
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const filteredRestaurants = selectedCuisine === "All" 
    ? restaurants 
    : restaurants.filter(r => r.cuisine.includes(selectedCuisine) || r.category === selectedCuisine);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('home')} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-gray-900 flex-1 text-center mr-6">
            Food Court
          </h1>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full pl-12 pr-12 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <SlidersHorizontal size={20} />
          </button>
        </div>

        {/* Cuisines */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCuisine === cuisine
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurants List */}
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {filteredRestaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => onNavigate('restaurant-detail', restaurant)}
            className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className="flex gap-4">
              <div className="relative w-28 h-28 flex-shrink-0">
                <ImageWithFallback
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                {restaurant.offer && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg">
                    <span className="text-xs">OFFER</span>
                  </div>
                )}
              </div>
              <div className="flex-1 py-3 pr-3">
                <h3 className="text-gray-900 mb-1">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {restaurant.cuisine}
                </p>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-gray-600">{restaurant.rating}</span>
                  </div>
                  <span className="text-gray-600">{restaurant.price}</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={14} />
                    <span>{restaurant.time}</span>
                  </div>
                </div>
                {restaurant.offer ? (
                  <p className="text-red-600">
                    {restaurant.offer}
                  </p>
                ) : (
                  <p className="text-gray-500">
                    Popular: {restaurant.popular}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
