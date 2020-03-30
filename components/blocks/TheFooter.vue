  <template>
    <footer class="footer bg--secondary" id="footer">
      <div class="container">
        <blockquote class="text-center">Copyright TheSpaceHuman {{ new Date().getFullYear() }} <a :href="CONTACTS.github" target="_blank" class="github-link github-link--light ml-10"><svg-icon name="github" width="30px" height="30px" style="margin-bottom: 5px;"></svg-icon></a></blockquote>
        <blockquote class="d-flex justify-content-center"><span class="mr-10">Made with</span><span class="d-flex"><img class="mini-icon" :src="image" v-for="image in images" :key="image"></span></blockquote>
      </div>
    </footer>
  </template>

  <script>
    import CONTACTS from '@/dictionary/contact'
    export default {
      name: "TheFooter",
      data() {
        return {
          CONTACTS,
          images: ['/image/tehnologyies/vuejs.png', '/image/tehnologyies/Nuxt-js.png', '/image/tehnologyies/d1198bac8e4ced0d89d5e5983061f418.png']
        }
      }
    }
  </script>

<style lang="scss">
  .mini-icon {
    display: inline-block;
    width: 25px;
    height: 25px;
  }
</style>
