<template>
  <div id="app" class="flex flex-col">
    <Icons/>

    <div class="flex flex-col min-h-screen">
      <Header/>

      <transition
        name="change-page"
        mode="out-in"
      >
        <router-view class="flex-grow flex-shrink-0 pt-24 pb-8"/>
      </transition>

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

<style>
  @keyframes change-page {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  [class*="change-page-"] {
    animation: change-page .2s ease;
  }

  .change-page-leave-active {
    animation-direction: reverse;
  }
</style>
