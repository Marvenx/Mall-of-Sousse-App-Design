import { useState } from 'react';
import { OnboardingScreen } from './components/OnboardingScreen';
import { LoginScreen } from './components/LoginScreen';
import { SignupScreen } from './components/SignupScreen';
import { ForgotPasswordScreen } from './components/ForgotPasswordScreen';
import { HomeScreen } from './components/HomeScreen';
import { StoresDirectory } from './components/StoresDirectory';
import { StoreDetail } from './components/StoreDetail';
import { FoodCourtScreen } from './components/FoodCourtScreen';
import { RestaurantDetail } from './components/RestaurantDetail';
import { CinemaScreen } from './components/CinemaScreen';
import { MovieDetail } from './components/MovieDetail';
import { SeatSelection } from './components/SeatSelection';
import { SpinWheelScreen } from './components/SpinWheelScreen';
import { RewardsHistory } from './components/RewardsHistory';
import { LoyaltyScreen } from './components/LoyaltyScreen';
import { ChatbotScreen } from './components/ChatbotScreen';
import { EventsScreen } from './components/EventsScreen';
import { EventDetail } from './components/EventDetail';
import { MallMapScreen } from './components/MallMapScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { BottomNav } from './components/BottomNav';

export type Screen = 
  | 'onboarding'
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'home'
  | 'stores'
  | 'store-detail'
  | 'food-court'
  | 'restaurant-detail'
  | 'cinema'
  | 'movie-detail'
  | 'seat-selection'
  | 'spin-wheel'
  | 'rewards-history'
  | 'loyalty'
  | 'chatbot'
  | 'events'
  | 'event-detail'
  | 'mall-map'
  | 'profile';

export interface NavigationState {
  screen: Screen;
  params?: any;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [navigation, setNavigation] = useState<NavigationState>({
    screen: 'onboarding'
  });

  const navigate = (screen: Screen, params?: any) => {
    setNavigation({ screen, params });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('home');
  };

  const handleCompleteOnboarding = () => {
    setHasSeenOnboarding(true);
    navigate('login');
  };

  const renderScreen = () => {
    if (!hasSeenOnboarding) {
      return <OnboardingScreen onComplete={handleCompleteOnboarding} />;
    }

    if (!isAuthenticated) {
      switch (navigation.screen) {
        case 'login':
          return <LoginScreen onLogin={handleLogin} onNavigate={navigate} />;
        case 'signup':
          return <SignupScreen onSignup={handleLogin} onNavigate={navigate} />;
        case 'forgot-password':
          return <ForgotPasswordScreen onNavigate={navigate} />;
        default:
          return <LoginScreen onLogin={handleLogin} onNavigate={navigate} />;
      }
    }

    switch (navigation.screen) {
      case 'home':
        return <HomeScreen onNavigate={navigate} />;
      case 'stores':
        return <StoresDirectory onNavigate={navigate} />;
      case 'store-detail':
        return <StoreDetail store={navigation.params} onNavigate={navigate} />;
      case 'food-court':
        return <FoodCourtScreen onNavigate={navigate} />;
      case 'restaurant-detail':
        return <RestaurantDetail restaurant={navigation.params} onNavigate={navigate} />;
      case 'cinema':
        return <CinemaScreen onNavigate={navigate} />;
      case 'movie-detail':
        return <MovieDetail movie={navigation.params} onNavigate={navigate} />;
      case 'seat-selection':
        return <SeatSelection movie={navigation.params} onNavigate={navigate} />;
      case 'spin-wheel':
        return <SpinWheelScreen onNavigate={navigate} />;
      case 'rewards-history':
        return <RewardsHistory onNavigate={navigate} />;
      case 'loyalty':
        return <LoyaltyScreen onNavigate={navigate} />;
      case 'chatbot':
        return <ChatbotScreen onNavigate={navigate} />;
      case 'events':
        return <EventsScreen onNavigate={navigate} />;
      case 'event-detail':
        return <EventDetail event={navigation.params} onNavigate={navigate} />;
      case 'mall-map':
        return <MallMapScreen onNavigate={navigate} />;
      case 'profile':
        return <ProfileScreen onNavigate={navigate} onLogout={() => setIsAuthenticated(false)} />;
      default:
        return <HomeScreen onNavigate={navigate} />;
    }
  };

  const showBottomNav = isAuthenticated && hasSeenOnboarding;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen relative pb-20">
        {renderScreen()}
        {showBottomNav && (
          <BottomNav currentScreen={navigation.screen} onNavigate={navigate} />
        )}
      </div>
    </div>
  );
}

export default App;
