<template>
  <router-link
    class="team"
    :to="{
      name: 'team',
      params: {
        id
      }
    }"
  >
    <Crest
      class="team__crest"
      :use="crest"
    />
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
