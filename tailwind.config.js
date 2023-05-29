/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-black': '#0b1013',
        'top-animation-base': '#D9845D',
        'top-animation-sub': '#DEAD5E',
        'top-animation-hat': '#F0F09E',
        'top-animation-foot': '#0849A3',
        'top-animation-water': '#2BE3FA',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '50ch' },
        },
        blink: {
          to: { 'border-color': 'transparent' },
        },
        'top-surface': {
          '0%': { 'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { 'border-radius': '65% 35% 51% 49% / 49% 52% 48% 51%' },
          '50%': { 'border-radius': '42% 58% 28% 72% / 65% 34% 66% 35%' },
          '75%': { 'border-radius': '34% 66% 63% 37% / 77% 38% 62% 23%' },
          '100%': { 'border-radius': '24% 76% 72% 28% / 53% 68% 32% 47%' },
        },
        'top-rotate-z': {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
      },
      animation: {
        typing:
          'typing steps(20, end) 1s both, blink 1s 5 forwards ease-in-out',
        'top-surface':
          'top-surface 13s ease-in-out infinite alternate, top-rotate-z 20s linear infinite',
      },
    },
  },
  plugins: [],
};
