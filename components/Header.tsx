
import React from 'react';
import { Leaf, RefreshCw } from './icons/IconComponents';

interface HeaderProps {
  onReset: () => void;
  showResetButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ onReset, showResetButton }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="w-8 h-8 text-teal-500" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-700">
            제주 가족 여행 플래너
          </h1>
        </div>
        {showResetButton && (
          <button
            onClick={onReset}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
            aria-label="처음부터 다시 시작"
          >
            <RefreshCw className="w-4 h-4" />
            <span>다시 시작</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
