import { ArrowLeft, Star, Clock, Calendar, Users, Share2, Heart, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Screen } from '../App';

interface MovieDetailProps {
  movie: any;
  onNavigate: (screen: Screen, params?: any) => void;
}

export function MovieDetail({ movie, onNavigate }: MovieDetailProps) {
  return (
    <div className="h-screen flex flex-col bg-white overflow-auto">
      {/* Header Image */}
      <div className="relative h-96">
        <ImageWithFallback
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <button
          onClick={() => onNavigate('cinema')}
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

        {/* Trailer button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
          <Play size={28} className="text-gray-900 ml-1" />
        </button>

        {/* Movie info overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs">
              {movie.ageRating}
            </span>
            <span className="text-white/90">{movie.genre}</span>
          </div>
          <h1 className="text-white mb-2">
            {movie.title}
          </h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <span>{movie.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{movie.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {/* Synopsis */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Synopsis
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {movie.title === "Dune: Part Three" && "The epic saga continues as Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee."}
            {movie.title === "The Last Kingdom" && "In a land torn by war, a young warrior must choose between honor and survival as ancient kingdoms clash for supremacy. A tale of courage, betrayal, and redemption unfolds in this epic historical drama."}
            {movie.title === "Ocean's Legacy" && "Dive into the depths of our planet's most mysterious realm. This stunning documentary reveals the beauty and fragility of marine ecosystems, showcasing never-before-seen footage of ocean life."}
            {movie.title === "Midnight Chronicles" && "When a group of friends stumbles upon a dark secret in an abandoned mansion, they must survive the night as supernatural forces threaten their lives. A thrilling horror experience that will keep you on the edge of your seat."}
            {movie.title === "Stellar Voyage" && "Humanity's first mission to the edge of the solar system uncovers mysteries that challenge everything we know about our place in the universe. A breathtaking space adventure filled with wonder and danger."}
          </p>
        </div>

        {/* Cast & Crew */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Cast & Crew
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Director</span>
              <span className="text-gray-900">Denis Villeneuve</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Starring</span>
              <span className="text-gray-900 text-right">Timothée Chalamet<br/>Zendaya, Rebecca Ferguson</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Language</span>
              <span className="text-gray-900">English</span>
            </div>
          </div>
        </div>

        {/* Showtimes */}
        {movie.status === 'now-showing' && movie.showings && (
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">
              Select Showtime
            </h2>
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3 text-gray-600">
                <Calendar size={18} />
                <span>Today, December 2, 2025</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {movie.showings.map((time: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => onNavigate('seat-selection', { ...movie, selectedTime: time })}
                    className="py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-colors"
                  >
                    <p className="text-gray-900">{time}</p>
                    <div className="flex items-center justify-center gap-1 text-gray-500 mt-1">
                      <Users size={14} />
                      <span className="text-xs">45 seats left</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Coming Soon Info */}
        {movie.status === 'coming-soon' && (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-6 text-white text-center">
              <Calendar className="mx-auto mb-3" size={32} />
              <h3 className="text-white mb-2">
                Coming Soon
              </h3>
              <p className="text-purple-100 mb-4">
                Releases on {movie.releaseDate}
              </p>
              <button className="w-full bg-white text-purple-700 py-3 rounded-xl">
                Get Notified
              </button>
            </div>
          </div>
        )}

        {/* Theater Info */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">
            Theater Information
          </h2>
          <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Screen</span>
              <span className="text-gray-900">IMAX Theater 1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sound</span>
              <span className="text-gray-900">Dolby Atmos</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Format</span>
              <span className="text-gray-900">2D, 3D Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
