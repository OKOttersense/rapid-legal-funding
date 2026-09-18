/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c3d66',
          900: '#082f49',
        },
        navy: {
          50: '#eef2f7',
          100: '#d6deea',
          200: '#a9bbd3',
          600: '#1d3a63',
          700: '#132c4f',
          800: '#0b2545',
          900: '#071a33',
        },
        gold: {
          100: '#fff3cc',
          400: '#f6be3a',
          500: '#f2a900',
          600: '#d99500',
        },
        mint: {
          100: '#dff5e8',
          500: '#1b9c5a',
          600: '#157f49',
        },
        paper: '#f7f8fa',
        legal: {
          gold: '#d4af37',
          navy: '#1a2f5a',
          slate: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'system-ui', '-apple-system', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Georgia', '"Times New Roman"', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
      },
    },
  },
  plugins: [],
};
