<template>
    <section class="page-projects">
      <img class="img-background" src="/image/login/wave.png">
      <div class="container">
        <h1 class="h1 text-center py-30">{{ this.$t('projects.title') }}</h1>
        <p class="h4 text-center">{{ this.$t('projects.description') }}</p>
        <section class="project-list py-30">
          <el-row :gutter="15">
            <el-col :xs="24" :md="12" :lg="8" :xl="6"
                    v-for="project in projects"
                    :key="project.id"
                    class="mb-20"
            >
              <nuxt-link
                :to="{ name: 'projects-id', params: {id: project.id} }">
                <ProjectCard
                  :title="project.title"
                  :image="project.promo"
                  :technologies="project.technologies"
                ></ProjectCard>
              </nuxt-link>
            </el-col>
          </el-row>
        </section>
        <section class="commerce-feedback py-30">
          <MainForm  :title="this.$t('projects.feedback.title')" :fields="fields" :buttonTitle="this.$t('projects.feedback.submit')" path="/" />
        </section>
      </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ProjectCard from '~/components/base/ProjectCard.vue';
  import MainForm from "~/components/forms/MainForm.vue";
  export default {
    name: "ProjectsPage",
    components: {
      ProjectCard, MainForm
    },
    computed: {
      ...mapGetters([
        'projects'
      ])
    },
     data() {
      return {
        fields: [
          {label: this.$t('projects.feedback.name'), name: 'name', placeholder: this.$t('projects.feedback.name'), type: 'text', required: true, grid: {xs: 24, md: 12, lg: 12 }},
          {label: this.$t('projects.feedback.email'), name: 'email', placeholder: this.$t('projects.feedback.email'), type: 'email', required: true, grid: {xs: 24, md: 12, lg: 12 }},
          {label: this.$t('projects.feedback.phone'), name: 'phone', placeholder: this.$t('projects.feedback.phone'),  type: 'text', mask: '+ # (###)-###-##-##', grid: {xs: 24, md: 12, lg: 12 }},
          {label: this.$t('projects.feedback.type.title'), name: 'type', placeholder: this.$t('projects.feedback.type.title'), type: 'select', required: false, options: [{label: this.$t('projects.feedback.type.options.1'), value: '1'}, { label: this.$t('projects.feedback.type.options.2'), value: '2'}], grid: {xs: 24, md: 12, lg: 12 }},
          {label: this.$t('projects.feedback.task.title'), name: 'task', type: 'file', message: this.$t('projects.feedback.task.description'), button: this.$t('projects.feedback.task.button'), grid: {xs: 24, md: 24, lg: 24 }},
          {label: this.$t('projects.feedback.comment'), name: 'comment', placeholder: this.$t('projects.feedback.comment'), type: 'textarea', autosize:{ minRows: 5, maxRows: 15}, required: true, grid: {xs: 24, md: 24, lg: 24 }}
        ]
      }
     }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/utils/vars";
  .commerce-feedback {
    display: flex;
    justify-content: center;
  }
</style>
