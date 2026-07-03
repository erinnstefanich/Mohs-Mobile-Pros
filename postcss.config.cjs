const getTailwindPlugin = () => {
  try {
    const pkg = require('tailwindcss/package.json')
    const version = pkg && pkg.version
    if (version && version.startsWith('4')) {
      // Tailwind v4 uses the @tailwindcss/postcss adapter
      return require('@tailwindcss/postcss')
    }
  } catch (e) {
    // fallthrough to v3 usage
  }

  // Default: Tailwind v3 style plugin
  return require('tailwindcss')
}

module.exports = {
  plugins: [
    getTailwindPlugin(),
    require('autoprefixer')
  ]
}
