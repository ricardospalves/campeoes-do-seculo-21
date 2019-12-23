<template>
  <div id="sobre" class="py-8 border-t border-solid border-gray-300">
    <div class="max-w-xl mx-auto px-2">
      <h2 class="text-lg font-bold">
        Sobre
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
export default {
  data() {
    return {
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
  }
}
</script>
