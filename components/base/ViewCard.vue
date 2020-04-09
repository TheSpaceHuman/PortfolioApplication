<template>
  <el-tooltip effect="light" :content="subTitle" placement="bottom">
    <div class="view-card" @mouseenter="descriptionToggle" @mouseleave="descriptionToggle">
      <a :href="link.href" :target="link.target" class="view-card__link">
        <el-card shadow="hover">
          <div class="view-card__image">
            <img :src="image" :alt="title">
          </div>
          <h4 class="view-card__title h4">{{title}}</h4>
        </el-card>
      </a>
    </div>
  </el-tooltip>
</template>

<script>
  export default {
    name: "ViewCard",
    props: {
      title: {
        type: String,
        required: true
      },
      subTitle: String,
      image: {
        type: String,
        required: true
      },
      link: {
        type: Object,
        default: () => ({target: '_self', href: '#'})
      }
    },
    data() {
      return {
        showDescription: false
      }
    },
    methods: {
      descriptionToggle() {
        this.showDescription = !this.showDescription
      }
    }
  }
</script>

<style lang="scss">
@import "assets/scss/utils/vars";
.view-card {
  position: relative;
  &:hover {
    .view-card__subtitle {
      visibility: visible;
    }
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
      height: auto;
    }

  }
  &__title {
    margin-top: 12px;
    color: $primary-color;
    line-height: 1;
    text-align: center;
  }
  &__subtitle {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 300;
    color: $secondary-color;
    visibility: hidden;
  }
}
</style>
