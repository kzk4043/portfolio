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
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '50ch' },
        },
        blink: {
          to: { 'border-color': 'transparent' },
        },
      },
      animation: {
        typing:
          'typing steps(20, end) 1s both, blink 1s 5 forwards ease-in-out',
      },
    },
  },
  plugins: [],
};
