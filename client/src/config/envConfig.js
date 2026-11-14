/**
 * Validated Client Environment Configuration
 * Provides safe fallbacks and diagnostic warnings for runtime environment variables.
 */

export const envConfig = {
  apiUrl: (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/+$/, ''),
  isMockMode: import.meta.env.VITE_USE_MOCK === 'true',
  isProduction: import.meta.env.PROD,
  isDev: import.meta.env.DEV,
};

if (typeof window !== 'undefined' && envConfig.isDev) {
  // eslint-disable-next-line no-console
  console.info('[Samajh Client] Environment Configuration:', {
    apiUrl: envConfig.apiUrl,
    isMockMode: envConfig.isMockMode,
    mode: import.meta.env.MODE,
  });
}
