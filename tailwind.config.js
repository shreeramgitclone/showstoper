/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#ed1c24',
            dark: '#4834D4',
            light: '#7C4DFF'
          },
          secondary: {
            DEFAULT: '#2D3748',
            light: '#4A5568'
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'hero-pattern': 'linear-gradient(to right, rgba(95, 39, 205, 0.9), rgba(72, 52, 212, 0.9))'
        }
      },
    },
    plugins: [],
  }