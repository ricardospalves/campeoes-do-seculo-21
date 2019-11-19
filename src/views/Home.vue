<template>
  <article>
    <section>
      <h2>
        Últimos brasileiros campeões de cada competição
      </h2>

      <div
        v-for="team in mostRecentChampions"
        :key="team.competition.name"
      >
        <h3>
          {{ team.competition.shortname }}
        </h3>

        <Team
          :id="team.id"
          :crest="team.crest"
        >
          {{ team.competition.year }}
        </Team>
      </div>
    </section>

    <section>
      <h2>
        Todos os brasileiros campeões neste século
      </h2>

      <Team
        v-for="team in randomTeams"
        :key="team.id"
        :id="team.id"
        :crest="team.crest"
      />
    </section>
  </article>
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
