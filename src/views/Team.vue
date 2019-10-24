<template>
  <div>
    <h1>
      {{ team.name }}
    </h1>
  </div>
</template>

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
