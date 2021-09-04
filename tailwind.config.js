module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.html.erb',
    './app/**/*.rb',
    './config/initializers/*.rb',
    './app/**/*.js'
  ],
  theme: { },
  variants: {
  },
  plugins: [require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),
            require('@tailwindcss/aspect-ratio'),],
}