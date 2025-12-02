import { useState } from 'react';
import { Mail, ArrowLeft, Check } from 'lucide-react';
import type { Screen } from '../App';

interface ForgotPasswordScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function ForgotPasswordScreen({ onNavigate }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 p-6">
        <div className="flex-1 flex flex-col justify-center items-center max-w-sm mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="text-green-600" size={40} />
          </div>
          
          <h1 className="text-gray-900 mb-3">
            Check Your Email
          </h1>
          
          <p className="text-gray-600 mb-8">
            We've sent password reset instructions to <span className="text-gray-900">{email}</span>
          </p>

          <button
            onClick={() => onNavigate('login')}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-2xl shadow-lg shadow-amber-500/30"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Header */}
      <div className="p-6 flex items-center">
        <button onClick={() => onNavigate('login')} className="text-gray-700">
          <ArrowLeft size={24} />
        </button>
        <h2 className="flex-1 text-center text-gray-900 mr-6">
          Reset Password
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-6">
        <div className="max-w-sm mx-auto">
          <div className="mb-8">
            <p className="text-gray-600">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-2xl shadow-lg shadow-amber-500/30"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
