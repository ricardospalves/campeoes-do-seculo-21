const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  'plugins': [
    tailwindcss('tailwind.js'),
    require('autoprefixer')(),
    //Only add purgecss in production
    process.env.NODE_ENV === 'production' ? purgecss({
      content: [
        './src/**/*.vue',
        './src/**/*.js'
      ],
      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }) : ''
  ]
}
