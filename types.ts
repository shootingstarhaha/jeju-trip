
export enum AppState {
  Onboarding = 'ONBOARDING',
  Loading = 'LOADING',
  Itinerary = 'ITINERARY',
}

export interface OnboardingData {
  tripLength: number;
  familyMembers: {
    adults: number;
    children: number;
    childAges: number[];
  };
  preferences: {
    activities: string[];
    pace: 'short' | 'normal' | 'long';
  };
  accessibility: {
    stroller: boolean;
    nursingRoom: boolean;
  };
}

export interface Spot {
  spotName: string;
  description: string;
  ageRange: string;
  difficulty: 'low' | 'medium' | 'high';
  accessibility: {
    strollerFriendly: boolean;
    nursingRoom: boolean;
    parking: boolean;
    indoor: boolean;
  };
  lat: number;
  lng: number;
}

export interface ItinerarySlot {
  timeSlot: 'morning' | 'afternoon' | 'evening';
  spot: Spot;
  alternatives: Spot[];
}

export interface ItineraryDay {
  dayIndex: number;
  slots: ItinerarySlot[];
}

export interface Itinerary {
  title: string;
  days: ItineraryDay[];
  warnings: string[];
}
