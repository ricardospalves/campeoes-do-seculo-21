<template>
  <footer class="h-12 px-2 border-t border-solid border-gray-300">
    <div class="flex justify-between items-center max-w-5xl mx-auto">
      <p class="pr-4">
        Criado por Ricardo Alves - <a href="https://github.com/ricardospalves/campeoes-do-seculo-21" class="underline">Ver no GitHub</a>
      </p>

      <ul class="flex text-gray-700">
        <li
          v-for="social in socials"
          :key="social.name"
        >
          <a
            class="flex items-center justify-center w-12 h-12 p-2 hover:text-black focus:text-black"
            target="_blank"
            :href="social.url"
            :title="social.name"
          >
            <span class="sr-only">{{ social.name }}</span>

            <svg class="block w-full h-full fill-current">
              <use :xlink:href="social.iconID"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'socials'
    ])
  }
}
</script>
