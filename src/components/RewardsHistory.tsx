import { ArrowLeft, Gift, Coffee, Ticket, Trophy, Check, Clock } from 'lucide-react';
import type { Screen } from '../App';

interface RewardsHistoryProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const rewards = [
  { id: 1, type: 'discount', title: '20% Off at Zara', description: 'Valid until Dec 15', icon: Gift, status: 'active', code: 'ZARA20OFF', date: 'Today' },
  { id: 2, type: 'food', title: 'Free Coffee at Starbucks', description: 'Valid until Dec 10', icon: Coffee, status: 'active', code: 'COFFEE123', date: 'Yesterday' },
  { id: 3, type: 'points', title: '100 Loyalty Points', description: 'Added to your account', icon: Ticket, status: 'used', date: '2 days ago' },
  { id: 4, type: 'cinema', title: 'Free Popcorn', description: 'Cinema concession stand', icon: Trophy, status: 'active', code: 'POP456', date: '3 days ago' },
  { id: 5, type: 'discount', title: '10% Off Pizza Hut', description: 'Valid until Dec 5', icon: Gift, status: 'used', date: '1 week ago' },
  { id: 6, type: 'food', title: 'Free Drink', description: 'Any food court restaurant', icon: Coffee, status: 'expired', date: '2 weeks ago' },
];

export function RewardsHistory({ onNavigate }: RewardsHistoryProps) {
  const activeRewards = rewards.filter(r => r.status === 'active');
  const usedRewards = rewards.filter(r => r.status === 'used');
  const expiredRewards = rewards.filter(r => r.status === 'expired');

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => onNavigate('spin-wheel')} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-gray-900">
            My Rewards
          </h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 text-white text-center">
            <p className="text-2xl mb-1">{activeRewards.length}</p>
            <p className="text-green-100 text-xs">Active</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-center">
            <p className="text-2xl mb-1">{usedRewards.length}</p>
            <p className="text-blue-100 text-xs">Used</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 text-white text-center">
            <p className="text-2xl mb-1">{rewards.length}</p>
            <p className="text-purple-100 text-xs">Total</p>
          </div>
        </div>
      </div>

      {/* Rewards List */}
      <div className="flex-1 overflow-auto p-6">
        {/* Active Rewards */}
        {activeRewards.length > 0 && (
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">
              Active Rewards
            </h2>
            <div className="space-y-3">
              {activeRewards.map((reward) => {
                const Icon = reward.icon;
                return (
                  <div key={reward.id} className="bg-white rounded-2xl p-4 shadow-sm border-2 border-green-200">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-green-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-gray-900">
                            {reward.title}
                          </h3>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs">
                            Active
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">
                          {reward.description}
                        </p>
                        {reward.code && (
                          <div className="bg-gray-50 rounded-lg p-2 inline-flex items-center gap-2">
                            <span className="text-gray-500">Code:</span>
                            <span className="text-gray-900">{reward.code}</span>
                          </div>
                        )}
                        <p className="text-gray-500 mt-2">
                          Won {reward.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Used Rewards */}
        {usedRewards.length > 0 && (
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">
              Used Rewards
            </h2>
            <div className="space-y-3">
              {usedRewards.map((reward) => {
                const Icon = reward.icon;
                return (
                  <div key={reward.id} className="bg-white rounded-2xl p-4 shadow-sm opacity-75">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-gray-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-gray-900">
                            {reward.title}
                          </h3>
                          <Check className="text-gray-500" size={20} />
                        </div>
                        <p className="text-gray-600 mb-2">
                          {reward.description}
                        </p>
                        <p className="text-gray-500">
                          Won {reward.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Expired Rewards */}
        {expiredRewards.length > 0 && (
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">
              Expired
            </h2>
            <div className="space-y-3">
              {expiredRewards.map((reward) => {
                const Icon = reward.icon;
                return (
                  <div key={reward.id} className="bg-white rounded-2xl p-4 shadow-sm opacity-50">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-gray-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-gray-900">
                            {reward.title}
                          </h3>
                          <Clock className="text-gray-500" size={20} />
                        </div>
                        <p className="text-gray-600 mb-2">
                          {reward.description}
                        </p>
                        <p className="text-gray-500">
                          Won {reward.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
