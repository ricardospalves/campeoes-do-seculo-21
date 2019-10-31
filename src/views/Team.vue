<template>
  <div>
    <Crest class="crest" :use="team.crest"/>

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
        {{ honour.years | addAnd }}
      </p>
    </div>
  </div>
</template>

<style scoped>
  .crest {
    --var: 8rem;
    display: block;
    width: var(--var);
    height: var(--var);
  }
</style>

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
      return this.team.honours
        .filter(honour => honour.years.length)
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
