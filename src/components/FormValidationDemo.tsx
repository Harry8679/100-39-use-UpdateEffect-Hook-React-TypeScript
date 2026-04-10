import { useState } from 'react';
import { useUpdateEffect } from '../hooks';

export const FormValidationDemo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [validationCount, setValidationCount] = useState(0);

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email requis';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email invalide';
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Mot de passe requis';
    if (password.length < 6) return 'Au moins 6 caractères';
    return undefined;
  };

  useUpdateEffect(() => {
    setValidationCount((c) => c + 1);
    setErrors({
      email: validateEmail(email),
      password: validatePassword(password),
    });
  }, [email, password]);

  const isValid = !errors.email && !errors.password && email && password;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Validation Formulaire
      </h3>

      <div className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 rounded-lg text-gray-800 dark:text-white transition-colors ${
              errors.email
                ? 'border-red-500'
                : email
                ? 'border-green-500'
                : 'border-transparent focus:border-blue-500'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              ❌ {errors.email}
            </p>
          )}
          {!errors.email && email && (
            <p className="mt-2 text-sm text-green-600 dark:text-green-400">
              ✅ Email valide
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 rounded-lg text-gray-800 dark:text-white transition-colors ${
              errors.password
                ? 'border-red-500'
                : password
                ? 'border-green-500'
                : 'border-transparent focus:border-blue-500'
            }`}
            placeholder="••••••"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              ❌ {errors.password}
            </p>
          )}
          {!errors.password && password && (
            <p className="mt-2 text-sm text-green-600 dark:text-green-400">
              ✅ Mot de passe valide
            </p>
          )}
        </div>

        {/* Stats */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Validations effectuées :
            </span>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-300">
              {validationCount}
            </span>
          </div>
        </div>

        {/* Submit */}
        <button
          disabled={!isValid}
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isValid ? '✅ Envoyer' : '❌ Formulaire invalide'}
        </button>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Pas de validation au chargement ! Seulement après la saisie utilisateur.
          </p>
        </div>
      </div>
    </div>
  );
};