<template>
  <section class="page-tools">
    <div class="container">
      <h1 class="h1 text-center py-30">Tools</h1>
      <p class="h4 text-center mb-30">Here are auxiliary tools that I often use.</p>
      <section class="page-tools__tools-list pb-50">
        <el-row :gutter="15">
          <el-col :xs="24" :md="12" :lg="8" :xl="4"
                  v-for="tool in tools"
                  :key="tool.title"
                  class="mb-20"
          >
            <ViewCard
              :title="tool.title"
              :sub-title="tool.subTitle"
              :link="tool.link"
              :image="tool.image"></ViewCard>
          </el-col>
        </el-row>
      </section>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ViewCard from '~/components/base/ViewCard.vue'
  export default {
    name: "ToolsPage",
    components: {
      ViewCard
    },
    computed: {
      ...mapGetters([
        'tools'
      ])
    },
  }
</script>

<style lang="scss">
.page-tools {
  &__tools-list {
    img {
      height: 175px;
    }
  }
}
</style>
