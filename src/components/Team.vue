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
