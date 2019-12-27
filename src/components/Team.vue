<template>
  <div class="px-2 py-4">
    <slot name="title"></slot>

    <router-link
      class="p-2 block border-2 border-solid hover:border-black focus:border-black focus:shadow-outline hover:bg-gray-300 focus:bg-gray-300 text-center rounded focus:outline-none"
      :to="{
        name: 'team',
        params: {
          id
        }
      }"
    >
      <Crest
        class="w-24 h-24 mx-auto"
        :use="crest"
      />

      <slot name="desc"></slot>
    </router-link>
  </div>
</template>

<script>
import Crest from './Crest'

export default {
  props: [
    'id',
    'crest'
  ],
  components: {
    Crest
  }
}
</script>
