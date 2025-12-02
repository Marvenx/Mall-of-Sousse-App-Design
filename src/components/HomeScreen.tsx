import { Search, Bell, MapPin, Shirt, UtensilsCrossed, Film, Gift, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const promos = [
  {
    title: "Winter Sale",
    subtitle: "Up to 70% off on fashion",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "New Cinema Release",
    subtitle: "Book tickets now",
    gradient: "from-pink-500 to-red-600"
  },
  {
    title: "Food Festival",
    subtitle: "Try new cuisines",
    gradient: "from-amber-500 to-orange-600"
  }
];

const categories = [
  { icon: Shirt, label: 'Fashion', screen: 'stores' as Screen, color: 'bg-blue-100 text-blue-600' },
  { icon: UtensilsCrossed, label: 'Food', screen: 'food-court' as Screen, color: 'bg-orange-100 text-orange-600' },
  { icon: Film, label: 'Cinema', screen: 'cinema' as Screen, color: 'bg-purple-100 text-purple-600' },
  { icon: Calendar, label: 'Events', screen: 'events' as Screen, color: 'bg-pink-100 text-pink-600' },
  { icon: Gift, label: 'Rewards', screen: 'spin-wheel' as Screen, color: 'bg-green-100 text-green-600' },
  { icon: MapPin, label: 'Map', screen: 'mall-map' as Screen, color: 'bg-indigo-100 text-indigo-600' },
];

const liveOffers = [
  {
    store: "Zara",
    offer: "30% off on new collection",
    valid: "Valid until Dec 10",
    badge: "NEW"
  },
  {
    store: "Starbucks",
    offer: "Buy 1 Get 1 Free",
    valid: "Today only",
    badge: "HOT"
  },
  {
    store: "Nike",
    offer: "Free delivery on orders over 200 TND",
    valid: "This week",
    badge: ""
  }
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="pb-6 overflow-auto h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-amber-100">Welcome to</p>
            <h1 className="text-white">
              Mall of Sousse
            </h1>
          </div>
          <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Bell className="text-white" size={20} />
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search stores, restaurants, movies..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white shadow-lg"
          />
        </div>
      </div>

      {/* Hero Banner Carousel */}
      <div className="px-6 -mt-4 mb-6">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
          {promos.map((promo, index) => (
            <div
              key={index}
              className={`min-w-[280px] h-36 bg-gradient-to-r ${promo.gradient} rounded-2xl p-6 text-white snap-center shadow-lg`}
            >
              <p className="text-white/90 mb-1">{promo.subtitle}</p>
              <h3 className="text-white mb-2">
                {promo.title}
              </h3>
              <button className="text-white flex items-center gap-1">
                Learn more
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-900 mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.label}
                onClick={() => onNavigate(category.screen)}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <Icon size={24} />
                </div>
                <span className="text-gray-700">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Offers */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">
            Live Offers
          </h2>
          <button className="text-amber-600">
            See all
          </button>
        </div>
        <div className="space-y-3">
          {liveOffers.map((offer, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900">
                      {offer.store}
                    </h3>
                    {offer.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        offer.badge === 'HOT' 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {offer.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-900 mb-1">
                    {offer.offer}
                  </p>
                  <p className="text-gray-500">
                    {offer.valid}
                  </p>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Highlights */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-900 mb-4">
          Today's Highlights
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('cinema')}
            className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-2xl text-white text-left"
          >
            <Film className="mb-3" size={28} />
            <p className="mb-1">Now Showing</p>
            <p className="text-purple-200">
              5 movies
            </p>
          </button>
          <button
            onClick={() => onNavigate('spin-wheel')}
            className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-2xl text-white text-left"
          >
            <Sparkles className="mb-3" size={28} />
            <p className="mb-1">Spin & Win</p>
            <p className="text-green-200">
              Daily rewards
            </p>
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="px-6 mb-6">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763663501401-00c4f2704dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2Njk2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mall of Sousse"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
