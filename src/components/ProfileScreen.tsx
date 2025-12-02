import { User, Settings, Heart, ShoppingBag, History, Bell, Globe, LogOut, ChevronRight, Star, Gift } from 'lucide-react';
import type { Screen } from '../App';

interface ProfileScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
  onLogout: () => void;
}

export function ProfileScreen({ onNavigate, onLogout }: ProfileScreenProps) {
  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-auto pb-20">
      {/* Header with Profile Card */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 pb-12 rounded-b-3xl mb-6">
        <h1 className="text-white mb-6">
          Profile
        </h1>
        
        {/* Profile Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <User className="text-amber-600" size={32} />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-white mb-1">
                John Doe
              </h2>
              <p className="text-amber-100">
                john.doe@example.com
              </p>
              <p className="text-amber-100">
                +216 XX XXX XXX
              </p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
            <div className="text-center">
              <p className="text-2xl text-white mb-1">1,250</p>
              <p className="text-amber-100 text-xs">Points</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-white mb-1">12</p>
              <p className="text-amber-100 text-xs">Rewards</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-white mb-1">Silver</p>
              <p className="text-amber-100 text-xs">Tier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-6 space-y-4">
        {/* Loyalty & Rewards */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button
            onClick={() => onNavigate('loyalty')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Star className="text-amber-600" size={20} />
              </div>
              <span className="text-gray-900">Loyalty & Points</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </button>
          
          <button
            onClick={() => onNavigate('rewards-history')}
            className="w-full flex items-center justify-between p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Gift className="text-purple-600" size={20} />
              </div>
              <span className="text-gray-900">My Rewards</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </button>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-blue-600" size={20} />
              </div>
              <span className="text-gray-900">Purchase History</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="text-pink-600" size={20} />
              </div>
              <span className="text-gray-900">Saved Stores</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">8</span>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <History className="text-green-600" size={20} />
              </div>
              <span className="text-gray-900">Visited Stores</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </button>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Bell className="text-indigo-600" size={20} />
              </div>
              <span className="text-gray-900">Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 bg-amber-500 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <Globe className="text-teal-600" size={20} />
              </div>
              <span className="text-gray-900">Language</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">English</span>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Settings className="text-gray-600" size={20} />
              </div>
              <span className="text-gray-900">Account Settings</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </button>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="text-blue-600" size={20} />
              </div>
              <span className="text-gray-900">Edit Profile</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </button>
          
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-between p-4 border-t border-gray-100 hover:bg-red-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <LogOut className="text-red-600" size={20} />
              </div>
              <span className="text-red-600">Logout</span>
            </div>
          </button>
        </div>

        {/* App Info */}
        <div className="text-center py-6 text-gray-500">
          <p className="mb-1">Mall of Sousse App</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
