const SiteMap = require('sitemap-webpack-plugin').default

class Path {
  constructor({ path, priority = '1' }) {
    this.path = path
    this.lastmod = new Date().toISOString().replace(/\..+/, ''),
    this.priority = priority
  }
}

const paths = [
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/sobre/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/palmeiras/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/atletico-mg/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/sao-paulo/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/flamengo/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/santos/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/fluminense/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/paysandu/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/internacional/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/paulista/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/corinthians/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/vasco/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/gremio/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/santo-andre/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/sport/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/athletico-pr/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/chapecoense/'
  }),
  new Path({
    path: 'https://campeoesdoseculo21.netlify.app/cruzeiro/'
  })
]

module.exports = {
  pwa: {
    name: 'Campeões do Século 21',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      start_url: 'https://campeoes-do-seculo-21.netlify.app'
    },
    workboxOptions: {
      exclude: [
        '_redirects'
      ]
    }
  },
  configureWebpack: {
    plugins: [
      new SiteMap('https://mywebsite.com', paths, {
        filename: 'sitemap.xml',
        lastmod: true,
        priority: '1'
      })
    ]
  }
}
