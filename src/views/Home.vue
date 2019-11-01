<template>
  <div>
    <Teams :teams="randomTeams"/>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

body {
  margin: 0;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>

<script>
import Teams from '../components/Teams'
import { mapGetters } from 'vuex'

export default {
  components: {
    Teams
  },
  computed: {
    ...mapGetters([
      'randomTeams',
      'mostRecentChampion'
    ]),
    mostRecentChampions() {
      const mostRecentChampion = key => this.mostRecentChampion(key)
      return [
        mostRecentChampion('mundial'),
        mostRecentChampion('libertadores'),
        mostRecentChampion('sulAmericana'),
        mostRecentChampion('recopa'),
        mostRecentChampion('jLeagueConmebol'),
        mostRecentChampion('brasileirao'),
        mostRecentChampion('copaDoBrasil'),
        mostRecentChampion('copaDosCampeoes')
      ]
    }
  }
}
</script>
