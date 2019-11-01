export default {
  getTeamById: (state) => (id) => {
    return state.teams
      .find(team => team.id === id)
  },
  randomTeams(state) {
    return state.teams
      .sort(() => Math.random() - Math.random())
  }
}
