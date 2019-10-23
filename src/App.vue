<template>
  <div id="app">
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
