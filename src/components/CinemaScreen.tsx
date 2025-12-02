import { useState } from 'react';
import { ArrowLeft, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface CinemaScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const movies = [
  { 
    id: 1, 
    title: "Dune: Part Three", 
    genre: "Sci-Fi, Adventure", 
    duration: "166 min", 
    rating: 8.9, 
    showings: ["14:30", "18:00", "21:30"],
    image: "https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNpbmVtYXxlbnwxfHx8fDE3NjQ2MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ageRating: "PG-13",
    status: "now-showing"
  },
  { 
    id: 2, 
    title: "The Last Kingdom", 
    genre: "Action, Drama", 
    duration: "142 min", 
    rating: 8.5, 
    showings: ["15:00", "19:00", "22:00"],
    image: "https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NDcwNDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    ageRating: "R",
    status: "now-showing"
  },
  { 
    id: 3, 
    title: "Ocean's Legacy", 
    genre: "Documentary, Nature", 
    duration: "95 min", 
    rating: 8.2, 
    showings: ["13:00", "16:30", "20:00"],
    image: "https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNpbmVtYXxlbnwxfHx8fDE3NjQ2MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ageRating: "PG",
    status: "now-showing"
  },
  { 
    id: 4, 
    title: "Midnight Chronicles", 
    genre: "Horror, Thriller", 
    duration: "118 min", 
    rating: 7.8, 
    showings: ["17:00", "20:30", "23:00"],
    image: "https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NDcwNDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    ageRating: "R",
    status: "now-showing"
  },
  { 
    id: 5, 
    title: "Stellar Voyage", 
    genre: "Sci-Fi, Adventure", 
    duration: "155 min", 
    rating: 8.7,
    image: "https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGNpbmVtYXxlbnwxfHx8fDE3NjQ2MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ageRating: "PG-13",
    status: "coming-soon",
    releaseDate: "Dec 15, 2025"
  },
];

export function CinemaScreen({ onNavigate }: CinemaScreenProps) {
  const [activeTab, setActiveTab] = useState<'now-showing' | 'coming-soon'>('now-showing');

  const filteredMovies = movies.filter(movie => movie.status === activeTab);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('home')} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-gray-900 flex-1 text-center mr-6">
            Cinema
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('now-showing')}
            className={`flex-1 py-3 rounded-xl transition-colors ${
              activeTab === 'now-showing'
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Now Showing
          </button>
          <button
            onClick={() => setActiveTab('coming-soon')}
            className={`flex-1 py-3 rounded-xl transition-colors ${
              activeTab === 'coming-soon'
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Coming Soon
          </button>
        </div>
      </div>

      {/* Movies List */}
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {filteredMovies.map((movie) => (
          <button
            key={movie.id}
            onClick={() => onNavigate('movie-detail', movie)}
            className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className="flex gap-4">
              <div className="relative w-32 h-44 flex-shrink-0">
                <ImageWithFallback
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded">
                  <span className="text-xs">{movie.ageRating}</span>
                </div>
              </div>
              <div className="flex-1 py-3 pr-3">
                <h3 className="text-gray-900 mb-1">
                  {movie.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {movie.genre}
                </p>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-gray-900">{movie.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={14} />
                    <span>{movie.duration}</span>
                  </div>
                </div>
                
                {movie.status === 'now-showing' && movie.showings ? (
                  <div>
                    <p className="text-gray-500 mb-2">
                      Today's Showtimes
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {movie.showings.map((time, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg inline-block">
                    Releases {movie.releaseDate}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
