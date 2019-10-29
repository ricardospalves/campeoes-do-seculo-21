<template>
  <div>
    <svg class="crest">
      <use :xlink:href="team.crest"/>
    </svg>

    <h2>
      {{ team.name }}
    </h2>

    <div
      v-for="(honour, key) in honours"
      :key="key"
    >
      <h3>
        {{ key }}
      </h3>

      <p>
        {{ honour.join(', ').replace(/,([^,]*)$/, ' e $1') }}
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
export default {
  props: [
    'id'
  ],
  computed: {
    team() {
      return this.$store.getters.getTeamById(this.id)
    },
    honours() {
      const honours = this.team.honours
      const validHonours = {}

      for(const key in honours) {
        const years = honours[key]

        if(years.length) {
          validHonours[key] = years
        }
      }

      return validHonours
    }
  }
}
</script>
