const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        blue: {
          700: '#5ce1e6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      sd: '950px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    keyframes: {
      slide: {
        '0%': {
          transform: 'translateY(100px)',
        },
        '100%': {
          transform: 'translateY(0)',
        },
      },
      move: {
        '0%': {
          transform: 'rotate(0deg) translateX(10px) rotate(0deg)',
        },
        '50%': {
          transform: 'rotate(180deg) translateX(10px) rotate(-180deg)',
        },
        '100%': {
          transform: 'rotate(360deg) translateX(10px) rotate(-360deg)',
        },
      },
    },
    animation: {
      slide: 'slide .35s ease-in-out',
      move: 'move 90s linear infinite',
    },
  },
  plugins: [
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },

        '.paragraph': {
          fontFamily: theme('fontFamily.poppins'),
          fontWeight: '400',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '18px',
          lineHeight: '30.8px',
        },

        '.description': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '170%',
          color: 'rgba(255, 255, 255, 0.7)',
        },
      });

      addUtilities({
        '.grey-gradient': {
          background: 'linear-gradient(125.17deg, #272727 0%, #11101d 100%)',
        },

        '.pink__gradient': {
          background: 'linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%)',
          filter: 'blur(900px)',
        },

        '.white__gradient': {
          background: 'rgba(255, 255, 255, 0.6)',
          filter: 'blur(750px)',
        },

        '.blue__gradient': {
          background:
            'linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)',
          filter: 'blur(123px)',
        },
      });
    }),
  ],
};
