<template>
  <div>
    <ul>
      <li
        v-for="team in teams"
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
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'teams'
    ])
  }
}
</script>
