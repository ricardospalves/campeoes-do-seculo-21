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
          <Crest class="crest" :use="team.crest"/>

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
import Crest from '../components/Crest'
import { mapGetters } from 'vuex'

export default {
  components: {
    Crest
  },
  computed: {
    ...mapGetters([
      'randomTeams'
    ])
  }
}
</script>
