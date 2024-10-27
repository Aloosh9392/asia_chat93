import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '../store/useStore';

interface GiftPanelProps {
  onClose: () => void;
}

export const GiftPanel: React.FC<GiftPanelProps> = ({ onClose }) => {
  const { gifts, currentUser, sendGift } = useStore();

  const handleSendGift = (giftId: string) => {
    sendGift(giftId);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white shadow-lg rounded-t-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Send a Gift</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {gifts.map((gift) => (
          <button
            key={gift.id}
            onClick={() => handleSendGift(gift.id)}
            disabled={!currentUser || currentUser.coins < gift.cost}
            className={`flex flex-col items-center p-4 rounded-lg border-2 ${
              currentUser && currentUser.coins >= gift.cost
                ? 'border-purple-200 hover:border-purple-400 bg-purple-50'
                : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
            }`}
          >
            <span className="text-4xl mb-2">{gift.icon}</span>
            <span className="font-medium text-gray-800">{gift.name}</span>
            <span className="text-sm text-gray-600">{gift.cost} coins</span>
          </button>
        ))}
      </div>
    </div>
  );
};