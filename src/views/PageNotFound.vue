<template>
  <div class="max-w-xl mx-auto text-center">
    <h2 class="text-lg font-bold uppercase">
      Página não encontrada
    </h2>

    <p class="my-4">
      Desculpe, a página que você está procurando não existe, mas talvez você queira ver alguns destes times:
    </p>

    <div class="flex flex-wrap">
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
      'randomTeams'
    ])
  }
}
</script>
