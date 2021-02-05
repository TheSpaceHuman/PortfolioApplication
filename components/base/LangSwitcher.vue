<template>
  <section class="lang-switcher">
    <el-dropdown>
      <el-button circle>
        {{ $i18n.locale.toLocaleUpperCase() }}
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <nuxt-link :to="switchLocalePath('ru')">Russian</nuxt-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
export default {
  name: "LangSwitcher",
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/vars";
.lang-switcher {
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__icon {}
  &__lang {
    font-size: 14px;
    color: $primary-color;
  }
}
</style>
