/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      lg: { max: '1023px' },
    },
    extend: {
      colors: {
        'text-black': '#0b1013',
        'text-main': '#125E8A',
        'text-main-80': '#125E8A80',
        'text-main-20': '#125E8A20',
        ok: '#32B28c',
        no: '#E9546B',
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
        'typing-en': {
          from: { width: '0' },
          to: { width: '40ch' },
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
        'top-oar-graphic': {
          '0%': { transform: 'rotateY(-60deg)' },
          '100%': { transform: 'rotateY(-110deg)' },
        },
        'top-row': {
          '0%': { transform: 'rotateZ(20deg)' },
          '100%': { transform: 'rotateZ(-50deg)' },
        },
        'top-depth': {
          '0%': { transform: 'rotateX(-20deg)' },
          '100%': { transform: 'rotateX(50deg)' },
        },
        'top-wave': {
          '0%': { transform: 'translateX(0) scale(0)' },
          '10%': { transform: 'translateX(-10px) scale(1)' },
          '100%': { transform: 'translateX(-130px) scale(0)' },
        },
        'top-hat': {
          '0%': {
            transform: 'translateX(-5px) translateZ(30px) rotateY(-20deg)',
          },
          '100%': {
            transform: 'translateX(0) translateZ(30px) rotateY(20deg)',
          },
        },
        'top-ship': {
          '0%': { transform: 'rotateZ(30deg)' },
          '100%': { transform: 'rotateZ(-20deg)' },
        },
        spinner: {
          '100%': { transform: 'rotate(360deg)' },
        },
        'pop-in': {
          from: {
            transform: 'scale(.3)',
            opacity: 0,
          },
          to: {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        hovering: {
          '0%': { top: '75%' },
          '100%': { top: '74%' },
        },
        'wing-flap-l': {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 10% 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 10% 0)' },
        },
        'wing-flap-r': {
          '0%': { clipPath: 'polygon(0 100%, 30% 100%, 100% 100%)' },
          '100%': { clipPath: 'polygon(0 100%, 30% 0, 100% 100%)' },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        typing:
          'typing steps(20, end) 1s both, blink 1s 5 forwards ease-in-out',
        'typing-en':
          'typing-en steps(20, end) 1s both, blink 1s 5 forwards ease-in-out',
        'top-surface':
          'top-surface 13s ease-in-out infinite alternate, top-rotate-z 20s linear infinite',
        'top-surface-wave':
          'top-surface 2s ease-in-out infinite alternate, top-rotate-z 6s linear infinite',
        'top-oar-graphic': 'top-oar-graphic 1s ease-in-out infinite alternate',
        'top-row': 'top-row 1s ease-in-out infinite alternate',
        'top-depth': 'top-depth 1s ease-in-out -0.5s infinite alternate',
        'top-wave': 'top-wave 2s linear infinite',
        'top-hat': 'top-hat 1s ease-in-out infinite alternate',
        'top-ship': 'top-ship 30s linear infinite alternate',
        spinner: 'spinner 1s linear infinite',
        'pop-in': 'pop-in .5s cubic-bezier(.87,-.41,.19,1.44) forwards',
        rotate: 'rotate 100s linear infinite',
        hovering: 'hovering .7s linear infinite alternate',
        'wing-flap-l-1':
          'wing-flap-l .7s cubic-bezier(.1,.48,.81,.73) infinite alternate',
        'wing-flap-l-2':
          'wing-flap-l .6s cubic-bezier(.1,.48,.81,.73) infinite alternate .5s',
        'wing-flap-l-3':
          'wing-flap-l .7s cubic-bezier(.1,.48,.81,.73) infinite alternate .2s',
        'wing-flap-r-1':
          'wing-flap-r .7s cubic-bezier(.1,.48,.81,.73) infinite alternate',
        'wing-flap-r-2':
          'wing-flap-r .6s cubic-bezier(.1,.48,.81,.73) infinite alternate .5s',
        'wing-flap-r-3':
          'wing-flap-r .7s cubic-bezier(.1,.48,.81,.73) infinite alternate .2s',
        'fade-out': 'fade-out 1s cubic-bezier(.1,.48,.81,.73) forwards 1.5s',
        'fade-out-short':
          'fade-out .3s cubic-bezier(.1,.48,.81,.73) forwards .1s',
      },
    },
  },
  plugins: [],
};
