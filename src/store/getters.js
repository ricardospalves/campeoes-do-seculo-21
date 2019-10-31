export default {
  getTeamById: (state) => (id) => {
    return state.teams
      .find(team => team.id === id)
  },
  randomTeams(state) {
    return state.teams
      .sort(() => Math.random() - Math.random())
  },
  latestCompetitionChampion: state => key => {
    return state.teams
      .filter(team => team.honours[key].length)
      .reduce((accumulator, current) => {
        const accumulatorMostRecent = Math.max(...accumulator.honours[key])
        const currentMostRecent = Math.max(...current.honours[key])
        const boolean = accumulatorMostRecent > currentMostRecent

        return boolean ? accumulator : current
      })
  }
}
