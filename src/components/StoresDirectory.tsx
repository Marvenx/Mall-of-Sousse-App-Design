import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Clock, ArrowLeft, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface StoresDirectoryProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const stores = [
  { id: 1, name: "Zara", category: "Fashion", floor: "Floor 1", hours: "10:00 - 22:00", rating: 4.5, image: "https://images.unsplash.com/photo-1694452242573-5449ccdb4a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzY0Njg0MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080", offer: "30% off new collection" },
  { id: 2, name: "H&M", category: "Fashion", floor: "Floor 1", hours: "10:00 - 22:00", rating: 4.3, image: "https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGJvdXRpcXVlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzA0NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 3, name: "Nike", category: "Sports", floor: "Floor 2", hours: "10:00 - 22:00", rating: 4.7, image: "https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGJvdXRpcXVlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzA0NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 4, name: "Adidas", category: "Sports", floor: "Floor 2", hours: "10:00 - 22:00", rating: 4.6, image: "https://images.unsplash.com/photo-1694452242573-5449ccdb4a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzY0Njg0MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 5, name: "Sephora", category: "Beauty", floor: "Floor 0", hours: "10:00 - 22:00", rating: 4.8, image: "https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGJvdXRpcXVlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzA0NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080", offer: "Free gift with purchase" },
  { id: 6, name: "Foot Locker", category: "Sports", floor: "Floor 2", hours: "10:00 - 22:00", rating: 4.4, image: "https://images.unsplash.com/photo-1694452242573-5449ccdb4a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzY0Njg0MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 7, name: "Mango", category: "Fashion", floor: "Floor 1", hours: "10:00 - 22:00", rating: 4.5, image: "https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGJvdXRpcXVlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzA0NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 8, name: "Massimo Dutti", category: "Fashion", floor: "Floor 1", hours: "10:00 - 22:00", rating: 4.6, image: "https://images.unsplash.com/photo-1694452242573-5449ccdb4a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzY0Njg0MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080" },
];

const categories = ["All", "Fashion", "Sports", "Beauty", "Accessories"];

export function StoresDirectory({ onNavigate }: StoresDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredStores = selectedCategory === "All" 
    ? stores 
    : stores.filter(store => store.category === selectedCategory);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('home')} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-gray-900 flex-1 text-center mr-6">
            Stores
          </h1>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search stores..."
            className="w-full pl-12 pr-12 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:outline-none"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <SlidersHorizontal size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Stores Grid */}
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredStores.map((store) => (
            <button
              key={store.id}
              onClick={() => onNavigate('store-detail', store)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="relative h-32">
                <ImageWithFallback
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
                {store.offer && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg">
                    <span className="text-xs">SALE</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-gray-900 mb-1">
                  {store.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <span className="text-gray-600">{store.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 mb-1">
                  <MapPin size={14} />
                  <span>{store.floor}</span>
                </div>
                {store.offer && (
                  <p className="text-amber-600 text-xs mt-2">
                    {store.offer}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
