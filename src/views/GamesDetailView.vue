<template>
  <main>
    <c-games-detail
      :item="item"
      :countryName="countryName"
      :types="gamesType"
    />
    <c-games-detail-athletes
      :listAthletes="listAthletes"
      :meta="meta"
      @page="changePage"
      :listFed="listFed"
      @chooseFilter="changePage"
      @clear-select="changePage"
    />
    <c-games-categoies :listGamesCategories="listGamesCategories" />
  </main>
</template>

<script>
import CGamesDetail from "@/components/CGamesDetail";
import CGamesDetailAthletes from "@/components/CGamesDetailAthletes";
import CGamesCategoies from "@/components/CGamesCategoies";
import { getId } from "@/services/strings";
export default {
  name: "GamesView",
  components: {
    CGamesDetail,
    CGamesDetailAthletes,
    CGamesCategoies,
  },
  data() {
    return {
      item: {},
      countryName: [],
      gamesType: {
        1: "Олимпийские игры",
        2: "Азиатские игры",
        3: "Юношеские олимпийские игры",
      },
      listAthletes: [],
      listGamesCategories: [],
      meta: {},
      listFed: [],
    };
  },
  mounted() {
    const page = this.$route.query.page || 1;
    this.getGame();
    this.changePage({ page });
    this.getFederations();
  },
  methods: {
    async getGame() {
      const id = getId(this.$route.params.id);
      const res = await this.api.games.getGameDetail(id);
      this.item = res.data[0][0];
      this.countryName = res.data[1];
      // next query
      const response = await this.api.games.gamesCategories(id);
      this.listGamesCategories = response.data;
    },
    changePage(page) {
      this.getGamesParticipants({ ...page });
    },
    async getGamesParticipants(fill = {}) {
      const id = getId(this.$route.params.id);
      const resp = await this.api.games.gamesParticipants({
        id,
        ...fill,
        count: 16,
      });
      this.meta = resp.data.meta;
      this.listAthletes = resp.data.data;
    },
    async getFederations() {
      const res = await this.api.federation.getFederationsList(
        this.federationList
      );
      this.listFed = res.data[0];
    },
  },
};
</script>

<style></style>
