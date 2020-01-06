<template>
  <div class="px-2">
    <Crest
      class="block mx-auto w-32 h-32"
      :use="team.crest"
    />

    <h2 class="text-lg text-center font-bold">
      {{ team.name }}
    </h2>

    <div
      class="max-w-xl mx-auto mt-8"
      v-for="honour in honours"
      :key="honour.name"
    >
      <h3 class="font-bold">
        {{ honour.name }}
      </h3>

      <p>
        {{ honour.years | addAnd }} ({{ honour.years.length }} {{ honour.years.length > 1 ? 'Títulos' : 'Título' }})
      </p>
    </div>
  </div>
</template>

<script>
import Crest from '../components/Crest'

export default {
  props: [
    'id'
  ],
  components: {
    Crest
  },
  computed: {
    team() {
      return this.$store.getters.getTeamById(this.id)
    },
    honours() {
      const team = this.team
      const honours = team.honours
      const validHonours = {}

      for(const key in honours) {
        const honour = honours[key]
        const hasHonours = honour.years.length

        if(hasHonours) {
          validHonours[key] = honour
        }
      }

      return validHonours
    }
  },
  filters: {
    addAnd(array) {
      return array
        .join(', ')
        .replace(/,([^,]*)$/, ' e $1')
    }
  },
  metaInfo() {
    const teamShortname = this.team.shortname

    return {
      title: teamShortname,
      meta: [
        {
          name: 'description',
          content: `Títulos do ${teamShortname} no séculos 21`
        }
      ]
    }
  }
}
</script>
