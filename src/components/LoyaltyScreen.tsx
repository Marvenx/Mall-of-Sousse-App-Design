import { ArrowLeft, Star, Gift, Trophy, Crown, Zap, ShoppingBag } from 'lucide-react';
import type { Screen } from '../App';

interface LoyaltyScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const badges = [
  { id: 1, name: 'Early Bird', icon: Zap, color: 'bg-yellow-100 text-yellow-600', earned: true },
  { id: 2, name: 'Shopaholic', icon: ShoppingBag, color: 'bg-purple-100 text-purple-600', earned: true },
  { id: 3, name: 'Movie Buff', icon: Star, color: 'bg-blue-100 text-blue-600', earned: true },
  { id: 4, name: 'Food Explorer', icon: Gift, color: 'bg-orange-100 text-orange-600', earned: false },
  { id: 5, name: 'VIP Member', icon: Crown, color: 'bg-pink-100 text-pink-600', earned: false },
  { id: 6, name: 'Champion', icon: Trophy, color: 'bg-green-100 text-green-600', earned: false },
];

const rewardsStore = [
  { id: 1, name: '5% Discount Voucher', points: 100, category: 'Shopping' },
  { id: 2, name: 'Free Cinema Ticket', points: 500, category: 'Entertainment' },
  { id: 3, name: 'Food Court Meal Voucher', points: 300, category: 'Food' },
  { id: 4, name: '10% Store Discount', points: 200, category: 'Shopping' },
  { id: 5, name: 'Free Parking - 2 Hours', points: 150, category: 'Services' },
  { id: 6, name: 'Coffee & Pastry Combo', points: 250, category: 'Food' },
];

export function LoyaltyScreen({ onNavigate }: LoyaltyScreenProps) {
  const currentPoints = 1250;
  const nextTier = 2000;
  const progress = (currentPoints / nextTier) * 100;

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 pb-12 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => onNavigate('home')} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white">
            Loyalty & Rewards
          </h1>
        </div>

        {/* Points Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-amber-100 mb-1">Total Points</p>
              <p className="text-4xl">
                {currentPoints.toLocaleString()}
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="text-white" size={32} />
            </div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-amber-100">Silver Tier</span>
              <span className="text-white">{nextTier - currentPoints} to Gold</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 -mt-6">
        {/* Badges */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-gray-900 mb-4">
            My Badges
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={badge.id}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 ${
                    badge.earned ? badge.color : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Icon size={28} />
                  <span className="text-xs text-center px-1">
                    {badge.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* How to Earn Points */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-gray-900 mb-4">
            Earn Points
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShoppingBag className="text-blue-600" size={20} />
                </div>
                <span className="text-gray-700">Shop at partner stores</span>
              </div>
              <span className="text-amber-600">+10pts</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="text-purple-600" size={20} />
                </div>
                <span className="text-gray-700">Watch a movie</span>
              </div>
              <span className="text-amber-600">+50pts</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Gift className="text-orange-600" size={20} />
                </div>
                <span className="text-gray-700">Dine at food court</span>
              </div>
              <span className="text-amber-600">+25pts</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="text-green-600" size={20} />
                </div>
                <span className="text-gray-700">Daily check-in</span>
              </div>
              <span className="text-amber-600">+5pts</span>
            </div>
          </div>
        </div>

        {/* Rewards Store */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-gray-900 mb-4">
            Redeem Rewards
          </h2>
          <div className="space-y-3">
            {rewardsStore.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">
                    {reward.name}
                  </h3>
                  <p className="text-gray-500">
                    {reward.category}
                  </p>
                </div>
                <button
                  disabled={currentPoints < reward.points}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    currentPoints >= reward.points
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {reward.points} pts
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Member Benefits */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white mb-6">
          <h2 className="text-white mb-4">
            Silver Tier Benefits
          </h2>
          <ul className="space-y-2 text-purple-100">
            <li>✓ 5% discount at all partner stores</li>
            <li>✓ Priority cinema booking</li>
            <li>✓ Free birthday gift</li>
            <li>✓ Exclusive event invitations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
