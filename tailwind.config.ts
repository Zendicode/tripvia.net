import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-alt': 'rgb(var(--bg-alt) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-muted': 'rgb(var(--ink-muted) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          tint: 'rgb(var(--primary-tint) / <alpha-value>)',
        },
        forest: 'rgb(var(--forest) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(16 24 20 / 0.04), 0 8px 24px rgb(16 24 20 / 0.06)',
        lift: '0 2px 4px rgb(16 24 20 / 0.05), 0 18px 44px rgb(16 24 20 / 0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
