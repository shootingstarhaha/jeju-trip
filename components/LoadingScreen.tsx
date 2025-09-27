
import React, { useState, useEffect } from 'react';
import { BrainCircuit } from './icons/IconComponents';

const loadingMessages = [
  "제주 여행 전문가와 상담 중...",
  "아이들을 위한 최고의 장소를 찾는 중...",
  "유모차 이동이 편한 경로를 확인하는 중...",
  "즐겁고 안전한 모험을 설계하는 중...",
  "완벽한 동선을 계획하는 중...",
  "여행 계획을 마무리하는 중...",
];

const LoadingScreen: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % loadingMessages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 min-h-[400px]">
      <BrainCircuit className="w-16 h-16 text-teal-500 animate-pulse mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">맞춤 여행 일정을 만들고 있어요</h2>
      <p className="text-gray-500 transition-opacity duration-500 ease-in-out">
        {loadingMessages[messageIndex]}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-8 overflow-hidden">
        <div className="bg-teal-500 h-2.5 rounded-full animate-progress"></div>
      </div>
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
