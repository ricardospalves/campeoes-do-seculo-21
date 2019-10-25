<template>
  <header>
    <h1>
      <router-link
        :to="{
          name: 'home'
        }"
      >
        {{ appName }}
      </router-link>
    </h1>
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
