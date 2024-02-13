<template>
  <section class="about" @click="test">
    <div class="about__block">
      <v-container>
        <div class="about__block--top">
          <h1 class="about__block--title">{{ title || "О НАС" }}</h1>

          <transition name="slide-right" mode="out-in">
            <div
              v-if="!aboutCategory"
              key="A"
              class="about__block__list"
              @click="activeAlt = null"
            >
              <div v-for="item in categories" :key="item.id">
                <p
                  :class="{
                    activeTab: item.alt === isActiveTab?.alt,
                  }"
                  class="about__block__list--item mb-0"
                  @click.stop="aboutPage(item)"
                >
                  {{ item.name }}
                </p>
              </div>
            </div>
            <div v-else key="B" class="about__block__sublist">
              <div
                class="about__block__list--item about__block__sublist--title"
              >
                <p>
                  {{ aboutCategory.name }}
                </p>
                <v-icon
                  dark
                  class="about__block__sublist--title--icon"
                  @click.stop="returnLink(item)"
                >
                  mdi-arrow-left
                </v-icon>
              </div>
              <v-row class="about__block__sublist__list">
                <v-col
                  cols="12"
                  sm="6"
                  v-for="item in aboutCategory.children"
                  :key="item.id"
                >
                  <p
                    class="about__block__sublist__list--item mb-0"
                    @click.stop="aboutPage(item)"
                  >
                    {{ item.name }}
                  </p>
                </v-col>
              </v-row>
            </div>
          </transition>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
import { findInNestedArray } from "@/services/arrays";
export default {
  name: "mainScreen",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
    types: {
      type: Object,
      default() {
        return {};
      },
    },
    route: {
      type: String,
      default: "about",
    },
    title: {
      type: String,
      default: " О НАС",
    },
  },
  data() {
    return {
      activeAlt: null,
      aboutCategory: null,
    };
  },
  computed: {
    isActiveTab() {
      return findInNestedArray(this.categories, this.$route.params.alt, "alt");
    },
  },
  methods: {
    test() {
      this.aboutCategory = null;
    },
    aboutPage(item) {
      if (item.link) {
        window.open(item.link, "_blank");
      } else {
        this.activeAlt = item.alt;
        if (item.children) this.aboutCategory = item;
        else {
          this.$router
            .push({
              name: this.route,
              params: { alt: item.alt },
              hash: "#scroll-block",
            })
            .catch(() => {});
          this.$emit("changeAbout", item.alt);
        }
      }
    },
    returnLink() {
      this.aboutCategory = null;
    },
  },
};
</script>

<style lang="scss">
.about__app__list {
  .v-menu__content {
    background: red !important;
    max-width: 300px;
  }
  .v-list-item__title {
    white-space: normal !important;
  }
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}
.slide-right-enter {
  transform: translateX(50%);
  opacity: 0;
}
.slide-right-leave-to /* .slide-right-leave-active в <2.1.8 */ {
  transform: translateX(50%);
  opacity: 0;
}
</style>
