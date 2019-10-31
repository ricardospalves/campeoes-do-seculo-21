<template>
  <div>
    <div
      v-for="champion in latestChampions"
      :key="champion.competition"
    >
      <h2>
        {{ champion.competition }}
      </h2>

      <p>
        {{ champion.team.name }}
      </p>
    </div>

    <ul>
      <li
        v-for="team in randomTeams"
        :key="team.id"
      >
        <router-link
          :to="{
            name: 'team',
            params: {
              id: team.id
            }
          }"
        >
          <Crest class="crest" :use="team.crest"/>

          {{ team.shortname }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .crest {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
  }
</style>

<script>
import Crest from '../components/Crest'
import { mapGetters } from 'vuex'

export default {
  components: {
    Crest
  },
  computed: {
    ...mapGetters([
      'randomTeams',
      'latestCompetitionChampion'
    ]),
    latestChampions() {
      return [
        {
          competition: 'Mundial',
          team: this.latestCompetitionChampion('mundial')
        },
        {
          competition: 'Libertadores',
          team: this.latestCompetitionChampion('libertadores')
        },
        {
          competition: 'Sul-Americana',
          team: this.latestCompetitionChampion('sulAmericana')
        },
        {
          competition: 'Recopa',
          team: this.latestCompetitionChampion('recopa')
        },
        {
          competition: 'J.League/CONMEBOL',
          team: this.latestCompetitionChampion('jLeagueConmebol')
        },
        {
          competition: 'Brasileirão',
          team: this.latestCompetitionChampion('brasileirao')
        },
        {
          competition: 'Copa do Brasil',
          team: this.latestCompetitionChampion('copaDoBrasil')
        },
        {
          competition: 'Copa dos Campeões',
          team: this.latestCompetitionChampion('copaDosCampeoes')
        }
      ]
    }
  }
}
</script>
