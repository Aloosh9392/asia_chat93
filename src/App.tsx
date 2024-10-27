import React from 'react';
import { Header } from './components/Header';
import { VoiceRoom } from './components/VoiceRoom';
import { useStore } from './store/useStore';

// Mock room data
const mockRoom = {
  id: '1',
  name: '🎤 Karaoke Night',
  host: {
    id: '2',
    name: 'Sarah Host',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    coins: 5000,
    isHost: true,
  },
  participants: [
    {
      id: '3',
      name: 'Mike Singer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      coins: 800,
      isHost: false,
    },
    {
      id: '4',
      name: 'Emma Joy',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      coins: 1200,
      isHost: false,
    },
  ],
  isLive: true,
};

function App() {
  const { setCurrentRoom } = useStore();

  React.useEffect(() => {
    setCurrentRoom(mockRoom);
  }, [setCurrentRoom]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <VoiceRoom />
      </main>
    </div>
  );
}

export default App;