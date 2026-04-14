import { useState } from 'react';
import { useUpdateEffect } from '../hooks';

export const CounterNotificationDemo = () => {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);

  useUpdateEffect(() => {
    setNotification(`Compteur mis à jour : ${count}`);
    
    const timer = setTimeout(() => {
      setNotification(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Notifications sur Update
      </h3>

      <div className="space-y-6">
        {/* Counter */}
        <div className="p-12 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl text-center">
          <div className="text-7xl font-bold text-purple-600 dark:text-purple-400">
            {count}
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <div className="p-4 bg-green-500 text-white rounded-lg shadow-lg animate-scale-in">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <span className="font-semibold">{notification}</span>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => setCount(count - 10)}
            className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
          >
            -10
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
          >
            -1
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
          >
            +1
          </button>
          <button
            onClick={() => setCount(count + 10)}
            className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            +10
          </button>
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            💡 Aucune notification au chargement, seulement après les clics !
          </p>
        </div>
      </div>
    </div>
  );
};