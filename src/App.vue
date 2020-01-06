<template>
  <div id="app">
    <Icons/>
    <Header/>

    <router-view class="py-8"/>

    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Icons from './components/Icons'

import { mapState } from 'vuex'

export default {
  components: {
    Header,
    Footer,
    Icons
  },
  computed: {
    ...mapState([
      'teams'
    ])
  },
  metaInfo: {
    title: 'Campeões do Século 21',
    titleTemplate: '%s | Campeões do Século 21',
    htmlAttrs: {
      lang: 'pt-BR'
    }
  }
}
</script>
