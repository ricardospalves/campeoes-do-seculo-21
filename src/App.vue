<template>
  <div id="app">
    <Icons/>
    <Header/>

    <router-view class="py-8"/>

    <About/>
  </div>
</template>

<script>
import Header from './components/Header'
import About from './components/About'
import Icons from './components/Icons'

import { mapState } from 'vuex'

export default {
  components: {
    Header,
    About,
    Icons
  },
  computed: {
    ...mapState([
      'teams'
    ])
  }
}
</script>
