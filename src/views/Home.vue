<template>
  <article>
    <section class="mb-16">
      <h2 class="font-bold uppercase text-center text-lg">
        Últimos brasileiros campeões de cada competição
      </h2>

      <div class="flex flex-wrap max-w-xl mx-auto">
        <Team
          class="w-full sm:w-1/3"
          v-for="team in mostRecentChampions"
          :key="team.competition.name"
          :id="team.id"
          :crest="team.crest"
        >
          <h3 slot="title" class="font-bold mb-2">
            <template>
              {{ team.competition.shortname }}
            </template>
          </h3>

          <p slot="desc">
            <strong>{{ team.competition.year }}</strong>
          </p>
        </Team>
      </div>
    </section>

    <section>
      <h2
        class="font-bold uppercase text-center text-lg"
      >
        Todos os brasileiros campeões neste século
      </h2>

      <RandomTeams class="max-w-xl mx-auto"/>
    </section>
  </article>
</template>

<script>
import Team from '../components/Team'
import RandomTeams from '../components/RandomTeams'
import { mapGetters } from 'vuex'

export default {
  components: {
    Team,
    RandomTeams
  },
  computed: {
    ...mapGetters([
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
