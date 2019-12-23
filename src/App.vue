<template>
  <div id="app">
    <Icons/>
    <Header/>

    <router-view class="py-8"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Icons from './components/Icons'

import { mapState } from 'vuex'

export default {
  components: {
    Header,
    Icons
  },
  computed: {
    ...mapState([
      'teams'
    ])
  }
}
</script>
