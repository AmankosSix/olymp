<template>
  <div class="search__menu">
    <v-icon class="search__menu--icon mr-1" @click="active = true"
      >mdi-magnify</v-icon
    >
    <transition name="fade">
      <div v-if="active" class="search__menu__modal">
        <v-icon class="search__menu__modal--close" @click="active = false"
          >mdi-close</v-icon
        >
        <div class="search__menu__modal__block">
          <v-field
            ref="inputField"
            solo
            icon="mdi-magnify"
            v-model="search"
            @icon-click="sendSearch"
            @onEnter="sendSearch"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CSearch",
  data() {
    return {
      active: false,
      search: "",
    };
  },
  methods: {
    sendSearch() {
      this.$router.push({ name: "search", query: { name: this.search } });
      this.active = false;
    },
  },
  watch: {
    active(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.inputField.focus();
        });
      }
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.search__menu {
  &--icon {
    cursor: pointer;
    font-size: 26px !important;
    color: #ffffff !important;
  }
  &__modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: white;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #272f5a;
    z-index: 111;
    .v-input__control {
      min-width: 70vw !important;
    }
    &--close {
      cursor: pointer;
      position: absolute !important;
      top: 30px;
      right: 30px;
      font-size: 30px !important;
      color: #ffffff !important;
    }
  }
}
</style>
