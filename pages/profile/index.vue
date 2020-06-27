<template>
    <section class="page-profile">
      <img class="img-background" src="/image/login/wave.png">
      <div class="container">
        <h1 class="h1">Profile</h1>
        <div class="flex justify-content-around">
          <nuxt-link :to="{name: 'profile-login'}">
            <el-button type="primary">Login</el-button>
          </nuxt-link>
          <nuxt-link :to="{name: 'profile-registration'}">
            <el-button type="primary">Registration</el-button>
          </nuxt-link>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    name: "ProfilePage"
  }
</script>

<style scoped>

</style>
