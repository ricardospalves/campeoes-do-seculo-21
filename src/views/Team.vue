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
    }
  }
}
</script>
