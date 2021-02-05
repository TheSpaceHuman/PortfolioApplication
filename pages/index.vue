<template>
  <section class="page-index">
    <div class="container">
      <div class="page-index__block-1 my-50">
        <p class="h5 text-center">{{ $t('index.greeting') }}</p>
        <h2 class="h2 text-center">{{ $t('index.me') }}</h2>
        <p class="h3 text-center">{{ $t('index.about') }}</p>
        <div class="d-flex justify-content-center p-20">
          <svg-icon name="planet" width="250px" height="250px"></svg-icon>
        </div>
      </div>
    </div>
    <section class="bg--primary p-50 page-index__block-2">
      <h2 class="h2 text-center mb-30">{{ $t('index.technology') }}</h2>
      <el-row>
        <el-col :sm="24" :md="12" :lg="4" v-for="technology in technologies" :key="technology.name">
          <TechnologyCard :name="technology.name" :href="technology.href" :image="technology.image" />
        </el-col>
      </el-row>
    </section>
    <section class="p-50 page-index__block-3">
      <GitHubRepositories :collapse="$t('index.github.collapse')" :expand="$t('index.github.expand')" :description="$t('index.github.description')" />
    </section>
    <section class="p-50 page-index__block-4">
      <MainForm :title="$t('index.feedback.title')" :fields="fields" :buttonTitle="$t('index.feedback.submit')" path="/"/>
    </section>
  </section>

</template>

<script>
import TheBanner from "~/components/base/TheBanner.vue";
import TechnologyCard from "~/components/base/TechnologyCard.vue";
import GitHubRepositories from "~/components/base/GitHubRepositories.vue";
import MainForm from "~/components/forms/MainForm.vue";
import { mapGetters } from 'vuex';
export default {
  name: 'IndexPage',
  components: {
    TheBanner, TechnologyCard, GitHubRepositories, MainForm
  },
  data() {
    return {
      fields: [
        {label: this.$t('index.feedback.name'), name: 'name', mask: '', placeholder: this.$t('index.feedback.name'), type: 'text', required: true},
        {label: this.$t('index.feedback.email'), name: 'email', mask: '', placeholder: this.$t('index.feedback.email'), type: 'email', required: true},
        {label: this.$t('index.feedback.phone'), name: 'phone', placeholder: this.$t('index.feedback.phone'), type: 'text', mask: '+ # (###)-###-##-##'},
        {label: this.$t('index.feedback.message'), name: 'message', mask: '', placeholder: this.$t('index.feedback.message'), type: 'textarea', autosize:{ minRows: 5, maxRows: 15}, required: true}
      ]
    }
  },
  computed: {
    ...mapGetters([
      'technologies'
    ])
  },
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
