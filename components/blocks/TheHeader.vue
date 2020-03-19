<template>
    <header class="header" id="header" :class="top ? 'header--fixed': 'header--scroll'">
      <MainMenu :items="$store.getters.menu" :mobile="mobileMenu" />
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
        width: null,
        windowScroll: null,
      }
    },
    methods: {
      windowScrollHandler(e) {
        this.windowScroll = window.scrollY
      },
      vwResizeHandler(e) {
        this.width = window.innerWidth
      }
    },
    computed: {
      top() {
        return this.windowScroll === 0
      },
      mobileMenu() {
        return this.width < 900
      }
    },
    created() {
      if(process.client) {
        window.addEventListener('scroll', this.windowScrollHandler);
        window.addEventListener('resize', this.vwResizeHandler);
      }
    },
    mounted() {
      this.windowScroll = window.scrollY;
      this.width = window.innerWidth;
    },
    beforeDestroy() {
      if(process.client) {
        window.removeEventListener('scroll', this.windowScrollHandler);
        window.removeEventListener('resize', this.vwResizeHandler);
      }
    },
  }
</script>
