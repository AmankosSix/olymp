<template>
  <div class="about">
    <c-about-main-screen
      :categories="categories"
      :title="data?.name"
      @changeAbout="getAboutInfo"
    />
    <section id="scroll-block" class="about__min">
      <component
        v-if="!data?.description"
        :is="component || 'c-about-list'"
        :data="data"
        @setTab="setTab"
      />
      <v-container
        v-else
        class="about__content mt-10 mb-10"
        v-html="data?.description"
      />
    </section>
  </div>
</template>

<script>
const altComponents = {
  "36-ofitsialbnye-dokumenty": "CDocsList",
  "proekty-nok-rk": "CProjectList",
};
import CAboutMainScreen from "@/components/CAbout/mainScreen.vue";
import CAboutList from "@/components/CAbout/aboutList.vue";
import CDocsList from "@/components/CAbout/docsList.vue";
import CProjectList from "@/components/CAbout/projectsList.vue";
export default {
  name: "AboutView",
  components: { CAboutMainScreen, CAboutList, CDocsList, CProjectList },
  data() {
    return {
      list: [],
      data: null,
      categories: [],
      item: {},
      component: null,
    };
  },
  async mounted() {
    const alt = this.$route.params.alt;
    const categories = await this.api.about.getAboutCategory();
    this.categories = categories.data;
    this.getAboutInfo(alt);
  },
  methods: {
    async getAboutInfo(alt = "o-nok") {
      this.component = altComponents[alt] || null;
      const res = await this.api.about.getAboutInfo(alt);
      this.data = res.data;
      this.item = res.data;
      // if (altComponents[alt] === "docsList") {
      //   this.item = res.data;
      // }
      // else {
      //   this.item = res.data[0];
      //   this.list = JSON.parse(res.data[0].employees);
      // }
    },
    async setTab(id) {
      const res = await this.api.about.getDocsCategories(id);
      this.item.tabs = res.data.tabs;
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
