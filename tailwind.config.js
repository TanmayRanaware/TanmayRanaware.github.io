/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210 20% 98%)',
        foreground: 'hsl(224 71% 4%)',
        card: 'hsl(0 0% 100%)',
        muted: 'hsl(210 16% 93%)',
        border: 'hsl(210 16% 90%)',
        // Dark theme counterparts
        darkbg: 'hsl(222 84% 4%)',
        darkfg: 'hsl(0 0% 98%)',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
