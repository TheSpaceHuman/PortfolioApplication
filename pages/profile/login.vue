<template>
  <section class="page-login">
    <TheAuthentication :fields="fields" :type="tag" :switch-link="switchLink" />
  </section>
</template>

<script>
  import TheAuthentication from '~/components/forms/TheAuthentication.vue'
  export default {
    name: "login",
    components: {
      TheAuthentication
    },
    data() {
      return {
        tag: 'login',
        fields: [
          { type: 'text', name: 'username', placeholder: 'Enter you username',  label: 'Username', required: true, icon: 'el-icon-user' },
          { type: 'password', name: 'password', placeholder: 'Enter you password',  label: 'Password', required: true, min: 8, icon: 'el-icon-lock' }
        ],
        switchLink: {
          href: '/profile/registration',
          title: 'Registration'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
