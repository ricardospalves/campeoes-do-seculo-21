<template>
  <div>
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
      'randomTeams'
    ]),
    mostRecentChampions() {
      const mostRecent = key => {
        return this.randomTeams
          .filter(team => team.honours[key].length)
          .reduce((accumulator, current) => {
            const accumulatorMostRecent = Math.max(...accumulator.honours[key])
            const currentMostRecent = Math.max(...current.honours[key])
            const boolean = accumulatorMostRecent > currentMostRecent

            return boolean ? accumulator : current
          })
      }

      return [
        {
          competition: 'Mundial',
          team: mostRecent('mundial')
        },
        {
          competition: 'Libertadores',
          team: mostRecent('libertadores')
        },
        {
          competition: 'Sul-Americana',
          team: mostRecent('sulAmericana')
        },
        {
          competition: 'Recopa',
          team: mostRecent('recopa')
        },
        {
          competition: 'J.League/CONMEBOL',
          team: mostRecent('jLeagueConmebol')
        },
        {
          competition: 'Brasileirão',
          team: mostRecent('brasileirao')
        },
        {
          competition: 'Copa do Brasil',
          team: mostRecent('copaDoBrasil')
        },
        {
          competition: 'Copa dos Campeões',
          team: mostRecent('copaDosCampeoes')
        }
      ]
    }
  }
}
</script>
