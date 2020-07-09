class Social {
  constructor({ name, url, iconID }) {
    this.name = name
    this.url = url
    this.iconID = iconID
  }
}

export default {
  appName: 'Campeões do Século 21',
  appDescription: 'Clubes brasileiros que ganharam títulos importantes no século 21',
  socials: [
    new Social({
      name: 'GitHub',
      url: 'https://github.com/ricardospalves',
      iconID: '#icon-github'
    }),
    new Social({
      name: 'CodePen',
      url: 'https://codepen.io/ricardospalves',
      iconID: '#icon-codepen'
    })
  ]
}
