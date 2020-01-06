module.exports = {
  pwa: {
    name: 'Campeões do Século 21',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      start_url: 'https://campeoes-do-seculo-21.netlify.com'
    },
    workboxOptions: {
      exclude: [
        '_redirects'
      ]
    }
  }
}
