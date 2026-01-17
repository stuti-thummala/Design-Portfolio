/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#061A2B',
          800: '#0B2540'
        },
        offwhite: '#F7F7F2'
      },
      borderRadius: {
        'xl-2': '1rem',
        'xl-3': '1.5rem'
      }
    }
  },
  plugins: []
};
