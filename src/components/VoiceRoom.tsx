import React, { useState } from 'react';
import { Mic, MicOff, Gift } from 'lucide-react';
import { useStore } from '../store/useStore';
import { GiftPanel } from './GiftPanel';

export const VoiceRoom: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [showGifts, setShowGifts] = useState(false);
  const { currentRoom } = useStore();

  if (!currentRoom) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{currentRoom.name}</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-full ${
              isMuted ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
            }`}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setShowGifts(!showGifts)}
            className="p-3 rounded-full bg-purple-100 text-purple-600"
          >
            <Gift className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[currentRoom.host, ...currentRoom.participants].map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mb-3"
            />
            <span className="font-medium text-gray-800">{user.name}</span>
            {user.isHost && (
              <span className="mt-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Host
              </span>
            )}
          </div>
        ))}
      </div>

      {showGifts && <GiftPanel onClose={() => setShowGifts(false)} />}
    </div>
  );
};