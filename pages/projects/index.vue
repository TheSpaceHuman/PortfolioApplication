<template>
    <section class="page-projects">
      <img class="img-background" src="/image/login/wave.png">
      <div class="container">
        <h1 class="h1 text-center py-30">Projects</h1>
        <p class="h4 text-center">Here are all my completed projects of varying complexity.</p>
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
          <MainForm  title="Commerce feedback" :fields="fields" buttonTitle="Submit an order for review" path="/" />
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
          {label: 'Name', name: 'name', placeholder: 'Name', type: 'text', required: true, grid: {xs: 24, md: 12, lg: 12 }},
          {label: 'Email', name: 'email', placeholder: 'Email', type: 'email', required: true, grid: {xs: 24, md: 12, lg: 12 }},
          {label: 'Phone', name: 'phone', placeholder: 'Phone', type: 'tel', grid: {xs: 24, md: 12, lg: 12 }},
          {label: 'Type project', name: 'type', placeholder: 'Type project', type: 'select', required: true, options: [{label: 'Commercial project', value: '1'}, { label: 'Personal project', value: '2'}], grid: {xs: 24, md: 12, lg: 12 }},
          {label: 'Technical task', name: 'task', type: 'file', grid: {xs: 24, md: 24, lg: 24 }},
          {label: 'Comment', name: 'comment', placeholder: 'Comment', type: 'textarea', autosize:{ minRows: 5, maxRows: 15}, required: true, grid: {xs: 24, md: 24, lg: 24 }}
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
