import { useState } from 'react';
import { ArrowLeft, Gift, Trophy, Ticket, Coffee, Sparkles, History } from 'lucide-react';
import type { Screen } from '../App';

interface SpinWheelScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const prizes = [
  { icon: Gift, label: '10% Off', color: 'from-blue-500 to-blue-600' },
  { icon: Coffee, label: 'Free Drink', color: 'from-amber-500 to-amber-600' },
  { icon: Ticket, label: '50 Points', color: 'from-green-500 to-green-600' },
  { icon: Trophy, label: '20% Off', color: 'from-purple-500 to-purple-600' },
  { icon: Gift, label: 'Free Popcorn', color: 'from-red-500 to-red-600' },
  { icon: Sparkles, label: '100 Points', color: 'from-pink-500 to-pink-600' },
  { icon: Ticket, label: '5% Off', color: 'from-indigo-500 to-indigo-600' },
  { icon: Coffee, label: 'Free Coffee', color: 'from-orange-500 to-orange-600' },
];

export function SpinWheelScreen({ onNavigate }: SpinWheelScreenProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<any>(null);
  const [spinsLeft, setSpinsLeft] = useState(1);

  const spinWheel = () => {
    if (isSpinning || spinsLeft === 0) return;

    setIsSpinning(true);
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[prizeIndex];
    
    // Calculate rotation (multiple full spins + landing position)
    const segmentAngle = 360 / prizes.length;
    const extraSpins = 5;
    const finalRotation = (extraSpins * 360) + (prizeIndex * segmentAngle) + (segmentAngle / 2);
    
    setRotation(rotation + finalRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(prize);
      setSpinsLeft(spinsLeft - 1);
    }, 4000);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-purple-50">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => onNavigate('home')} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-gray-900 flex-1 text-center mr-6">
            Spin & Win
          </h1>
          <button onClick={() => onNavigate('rewards-history')} className="text-amber-600">
            <History size={24} />
          </button>
        </div>

        {/* Spins Left */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-4 text-white text-center">
          <Sparkles className="mx-auto mb-2" size={32} />
          <p className="text-amber-100 mb-1">Daily Spins Available</p>
          <p className="text-3xl">{spinsLeft}</p>
        </div>
      </div>

      {/* Wheel Container */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="relative">
          {/* Pointer */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-amber-500 drop-shadow-lg"></div>
          </div>

          {/* Wheel */}
          <div 
            className="relative w-80 h-80 rounded-full shadow-2xl transition-transform duration-[4000ms] ease-out"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.12, 0.99)'
            }}
          >
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              const angle = (360 / prizes.length) * index;
              
              return (
                <div
                  key={index}
                  className={`absolute w-full h-full`}
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 origin-bottom bg-gradient-to-b ${prize.color} clip-segment flex items-start justify-center pt-4`}>
                    <div className="flex flex-col items-center gap-1 text-white">
                      <Icon size={24} strokeWidth={2.5} />
                      <span className="text-xs">{prize.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Center Button */}
            <button
              onClick={spinWheel}
              disabled={isSpinning || spinsLeft === 0}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center z-10 transition-all ${
                isSpinning || spinsLeft === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-110 active:scale-95'
              }`}
            >
              <span className="text-gray-900">
                {isSpinning ? 'Spinning...' : spinsLeft > 0 ? 'SPIN' : 'No Spins'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-6">
        <div className="bg-white rounded-2xl p-4 mb-4">
          <h3 className="text-gray-900 mb-2">
            How to Play
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Get 1 free spin every day</li>
            <li>• Earn extra spins by shopping at partner stores</li>
            <li>• Win discounts, free items, and loyalty points</li>
            <li>• Check your rewards history anytime</li>
          </ul>
        </div>

        {spinsLeft === 0 && (
          <div className="bg-purple-100 border border-purple-200 rounded-2xl p-4 text-center">
            <p className="text-purple-800">
              🎯 Come back tomorrow for more spins!
            </p>
          </div>
        )}
      </div>

      {/* Win Modal */}
      {wonPrize && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center animate-bounce-in">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${wonPrize.color} flex items-center justify-center`}>
              <wonPrize.icon className="text-white" size={40} />
            </div>
            <h2 className="text-gray-900 mb-2">
              Congratulations! 🎉
            </h2>
            <p className="text-gray-600 mb-6">
              You won: <span className="text-amber-600">{wonPrize.label}</span>
            </p>
            <button
              onClick={() => {
                setWonPrize(null);
                onNavigate('rewards-history');
              }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-xl mb-3"
            >
              View My Rewards
            </button>
            <button
              onClick={() => setWonPrize(null)}
              className="w-full text-gray-600 py-3"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        .clip-segment {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
