<template>
  <div class="flex flex-wrap">
    <Team
      class="w-1/2 sm:w-1/3"
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
    ...mapGetters([
      'randomTeams'
    ])
  }
}
</script>
