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
                  <img :src="project.promo" :alt="project.title" class="project-card__image" />
                  <h4 class="project-card__title">{{project.title}}</h4>
                  <div class="project-card__technologies">
                    <TechnologiesTags :items="project.technologies" />
                  </div>
                </el-card>
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
  import TechnologiesTags from '~/components/base/TechnologiesTags.vue';
  import MainForm from "~/components/forms/MainForm.vue";
  export default {
    name: "Projects",
    components: {
      TechnologiesTags, MainForm
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
  .project-card {
    &__title {
      margin-top: 20px;
      font-size: 21px;
      font-weight: 400;
      color: $primary-color;
    }
    &__image {
      height: 250px;
    }
  }
  .commerce-feedback {
    display: flex;
    justify-content: center;
  }
</style>
