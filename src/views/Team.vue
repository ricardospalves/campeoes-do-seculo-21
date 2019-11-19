<template>
  <div>
    <Crest :use="team.crest"/>

    <h2>
      {{ team.name }}
    </h2>

    <div
      v-for="honour in honours"
      :key="honour.name"
    >
      <h3>
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
  }
}
</script>
