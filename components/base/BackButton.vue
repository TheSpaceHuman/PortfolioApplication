<template>
    <div class="back-button">
      <el-button icon="el-icon-back" circle @click="back"></el-button>
    </div>
</template>

<script>
  export default {
    name: "BackButton",
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
.back-button {

}
</style>
