<template>
  <div id="app" class="flex flex-col pt-16">
    <Icons/>
    <div class="flex flex-col min-h-screen">
      <Header/>

      <router-view class="flex-grow flex-shrink-0 py-8"/>

      <Footer/>
    </div>
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
