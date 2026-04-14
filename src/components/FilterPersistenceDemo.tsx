import { useState, useEffect } from 'react';
import { useUpdateEffect } from '../hooks';
import type { Product, Filter } from '../types';

export const FilterPersistenceDemo = () => {
  const [filter, setFilter] = useState<Filter>({
    category: 'all',
    minPrice: 0,
    maxPrice: 1000,
    inStockOnly: false,
  });
  const [saveCount, setSaveCount] = useState(0);

  const products: Product[] = [
    { id: '1', name: 'iPhone 15', category: 'Electronics', price: 999, inStock: true },
    { id: '2', name: 'MacBook Pro', category: 'Electronics', price: 2499, inStock: true },
    { id: '3', name: 'AirPods', category: 'Electronics', price: 249, inStock: false },
    { id: '4', name: 'T-Shirt', category: 'Clothing', price: 29, inStock: true },
    { id: '5', name: 'Jeans', category: 'Clothing', price: 79, inStock: true },
    { id: '6', name: 'Sneakers', category: 'Clothing', price: 129, inStock: false },
  ];

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('product-filter');
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilter(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage only on updates (not on initial load)
  useUpdateEffect(() => {
    localStorage.setItem('product-filter', JSON.stringify(filter));
    setSaveCount((c) => c + 1);
  }, [filter]);

  const filteredProducts = products.filter((product) => {
    if (filter.category !== 'all' && product.category !== filter.category) return false;
    if (product.price < filter.minPrice || product.price > filter.maxPrice) return false;
    if (filter.inStockOnly && !product.inStock) return false;
    return true;
  });

  const handleReset = () => {
    setFilter({
      category: 'all',
      minPrice: 0,
      maxPrice: 1000,
      inStockOnly: false,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Filtres Persistants
      </h3>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Catégorie
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['all', 'Electronics', 'Clothing'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter({ ...filter, category })}
                className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                  filter.category === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category === 'all' ? 'Tout' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Prix : ${filter.minPrice} - ${filter.maxPrice}
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1000"
              value={filter.minPrice}
              onChange={(e) => setFilter({ ...filter, minPrice: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={filter.maxPrice}
              onChange={(e) => setFilter({ ...filter, maxPrice: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>

        {/* In Stock Only */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-semibold text-gray-800 dark:text-white">
                En stock uniquement
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Masquer les produits indisponibles
              </div>
            </div>
          </div>
          <button
            onClick={() => setFilter({ ...filter, inStockOnly: !filter.inStockOnly })}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              filter.inStockOnly ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                filter.inStockOnly ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-800 dark:text-white">
              Produits ({filteredProducts.length})
            </h4>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              🔄 Reset
            </button>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {product.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {product.category}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600 dark:text-blue-400">
                    ${product.price}
                  </div>
                  <div className={`text-xs ${
                    product.inStock
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {product.inStock ? '✅ En stock' : '❌ Rupture'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Count */}
        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              Sauvegardes effectuées :
            </span>
            <span className="text-xl font-bold text-green-600 dark:text-green-300">
              {saveCount}
            </span>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Pas de sauvegarde au chargement ! Seulement quand vous changez les filtres.
          </p>
        </div>
      </div>
    </div>
  );
};