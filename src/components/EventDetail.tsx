import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, Heart, Bell } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface EventDetailProps {
  event: any;
  onNavigate: (screen: Screen, params?: any) => void;
}

export function EventDetail({ event, onNavigate }: EventDetailProps) {
  return (
    <div className="h-screen flex flex-col bg-white overflow-auto">
      {/* Header Image */}
      <div className="relative h-80">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <button
          onClick={() => onNavigate('events')}
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

        <div className="absolute bottom-6 left-6 right-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs mb-3 ${
            event.status === 'ongoing' 
              ? 'bg-green-500 text-white' 
              : event.status === 'recurring'
              ? 'bg-purple-500 text-white'
              : 'bg-blue-500 text-white'
          }`}>
            {event.status === 'ongoing' ? 'Happening Now' : 
             event.status === 'recurring' ? 'Recurring Event' : 'Upcoming Event'}
          </span>
          <h1 className="text-white mb-2">
            {event.title}
          </h1>
          <p className="text-white/90">{event.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <Calendar className="text-blue-600 mb-2" size={24} />
            <p className="text-blue-900 mb-1">Date</p>
            <p className="text-blue-600">{event.date}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <Clock className="text-green-600 mb-2" size={24} />
            <p className="text-green-900 mb-1">Time</p>
            <p className="text-green-600">{event.time}</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <MapPin className="text-purple-600 mb-2" size={24} />
            <p className="text-purple-900 mb-1">Location</p>
            <p className="text-purple-600">{event.location}</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4">
            <Users className="text-amber-600 mb-2" size={24} />
            <p className="text-amber-900 mb-1">Attendees</p>
            <p className="text-amber-600">{event.attendees}+</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            About This Event
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Event Schedule (for multi-day events) */}
        {event.id === 2 && (
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">
              Schedule
            </h2>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-900 mb-1">Day 1 - December 5</p>
                    <p className="text-gray-600">Opening ceremony & Games</p>
                  </div>
                  <span className="text-blue-600">10:00</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-900 mb-1">Day 2 - December 6</p>
                    <p className="text-gray-600">Magic shows & Face painting</p>
                  </div>
                  <span className="text-blue-600">10:00</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-900 mb-1">Day 3 - December 7</p>
                    <p className="text-gray-600">Workshops & Prize ceremony</p>
                  </div>
                  <span className="text-blue-600">10:00</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Event Highlights
          </h2>
          <div className="space-y-2">
            {event.category === 'Fashion' && (
              <>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Live runway shows featuring latest collections</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Meet and greet with fashion designers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Exclusive discounts for attendees</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Complimentary refreshments</p>
                </div>
              </>
            )}
            {event.category === 'Family' && (
              <>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Fun activities for all ages</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Professional entertainers and magicians</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Free face painting and balloon art</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Prize giveaways and contests</p>
                </div>
              </>
            )}
            {event.category === 'Food' && (
              <>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Premium wine and food pairings</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Live cooking demonstrations by renowned chefs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Tasting menu from multiple restaurants</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2">
            <Bell size={20} />
            Get Notified
          </button>
          <button
            onClick={() => onNavigate('mall-map')}
            className="w-full border-2 border-amber-500 text-amber-600 py-4 rounded-2xl flex items-center justify-center gap-2"
          >
            <MapPin size={20} />
            View on Map
          </button>
        </div>
      </div>
    </div>
  );
}
