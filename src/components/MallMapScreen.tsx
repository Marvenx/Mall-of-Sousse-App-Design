import { useState } from 'react';
import { ArrowLeft, Search, MapPin, Store, UtensilsCrossed, Film, Zap, Car } from 'lucide-react';
import type { Screen } from '../App';

interface MallMapScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const floors = [
  { id: -1, name: 'Parking Level', label: 'Floor -1' },
  { id: 0, name: 'Ground Floor', label: 'Floor 0' },
  { id: 1, name: 'First Floor', label: 'Floor 1' },
  { id: 2, name: 'Second Floor', label: 'Floor 2' },
];

// Parking spots for Floor -1
const parkingSpots = [
  // Row A
  { id: 'A1', x: 15, y: 20, available: true },
  { id: 'A2', x: 25, y: 20, available: true },
  { id: 'A3', x: 35, y: 20, available: false },
  { id: 'A4', x: 45, y: 20, available: true },
  { id: 'A5', x: 55, y: 20, available: false },
  { id: 'A6', x: 65, y: 20, available: true },
  { id: 'A7', x: 75, y: 20, available: false },
  { id: 'A8', x: 85, y: 20, available: true },
  // Row B
  { id: 'B1', x: 15, y: 40, available: false },
  { id: 'B2', x: 25, y: 40, available: true },
  { id: 'B3', x: 35, y: 40, available: true },
  { id: 'B4', x: 45, y: 40, available: true },
  { id: 'B5', x: 55, y: 40, available: false },
  { id: 'B6', x: 65, y: 40, available: false },
  { id: 'B7', x: 75, y: 40, available: true },
  { id: 'B8', x: 85, y: 40, available: false },
  // Row C
  { id: 'C1', x: 15, y: 60, available: true },
  { id: 'C2', x: 25, y: 60, available: false },
  { id: 'C3', x: 35, y: 60, available: true },
  { id: 'C4', x: 45, y: 60, available: false },
  { id: 'C5', x: 55, y: 60, available: true },
  { id: 'C6', x: 65, y: 60, available: true },
  { id: 'C7', x: 75, y: 60, available: false },
  { id: 'C8', x: 85, y: 60, available: true },
  // Row D
  { id: 'D1', x: 15, y: 80, available: true },
  { id: 'D2', x: 25, y: 80, available: true },
  { id: 'D3', x: 35, y: 80, available: false },
  { id: 'D4', x: 45, y: 80, available: true },
  { id: 'D5', x: 55, y: 80, available: true },
  { id: 'D6', x: 65, y: 80, available: false },
  { id: 'D7', x: 75, y: 80, available: true },
  { id: 'D8', x: 85, y: 80, available: false },
];

const storesByFloor: Record<number, any[]> = {
  0: [
    { id: 1, name: 'Sephora', type: 'beauty', x: 20, y: 20 },
    { id: 2, name: 'Food Court', type: 'food', x: 60, y: 30 },
    { id: 3, name: 'Cinema', type: 'cinema', x: 75, y: 60 },
    { id: 4, name: 'Main Entrance', type: 'entrance', x: 50, y: 10 },
  ],
  1: [
    { id: 5, name: 'Zara', type: 'fashion', x: 25, y: 35 },
    { id: 6, name: 'H&M', type: 'fashion', x: 45, y: 40 },
    { id: 7, name: 'Mango', type: 'fashion', x: 65, y: 25 },
    { id: 8, name: 'Starbucks', type: 'food', x: 80, y: 50 },
  ],
  2: [
    { id: 9, name: 'Nike', type: 'sports', x: 30, y: 30 },
    { id: 10, name: 'Adidas', type: 'sports', x: 55, y: 45 },
    { id: 11, name: 'Foot Locker', type: 'sports', x: 70, y: 35 },
    { id: 12, name: 'Play Zone', type: 'entertainment', x: 40, y: 65 },
  ],
};

const getStoreIcon = (type: string) => {
  switch (type) {
    case 'food':
      return UtensilsCrossed;
    case 'cinema':
      return Film;
    case 'fashion':
    case 'beauty':
    case 'sports':
      return Store;
    case 'entrance':
      return MapPin;
    default:
      return Zap;
  }
};

const getStoreColor = (type: string) => {
  switch (type) {
    case 'food':
      return 'bg-orange-500';
    case 'cinema':
      return 'bg-purple-500';
    case 'fashion':
      return 'bg-blue-500';
    case 'beauty':
      return 'bg-pink-500';
    case 'sports':
      return 'bg-green-500';
    case 'entrance':
      return 'bg-amber-500';
    default:
      return 'bg-gray-500';
  }
};

export function MallMapScreen({ onNavigate }: MallMapScreenProps) {
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [selectedStore, setSelectedStore] = useState<any>(null);

  const currentStores = storesByFloor[selectedFloor] || [];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('home')} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-gray-900 flex-1 text-center mr-6">
            Mall Map
          </h1>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for a store..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:outline-none"
          />
        </div>

        {/* Floor Selector */}
        <div className="flex gap-2">
          {floors.map((floor) => (
            <button
              key={floor.id}
              onClick={() => {
                setSelectedFloor(floor.id);
                setSelectedStore(null);
              }}
              className={`flex-1 py-3 rounded-xl transition-colors ${
                selectedFloor === floor.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {floor.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
          <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border-2 border-gray-200">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-10 grid-rows-10 h-full">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="border border-gray-400"></div>
                ))}
              </div>
            </div>

            {/* Parking Spots (Floor -1 only) */}
            {selectedFloor === -1 && parkingSpots.map((spot) => {
              const isSelected = selectedStore?.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedStore({ ...spot, name: `Spot ${spot.id}`, type: 'parking' })}
                  className={`absolute transition-all ${
                    isSelected ? 'scale-125 z-10' : 'scale-100'
                  }`}
                  style={{
                    left: `${spot.x}%`,
                    top: `${spot.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className={`${
                    spot.available ? 'bg-green-500' : 'bg-red-500'
                  } w-8 h-8 rounded-lg flex items-center justify-center shadow-md ${
                    isSelected ? 'ring-4 ring-gray-300' : ''
                  }`}>
                    <Car className="text-white" size={16} />
                  </div>
                  <div className={`mt-1 text-xs text-center px-2 py-1 bg-white rounded shadow-sm whitespace-nowrap ${
                    isSelected ? 'block' : 'hidden'
                  }`}>
                    {spot.id} - {spot.available ? 'Available' : 'Occupied'}
                  </div>
                </button>
              );
            })}

            {/* Stores (other floors) */}
            {selectedFloor !== -1 && currentStores.map((store) => {
              const Icon = getStoreIcon(store.type);
              const color = getStoreColor(store.type);
              const isSelected = selectedStore?.id === store.id;
              
              return (
                <button
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className={`absolute transition-all ${
                    isSelected ? 'scale-125 z-10' : 'scale-100'
                  }`}
                  style={{
                    left: `${store.x}%`,
                    top: `${store.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    isSelected ? 'ring-4 ring-amber-300' : ''
                  }`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className={`mt-1 text-xs text-center px-2 py-1 bg-white rounded shadow-sm whitespace-nowrap ${
                    isSelected ? 'block' : 'hidden'
                  }`}>
                    {store.name}
                  </div>
                </button>
              );
            })}

            {/* Pathways (simplified) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#CBD5E0" strokeWidth="4" strokeDasharray="8,4" />
              <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#CBD5E0" strokeWidth="4" strokeDasharray="8,4" />
            </svg>

            {/* Floor label */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
              <p className="text-gray-600">
                {floors.find(f => f.id === selectedFloor)?.name}
              </p>
              {selectedFloor === -1 && (
                <p className="text-xs text-gray-500 mt-1">
                  {parkingSpots.filter(s => s.available).length} / {parkingSpots.length} spots available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white p-6 border-t border-gray-200">
        <h3 className="text-gray-900 mb-3">
          Legend
        </h3>
        {selectedFloor === -1 ? (
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-600">Available Spot</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-600">Occupied Spot</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Fashion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-gray-600">Food</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Cinema</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Sports</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
              <span className="text-gray-600">Beauty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              <span className="text-gray-600">Entrance</span>
            </div>
          </div>
        )}
      </div>

      {/* Store Info Modal */}
      {selectedStore && (
        <div className="fixed bottom-24 left-6 right-6 bg-white rounded-2xl shadow-2xl p-4 animate-slide-up z-20">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-gray-900">
                {selectedStore.name}
              </h3>
              {selectedStore.type === 'parking' && (
                <p className={`text-sm ${selectedStore.available ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedStore.available ? '✓ Available' : '✗ Occupied'}
                </p>
              )}
            </div>
            <button
              onClick={() => setSelectedStore(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-amber-500 text-white py-2 rounded-xl">
              Navigate
            </button>
            {selectedStore.type !== 'parking' && (
              <button className="flex-1 border-2 border-amber-500 text-amber-600 py-2 rounded-xl">
                Details
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
