
import React from 'react';
import { Itinerary } from '../types';
import SlotCard from './SlotCard';
import { AlertTriangle, MapPin, Sun, Moon } from './icons/IconComponents';

interface ItineraryViewProps {
  itinerary: Itinerary;
}

const timeSlotKorean = {
  morning: '오전',
  afternoon: '오후',
  evening: '저녁',
};

const ItineraryView: React.FC<ItineraryViewProps> = ({ itinerary }) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">{itinerary.title}</h2>
      </div>

      {itinerary.warnings && itinerary.warnings.length > 0 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 font-semibold">
                전문가 팁 & 주의사항
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                {itinerary.warnings.map((warning, index) => (
                  <li key={index} className="text-sm text-yellow-800">{warning}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {itinerary.days.map((day) => (
          <div key={day.dayIndex} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-teal-600 mb-6 border-b pb-3 flex items-center">
              <MapPin className="w-6 h-6 mr-3"/>
              Day {day.dayIndex}
            </h3>
            <div className="space-y-6">
              {day.slots.map((slot, slotIndex) => (
                <div key={slotIndex} className="flex flex-col md:flex-row items-start gap-4">
                   <div className="flex-shrink-0 w-full md:w-32 text-center md:text-right bg-gray-100 p-2 rounded-lg">
                    <p className="font-bold text-gray-700 capitalize flex items-center justify-center md:justify-end gap-2">
                      {slot.timeSlot === 'morning' || slot.timeSlot === 'afternoon' ? <Sun className="w-5 h-5 text-orange-400"/> : <Moon className="w-5 h-5 text-indigo-400"/>}
                      {timeSlotKorean[slot.timeSlot]}
                    </p>
                  </div>
                  <div className="w-full">
                    <SlotCard slot={slot} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryView;
