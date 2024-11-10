const TailWindTheme = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
    fontFamily: { Inter: ['Inter', 'sans-serif'] },
    colors: {
      bgBlack: '#000000',
      bgWhite: '#feffff',
      bgGray: '#F3F3F4',
      textGray: '#404040',
      uclaBlue: '#2D68C4',
      uclaLightBlue: '#DAEBFE',
      bgBlur: 'rgba(255, 255, 255, 0.5)',
      transparent: 'transparent',
      bgTrash: '#f87171',
    },
    fontSize: {
      sm: 12,
      md: 14,
      lg: 19,
      xl: 20,
      xxl: 24,
      '3xl': 30,
    },
  },
  plugins: [],
};

module.exports = TailWindTheme;
