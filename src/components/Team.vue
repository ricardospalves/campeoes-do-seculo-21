<template>
  <router-link
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

    <slot></slot>
  </router-link>
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
