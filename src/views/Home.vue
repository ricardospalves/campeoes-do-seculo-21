<template>
  <div>
    <Team
      v-for="team in randomTeams"
      :key="team.id"
      :id="team.id"
      :crest="team.crest"
    />
  </div>
</template>

<script>
import Team from '../components/Team'
import { mapGetters } from 'vuex'

export default {
  components: {
    Team
  },
  computed: {
    ...mapGetters([
      'randomTeams',
      'mostRecentChampion'
    ]),
    mostRecentChampions() {
      const mostRecentChampion = key => this.mostRecentChampion(key)
      return [
        mostRecentChampion('mundial'),
        mostRecentChampion('libertadores'),
        mostRecentChampion('sulAmericana'),
        mostRecentChampion('recopa'),
        mostRecentChampion('jLeagueConmebol'),
        mostRecentChampion('brasileirao'),
        mostRecentChampion('copaDoBrasil'),
        mostRecentChampion('copaDosCampeoes')
      ]
    }
  }
}
</script>
