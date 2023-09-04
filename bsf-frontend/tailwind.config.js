/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        100: '#E6E6EF',
        200: '#8787B5',
        300: '#525284',
        400: '#2B2B45',
        500: '#171725',
      },
      accent: {
        50: '#F0F4FF',
        100: '#E0E9FF',
        200: '#ADC4FF',
        300: '#477BFF',
        400: '#1355FF',
        500: '#0030AD',
      },
      secondary: {
        100: '#FFFCE0',
        200: '#FFF7AD',
        300: '#FFED47',
        400: '#E0CB00',
        500: '#7A6E00',
      },
      tertiary: {
        100: '#FFEBE0',
        200: '#FFAA7A',
        300: '#FF6813',
        400: '#AD3E00',
        500: '#471A00',
        600: '#FFF5F0',
      },
      error: {
        100: '#FFEBEB',
        200: '#FFADAD',
        300: '#FF7A7A',
        400: '#FF1414',
        500: '#AD0000',
      },
      success: {
        100: '#EDFDF7',
        200: '#BBF7E1',
        300: '#5FECBA',
        400: '#18CD8C',
        500: '#13A06D',
      },
      grey: {
        50: '#F6F6F8',
        100: '#CDCDD5',
        200: '#9595A7',
        300: '#616175',
        400: '#33333D',
        500: '#1C1C22',
      },
      error: {
        400: '#FF2B37',
        300: '#FF7A7A',
      },
      white: '#ffffff',
      card: '#D7E2FF',
      radio: '#555555',
      transparent: 'tranparent',
      info: {
        100: '#1356FF',
        200: '#E8EFFF',
      },
    },

    fontFamily: {
      primary: ['Work Sans', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        114: '114px',
      },
      width: {
        858: '858px',
      },
      fontSize: {
        '5.5xl': '3.5rem',
        '4.5xl': '2.5rem',
        '3.5xl': '2rem',
      },
      animation: {
        slide: 'slideshow 10s linear infinite',
      },
      keyframes: {
        slideshow: {
          from: { transform: ' translate3d(0, 0, 0)' },
          to: { transform: ' translate3d(-1000px, 0, 0)' },
        },
      },
      boxShadow: {
        bills: '0px 0px 24px 0px rgba(69, 79, 89, 0.08)',
        dashboard: '0px -1px 0px 0px rgba(207, 207, 214, 0.44) inset',
        wallet: '0px 1px 3px 0px rgba(23, 23, 37, 0.05)',
        details: '12px 20px 24px 0px rgba(69, 79, 89, 0.08)',
        select: '0px 0px 0px 1px #CDCDD5',
        option: '0px -1px 0px 0px rgba(207, 207, 214, 0.44) inset',
      },
      padding: {
        18: '76px',
      },
      screens: {
        tablet: '900px',
        xsm: '600px',
      },
    },
  },
  plugins: [],
};
