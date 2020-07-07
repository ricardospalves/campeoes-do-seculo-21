module.exports = {
  pwa: {
    name: 'Campeões do Século 21',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      start_url: 'https://campeoesdoseculo21.netlify.app'
    },
    workboxOptions: {
      exclude: [
        '_redirects'
      ]
    }
  }
}
