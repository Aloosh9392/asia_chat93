import React from 'react';
import { Coins } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Header: React.FC = () => {
  const { currentUser } = useStore();

  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">VoiceGift</h1>
        {currentUser && (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Coins className="w-5 h-5" />
              <span>{currentUser.coins}</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{currentUser.name}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};