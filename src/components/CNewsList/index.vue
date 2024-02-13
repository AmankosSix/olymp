<template>
  <section
    :class="{ 'federetion--bg': federation, 'hide-bg': hideBg }"
    class="news"
    id="scroll-block"
  >
    <v-container>
      <!-- <h2
        class="news--title"
        v-if="!hideTitle"
        v-scroll-animate="{ animation: 'animate__fadeInUp', delay: 0.5 }"
      >
        {{ title }}
      </h2> -->
      <div class="title__block">
        <h2
          class="news--title"
          v-if="!hideTitle"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          {{ title }}
        </h2>
        <router-link v-if="currentRouteName === 'home'" :to="{ name: 'news' }"
          >Посмотреть все <base-icon width="31" height="24" icon="arrowLeft"
        /></router-link>
      </div>
      <v-tabs
        v-show="!hideTabs"
        v-model="tab"
        class="news__tabs"
        background-color="transparent"
      >
        <v-tabs-slider color="white"></v-tabs-slider>

        <v-tab
          class="news__tabs--items"
          v-for="item in items1"
          :key="item"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <div class="loading__block">
        <div v-if="loading" class="loading__block--overlay">
          <v-progress-circular
            indeterminate
            color="white"
            size="70"
            class="my-5"
          ></v-progress-circular>
        </div>

        <v-tabs-items v-else v-model="tab" class="news__list mt-10">
          <v-tab-item
            v-for="item in items1"
            :key="item"
            class="news__list__items"
            transition="scroll-y-reverse-transition"
          >
            <v-row>
              <!-- v-scroll-animate="{
                animation: tab ? 'none' : 'animate__fadeInUp',
                delay: i % 2 !== 0 ? 0.4 : 0,
              }" -->
              <c-news-item
                class="col-12 col-md-6 fill-height"
                :class="{ 'mt-0': hideTabs }"
                v-for="el in items"
                :key="el.id"
                :item="el"
              />
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <c-pagination v-if="!short && !hideTabs" :meta="meta" v-model="page" />
    </v-container>
  </section>
</template>
<script>
import CNewsItem from "@/components/CNewsItem";
import CPagination from "@/components/Customs/CPagination";
export default {
  name: "CNewsList",
  components: {
    CNewsItem,
    CPagination,
  },
  props: {
    hideTabs: {
      type: Boolean,
      default: false,
    },
    hideBg: {
      type: Boolean,
      default: false,
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "ПОСЛЕДНИЕ НОВОСТИ",
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    meta: {
      type: Object,
      default() {
        return {};
      },
    },
    short: {
      type: Boolean,
      default: false,
    },
    federation: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      page: +this.$route.query.page || 1,
      tab: +this.$route.query.tab || 0,
      news: [1, 2, 3, 4, 5, 6],
      loading: false,
      items1: [
        "Все",
        "Казахстанские",
        "Международные",
        "Интервью",
        "Аналитика",
      ],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  watch: {
    items() {
      this.loading = false;
    },
    page(val) {
      this.$emit("page", { page: val, type: this.tab });
    },
    tab(val) {
      this.loading = true;
      this.$emit("news-tab", { page: this.page, type: val });
    },
    // "$route.query.tab": {
    //   handler: function (tab) {
    //     console.log(tab);
    //     this.tab = tab;
    //   },
    //   deep: true,
    //   immediate: true,
    // },
  },
};
</script>

<style lang="scss" scoped>
.hide-bg {
  &::before {
    display: none;
  }
}
.loading__block {
  position: relative;
  min-height: 70vh;
  &--overlay {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    // background: rgba(0, 0, 0, 0.491);
    z-index: 1;
  }
}
</style>
