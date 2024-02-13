<template>
  <div class="about">
    <c-about-main-screen
      :title="data?.name"
      :categories="categories"
      route="defaultPage"
    />
    <section id="scroll-block">
      <c-news-list
        v-if="data.data"
        :items="newsItems"
        :meta="newsMeta"
        @page="newsList"
        @news-tab="newsList"
        hide-tabs
        hide-title
        hide-bg
      />
      <v-container
        v-else
        class="about__content mt-10 mb-10"
        v-html="data.description"
      />
    </section>
  </div>
</template>

<script>
import CNewsList from "@/components/CNewsList";
import CAboutMainScreen from "@/components/CAbout/mainScreen.vue";
export default {
  name: "DefaultLandView",
  components: {
    CAboutMainScreen,
    CNewsList,
  },
  data() {
    return {
      newsItems: [],
      newsMeta: {},
      data: null,
      categories: [],
      item: {},
      main: {},
      component: null,
    };
  },
  watch: {
    "$route.params.alt": {
      handler: async function (paramsId) {
        const alt = paramsId;
        const categories = await this.api.about.getOtherCategory(alt);
        this.data = categories.data;
        if (!categories.data.parent_id) {
          this.getOtherTabs(this.data.id);
        } else {
          this.getOtherTabs(this.data.parent_id);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  // async mounted() {
  //   const alt = this.$route.params.alt;
  //   const categories = await this.api.about.getOtherCategory(alt);
  //   this.data = categories.data;
  //   if (!categories.data.parent_id) {
  //     this.getOtherTabs(this.data.id);
  //   } else {
  //     this.getOtherTabs(this.data.parent_id);
  //   }
  // },
  methods: {
    async getOtherTabs(parent_id) {
      const res = await this.api.about.getOtherTabs(parent_id);
      this.categories = res.data;
      if (this.data.data) {
        this.newsMeta = this.data.data.pop();
        this.newsItems = this.data.data;
      } else {
        this.newsMeta = {};
        this.newsItems = [];
      }
    },
    async setTab(alt) {
      const res = await this.api.about.getOtherCategory(alt);
      this.data = res.data;
    },
    async newsList({ page = 1, type = null }) {
      const res = await this.api.news.getNews({ page, type, count: 12 });
      this.newsMeta = res.data.pop();
      this.newsItems = res.data;
    },
  },
};
</script>
<style lang="scss">
.content {
  .article-personality-img {
    width: 14.5em;
    height: 14.5em;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
}
</style>
