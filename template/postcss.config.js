module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'last 5 versions',
        'Android >= 4.2',
        'iOS > 8',
        'safari > 8',
        'ie >= 10'
      ]
    })
  ]
}
