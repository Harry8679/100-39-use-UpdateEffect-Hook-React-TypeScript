import BasicUpdateEffectDemo from './BasicUpdateEffectDemo';
import CounterNotificationDemo from './CounterNotificationDemo';
import SearchDebounceDemo from './SearchDebounceDemo';
import FormValidationDemo from './FormValidationDemo';
import FilterPersistenceDemo from './FilterPersistenceDemo';
import ApiPollingDemo from './ApiPollingDemo';
import ComparisonDemo from './ComparisonDemo';

export const UpdateEffectDemo = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🔄 useUpdateEffect Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 39/100 • Update-Only Effects
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Exécuter des effets uniquement lors des mises à jour, pas au premier render
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicUpdateEffectDemo />
            <CounterNotificationDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <SearchDebounceDemo />
            <FormValidationDemo />
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <FilterPersistenceDemo />
            <ApiPollingDemo />
          </div>

          {/* Row 4 */}
          <ComparisonDemo />

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Skip First Render</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ignore le premier rendu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Update Only</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Uniquement sur update
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Conditional</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Effets conditionnels
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dependencies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dépendances trackées
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Notifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Alertes sur update
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">API Calls</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Appels conditionnels
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Validation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Validation sur saisie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useUpdateEffect } from './hooks';

const [count, setCount] = useState(0);

// Ne s'exécute PAS au premier render
useUpdateEffect(() => {
  console.log('Count mis à jour:', count);
}, [count]);

// Équivalent à :
const isFirstRender = useRef(true);
useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  console.log('Count mis à jour:', count);
}, [count]);`}
                </pre>
              </div>

              {/* Notifications */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Notifications sur update :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [value, setValue] = useState('');
const [notification, setNotification] = useState<string | null>(null);

useUpdateEffect(() => {
  setNotification(\`Valeur mise à jour : \${value}\`);
  
  const timer = setTimeout(() => {
    setNotification(null);
  }, 2000);
  
  return () => clearTimeout(timer);
}, [value]);

// Pas de notification au chargement !
// Seulement quand l'utilisateur change la valeur`}
                </pre>
              </div>

              {/* API Calls */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Appels API conditionnels :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 500);

useUpdateEffect(() => {
  if (debouncedSearch) {
    // Pas d'appel API au chargement initial !
    fetchResults(debouncedSearch).then(setResults);
  }
}, [debouncedSearch]);`}
                </pre>
              </div>

              {/* Form Validation */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Validation formulaire :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [email, setEmail] = useState('');
const [errors, setErrors] = useState({});

useUpdateEffect(() => {
  // Pas de validation au chargement !
  // Seulement après la saisie utilisateur
  const emailError = validateEmail(email);
  setErrors({ ...errors, email: emailError });
}, [email]);`}
                </pre>
              </div>

              {/* Persistence */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Persistence sélective :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [filters, setFilters] = useState(defaultFilters);

// Charger depuis localStorage au mount
useEffect(() => {
  const saved = localStorage.getItem('filters');
  if (saved) setFilters(JSON.parse(saved));
}, []);

// Sauvegarder UNIQUEMENT sur les updates
// (pas au chargement initial)
useUpdateEffect(() => {
  localStorage.setItem('filters', JSON.stringify(filters));
}, [filters]);`}
                </pre>
              </div>

              {/* Polling */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Polling conditionnel :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isPolling, setIsPolling] = useState(false);

useUpdateEffect(() => {
  if (!isPolling) return;
  
  // Pas de polling au chargement !
  // Seulement quand l'utilisateur active le polling
  const interval = setInterval(() => {
    fetchData();
  }, 5000);
  
  return () => clearInterval(interval);
}, [isPolling]);`}
                </pre>
              </div>

              {/* Analytics */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Analytics tracking :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [currentPage, setCurrentPage] = useState(1);

useUpdateEffect(() => {
  // Ne pas tracker le premier render (page load)
  // Seulement les changements de page
  analytics.track('page_change', {
    page: currentPage,
    timestamp: Date.now(),
  });
}, [currentPage]);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🔔</span> Notifications
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Toasts sur changement</li>
                  <li>• Alertes de mise à jour</li>
                  <li>• Messages de confirmation</li>
                  <li>• Feedback utilisateur</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🌐</span> API Calls
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Recherche sans appel initial</li>
                  <li>• Polling conditionnel</li>
                  <li>• Synchro sur changement</li>
                  <li>• Fetch après interaction</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>✅</span> Validation
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Formulaires après saisie</li>
                  <li>• Validation temps réel</li>
                  <li>• Erreurs conditionnelles</li>
                  <li>• Feedback instantané</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>💾</span> Persistence
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Sauvegarde sélective</li>
                  <li>• Sync après modification</li>
                  <li>• Éviter double-save</li>
                  <li>• Auto-save optimisé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};