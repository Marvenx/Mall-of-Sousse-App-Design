import { useState } from 'react';
import { Send, Sparkles, ShoppingBag, UtensilsCrossed, Film, MapPin } from 'lucide-react';
import type { Screen } from '../App';

interface ChatbotScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickActions = [
  { icon: ShoppingBag, label: 'Find clothing stores', query: 'Show me clothing stores' },
  { icon: UtensilsCrossed, label: 'Best restaurants', query: 'What are the best restaurants?' },
  { icon: Film, label: 'Movies today', query: 'What movies are showing today?' },
  { icon: MapPin, label: 'Store locations', query: 'Help me find a store' },
];

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Welcome to Mall of Sousse! I'm your AI shopping assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

export function ChatbotScreen({ onNavigate }: ChatbotScreenProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userQuery: string): string => {
    const query = userQuery.toLowerCase();

    if (query.includes('clothing') || query.includes('fashion')) {
      return "I found several fashion stores for you:\n\n• Zara (Floor 1) - 30% off new collection\n• H&M (Floor 1) - Trendy casual wear\n• Mango (Floor 1) - Contemporary fashion\n\nWould you like directions to any of these?";
    }
    
    if (query.includes('restaurant') || query.includes('food') || query.includes('eat')) {
      return "Here are some top-rated restaurants:\n\n• Starbucks - Coffee & pastries (Buy 1 Get 1)\n• Pizza Hut - Italian cuisine\n• Sushi House - Japanese (4.8★)\n\nWhat type of cuisine interests you?";
    }
    
    if (query.includes('movie') || query.includes('cinema')) {
      return "Today's movies at our cinema:\n\n• Dune: Part Three (8.9★) - 14:30, 18:00, 21:30\n• The Last Kingdom (8.5★) - 15:00, 19:00, 22:00\n• Ocean's Legacy (8.2★) - 13:00, 16:30, 20:00\n\nWould you like to book tickets?";
    }
    
    if (query.includes('store') || query.includes('find') || query.includes('where')) {
      return "I can help you locate any store in the mall! We have:\n\n• Fashion & Clothing\n• Beauty & Cosmetics\n• Sports & Fitness\n• Electronics\n• Home & Lifestyle\n\nWhich category are you interested in?";
    }
    
    if (query.includes('offer') || query.includes('discount') || query.includes('sale')) {
      return "Current offers at Mall of Sousse:\n\n🎉 Zara - 30% off new collection\n🎉 Starbucks - Buy 1 Get 1 Free\n🎉 Sephora - Free gift with purchase\n🎉 Nike - Free delivery over 200 TND\n\nDon't forget to spin the wheel for more rewards!";
    }
    
    return "I'm here to help you with:\n\n• Finding stores and restaurants\n• Movie showtimes and booking\n• Current offers and promotions\n• Navigation and directions\n• Events and activities\n\nWhat would you like to know?";
  };

  const handleQuickAction = (query: string) => {
    sendMessage(query);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Sparkles className="text-amber-600" size={24} />
          </div>
          <div>
            <h1 className="text-white">
              Mall Assistant
            </h1>
            <p className="text-amber-100">
              AI-powered shopping helper
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      {messages.length <= 2 && (
        <div className="p-6 bg-white border-b border-gray-200">
          <p className="text-gray-600 mb-3">Quick actions:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left"
                >
                  <Icon className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 text-sm">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-900 shadow-sm'
              }`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-amber-100' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputText)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 focus:outline-none"
          />
          <button
            onClick={() => sendMessage(inputText)}
            disabled={!inputText.trim()}
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              inputText.trim()
                ? 'bg-amber-500 text-white'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
