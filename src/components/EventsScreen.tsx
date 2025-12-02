import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface EventsScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const events = [
  {
    id: 1,
    title: "Winter Fashion Show",
    date: "December 10, 2025",
    time: "18:00 - 20:00",
    location: "Central Atrium",
    attendees: 150,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1758520387687-38a92a7ee42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhZ3MlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY0NjYyNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Experience the latest winter collections from top brands. Professional runway shows, exclusive previews, and special discounts for attendees.",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Kids Play Festival",
    date: "December 5-7, 2025",
    time: "10:00 - 18:00",
    location: "Floor 2, Play Zone",
    attendees: 300,
    category: "Family",
    image: "https://images.unsplash.com/photo-1763663501401-00c4f2704dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2Njk2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A weekend of fun activities for children including games, face painting, magic shows, and interactive workshops.",
    status: "ongoing"
  },
  {
    id: 3,
    title: "Food & Wine Tasting",
    date: "December 15, 2025",
    time: "19:00 - 22:00",
    location: "Food Court Premium Area",
    attendees: 80,
    category: "Food",
    image: "https://images.unsplash.com/photo-1755003858507-408a1a683790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGNvdXJ0fGVufDF8fHx8MTc2NDY5MjAxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "An evening of culinary delights featuring renowned chefs, wine pairings, and gourmet tastings from mall restaurants.",
    status: "upcoming"
  },
  {
    id: 4,
    title: "Holiday Gift Fair",
    date: "December 20-24, 2025",
    time: "09:00 - 23:00",
    location: "Main Entrance Hall",
    attendees: 500,
    category: "Shopping",
    image: "https://images.unsplash.com/photo-1694452242573-5449ccdb4a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzY0Njg0MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Find perfect holiday gifts at our special fair featuring local artisans, exclusive products, and amazing deals.",
    status: "upcoming"
  },
  {
    id: 5,
    title: "Live Music Nights",
    date: "Every Friday & Saturday",
    time: "20:00 - 22:00",
    location: "Central Plaza",
    attendees: 200,
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NDcwNDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Enjoy live performances from local and international artists while you shop and dine.",
    status: "recurring"
  },
];

const categories = ["All", "Fashion", "Family", "Food", "Shopping", "Entertainment"];

export function EventsScreen({ onNavigate }: EventsScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('home')} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-gray-900 flex-1 text-center mr-6">
            Events & Activities
          </h1>
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

      {/* Events List */}
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {filteredEvents.map((event) => (
          <button
            key={event.id}
            onClick={() => onNavigate('event-detail', event)}
            className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className="relative h-48">
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  event.status === 'ongoing' 
                    ? 'bg-green-500 text-white' 
                    : event.status === 'recurring'
                    ? 'bg-purple-500 text-white'
                    : 'bg-blue-500 text-white'
                }`}>
                  {event.status === 'ongoing' ? 'Happening Now' : 
                   event.status === 'recurring' ? 'Recurring' : 'Upcoming'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/90 mb-1">{event.category}</p>
                <h3 className="text-white mb-2">
                  {event.title}
                </h3>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={16} />
                  <span>{event.attendees}+ attendees</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
