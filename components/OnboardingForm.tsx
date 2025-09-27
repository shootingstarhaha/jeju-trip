
import React, { useState } from 'react';
import { OnboardingData } from '../types';
import { Users, Calendar, Footprints, Baby, Activity, Utensils, Trees, Wind } from './icons/IconComponents';

interface OnboardingFormProps {
  onComplete: (data: OnboardingData) => void;
  error: string | null;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ onComplete, error }) => {
  const [tripLength, setTripLength] = useState(3);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [childAges, setChildAges] = useState<string>('5');
  const [activities, setActivities] = useState<string[]>(['자연', '체험 활동']);
  const [pace, setPace] = useState<'short' | 'normal' | 'long'>('normal');
  const [needsStroller, setNeedsStroller] = useState(true);
  const [needsNursingRoom, setNeedsNursingRoom] = useState(false);

  const handleActivityToggle = (activity: string) => {
    setActivities(prev =>
      prev.includes(activity)
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAges = childAges.split(',').map(age => parseInt(age.trim(), 10)).filter(age => !isNaN(age));

    if (children > 0 && parsedAges.length !== children) {
      alert('자녀 수에 맞게 나이를 입력해주세요.');
      return;
    }

    onComplete({
      tripLength,
      familyMembers: {
        adults,
        children,
        childAges: parsedAges,
      },
      preferences: {
        activities,
        pace,
      },
      accessibility: {
        stroller: needsStroller,
        nursingRoom: needsNursingRoom,
      },
    });
  };
  
  const activityOptions = [
    { name: '자연', icon: Trees },
    { name: '체험 활동', icon: Activity },
    { name: '카페/맛집', icon: Utensils },
    { name: '휴식', icon: Wind },
  ];
  
  const paceOptions = [
    { id: 'short', label: '여유롭게', description: '최소한의 이동' },
    { id: 'normal', label: '균형있게', description: '적절한 조화' },
    { id: 'long', label: '알차게', description: '최대한 많이 보기' },
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">완벽한 제주 여행 계획하기</h2>
      <p className="text-center text-gray-500 mb-8">가족 구성원과 여행 스타일에 대해 알려주세요.</p>
      
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: Trip Details */}
        <div className="p-5 border rounded-xl bg-gray-50/50">
          <h3 className="text-lg font-semibold flex items-center text-gray-700 mb-4"><Calendar className="w-5 h-5 mr-2 text-teal-500"/>여행 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tripLength" className="block text-sm font-medium text-gray-600 mb-1">여행 기간 (일)</label>
              <input type="number" id="tripLength" value={tripLength} onChange={e => setTripLength(Math.max(1, parseInt(e.target.value)))} min="1" max="10" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
            </div>
          </div>
        </div>

        {/* Section 2: Family */}
        <div className="p-5 border rounded-xl bg-gray-50/50">
          <h3 className="text-lg font-semibold flex items-center text-gray-700 mb-4"><Users className="w-5 h-5 mr-2 text-teal-500"/>가족 구성</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-gray-600 mb-1">성인</label>
              <input type="number" id="adults" value={adults} onChange={e => setAdults(Math.max(1, parseInt(e.target.value)))} min="1" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
            </div>
            <div>
              <label htmlFor="children" className="block text-sm font-medium text-gray-600 mb-1">아동</label>
              <input type="number" id="children" value={children} onChange={e => setChildren(Math.max(0, parseInt(e.target.value)))} min="0" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
            </div>
            {children > 0 && (
              <div className="md:col-span-3">
                <label htmlFor="childAges" className="block text-sm font-medium text-gray-600 mb-1">자녀 나이 (쉼표로 구분)</label>
                <input type="text" id="childAges" value={childAges} onChange={e => setChildAges(e.target.value)} placeholder="예: 3, 7" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
              </div>
            )}
          </div>
        </div>
        
        {/* Section 3: Preferences */}
        <div className="p-5 border rounded-xl bg-gray-50/50">
          <h3 className="text-lg font-semibold flex items-center text-gray-700 mb-4"><Activity className="w-5 h-5 mr-2 text-teal-500"/>여행 스타일</h3>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">선호하는 활동</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {activityOptions.map(opt => (
                <button type="button" key={opt.name} onClick={() => handleActivityToggle(opt.name)} className={`p-3 border rounded-lg flex flex-col items-center justify-center space-y-2 transition-all duration-200 ${activities.includes(opt.name) ? 'bg-teal-500 text-white shadow-md ring-2 ring-offset-2 ring-teal-500' : 'bg-white hover:bg-gray-100 text-gray-700'}`}>
                  <opt.icon className="w-6 h-6"/>
                  <span className="text-sm font-medium">{opt.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">여행 속도</label>
            <div className="grid grid-cols-3 gap-3">
              {paceOptions.map(opt => (
                 <button type="button" key={opt.id} onClick={() => setPace(opt.id as 'short' | 'normal' | 'long')} className={`p-3 text-center border rounded-lg transition-colors ${pace === opt.id ? 'bg-teal-500 text-white shadow-md ring-2 ring-offset-2 ring-teal-500' : 'bg-white hover:bg-gray-100 text-gray-700'}`}>
                   <p className="font-semibold">{opt.label}</p>
                   <p className="text-xs">{opt.description}</p>
                 </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Section 4: Accessibility */}
        <div className="p-5 border rounded-xl bg-gray-50/50">
           <h3 className="text-lg font-semibold flex items-center text-gray-700 mb-4"><Baby className="w-5 h-5 mr-2 text-teal-500"/>필요한 편의시설</h3>
           <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex-1 p-4 border rounded-lg flex items-center justify-between cursor-pointer has-[:checked]:bg-teal-50 has-[:checked]:border-teal-400">
                <span className="font-medium text-gray-700">유모차 이용 가능</span>
                <input type="checkbox" checked={needsStroller} onChange={e => setNeedsStroller(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"/>
              </label>
              <label className="flex-1 p-4 border rounded-lg flex items-center justify-between cursor-pointer has-[:checked]:bg-teal-50 has-[:checked]:border-teal-400">
                <span className="font-medium text-gray-700">수유실</span>
                <input type="checkbox" checked={needsNursingRoom} onChange={e => setNeedsNursingRoom(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"/>
              </label>
           </div>
        </div>
        
        <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center text-lg transition-transform transform hover:scale-105">
          <Footprints className="w-6 h-6 mr-2"/>
          내 여행 일정 만들기!
        </button>
      </form>
    </div>
  );
};

export default OnboardingForm;
