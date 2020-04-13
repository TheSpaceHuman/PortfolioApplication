<template>
  <section class="page-login">
    <TheAuthentication :fields="fields" :type="tag" :switch-link="switchLink" />
  </section>
</template>

<script>
  import TheAuthentication from '~/components/forms/TheAuthentication.vue'
  export default {
    name: "registration",
    components: {
      TheAuthentication
    },
    data() {
      return {
        tag: 'registration',
        fields: [
          { type: 'text', name: 'username', placeholder: 'Enter you username',  label: 'Username', required: true, icon: 'el-icon-user' },
          { type: 'email', name: 'email', placeholder: 'Enter you email',  label: 'Email', required: true, icon: 'el-icon-message' },
          { type: 'password', name: 'password', placeholder: 'Enter you password',  label: 'Password', required: true, min: 8, icon: 'el-icon-lock' }
        ],
        switchLink: {
          href: '/profile/login',
          title: 'Login'
        }
      }
    }
  }
</script>

<style scoped>

</style>
