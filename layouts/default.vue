<template>
  <div class="default-layout" id="default-layout">
    <TheHeader/>
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from '~/components/blocks/TheHeader.vue'
  import TheFooter from '~/components/blocks/TheFooter.vue'

  export default {
    components: {
      TheHeader, TheFooter
    }
  }
</script>
