<template>
  <router-link
    :to="{
      name: 'team',
      params: {
        id
      }
    }"
  >
    <Crest :use="crest"/>

    <slot name="text"></slot>
  </router-link>
</template>

<style></style>

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
