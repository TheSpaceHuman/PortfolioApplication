  <template>
    <footer class="footer bg--secondary" id="footer">
      <div class="container">
        <blockquote class="text-center">Copyright TheSpaceHuman {{ new Date().getFullYear() }} <a :href="CONTACTS.github" target="_blank" class="github-link github-link--light ml-10"><svg-icon name="github" width="30px" height="30px" style="margin-bottom: 5px;"></svg-icon></a></blockquote>
        <blockquote class="d-flex justify-content-center"><span class="mr-10">Made with</span>
          <span class="d-flex">
            <el-tooltip :content="image.alt" v-for="image in images" :key="image.alt">
             <img class="mini-icon" :src="image.src" :alt="image.alt">
          </el-tooltip>
        </span>
        </blockquote>
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
          images: [
            { src: '/image/tehnologyies/vuejs.png', alt: 'Vue.js' },
            { src: '/image/tehnologyies/Nuxt-js.png', alt: 'Nuxt.js' },
            { src: '/image/tehnologyies/d1198bac8e4ced0d89d5e5983061f418.png', alt: 'Nest.js' },
          ]
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
