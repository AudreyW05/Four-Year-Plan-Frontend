const TailWindTheme = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
    fontFamily: { Inter: ['Inter', 'sans-serif'] },
    colors: {
      bgBlack: '#000000',
      bgPurple: '#757AEC',
      bgWhite: '#feffff',
      bgGray: '#F3F3F4',
      dulwichRed: '#E33939',
      dulwichRedHover: '#FDECEC',
      bgBlur: 'rgba(255, 255, 255, 0.5)',
      transparent: 'transparent',
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
