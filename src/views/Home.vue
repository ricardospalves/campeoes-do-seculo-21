<template>
  <article>
    <section class="mb-16">
      <h2 class="mb-2 font-bold uppercase text-center text-lg">
        Últimos brasileiros campeões em cada competição
      </h2>

      <div class="grid grid-cols-12 gap-4 max-w-xl mx-auto">
        <Team
          class="col-span-12 sm:col-span-6 md:col-span-4 sm:mt-0"
          v-for="(team, teamIndex) in mostRecentChampions"
          :key="team.competition.name"
          :class="{
            'mt-4': teamIndex
          }"
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
        class="mb-2 font-bold uppercase text-center text-lg"
      >
        Todos os brasileiros campeões no século 21
      </h2>

      <RandomTeams class="max-w-xl mx-auto"/>
    </section>
  </article>
</template>

<script>
import Team from '../components/Team'
import RandomTeams from '../components/RandomTeams'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Team,
    RandomTeams
  },
  computed: {
    ...mapState([
      'appDescription'
    ]),
    ...mapGetters('teams', [
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
        mostRecentChampion('supercopaDoBrasil'),
        mostRecentChampion('copaDosCampeoes')
      ]
    }
  },
  metaInfo() {
    return {
      titleTemplate: null,
      meta: [
        {
          name: 'description',
          content: this.appDescription
        }
      ]
    }
  }
}
</script>
