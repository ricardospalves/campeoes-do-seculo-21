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
          <svg class="crest">
            <use :xlink:href="team.crest"/>
          </svg>

          {{ team.shortname }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .crest {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
  }
</style>

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
