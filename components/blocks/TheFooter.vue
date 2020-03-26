  <template>
    <footer class="footer bg--secondary" id="footer">
      <div class="container">
        <blockquote class="text-center">Copyright TheSpaceHuman {{ new Date().getFullYear() }} <a :href="CONTACTS.github" target="_blank" class="github-link github-link--light ml-10"><svg-icon name="github" width="30px" height="30px" style="margin-bottom: 5px;"></svg-icon></a></blockquote>
      </div>
    </footer>
  </template>

  <script>
    import CONTACTS from '@/dictionary/contact'
    export default {
      name: "TheFooter",
      data() {
        return {
          CONTACTS
        }
      }
    }
  </script>

  <style></style>
