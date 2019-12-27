<template>
  <div class="max-w-xl mx-auto text-center">
    <h2 class="text-lg font-bold uppercase">
      Página não encontrada
    </h2>

    <p class="my-4">
      Desculpe, a página que você está procurando não existe, mas talvez você queira ver alguns destes times:
    </p>

    <div class="flex flex-wrap">
      <Team
        class="w-1/2 sm:w-1/3"
        v-for="team in randomTeams"
        :key="team.id"
        :id="team.id"
        :crest="team.crest"
      >
        <p slot="desc">
          <strong>{{ team.shortname }}</strong>
        </p>
      </Team>
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
