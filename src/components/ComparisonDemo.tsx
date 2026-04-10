import { useState, useEffect } from 'react';
import { useUpdateEffect } from '../hooks';

export const ComparisonDemo = () => {
  const [count, setCount] = useState(0);
  const [useEffectCalls, setUseEffectCalls] = useState(0);
  const [useUpdateEffectCalls, setUseUpdateEffectCalls] = useState(0);

  // useEffect s'exécute à chaque render (y compris le premier)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUseEffectCalls((c) => c + 1);
  }, [count]);

  // useUpdateEffect s'exécute uniquement sur les updates (pas le premier render)
  useUpdateEffect(() => {
    setUseUpdateEffectCalls((c) => c + 1);
  }, [count]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Comparaison useEffect vs useUpdateEffect
      </h3>

      <div className="space-y-6">
        {/* Counter */}
        <div className="p-8 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl text-center">
          <div className="text-6xl font-bold text-orange-600 dark:text-orange-400 mb-4">
            {count}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Compteur
          </div>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-blue-100 dark:bg-blue-900/20 rounded-xl text-center">
            <div className="text-sm text-blue-700 dark:text-blue-400 mb-2">
              useEffect
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-2">
              {useEffectCalls}
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">
              (inclut le 1er render)
            </div>
          </div>

          <div className="p-6 bg-green-100 dark:bg-green-900/20 rounded-xl text-center">
            <div className="text-sm text-green-700 dark:text-green-400 mb-2">
              useUpdateEffect
            </div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-300 mb-2">
              {useUpdateEffectCalls}
            </div>
            <div className="text-xs text-green-600 dark:text-green-500">
              (skip le 1er render)
            </div>
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
        <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl">
          <h4 className="font-bold text-gray-800 dark:text-white mb-4">
            Différences clés :
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">useEffect:</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                S'exécute au premier render ET à chaque mise à jour
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold">useUpdateEffect:</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                Skip le premier render, s'exécute uniquement sur les mises à jour
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            💡 Observez la différence : useEffect = {useEffectCalls}, useUpdateEffect = {useUpdateEffectCalls}
          </p>
        </div>
      </div>
    </div>
  );
};