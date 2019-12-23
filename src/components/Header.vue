<template>
  <header class="px-2 border-b border-solid border-gray-300">
    <div class="flex justify-between max-w-5xl mx-auto h-12">
      <h1 class="text-lg font-bold uppercase">
        <router-link
          class="flex items-center h-full"
          :to="{
            name: 'home'
          }"
        >
          {{ appName }}
        </router-link>
      </h1>

      <a
        href="#sobre"
        class="flex items-center justify-center px-2 hover:bg-gray-300 focus:bg-gray-300"
      >
        Sobre
      </a>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'appName'
    ])
  }
}
</script>
