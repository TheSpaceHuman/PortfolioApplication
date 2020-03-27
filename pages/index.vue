<template>
  <section class="page-index">
    <div class="container">
      <div class="page-index__block-1 my-50">
        <p class="h5 text-center">Welcome</p>
        <h2 class="h2 text-center">I'm Artem - frontend developer</h2>
        <p class="h3 text-center">I am {{ new Date().getFullYear() - 1997 }} years old, I live in Moscow and I really love my job</p>
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
    <section class="p-50 page-index__block-4">
      <MainForm title="Personal feedback" :fields="fields" buttonTitle="Send" path="/"/>
    </section>
  </section>

</template>

<script>
import TheBanner from "~/components/base/TheBanner.vue";
import TechnologyCard from "~/components/base/TechnologyCard.vue";
import GitHubRepositories from "~/components/base/GitHubRepositories.vue";
import MainForm from "~/components/forms/MainForm.vue";
export default {
  components: {
    TheBanner, TechnologyCard, GitHubRepositories, MainForm
  },
  data() {
    return {
      fields: [
        {label: 'Name', name: 'name', mask: '', placeholder: 'Name', type: 'text', required: true},
        {label: 'Email', name: 'email', mask: '', placeholder: 'Email', type: 'email', required: true},
        {label: 'Phone', name: 'phone', placeholder: 'Phone', type: 'tel'},
        {label: 'Message', name: 'message', mask: '', placeholder: 'Message', type: 'textarea', autosize:{ minRows: 5, maxRows: 15}, required: true}
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/utils/vars";
  .page-index {

    &__block-1 {}
    &__block-4 {
      display: flex;
      justify-content: center;
    }
  }
</style>
