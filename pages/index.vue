<template>
  <section class="page-index">
    <div class="container">
      <div class="page-index__block-1 my-50">
        <p class="h5 text-center">Welcome</p>
        <h2 class="h2 text-center">I'm Artem - frontend developer</h2>
      </div>
      <el-row class="page-index__block-2">
        <el-col></el-col>
        <el-col></el-col>
      </el-row>
    </div>
  </section>

</template>

<script>
import TheBanner from "../components/base/TheBanner";
export default {
  components: {
    TheBanner
  }
}
</script>

<style lang="scss">
  .page-index {

    &__block-1 {}
  }
</style>
