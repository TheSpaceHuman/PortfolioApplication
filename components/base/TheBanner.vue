<template>
    <figure class="the-banner">
      <img :src="image" alt="Banner image" class="the-banner__image">
      <slot></slot>
    </figure>
</template>

<script>
  export default {
    name: "TheBanner",
    props: {
      image: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .the-banner {
    position: relative;
    &__image {
      position: absolute;
      top: -65px;
    }
    &--label {

    }
  }
</style>
