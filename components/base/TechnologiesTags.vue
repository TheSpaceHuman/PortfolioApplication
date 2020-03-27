<template>
    <div class="technologies-tags">
      <span class="technologies-tags__tag" v-for="technology in items" :key="technology" :class="`${technology}--color`">#{{technology}}</span>
    </div>
</template>

<script>
  export default {
    name: "TechnologiesTags",
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .technologies-tags {
    display: flex;
    flex-wrap: wrap;
    &__tag {
      padding: 12px 4px 0;
    }
  }
  .javascript--color { color: #F7DF1E}
  .php--color { color: #8892BF }
  .laravel--color { color: #FF2D20}
  .vuejs--color { color: #41B883 }
  .reactjs--color { color: #61DAFB }
  .angular--color { color: #C3002F }

</style>
