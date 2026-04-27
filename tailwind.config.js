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
          DEFAULT: '#0F172A', // Deep Navy/Charcoal
          light: '#1E293B',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#F59E0B', // Warm Brand Orange from Logo
          light: '#FBBF24',
          dark: '#D97706',
          vibrant: '#F29100', // Specific Logo Orange
        },
        surface: {
          DEFAULT: '#FFFFFF',
          off: '#F8FAFC',
          dark: '#0F172A',
        },
        brand: {
          orange: '#F29100',
          charcoal: '#333333',
          gold: '#C4BCAD',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      }
    },
  },
  plugins: [],
}