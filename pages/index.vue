<template>
  <section class="page-index">
    <div class="container">
      <div class="page-index__block-1 my-50">
        <p class="h5 text-center">Welcome</p>
        <h2 class="h2 text-center">I'm Artem - frontend developer</h2>
        <div class="d-flex justify-content-center p-20">
          <svg-icon name="planet" width="250px" height="250px"></svg-icon>
        </div>
      </div>
    </div>
    <section class="bg--primary p-50 page-index__block-2">
      <h2 class="h2 text-center mb-30">Technologies that I use in my work</h2>
      <el-row>
        <el-col :sm="24" :md="12" :lg="4" v-for="technology in $store.getters.technologies" :key="technology.name">
          <TechnologyCard :name="technology.name" :href="technology.href" :image="technology.image" />
        </el-col>
      </el-row>
    </section>
    <section class="p-50 page-index__block-3">
      <GitHubRepositories />
    </section>
  </section>

</template>

<script>
import TheBanner from "~/components/base/TheBanner";
import TechnologyCard from "~/components/base/TechnologyCard.vue";
import GitHubRepositories from "~/components/base/GitHubRepositories.vue";
export default {
  components: {
    TheBanner, TechnologyCard, GitHubRepositories
  }
}
</script>

<style lang="scss">
  .page-index {

    &__block-1 {}
  }
</style>
