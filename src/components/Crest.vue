<template>
  <svg>
    <use :xlink:href="`#${use}`"/>
  </svg>
</template>

<script>
export default {
  props: [
    'use'
  ]
}
</script>
