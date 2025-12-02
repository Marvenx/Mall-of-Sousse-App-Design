import { ArrowLeft, MapPin, Clock, Phone, Star, Share2, Heart, Navigation } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface StoreDetailProps {
  store: any;
  onNavigate: (screen: Screen, params?: any) => void;
}

export function StoreDetail({ store, onNavigate }: StoreDetailProps) {
  return (
    <div className="h-screen flex flex-col bg-white overflow-auto">
      {/* Header Image */}
      <div className="relative h-64">
        <ImageWithFallback
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onNavigate('stores')}
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
        {/* Store Info */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-gray-900 mb-2">
                {store.name}
              </h1>
              <div className="flex items-center gap-1 mb-2">
                <Star size={18} className="text-amber-500 fill-amber-500" />
                <span className="text-gray-900">{store.rating}</span>
                <span className="text-gray-500">(245 reviews)</span>
              </div>
            </div>
            {store.offer && (
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                <span>Sale</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-4">
            {store.category === 'Fashion' && "Premium fashion and lifestyle brand offering contemporary clothing and accessories for men and women."}
            {store.category === 'Sports' && "Leading sports brand providing high-quality athletic wear, footwear, and equipment for all your sporting needs."}
            {store.category === 'Beauty' && "Your beauty destination featuring the latest cosmetics, skincare, and fragrance brands."}
          </p>

          {store.offer && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-amber-800">
                🎉 {store.offer}
              </p>
            </div>
          )}
        </div>

        {/* Quick Info */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin size={20} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Location</p>
              <p className="text-gray-600">{store.floor}, Section B</p>
            </div>
            <button
              onClick={() => onNavigate('mall-map')}
              className="text-amber-600 flex items-center gap-1"
            >
              <Navigation size={16} />
              Navigate
            </button>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Clock size={20} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Opening Hours</p>
              <p className="text-gray-600">{store.hours}</p>
            </div>
            <span className="text-green-600">
              Open Now
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Contact</p>
              <p className="text-gray-600">+216 73 XXX XXX</p>
            </div>
            <button className="text-amber-600">
              Call
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Gallery
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={store.image}
                  alt={`${store.name} ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Current Offers */}
        {store.offer && (
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">
              Current Offers
            </h2>
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-4 text-white">
              <p className="mb-2">{store.offer}</p>
              <p className="text-amber-100">
                Valid until December 10, 2025
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
