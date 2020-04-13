<template>
    <nav
      class="main-menu"
    >
      <div class="main-menu__mobile-wrapper"
           v-if="mobile"
           :class="{'is-active': activeHamburger}"
      >
        <button
          class="hamburger hamburger--collapse"
          :class="{'is-active': activeHamburger}"
          type="button"
          @click="toggleHamburger">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <transition
          name="mobile-menu-transition"
          enter-active-class="animated slideInLeft"
          leave-active-class="animated slideOutLeft"
        >
          <ul
            class="main-menu__mobile-items"
            v-if="activeHamburger">
            <li
              class="main-menu__mobile-item"
              :class="{'is-active': $route.path === item.link}"
              v-for="(item, key) in items"
              :key="key"
              @click="hideMobileMenu"
            >
              <nuxt-link :to="item.link" class="main-menu__mobile-link"><i v-if="item.icon" :class="item.icon" /> {{item.name}}</nuxt-link>
            </li>
          </ul>
        </transition>

      </div>
      <el-menu :default-active="activeItem" class="main-menu__items" mode="horizontal" v-else>
        <nuxt-link to="/" class="main-menu__item-logo"><svg-icon name="moon"></svg-icon></nuxt-link>
        <el-menu-item
          class="main-menu__item"
          v-for="item in items"
          :key="item.key"
          :index="item.key"
        >
          <nuxt-link :to="item.link" class="main-menu__item-link"><i v-if="item.icon" :class="item.icon" />{{item.name}}</nuxt-link>
        </el-menu-item>
      </el-menu>
    </nav>
</template>

<script>
  export default {
    name: "MainMenu",
    props: {
      items: {
        type: Array,
        required: true,
      },
      mobile: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        activeItem: '1',
        activeHamburger: false,

      }
    },
    methods: {
      initMenu() {
        const currentPage = this.items.filter(el => {
          return el.link === this.$route.path
        });
        if(currentPage.length) {
          this.activeItem = currentPage[0].key
        } else {
         this.switchActiveRoute()
        }
      },
      toggleHamburger() {
        this.activeHamburger = !this.activeHamburger
      },
      hideMobileMenu() {
        this.activeHamburger = false
      },
      switchActiveRoute() {
        switch (this.$route.name) {
          case 'projects-id':
            this.activeItem = this.items.find((el) => {
              return el.link === '/projects'
            }).key
            break;
          case 'blog-id':
            this.activeItem = this.items.find((el) => {
              return el.link === '/blog'
            }).key
            break;
          case 'profile-login':
            this.activeItem = this.items.find((el) => {
              return el.link === '/profile'
            }).key
            break;
          case 'profile-registration':
            this.activeItem = this.items.find((el) => {
              return el.link === '/profile'
            }).key
            break;
          default:
            this.activeItem = '1'
        }
      }
    },
    mounted() {
      this.initMenu();
    },
    watch: {
      $route: {
        handler(val){
          this.initMenu()
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/scss/utils/vars";
  .hamburger {
    z-index: 6;
  }
  .main-menu {
    a {
      font-size: inherit;
      color: inherit;
    }

    &__items {
      display: flex;
      justify-content: center;
      border-color: transparent;
    }
    &__item {
      &-link {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      &-logo {
        display: flex;
        align-items: center;
        margin-right: auto;
        svg {
          margin: 0 20px;
          width: 40px;
          height: 40px;
          fill: $secondary-color;
        }
      }
    }
    &__mobile-items {
      max-width: 320px;
      font-size: 21px;
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      padding: 45px 30px;
      background-color:  $secondary-color;
      color: $tertiary-color;
      z-index: 999;
    }
    &__mobile-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    &__mobile-wrapper.is-active {
      &::before {
        content: "";
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 5;
      }
    }

    &__mobile-item {
      /*border-bottom: 1px solid transparent;*/
      margin-bottom: 12px;
      &.is-active {
        color: $primary-color;
        border-color: $primary-color;
      }
      &:hover {
        color: $primary-color;
      }
    }

  }
</style>
