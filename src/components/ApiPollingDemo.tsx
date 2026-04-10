import { useState } from 'react';
import { useUpdateEffect } from '../hooks';

export const ApiPollingDemo = () => {
  const [isPolling, setIsPolling] = useState(false);
  const [pollInterval, setPollInterval] = useState(2000);
  const [data, setData] = useState<number[]>([]);
  const [apiCallCount, setApiCallCount] = useState(0);

  const fetchData = () => {
    setApiCallCount((c) => c + 1);
    const newValue = Math.floor(Math.random() * 100);
    setData((prev) => [...prev.slice(-9), newValue]);
  };

  useUpdateEffect(() => {
    if (!isPolling) return;

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, pollInterval);

    return () => clearInterval(interval);
  }, [isPolling, pollInterval]);

  const average = data.length > 0
    ? (data.reduce((sum, val) => sum + val, 0) / data.length).toFixed(1)
    : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        API Polling Conditionnel
      </h3>

      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-sm text-blue-700 dark:text-blue-400 mb-1">
              Appels API
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">
              {apiCallCount}
            </div>
          </div>

          <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center">
            <div className="text-sm text-green-700 dark:text-green-400 mb-1">
              Données
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-300">
              {data.length}
            </div>
          </div>

          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-sm text-purple-700 dark:text-purple-400 mb-1">
              Moyenne
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">
              {average}
            </div>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="h-32 flex items-end justify-around gap-1">
            {data.length > 0 ? (
              data.map((value, index) => (
                <div
                  key={index}
                  className="flex-1 bg-linear-to-t from-blue-500 to-purple-500 rounded-t transition-all duration-300"
                  style={{ height: `${value}%` }}
                  title={`Valeur: ${value}`}
                />
              ))
            ) : (
              <div className="flex-1 text-center text-gray-400 dark:text-gray-500">
                Aucune donnée
              </div>
            )}
          </div>
        </div>

        {/* Poll Interval */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Intervalle de polling : {pollInterval / 1000}s
          </label>
          <input
            type="range"
            min="1000"
            max="5000"
            step="1000"
            value={pollInterval}
            onChange={(e) => setPollInterval(parseInt(e.target.value))}
            disabled={isPolling}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setIsPolling(!isPolling)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              isPolling
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isPolling ? '⏸ Arrêter' : '▶ Démarrer'} le polling
          </button>
          <button
            onClick={() => setData([])}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            🗑️ Effacer les données
          </button>
        </div>

        {/* Status */}
        <div className={`p-4 rounded-lg ${
          isPolling
            ? 'bg-green-100 dark:bg-green-900/20'
            : 'bg-gray-100 dark:bg-gray-700/20'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`font-semibold ${
              isPolling
                ? 'text-green-700 dark:text-green-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              État du polling :
            </span>
            <span className={`px-4 py-2 rounded-full font-bold ${
              isPolling
                ? 'bg-green-500 text-white animate-pulse'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}>
              {isPolling ? 'Actif' : 'Inactif'}
            </span>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Pas d'appel API au chargement ! Seulement quand vous démarrez le polling.
          </p>
        </div>
      </div>
    </div>
  );
};