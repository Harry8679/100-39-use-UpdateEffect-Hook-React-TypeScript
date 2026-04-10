import { useState } from 'react';
import { useUpdateEffect } from '../hooks';

export const BasicUpdateEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  useUpdateEffect(() => {
    setUpdateCount((c) => c + 1);
  }, [count]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        UpdateEffect Basique
      </h3>

      <div className="space-y-6">
        {/* Counter Display */}
        <div className="p-8 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl text-center">
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {count}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Valeur du compteur
          </div>
        </div>

        {/* Update Count */}
        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-green-700 dark:text-green-400">
              Nombre de mises à jour :
            </span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-300">
              {updateCount}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setCount(count - 1)}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
          >
            - 1
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
          >
            + 1
          </button>
        </div>

        {/* Info */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 useUpdateEffect ne s'exécute PAS au premier render, seulement lors des mises à jour !
          </p>
        </div>
      </div>
    </div>
  );
};