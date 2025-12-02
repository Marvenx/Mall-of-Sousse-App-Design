import { useState } from 'react';
import { ArrowLeft, Monitor } from 'lucide-react';
import type { Screen } from '../App';

interface SeatSelectionProps {
  movie: any;
  onNavigate: (screen: Screen, params?: any) => void;
}

const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const SEATS_PER_ROW = 10;

export function SeatSelection({ movie, onNavigate }: SeatSelectionProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  // Generate some occupied seats for demo
  const occupiedSeats = ['A5', 'A6', 'B4', 'B5', 'B6', 'C8', 'D3', 'D4', 'E5', 'E6', 'E7'];

  const toggleSeat = (seat: string) => {
    if (occupiedSeats.includes(seat)) return;
    
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatStatus = (seat: string) => {
    if (occupiedSeats.includes(seat)) return 'occupied';
    if (selectedSeats.includes(seat)) return 'selected';
    return 'available';
  };

  const ticketPrice = 25;
  const totalPrice = selectedSeats.length * ticketPrice;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => onNavigate('movie-detail', movie)} className="text-gray-700">
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1">
            <h2 className="text-gray-900">
              {movie.title}
            </h2>
            <p className="text-gray-600">
              {movie.selectedTime} • IMAX
            </p>
          </div>
        </div>
      </div>

      {/* Screen */}
      <div className="p-6 pb-0">
        <div className="mb-8">
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-3xl h-2 mb-2"></div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Monitor size={16} />
            <span>Screen</span>
          </div>
        </div>
      </div>

      {/* Seats */}
      <div className="flex-1 overflow-auto px-6">
        <div className="max-w-lg mx-auto">
          {ROWS.map((row) => (
            <div key={row} className="flex items-center gap-2 mb-2">
              <span className="text-gray-500 w-6">{row}</span>
              <div className="flex-1 flex justify-center gap-1">
                {Array.from({ length: SEATS_PER_ROW }, (_, i) => {
                  const seatNumber = i + 1;
                  const seatId = `${row}${seatNumber}`;
                  const status = getSeatStatus(seatId);
                  
                  return (
                    <button
                      key={seatId}
                      onClick={() => toggleSeat(seatId)}
                      disabled={status === 'occupied'}
                      className={`w-7 h-7 rounded-t-lg text-xs transition-all ${
                        status === 'available'
                          ? 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                          : status === 'selected'
                          ? 'bg-amber-500 text-white scale-110'
                          : 'bg-gray-500 text-gray-700 cursor-not-allowed opacity-50'
                      }`}
                    >
                      {seatNumber}
                    </button>
                  );
                })}
              </div>
              <span className="text-gray-500 w-6">{row}</span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 rounded-t-lg"></div>
            <span className="text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-500 rounded-t-lg"></div>
            <span className="text-gray-600">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-500 rounded-t-lg opacity-50"></div>
            <span className="text-gray-600">Occupied</span>
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      {selectedSeats.length > 0 && (
        <div className="bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 mb-1">
                {selectedSeats.length} {selectedSeats.length === 1 ? 'Seat' : 'Seats'} Selected
              </p>
              <p className="text-gray-900">
                {selectedSeats.join(', ')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 mb-1">Total</p>
              <p className="text-amber-600">
                {totalPrice} TND
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              alert(`Booking confirmed!\nMovie: ${movie.title}\nTime: ${movie.selectedTime}\nSeats: ${selectedSeats.join(', ')}\nTotal: ${totalPrice} TND`);
              onNavigate('cinema');
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-2xl"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}
