<template>
  <div class="max-w-xl mx-auto text-center">
    <h2 class="text-lg font-bold uppercase">
      Página não encontrada
    </h2>

    <p class="my-4">
      Desculpe, a página que você está procurando não existe, mas talvez você queira ver alguns destes times:
    </p>

    <RandomTeams/>
  </div>
</template>

<script>
import RandomTeams from '../components/RandomTeams'
import { mapState } from 'vuex'

export default {
  components: {
    RandomTeams
  },
  computed: {
    ...mapState([
      'appDescription'
    ])
  },
  metaInfo() {
    return {
      title: 'Página não encontrada',
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
