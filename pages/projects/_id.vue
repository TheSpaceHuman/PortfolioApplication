<template>
    <section class="project-detail" v-loading="loading" v-if="project">

      <div class="container">
        <div class="d-flex align-items-center">
          <BackButton class="mr-20" />
          <h1 class="h1 color--secondary project-detail__title">{{ project.title }}</h1>
        </div>

        <p class="project-detail__description">{{ this.$t(project.description) }}</p>
      </div>
      <el-carousel type="card" height="600px" class="project-detail__carousel" :autoplay="false" trigger="click">
        <el-carousel-item v-for="(image, key) in project.images" :key="key">
          <div class="d-flex align-items-center h-100">
            <img :src="image" :alt="`image-${key}`">
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>
</template>

<script>
  import BackButton from '~/components/navigation/BackButton.vue';
  export default {
    name: "ProjectDetail",
    components: {
      BackButton
    },
    data() {
      return {
        loading: true,
        project: null
      }
    },
    methods: {
      fetchProject() {
        const id = this.$route.params.id
        this.project = this.$store.getters.getProjectById(id)
        setTimeout(() => {
          this.loading = false
        }, 0)
      }
    },
    mounted() {
      this.fetchProject()
    }
  }
</script>

<style scoped lang="scss">
.project-detail {
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 300px;
  &__carousel {}
  &__title {}
  &__description {
    color: #ccc;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
</style>
