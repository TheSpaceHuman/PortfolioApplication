<template>
    <header class="header" id="header" :class="top ? 'header--fixed': 'header--scroll'">
      <div class="container">
        <MainMenu :items="$store.getters.menu" :mobile="false" />
      </div>
    </header>
</template>

<script>
  import MainMenu from '~/components/navigation/MainMenu.vue'

  export default {
    name: "TheHeader",
    components: {
      MainMenu
    },
    data() {
      return {
        windowScroll: null,
      }
    },
    methods: {
      windowScrollHandler(e) {
        this.windowScroll = window.scrollY
      }
    },
    computed: {
      top() {
        return this.windowScroll === 0
      }
    },
    created() {
      if(process.client) {
        window.addEventListener('scroll', this.windowScrollHandler)
      }
    },
    mounted() {
      this.windowScroll = window.scrollY
    },
    beforeDestroy() {
      if(process.client) {
        window.removeEventListener('scroll', this.windowScrollHandler)
      }
    },
  }
</script>
