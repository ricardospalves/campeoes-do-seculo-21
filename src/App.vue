<template>
  <div id="app">
    <Header/>

    <router-view/>
  </div>
</template>

<style></style>

<script>
import Header from './components/Header'

import { mapState } from 'vuex'

export default {
  components: {
    Header
  },
  computed: {
    ...mapState([
      'teams'
    ])
  }
}
</script>>
