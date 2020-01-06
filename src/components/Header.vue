<template>
  <header class="flex-shrink-0 px-2 border-b border-solid border-gray-300">
    <div class="flex justify-between max-w-5xl mx-auto h-16">
      <h1 class="text-lg font-bold uppercase">
        <router-link
          class="flex items-center w-16 h-full"
          :title="appName"
          :to="{
            name: 'home'
          }"
        >
          <svg class="block w-full h-full fill-current">
            <use xlink:href="#icon-logo"/>
          </svg>

          <span class="sr-only">
            {{ appName }}
          </span>
        </router-link>
      </h1>

      <nav class="h-full">
        <router-link
          :to="{
            name: 'about'
          }"
          class="flex items-center justify-center h-full px-2 hover:bg-gray-300 focus:bg-gray-300"
          :class="`hover:${highlightBg} focus:${highlightBg}`"
          :active-class="highlightBg"
        >
          Sobre
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      highlightBg: 'bg-gray-300'
    }
  },
  computed: {
    ...mapState([
      'appName'
    ])
  }
}
</script>
