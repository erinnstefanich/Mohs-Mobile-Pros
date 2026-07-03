/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2E59',
          orange: '#F47A20',
          light: '#FFFFFF',
          gray: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif']
      }
    }
  },
  plugins: []
}
