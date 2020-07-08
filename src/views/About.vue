<template>
  <div id="sobre">
    <div class="max-w-xl mx-auto">
      <h2 class="font-bold uppercase text-center text-lg">
        {{ title }}
      </h2>

      <p class="my-4">
        Este projeto reúne os clubes brasileiros que ganharam títulos importantes no século 21 (<time datetime="2001">2001</time>–<time datetime="2100">2100</time>). Apenas títulos oficiais de nível nacional e internacional são considerados neste projeto. Títulos de nível estadual/regional (ou variações), amistosos ou nacionais de divisões inferiores não são considerados.
      </p>

      <p class="my-4">
        As competições consideradas para este projeto são:
      </p>

      <ul class="list-disc pl-4">
        <li
          class="mt-2"
          v-for="competition in competitions"
          :key="competition.name"
        >
          {{ competition.name }}
          <span v-if="competition.isExtinct">
            (competição extinta)
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      title: 'Sobre',
      competitions: [
        {
          name: 'Copa do Mundo de Clubes da FIFA',
          isExtinct: false
        },
        {
          name: 'CONMEBOL Libertadores',
          isExtinct: false
        },
        {
          name: 'CONMEBOL Sul-Americana',
          isExtinct: false
        },
        {
          name: 'CONMEBOL Recopa',
          isExtinct: false
        },
        {
          name: 'J.League YBC Levain Cup/CONMEBOL Sudamericana Final',
          isExtinct: false
        },
        {
          name: 'Campeonato Brasileiro de Futebol',
          isExtinct: false
        },
        {
          name: 'Copa do Brasil de Futebol',
          isExtinct: false
        },
        {
          name: 'Supercopa do Brasil de Futebol',
          isExtinct: false
        },
        {
          name: 'Copa dos Campeões',
          isExtinct: true
        },
      ]
    }
  },
  computed: {
    ...mapState([
      'appDescription'
    ])
  },
  metaInfo() {
    return {
      title: this.title,
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
