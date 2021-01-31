function findRegion(state) {
  const regions = {
    norte: ['AM', 'RR', 'AP', 'PA', 'TO', 'RO', 'AC'],
    nordeste: ['MA', 'PI', 'CE', 'RN', 'PE', 'PB', 'SE', 'AL', 'BA'],
    centrooeste: ['MT', 'MS', 'GO'],
    sudeste: ['SP', 'RJ', 'ES', 'MG'],
    sul: ['PR', 'RS', 'SC']
  }

  for (const region in regions) {
    if (regions[region].includes(state)) {
      return region
    }
  }

  return ''
}

class Competition {
  constructor({ name, shortname, years = [] }) {
    this.name = name
    this.shortname = shortname
    this.years = years
  }
}

class Team {
  constructor({ id, crest, name, shortname, state, mundial = [], libertadores = [], sulAmericana = [], recopa = [], jLeagueConmebol = [], brasileirao = [], copaDoBrasil = [], supercopaDoBrasil = [], copaDosCampeoes = [] }) {
    this.id = id
    this.crest = crest
    this.name = name
    this.shortname = shortname
    this.state = state
    this.region = findRegion(this.state)
    this.honours = {
      mundial: new Competition({
        name: 'Copa do Mundo de Clubes da FIFA',
        shortname: 'Mundial de Clubes',
        years: mundial
      }),
      libertadores: new Competition({
        name: 'CONMEBOL Libertadores',
        shortname: 'Libertadores',
        years: libertadores
      }),
      sulAmericana: new Competition({
        name: 'CONMEBOL Sul-Americana',
        shortname: 'Sul-Americana',
        years: sulAmericana
      }),
      recopa: new Competition({
        name: 'CONMEBOL Recopa',
        shortname: 'Recopa',
        years: recopa
      }),
      jLeagueConmebol: new Competition({
        name: 'J.League YBC Levain Cup/CONMEBOL Sudamericana Final',
        shortname: 'J.League/CONMEBOL',
        years: jLeagueConmebol
      }),
      brasileirao: new Competition({
        name: 'Campeonato Brasileiro de Futebol',
        shortname: 'Brasileirão',
        years: brasileirao
      }),
      copaDoBrasil: new Competition({
        name: 'Copa do Brasil de Futebol',
        shortname: 'Copa do Brasil',
        years: copaDoBrasil
      }),
      supercopaDoBrasil: new Competition({
        name: 'Supercopa do Brasil de Futebol',
        shortname: 'Supercopa do Brasil',
        years: supercopaDoBrasil
      }),
      copaDosCampeoes: new Competition({
        name: 'Copa dos Campeões',
        shortname: 'Copa dos Campeões',
        years: copaDosCampeoes
      })
    }
  }
}

export default {
  teams: [
    new Team({
      id: 'chapecoense',
      crest: 'crest-chapecoense',
      name: 'Associação Chapecoense de Futebol',
      shortname: 'Chapecoense',
      state: 'SC',
      sulAmericana: [2016]
    }),
    new Team({
      id: 'athletico-pr',
      crest: 'crest-athletico-pr',
      name: 'Club Athletico Paranaense',
      shortname: 'Athletico - PR',
      state: 'PR',
      sulAmericana: [2018],
      jLeagueConmebol: [2019],
      brasileirao: [2001],
      copaDoBrasil: [2019]
    }),
    new Team({
      id: 'vasco',
      crest: 'crest-vasco',
      name: 'Club de Regatas Vasco da Gama',
      shortname: 'Vasco',
      state: 'RJ',
      copaDoBrasil: [2011]
    }),
    new Team({
      id: 'atletico-mg',
      crest: 'crest-atletico-mg',
      name: 'Clube Atlético Mineiro',
      shortname: 'Atlético - MG',
      state: 'MG',
      libertadores: [2013],
      recopa: [2014],
      copaDoBrasil: [2014]
    }),
    new Team({
      id: 'flamengo',
      crest: 'crest-flamengo',
      name: 'Clube de Regatas do Flamengo',
      shortname: 'Flamengo',
      state: 'RJ',
      libertadores: [2019],
      brasileirao: [2009, 2019],
      recopa: [2020],
      copaDoBrasil: [2006, 2013],
      supercopaDoBrasil: [2020],
      copaDosCampeoes: [2001]
    }),
    new Team({
      id: 'cruzeiro',
      crest: 'crest-cruzeiro',
      name: 'Cruzeiro Esporte Clube',
      shortname: 'Cruzeiro',
      state: 'MG',
      brasileirao: [2003, 2013, 2014],
      copaDoBrasil: [2003, 2017, 2018]
    }),
    new Team({
      id: 'santo-andre',
      crest: 'crest-santo-andre',
      name: 'Esporte Clube Santo André',
      shortname: 'Santo André',
      state: 'SP',
      copaDoBrasil: [2004]
    }),
    new Team({
      id: 'fluminense',
      crest: 'crest-fluminense',
      name: 'Fluminense Football Club',
      shortname: 'Fluminense',
      state: 'RJ',
      brasileirao: [2010, 2012],
      copaDoBrasil: [2007]
    }),
    new Team({
      id: 'gremio',
      crest: 'crest-gremio',
      name: 'Grêmio Foot-Ball Porto Alegrense',
      shortname: 'Grêmio',
      state: 'RS',
      libertadores: [2017],
      recopa: [2018],
      copaDoBrasil: [2001, 2016]
    }),
    new Team({
      id: 'paulista',
      crest: 'crest-paulista',
      name: 'Paulista Futebol Clube',
      shortname: 'Paulista',
      state: 'SP',
      copaDoBrasil: [2005]
    }),
    new Team({
      id: 'paysandu',
      crest: 'crest-paysandu',
      name: 'Paysandu Sport Club',
      shortname: 'Paysandu',
      state: 'PA',
      copaDosCampeoes: [2002]
    }),
    new Team({
      id: 'santos',
      crest: 'crest-santos',
      name: 'Santos Futebol Clube',
      shortname: 'Santos',
      state: 'SP',
      libertadores: [2011],
      recopa: [2012],
      brasileirao: [2002, 2004],
      copaDoBrasil: [2010]
    }),
    new Team({
      id: 'palmeiras',
      crest: 'crest-palmeiras',
      name: 'Sociedade Esportiva Palmeiras',
      shortname: 'Palmeiras',
      state: 'SP',
      libertadores: [2020],
      brasileirao: [2016, 2018],
      copaDoBrasil: [2012, 2015]
    }),
    new Team({
      id: 'corinthians',
      crest: 'crest-corinthians',
      name: 'Sport Club Corinthians Paulista',
      shortname: 'Corinthians',
      state: 'SP',
      mundial: [2012],
      libertadores: [2012],
      recopa: [2013],
      brasileirao: [2005, 2011, 2015, 2017],
      copaDoBrasil: [2002, 2009]
    }),
    new Team({
      id: 'internacional',
      crest: 'crest-internacional',
      name: 'Sport Club Internacional',
      shortname: 'Internacional',
      state: 'RS',
      mundial: [2006],
      libertadores: [2006, 2010],
      sulAmericana: [2008],
      recopa: [2007, 2011],
      jLeagueConmebol: [2009]
    }),
    new Team({
      id: 'sport',
      crest: 'crest-sport',
      name: 'Sport Club do Recife',
      shortname: 'Sport',
      state: 'PE',
      copaDoBrasil: [2008]
    }),
    new Team({
      id: 'sao-paulo',
      crest: 'crest-sao-paulo',
      name: 'São Paulo Futebol Clube',
      shortname: 'São Paulo',
      state: 'SP',
      mundial: [2005],
      libertadores: [2005],
      sulAmericana: [2012],
      brasileirao: [2006, 2007, 2008]
    })
  ]
}
