<template>
    <div class="project-card">
      <el-card shadow="hover" class="project-card">
        <img :src="image" :alt="title" class="project-card__image" />
        <h4 class="project-card__title">{{title}}</h4>
        <div class="project-card__technologies" v-if="technologies.length > 0">
          <TechnologiesTags :items="technologies" />
        </div>
      </el-card>
    </div>
</template>

<script>
  import TechnologiesTags from '~/components/base/TechnologiesTags.vue';
  export default {
    name: "ProjectCard",
    props: {
      image: {
        type: String,
        require: true
      },
      title: {
        type: String,
        require: true
      },
      technologies: {
        type: Array
      }
    },
    components: {
      TechnologiesTags
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/utils/vars";
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
</style>
