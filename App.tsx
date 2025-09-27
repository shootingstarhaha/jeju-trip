
import React, { useState, useCallback } from 'react';
import { OnboardingData, Itinerary, AppState } from './types';
import { generateItinerary } from './services/geminiService';
import OnboardingForm from './components/OnboardingForm';
import LoadingScreen from './components/LoadingScreen';
import ItineraryView from './components/ItineraryView';
import Header from './components/Header';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.Onboarding);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOnboardingComplete = useCallback(async (data: OnboardingData) => {
    setAppState(AppState.Loading);
    setError(null);
    try {
      const generatedItinerary = await generateItinerary(data);
      setItinerary(generatedItinerary);
      setAppState(AppState.Itinerary);
    } catch (err) {
      console.error(err);
      setError('일정 생성에 실패했습니다. 다시 시도해주세요.');
      setAppState(AppState.Onboarding);
    }
  }, []);

  const handleReset = useCallback(() => {
    setAppState(AppState.Onboarding);
    setItinerary(null);
    setError(null);
  }, []);

  const renderContent = () => {
    switch (appState) {
      case AppState.Onboarding:
        return <OnboardingForm onComplete={handleOnboardingComplete} error={error} />;
      case AppState.Loading:
        return <LoadingScreen />;
      case AppState.Itinerary:
        return itinerary ? <ItineraryView itinerary={itinerary} /> : <p>생성된 일정이 없습니다.</p>;
      default:
        return <p>오류가 발생했습니다.</p>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header onReset={handleReset} showResetButton={appState !== AppState.Onboarding} />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>&copy; 2024 제주 가족 여행 플래너. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
