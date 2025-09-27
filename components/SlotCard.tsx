
import React, { useState } from 'react';
import { ItinerarySlot, Spot } from '../types';
import { Baby, ChevronDown, Home, Info, ParkingCircle, PersonStanding, Replace } from './icons/IconComponents';

interface SlotCardProps {
  slot: ItinerarySlot;
}

const DifficultyBadge: React.FC<{ difficulty: 'low' | 'medium' | 'high' }> = ({ difficulty }) => {
  const config = {
    low: { text: '쉬움', color: 'bg-green-100 text-green-800' },
    medium: { text: '보통', color: 'bg-yellow-100 text-yellow-800' },
    high: { text: '어려움', color: 'bg-red-100 text-red-800' },
  };
  const { text, color } = config[difficulty] || config.medium;
  return <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${color}`}>{text}</span>;
};

const AccessibilityTag: React.FC<{ Icon: React.ElementType; label: string; available: boolean }> = ({ Icon, label, available }) => {
  if (!available) return null;
  return (
    <div className="flex items-center space-x-1.5 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
      <Icon className="w-4 h-4 text-teal-600" />
      <span>{label}</span>
    </div>
  );
};


const SpotDetails: React.FC<{ spot: Spot }> = ({ spot }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <div className="flex items-start">
      <img src={`https://picsum.photos/seed/${spot.spotName.replace(/\s/g, '')}/100/100`} alt={spot.spotName} className="w-24 h-24 object-cover rounded-md mr-4"/>
      <div>
        <h4 className="font-bold text-lg text-gray-800">{spot.spotName}</h4>
        <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
            <DifficultyBadge difficulty={spot.difficulty} />
            <span className="flex items-center"><PersonStanding className="w-4 h-4 mr-1"/>{spot.ageRange}</span>
        </div>
        <p className="text-sm text-gray-600">{spot.description}</p>
      </div>
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      <AccessibilityTag Icon={Baby} label="유모차" available={spot.accessibility.strollerFriendly} />
      <AccessibilityTag Icon={Home} label="수유실" available={spot.accessibility.nursingRoom} />
      <AccessibilityTag Icon={ParkingCircle} label="주차장" available={spot.accessibility.parking} />
      <AccessibilityTag Icon={Info} label="실내" available={spot.accessibility.indoor} />
    </div>
  </div>
);


const SlotCard: React.FC<SlotCardProps> = ({ slot }) => {
  const [showAlternatives, setShowAlternatives] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <SpotDetails spot={slot.spot} />
      {slot.alternatives && slot.alternatives.length > 0 && (
        <div>
          <button 
            onClick={() => setShowAlternatives(!showAlternatives)}
            className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-700 flex justify-between items-center transition-colors"
          >
            <span className="flex items-center"><Replace className="w-4 h-4 mr-2"/>다른 추천 장소 보기</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${showAlternatives ? 'rotate-180' : ''}`} />
          </button>
          {showAlternatives && (
            <div className="p-3 bg-gray-50 space-y-3">
              {slot.alternatives.map((alt, index) => (
                <div key={index} className="border-l-2 border-teal-400 pl-3">
                    <h5 className="font-semibold text-gray-800">{alt.spotName}</h5>
                    <p className="text-xs text-gray-500">{alt.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};


export default SlotCard;
