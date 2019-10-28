<template>
  <div>
    <ul>
      <li
        v-for="team in randomTeams"
        :key="team.id"
      >
        <router-link
          :to="{
            name: 'team',
            params: {
              id: team.id
            }
          }"
        >
          {{ team.shortname }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'randomTeams'
    ])
  }
}
</script>
