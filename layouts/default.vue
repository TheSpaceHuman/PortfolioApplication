<template>
  <div class="default-layout" id="default-layout">
    <TheHeader/>
    <main class="main" id="main">
      <nuxt/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from '~/components/blocks/TheHeader.vue'
  import TheFooter from '~/components/blocks/TheFooter.vue'

  export default {
    components: {
      TheHeader, TheFooter
    },
    metaInfo: {
      base: { href: '/' }
    }
  }
</script>
