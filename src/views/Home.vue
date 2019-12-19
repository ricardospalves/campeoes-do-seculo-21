<template>
  <article>
    <section class="my-16">
      <h2 class="font-bold uppercase text-center text-lg">
        Últimos brasileiros campeões de cada competição
      </h2>

      <div class="flex flex-wrap max-w-xl mx-auto">
        <div
          class="w-full sm:w-1/3 px-2 py-4"
          v-for="team in mostRecentChampions"
          :key="team.competition.name"
        >
          <h3 class="font-bold mb-2 text-gray-700">
            {{ team.competition.shortname }}
          </h3>

          <Team
            class="p-2 block border-2 border-solid hover:border-black focus:border-black focus:shadow-outline hover:bg-gray-300 focus:bg-gray-300 text-center rounded focus:outline-none"
            :id="team.id"
            :crest="team.crest"
          >
            <p>
              <strong>{{ team.competition.year }}</strong>
            </p>
          </Team>
        </div>
      </div>
    </section>

    <section>
      <h2
        class="font-bold uppercase text-center text-lg"
      >
        Todos os brasileiros campeões neste século
      </h2>

      <div class="flex flex-wrap max-w-xl mx-auto">
        <div
          class="w-1/2 sm:w-1/3 px-2 py-4"
          v-for="team in randomTeams"
          :key="team.id"
        >
          <Team
            class="p-2 block border-2 border-solid hover:border-black focus:border-black focus:shadow-outline hover:bg-gray-300 focus:bg-gray-300 text-center rounded focus:outline-none"
            :id="team.id"
            :crest="team.crest"
          >
            <p>
              <strong>{{ team.shortname }}</strong>
            </p>
          </Team>
        </div>
      </div>


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
