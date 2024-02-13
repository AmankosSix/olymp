<template>
  <main>
    <c-search-result
      :news="news"
      :newsMeta="newsMeta"
      :champions="champions"
      :championsMeta="championsMeta"
      @searchEvent="getLists"
    />
  </main>
</template>

<script>
import CSearchResult from "@/components/CSearchResult";

export default {
  name: "GamesView",
  components: {
    CSearchResult,
  },
  data() {
    return {
      news: [],
      newsMeta: {},
      championsMeta: {},
      champions: [],
    };
  },
  async mounted() {
    const search = this.$route.query.name;
    this.getLists(search);
    // this.oldList = res.data?.old;
    // this.newList = res.data?.new;
  },
  methods: {
    async getLists(search = "") {
      const querySerch = search;
      const news = await this.api.news.getNews({
        search: querySerch,
        count: 12,
      });
      this.newsMeta = news.data.pop();
      this.news = news.data;
      const champions = await this.api.athletes.getAthletesList({
        page: 1,
        search: querySerch,
      });
      this.championsMeta = champions.data.pop();
      this.champions = champions.data;
    },
  },
};
</script>

<style></style>
