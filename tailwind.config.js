/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dove-gray': {
          '50': '#f6f5f5',
          '100': '#e7e6e6',
          '200': '#d1d0d0',
          '300': '#b1afaf',
          '400': '#898787',
          '500': '#6f6d6d',
          '600': '#5e5c5c',
          '700': '#504f4e',
          '800': '#454545',
          '900': '#3d3c3c',
          '950': '#262626',
        },
      },
    },
  },
  plugins: [],
}

