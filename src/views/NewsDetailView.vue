<template>
  <main>
    <c-news-main-screen type="detail" :item="item" />
    <c-news-detail :item="item" />
    <c-news-list
      class="news__variant"
      :items="newsItems"
      title="ВАМ ТАКЖЕ МОЖЕТ ПОНРАВИТЬСЯ"
      :meta="newsMeta"
      :type="item.category_id"
      hide-tabs
    />
  </main>
</template>

<script>
import { getId } from "@/services/strings";
import CNewsMainScreen from "@/components/CNewsMainScreen";
import CNewsList from "@/components/CNewsList";
import CNewsDetail from "@/components/CNewsDetail";
export default {
  name: "NewsDetailView",
  components: {
    CNewsMainScreen,
    CNewsList,
    CNewsDetail,
  },
  data() {
    return {
      item: {},
      newsItems: [],
      newsMeta: {},
    };
  },
  watch: {
    "$route.params.id": {
      handler: async function (paramsId) {
        const id = getId(paramsId);
        const res = await this.api.news.getNewsDetail(id);
        this.item = res.data[0];
        this.newsList();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async newsList() {
      const res = await this.api.news.getNews({
        page: 1,
        type: this.item.category_id,
        count: 4,
        newsId: this.item.id,
      });
      this.newsMeta = res.data.pop();
      this.newsItems = res.data;
    },
  },
};
</script>

<style></style>
