<template>
  <div id="app">
    <ul>
      <li>
        <router-link
          :to="{
            name: 'home'
          }"
        >
          Home
        </router-link>
      </li>
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
    <router-view/>
  </div>
</template>

<style></style>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'teams'
    ])
  }
}
</script>>
