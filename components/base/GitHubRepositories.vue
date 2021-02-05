<template>
    <section
      v-loading="loading"
      class="github-repositories"
    >
      <h3 class="github-repositories__title h3 text-center mb-40">
        <a :href="CONTACTS.github" target="_blank" class="github-link"><svg-icon name="github" width="30px" height="30px" style="margin-bottom: 5px;"></svg-icon></a>
        {{ description }}
      </h3>
      <el-row  class="github-repositories__list">
        <el-col :sm="24" :md="12" :lg="8" v-for="rep in showRepositories" :key="rep.id" class="p-10">
          <a :href="rep.link" target="_blank">
            <el-card shadow="hover" class="github-repositories__card">
              <h4 class="github-repositories__card-title h4">{{rep.name}}</h4>
              <p class="github-repositories__card-description">{{rep.description}}</p>
              <p class="github-repositories__card-date">{{rep.updated | moment('timezone', 'Europe/Moscow','DD-MM-YYYY HH:mm') }} </p>
            </el-card>
          </a>
        </el-col>
      </el-row>
      <div class="d-flex justify-content-center my-20">
        <el-button @click="toggleShowAll" :icon="toggleIcon">{{ toggleTitle }}</el-button>
      </div>
    </section>
</template>

<script>
  import CONTACTS from '@/dictionary/contact'
  export default {
    name: "GitHubRepositories",
    props: {
      expand: {
        type: String,
        required: true,
      },
      collapse: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
    },
    data() {
      return {
        loading: true,
        apiUrl: 'https://api.github.com/',
        userName: 'TheSpaceHuman',
        repositories: [],
        showRepositories: [],
        showAll: false,
        CONTACTS
      }
    },
    methods: {
      async getRepositories() {
        const repos = await this.$axios.get(`${this.apiUrl}users/${this.userName}/repos`, {
          params: {
            sort: 'updated'
          }
        })
        this.repositories = repos.data.map((el) => {
          return {
            id: el.id,
            name: el.name,
            description: el.description,
            link: el['html_url'],
            updated: el['updated_at']
          }
        })
        this.getAt(9)
        this.loading = false
        console.log('Fetch TheSpaceHuman repositories!')
      },
      getAt(number) {
        this.showRepositories = this.repositories.slice(0, number)
      },
      toggleShowAll() {
        if(this.showAll) {
          this.getAt(9)
        } else {
          this.showRepositories = this.repositories
        }
        this.showAll = !this.showAll
      }
    },
    computed: {
      toggleIcon() {
        return this.showAll ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
      },
      toggleTitle() {
        return this.showAll ? this.collapse : this.expand
      }
    },
    mounted() {
      this.getRepositories();
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/utils/vars";
  .github-repositories {
    .el-card__body {
      display: flex;
      flex-direction: column;
      min-height: 200px;
    }
    &__list {
      min-height: 400px;
      padding: 20px;
    }
    &__card {
      min-height: 200px;

      &-title {
        color: $primary-color;
      }
      &-date {
        margin-top: auto;
        text-align: right;
      }
      &-description {
        margin-top: 8px;
        color: $secondary-color;
      }
    }
  }
</style>
