<template>
    <section class="page-projects">
      <div class="container">
        <h1 class="h1 text-center py-30">Projects</h1>
        <section class="project-list py-30">
          <el-row :gutter="15">
            <el-col :xs="24" :md="12" :lg="8" :xl="6"
                    v-for="project in projects"
                    :key="project.id"
                    class="mb-20"
            >
              <nuxt-link
                :to="{ name: 'projects-id', params: {id: project.id} }">
                <el-card shadow="hover" class="project-card">
                  <img :src="project.promo" :alt="project.title" />
                  <h4 class="project-card__title">{{project.title}}</h4>
                </el-card>
              </nuxt-link>
            </el-col>
          </el-row>
        </section>
      </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "Projects",
    computed: {
      ...mapGetters([
        'projects'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/utils/vars";
  .project-card {
    &__title {
      margin-top: 20px;
      font-size: 21px;
      font-weight: 400;
      color: $primary-color;
    }
  }
</style>
