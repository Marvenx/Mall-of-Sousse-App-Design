import { ArrowLeft, Star, Clock, DollarSign, Share2, Heart, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface RestaurantDetailProps {
  restaurant: any;
  onNavigate: (screen: Screen, params?: any) => void;
}

const menuItems = [
  { name: "Signature Drink", price: "12 TND", category: "Beverages" },
  { name: "Breakfast Special", price: "25 TND", category: "Meals" },
  { name: "Dessert Platter", price: "18 TND", category: "Desserts" },
  { name: "Lunch Combo", price: "35 TND", category: "Meals" },
];

const reviews = [
  { user: "Ahmed K.", rating: 5, comment: "Amazing food and great service!", date: "2 days ago" },
  { user: "Sarah M.", rating: 4, comment: "Good quality, will come again.", date: "1 week ago" },
  { user: "Youssef B.", rating: 5, comment: "Best in the mall!", date: "2 weeks ago" },
];

export function RestaurantDetail({ restaurant, onNavigate }: RestaurantDetailProps) {
  return (
    <div className="h-screen flex flex-col bg-white overflow-auto">
      {/* Header Image */}
      <div className="relative h-64">
        <ImageWithFallback
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onNavigate('food-court')}
          className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft size={20} className="text-gray-900" />
        </button>
        <div className="absolute top-6 right-6 flex gap-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Share2 size={20} className="text-gray-900" />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Heart size={20} className="text-gray-900" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {/* Restaurant Info */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-gray-900 mb-2">
                {restaurant.name}
              </h1>
              <p className="text-gray-600 mb-2">
                {restaurant.cuisine}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star size={18} className="text-amber-500 fill-amber-500" />
                  <span className="text-gray-900">{restaurant.rating}</span>
                  <span className="text-gray-500">(150+ ratings)</span>
                </div>
                <span className="text-gray-600">{restaurant.price}</span>
              </div>
            </div>
          </div>

          {restaurant.offer && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <p className="text-red-800">
                🎉 {restaurant.offer}
              </p>
            </div>
          )}
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Clock className="mx-auto mb-2 text-blue-600" size={24} />
            <p className="text-gray-600">{restaurant.time}</p>
            <p className="text-gray-900">Delivery</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <MapPin className="mx-auto mb-2 text-green-600" size={24} />
            <p className="text-gray-600">Ground</p>
            <p className="text-gray-900">Floor</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <DollarSign className="mx-auto mb-2 text-amber-600" size={24} />
            <p className="text-gray-600">From</p>
            <p className="text-gray-900">15 TND</p>
          </div>
        </div>

        {/* Popular Dish */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Most Popular
          </h2>
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-4 text-white">
            <p className="text-amber-100 mb-1">Customer Favorite</p>
            <h3 className="text-white mb-2">
              {restaurant.popular}
            </h3>
            <p className="text-amber-100">
              ⭐ Highly recommended by 95% of customers
            </p>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Menu Highlights
          </h2>
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-gray-900 mb-1">
                    {item.name}
                  </p>
                  <p className="text-gray-500">
                    {item.category}
                  </p>
                </div>
                <p className="text-amber-600">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-gray-900">
              Reviews
            </h2>
            <button className="text-amber-600">
              See all
            </button>
          </div>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-900">{review.user}</p>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-gray-700">{review.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">
                  {review.comment}
                </p>
                <p className="text-gray-500">
                  {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Opening Hours */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Opening Hours
          </h2>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Monday - Friday</span>
              <span className="text-gray-900">10:00 - 22:00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Saturday - Sunday</span>
              <span className="text-gray-900">09:00 - 23:00</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <span className="text-green-600">● Open Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
