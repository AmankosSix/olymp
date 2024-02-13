<template>
  <main>
    <c-news-main-screen :item="firstItem" />
    <c-news-list
      class="news__variant"
      :items="items"
      :meta="meta"
      @page="newsList"
      @news-tab="newsList"
    />
  </main>
</template>

<script>
import CNewsMainScreen from "@/components/CNewsMainScreen";
import CNewsList from "@/components/CNewsList";
export default {
  name: "NewsView",
  components: {
    CNewsMainScreen,
    CNewsList,
  },
  data() {
    return {
      firstItem: {},
      items: [],
      meta: {},
      ip: null,
    };
  },
  mounted() {
    const page = this.$route.query.page || 1;
    this.newsList({ page, type: null });
  },
  methods: {
    async newsList({ page = 1, type = null }) {
      // const user_agent = localStorage.getItem("user_agent");
      const res = await this.api.news.getNews({ page, type });
      this.meta = res.data.pop();
      this.items = res.data;
      this.firstItem = res.data[0];
    },
  },
};
</script>

<style></style>
