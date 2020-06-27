<template>
    <section class="page-demo">
      <img class="img-background" src="/image/login/wave.png">
      <div class="container">
        <h1 class="h1 text-center py-30">Demo</h1>
        <p class="h4 text-center">Here are demos of my personal projects created for the purpose of practice or internal tools for the company.</p>
        <section class="demo-list py-30">
          <el-row :gutter="15">
            <el-col :xs="24" :md="12" :lg="8" :xl="6"
                    v-for="demo in demos"
                    :key="demo.title"
                    class="mb-20"
            >
              <a :href="demo.href" target="_blank">
                <ProjectCard
                  :title="demo.title"
                  :image="demo.image"
                  :technologies="demo.technologies"
                ></ProjectCard>
              </a>
            </el-col>
          </el-row>
        </section>
      </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ProjectCard from '~/components/base/ProjectCard.vue';
  export default {
    name: "DemoPage",
    components: {
      ProjectCard
    },
    computed: {
      ...mapGetters([
        'demos'
      ])
    },
  }
</script>

<style scoped>

</style>
