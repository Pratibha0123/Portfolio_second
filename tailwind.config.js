/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#037b7', // you had this already
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // fixed extra space issue
          sm: "3rem",
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(59,130,246,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(59,130,246,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
