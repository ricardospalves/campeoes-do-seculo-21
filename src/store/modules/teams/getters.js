export default {
  getTeamById: state => id => {
    return state.teams
      .find(team => team.id === id)
  },
  randomTeams(state) {
    return state.teams
      .sort(() => Math.random() - Math.random())
  },
  mostRecentChampion: state => key => {
    return state.teams
      .map(team => {
        const { id, crest, name, shortname } = team

        return {
          id,
          crest,
          name,
          shortname,
          competition: {
            name: team.honours[key].name,
            shortname: team.honours[key].shortname,
            year: Math.max(...team.honours[key].years)
          }
        }
      })
      .reduce((previous, current) => {
        const previousChampionYear = previous.competition.year
        const currentChampionYear = current.competition.year
        const isPreviousMostRecent = previousChampionYear > currentChampionYear

        return isPreviousMostRecent ? previous : current
      })
  }
}
