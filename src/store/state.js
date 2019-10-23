class Team {
  constructor({ id, name, shortname, honours: { mundial = [], libertadores = [], sulAmericana = [], recopa = [], suruga = [], brasileirao = [], copaDoBrasil = [], copaDosCampeoes = [] } }) {
    this.id = id
    this.name = name
    this.shortname = shortname
    this.honours = {
      mundial,
      libertadores,
      sulAmericana,
      recopa,
      suruga,
      brasileirao,
      copaDoBrasil,
      copaDosCampeoes
    }
  }
}

export default {
  teams: [
    new Team({
      id: 'internacional',
      name: 'Sport Club Internacional',
      shortname: 'Internacional',
      honours: {
        mundial: [2006],
        libertadores: [2006, 2010],
        sulAmericana: [2008],
        recopa: [2007, 2011],
        suruga: [2009]
      }
    }),
    new Team({
      id: 'sao-paulo',
      name: 'São Paulo Futebol Clube',
      shortname: 'São Paulo',
      honours: {
        mundial: [2005],
        libertadores: [2005],
        sulAmericana: [2012],
        brasileirao: [2006, 2007, 2008]
      }
    }),
    new Team({
      id: 'corinthians',
      name: 'Sport Club Corinthians Paulista',
      shortname: 'Corinthians',
      honours: {
        mundial: [2012],
        libertadores: [2012],
        recopa: [2013],
        brasileirao: [2005, 2011, 2015, 2017],
        copaDoBrasil: [2002, 2009]
      }
    }),
    new Team({
      id: 'santos',
      name: 'Santos Futebol Clube',
      shortname: 'Santos',
      honours: {
        libertadores: [2011],
        recopa: [2012],
        brasileirao: [2002, 2004],
        copaDoBrasil: [2010]
      }
    }),
    new Team({
      id: 'atletico-mg',
      name: 'Clube Atlético Mineiro',
      shortname: 'Atlético',
      honours: {
        libertadores: [2013],
        recopa: [2014],
        copaDoBrasil: [2014]
      }
    }),
    new Team({
      id: 'gremio',
      name: 'Grêmio Foot-Ball Porto Alegrense',
      shortname: 'Grêmio',
      honours: {
        libertadores: [2017],
        recopa: [2018],
        copaDoBrasil: [2001, 2016]
      }
    }),
    new Team({
      id: 'athletico',
      name: 'Club Athletico Paranaense',
      shortname: 'Athletico',
      honours: {
        sulAmericana: [2018],
        suruga: [2019],
        brasileirao: [2001],
        copaDoBrasil: [2019]
      }
    }),
    new Team({
      id: 'chapecoense',
      name: 'Associação Chapecoense de Futebol',
      shortname: 'Chapecoense',
      honours: {
        sulAmericana: [2016]
      }
    }),
    new Team({
      id: 'cruzeiro',
      name: 'Cruzeiro Esporte Clube',
      shortname: 'Cruzeiro',
      honours: {
        brasileirao: [2003, 2013, 2014],
        copaDoBrasil: [2003, 2017, 2018]
      }
    }),
    new Team({
      id: 'palmeiras',
      name: 'Sociedade Esportiva Palmeiras',
      shortname: 'Palmeiras',
      honours: {
        brasileirao: [2016, 2018],
        copaDoBrasil: [2012, 2015]
      }
    }),
    new Team({
      id: 'fluminense',
      name: 'Fluminense Football Club',
      shortname: 'Fluminense',
      honours: {
        brasileirao: [2010, 2012],
        copaDoBrasil: [2007]
      }
    }),
    new Team({
      id: 'flamengo',
      name: 'Clube de Regatas do Flamengo',
      shortname: 'Flamengo',
      honours: {
        brasileirao: [2009],
        copaDoBrasil: [2006, 2013],
        copaDosCampeoes: [2001]
      }
    }),
    new Team({
      id: 'vasco',
      name: 'Club de Regatas Vasco da Gama',
      shortname: 'Vasco',
      honours: {
        copaDoBrasil: [2011]
      }
    }),
    new Team({
      id: 'sport',
      name: 'Sport Club do Recife',
      shortname: 'Sport',
      honours: {
        copaDoBrasil: [2008]
      }
    }),
    new Team({
      id: 'paulista',
      name: 'Paulista Futebol Clube',
      shortname: 'Paulista',
      honours: {
        copaDoBrasil: [2005]
      }
    }),
    new Team({
      id: 'santo-andre',
      name: 'Esporte Clube Santo André',
      shortname: 'Santo André',
      honours: {
        copaDoBrasil: [2004]
      }
    }),
    new Team({
      id: 'paysandu',
      name: 'Paysandu Sport Club',
      shortname: 'Paysandu',
      honours: {
        copaDosCampeoes: [2002]
      }
    })
  ]
}
