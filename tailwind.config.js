/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      fontFamily: {
         primary: ['LineSeed', 'sans-serif'],
      },
      screens: {
         xs: '360px',
         sm: '480px',
         md: '768px',
         lg: '976px',
         xl: '1440px',
      },
      extend: {
         transitionTimingFunction: {
            'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
            'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            bounce: 'cubic-bezier(.75,-0.87,.19,1.83)',
         },
         zIndex: {
            dropdown: 50,
            navbar: 100,
            sidebar: 102,
            mainlocation: 20,
            'sidebar-overlay': 101,
         },
         spacing: {
            navbar: '70px',
         },
         textColor: {
            DEFAULT: '#383838',
            light: '#3838386b',
            lighter: '#0000001a',
         },
         boxShadow: {
            input: '0px 8px 20px rgb(0 0 0 / 6%)',
            card: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
            test: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
         },
         colors: {
            error: '#EF4444',
            text: {
               darkest: '#000',
               darker: '#100000',
               dark: '#202020',
               DEFAULT: '#383838',
               light: '#8a8a8a',
               lighter: '#D9D9D9',
               lightest: '#D1D0D010',
            },
            paper: {
               DEFAULT: '#fff',
               neutral: '#fff',
            },
            primary: {
               darkest: '#000',
               darker: '#100000',
               dark: '#0077ba',
               DEFAULT: '#0195e9',
               light: '#66bff1',
               lighter: '#FFDCB2',
            },
            secondary: {
               darkest: '#000',
               darker: '#100000',
               dark: '#202020',
               DEFAULT: '#404040',
               light: '#606060',
               lighter: '#707070',
            },
         },
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
};
