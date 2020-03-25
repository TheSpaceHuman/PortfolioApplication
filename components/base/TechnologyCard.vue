<template>
    <div class="technology-card">
      <div class="technology-card__image">
        <img :src="image" :alt="name">
      </div>
      <div class="technology-card__content">
        <a :href="href" target="_blank">
          <h4 class="technology-card__title">{{name}}</h4>
          <div class="technology-card__icon">
            <i class="el-icon-view"></i>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TechnologyCard",
    props: {
      href: {
        type: String,
        default: '#'
      },
      name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/utils/vars";
  .technology-card {
    position: relative;
    padding: 25px;
    &:hover::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.6);
    }
    &:hover {
      .technology-card__content {
        display: block;
      }
      cursor: pointer;
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: auto;
        height: 110px;
      }
    }
    &__content {
      position: absolute;
      top: 50%;
      bottom: 0;
      left: 0;
      right: 0;
      color: $light-color;
      display: none;
      transform: translateY(-50%);
    }
    &__title {
      text-align: center;
      font-size: 25px;
      font-weight: 700;
      margin-top: 16px;
    }
    &__icon {
      text-align: center;
      font-size: 32px;
      font-weight: 700;
    }
  }
</style>
