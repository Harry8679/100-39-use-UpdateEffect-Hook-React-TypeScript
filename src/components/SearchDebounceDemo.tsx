import { useState } from 'react';
import { useUpdateEffect, useDebounce } from '../hooks';

export const SearchDebounceDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCount, setSearchCount] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const mockSearch = (query: string): string[] => {
    const allItems = [
      'React', 'TypeScript', 'JavaScript', 'Node.js', 'Vue.js',
      'Angular', 'Python', 'Django', 'Flask', 'FastAPI',
      'Next.js', 'Nuxt.js', 'Svelte', 'Solid.js', 'Remix',
    ];
    return allItems.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  useUpdateEffect(() => {
    if (debouncedSearch) {
      setSearchCount((c) => c + 1);
      setResults(mockSearch(debouncedSearch));
    } else {
      setResults([]);
    }
  }, [debouncedSearch]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Recherche avec Debounce
      </h3>

      <div className="space-y-6">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une technologie..."
            className="w-full px-4 py-3 pl-12 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </span>
        </div>

        {/* Search Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-sm text-blue-700 dark:text-blue-400 mb-1">
              Recherches effectuées
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">
              {searchCount}
            </div>
          </div>

          <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center">
            <div className="text-sm text-green-700 dark:text-green-400 mb-1">
              Résultats trouvés
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-300">
              {results.length}
            </div>
          </div>
        </div>

        {/* Results */}
        {searchTerm && (
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">
              Résultats :
            </h4>
            {results.length > 0 ? (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-gray-800 dark:text-white font-semibold">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                Aucun résultat trouvé
              </div>
            )}
          </div>
        )}

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Pas de recherche au chargement ! useUpdateEffect évite l'appel API initial inutile.
          </p>
        </div>
      </div>
    </div>
  );
};