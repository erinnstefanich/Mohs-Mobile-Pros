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
          navy: '#0B2345',
          orange: '#D95F6E',
          light: '#FFFFFF',
          gray: '#F6F8FB',
          ink: '#12243A'
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
