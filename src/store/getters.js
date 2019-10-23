export default {
  getTeamById: (state) => (id) => {
    return state.teams
      .find(team => team.id === id)
  }
}
