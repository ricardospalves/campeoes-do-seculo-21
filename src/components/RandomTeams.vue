<template>
  <div class="grid grid-cols-12 gap-4">
    <Team
      class="col-span-6 md:col-span-4"
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
</template>

<script>
import Team from './Team'
import { mapGetters } from 'vuex'

export default {
  components: {
    Team
  },
  computed: {
    ...mapGetters('teams', [
      'randomTeams'
    ])
  }
}
</script>
